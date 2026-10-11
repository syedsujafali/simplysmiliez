'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clinicInfo } from '@/data/clinicData';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Calendar, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  MapPin, 
  ArrowRight
} from 'lucide-react';

interface UnifiedHeaderProps {
  onOpenAppointment?: (service?: string) => void;
}

export default function UnifiedHeader({ onOpenAppointment }: UnifiedHeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const headerRef = useRef(null);

  const closeMobileMenu = () => {
    setMobileMenuClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setMobileMenuClosing(false);
      setMobileServicesOpen(false);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set --mobile-header-offset to actual header height so drawer is pinned correctly
  useEffect(() => {
    const updateOffset = () => {
      if (headerRef.current) {
        const h = headerRef.current.getBoundingClientRect().height;
        if (h > 0) {
          document.documentElement.style.setProperty('--mobile-header-offset', `${h}px`);
          document.documentElement.style.setProperty('--main-content-offset', `${h}px`);
        }
      }
    };
    updateOffset();
    const timer = setTimeout(updateOffset, 100);
    window.addEventListener('resize', updateOffset);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateOffset);
    };
  }, [isScrolled, mobileMenuOpen, pathname]);

  // Close menus on route change — instant reset if menu was never open
  useEffect(() => {
    if (mobileMenuOpen || mobileMenuClosing) {
      // Menu was open: animate it closed
      closeMobileMenu();
    } else {
      // Menu was already closed: just reset state cleanly, no animation needed
      setMobileServicesOpen(false);
    }
    setDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open (including during close animation)
  useEffect(() => {
    if (mobileMenuOpen || mobileMenuClosing) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen, mobileMenuClosing]);

  const specialitiesCol1 = [
    { title: 'Invisalign & Braces', href: '/braces', desc: 'Invisible aligners & orthodontic smile correction', badge: '30% Off' },
    { title: 'Dental Implants', href: '/dentalimplant', desc: 'Permanent titanium tooth replacement', badge: '30% Off' },
    { title: 'Microscopic Root Canal Therapy', href: '/laserroot', desc: 'Painless precision surgical magnification RCT' },
    { title: 'Laser Teeth Whitening', href: '/laserteeth', desc: 'Instant 1-hour clinic smile brightening' },
    { title: 'Pediatric Dentistry', href: '/pediatary', desc: 'Gentle dental care for toddlers & kids' }
  ];

  const specialitiesCol2 = [
    { title: 'Dental Veneers', href: '/dental-veneers-hyderabad', desc: 'Custom aesthetic porcelain smile makeovers' },
    { title: 'Composite Tooth Fillings', href: '/composite-fillings-hyderabad', desc: 'Seamless natural tooth-colored restorations' },
    { title: 'Dental Crowns & Bridges', href: '/crowns', desc: 'Zirconia & ceramic tooth caps' },
    { title: 'Laser Gum Surgery', href: '/lasergum', desc: 'Painless periodontal laser therapy' },
    { title: 'Wisdom Tooth Extractions', href: '/wisdom', desc: 'Gentle impaction removal & surgery' }
  ];

  const allSpecialities = [...specialitiesCol1, ...specialitiesCol2];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Specialities', isDropdown: true },
    { name: 'Doctors', href: '/doctor' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonal' },
    { name: 'Contact', href: '/contact' }
  ];

  const isSpecialityActive = allSpecialities.some(s => pathname === s.href) || pathname === '/all-services';

  return (
    <>
    <header ref={headerRef} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      width: '100%',
      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      {/* 1. Slim Top Info Bar */}
      <div 
        key={`topbar-${pathname}`}
        className="animate-topbar-arrival"
        style={{
          background: 'linear-gradient(90deg, #0f172a 0%, #0369a1 50%, #0f172a 100%)',
          color: '#ffffff',
          fontSize: '0.8rem',
          padding: '6px 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          position: 'relative',
          zIndex: 50,
          overflow: 'clip',
          width: '100%',
          maxWidth: '100vw'
        }}
      >
        <div className="header-topbar-inner" style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', boxSizing: 'border-box' }}>
          {/* Clinic Timings & Location (Desktop) */}
          <div className="header-topbar-desktop-info" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#e2e8f0',
            fontSize: '0.78rem',
            whiteSpace: 'nowrap'
          }}>
            <span className="beacon-dot" style={{ flexShrink: 0 }} />
            <span><strong style={{ color: '#ffffff' }}>Open Today:</strong> {clinicInfo.hours.weekdays}</span>
            <span style={{ color: '#64748b', margin: '0 2px' }}>•</span>
            <span style={{ color: '#94a3b8', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={12} style={{ color: '#38bdf8', flexShrink: 0 }} /> Shaikpet, Hyderabad
            </span>
          </div>

          {/* Clinic Timings & Call CTA (Mobile - New Tel First, Old Tel, WhatsApp) */}
          <div className="header-topbar-mobile-info" style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            width: '100%',
            textAlign: 'center',
            fontSize: '0.72rem',
            color: '#e2e8f0'
          }}>
            <span className="beacon-dot" style={{ flexShrink: 0 }} />
            <span><strong style={{ color: '#ffffff' }}>Open:</strong> 10am–9pm</span>
            <span style={{ color: '#334155' }}>•</span>
            {/* New number first - tel */}
            <a
              href={`tel:${clinicInfo.phones[1].value}`}
              style={{ color: '#38bdf8', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '3px', textDecoration: 'none' }}
            >
              <Phone size={11} style={{ flexShrink: 0 }} /> {clinicInfo.phones[1].display}
            </a>
            <span style={{ color: '#334155' }}>•</span>
            {/* Old number second - tel */}
            <a
              href={`tel:${clinicInfo.phones[0].value}`}
              style={{ color: '#38bdf8', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '3px', textDecoration: 'none' }}
            >
              <Phone size={11} style={{ flexShrink: 0 }} /> {clinicInfo.phones[0].display}
            </a>
            <span style={{ color: '#334155' }}>•</span>
            {/* WhatsApp */}
            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#25d366', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '3px', textDecoration: 'none' }}
            >
              <MessageSquare size={11} style={{ flexShrink: 0 }} /> WA
            </a>
          </div>

          {/* 30% Off Discount Callout */}
          <div className="header-promo-callout" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            textAlign: 'center',
            whiteSpace: 'nowrap'
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#ffffff',
              padding: '2px 8px',
              borderRadius: '9999px',
              fontSize: '0.7rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              boxShadow: '0 0 10px rgba(245, 158, 11, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '3px'
            }}>
              <Sparkles size={10} /> 30% OFF
            </span>
            <span style={{ color: '#e2e8f0', fontSize: '0.78rem', fontWeight: '500' }}>
              Invisalign &amp; Dental Implants Offer
            </span>
          </div>

          {/* Direct Phone & Priority WhatsApp */}
          <div className="header-top-contacts" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.78rem',
            whiteSpace: 'nowrap'
          }}>
            {/* New priority number - first */}
            <a
              href={`tel:${clinicInfo.phones[1].value}`}
              style={{
                color: '#ffffff',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                textDecoration: 'none'
              }}
            >
              <Phone size={12} style={{ color: '#38bdf8' }} />
              <span>{clinicInfo.phones[1].display}</span>
            </a>

            <span style={{ color: '#334155' }}>|</span>

            {/* Old number - second */}
            <a
              href={`tel:${clinicInfo.phones[0].value}`}
              style={{
                color: '#ffffff',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                textDecoration: 'none'
              }}
            >
              <Phone size={12} style={{ color: '#38bdf8' }} />
              <span>{clinicInfo.phones[0].display}</span>
            </a>

            {/* Priority number - WhatsApp pill */}
            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#25d366',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: 'rgba(37, 211, 102, 0.1)',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                padding: '2px 8px',
                borderRadius: '9999px',
                textDecoration: 'none'
              }}
            >
              <MessageSquare size={12} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Full-Width Edge-to-Edge Navigation Bar */}
      <div 
        key={`header-${pathname}`}
        className="animate-header-arrival"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
          boxShadow: isScrolled 
            ? '0 10px 30px -5px rgba(15, 23, 42, 0.12)' 
            : '0 2px 10px rgba(15, 23, 42, 0.04)',
          width: '100%',
          maxWidth: '100vw',
          transition: 'all 0.3s ease',
          position: 'relative'
        }}
      >
        <div className="header-navbar-inner" style={{
          width: '100%',
          maxWidth: '1680px',
          margin: '0 auto',
          padding: isScrolled ? '10px 32px' : '14px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          boxSizing: 'border-box',
          minHeight: isScrolled ? '74px' : '84px',
          transition: 'all 0.3s ease'
        }}>
          {/* Brand Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', flexShrink: 0 }}>
            <img
              src="/images/logo-3.webp"
              alt={clinicInfo.name}
              className="header-brand-logo"
              style={{
                height: isScrolled ? '56px' : '64px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 0.3s ease'
              }}
            />
            <div 
              style={{ 
              borderLeft: '2px solid rgba(226, 232, 240, 0.9)', 
              paddingLeft: '14px',
              transition: 'border-color 0.3s ease'
            }} 
            className="header-logo-tag"
          >
            <div style={{ 
              fontSize: '0.82rem', 
              fontWeight: '800', 
              color: 'var(--primary)', 
              letterSpacing: '0.04em', 
              textTransform: 'uppercase', 
              whiteSpace: 'nowrap'
            }}>
              Dental &amp; Implants
            </div>
            <div style={{ 
              fontSize: '0.78rem', 
              color: 'var(--text-muted)', 
              fontWeight: '600', 
              whiteSpace: 'nowrap'
            }}>
              Shaikpet, Hyderabad
            </div>
          </div>
        </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav-menu" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexShrink: 0
          }}>
            {navLinks.map((link, idx) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={idx}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      style={{
                        background: isSpecialityActive ? 'var(--primary-light)' : 'transparent',
                        border: 'none',
                        color: isSpecialityActive ? 'var(--primary)' : 'var(--navy)',
                        fontWeight: '700',
                        fontSize: '0.92rem',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--primary)';
                        e.currentTarget.style.backgroundColor = 'rgba(2, 132, 199, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isSpecialityActive) {
                          e.currentTarget.style.color = 'var(--navy)';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      Specialities
                      <ChevronDown size={14} style={{
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease'
                      }} />
                    </button>

                    {/* Mega Dropdown Menu */}
                    {dropdownOpen && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '660px',
                        maxWidth: 'calc(100vw - 32px)',
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(28px)',
                        borderRadius: '24px',
                        boxShadow: '0 24px 60px rgba(15, 23, 42, 0.22)',
                        padding: '24px',
                        zIndex: 200,
                        border: '1.5px solid rgba(2, 132, 199, 0.2)',
                        animation: 'fadeIn 0.2s ease-out'
                      }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingBottom: '12px',
                            marginBottom: '14px',
                            borderBottom: '1px solid #e2e8f0'
                          }}>
                            <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                              Comprehensive Dental Treatments
                            </span>
                            <Link
                              href="/all-services"
                              style={{
                                fontSize: '0.82rem',
                                fontWeight: '700',
                                color: 'var(--navy)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              Full Directory <ArrowRight size={13} />
                            </Link>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                            {/* Column 1 */}
                            <div>
                              {specialitiesCol1.map((item, sIdx) => {
                                const isItemActive = pathname === item.href;
                                return (
                                  <Link
                                    key={sIdx}
                                    href={item.href}
                                    style={{
                                      display: 'block',
                                      padding: '10px 12px',
                                      borderRadius: '12px',
                                      backgroundColor: isItemActive ? 'var(--primary-subtle)' : 'transparent',
                                      textDecoration: 'none',
                                      transition: 'all 0.15s ease',
                                      marginBottom: '4px'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = 'var(--primary-subtle)';
                                      e.currentTarget.style.transform = 'translateX(3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                      if (!isItemActive) e.currentTarget.style.backgroundColor = 'transparent';
                                      e.currentTarget.style.transform = 'translateX(0)';
                                    }}
                                  >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                      <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--navy)', whiteSpace: 'nowrap' }}>
                                        {item.title}
                                      </span>
                                      {item.badge && (
                                        <span style={{
                                          fontSize: '0.68rem',
                                          fontWeight: '800',
                                          backgroundColor: '#fef3c7',
                                          color: '#b45309',
                                          padding: '2px 7px',
                                          borderRadius: '9999px',
                                          whiteSpace: 'nowrap'
                                        }}>
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.3' }}>
                                      {item.desc}
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Column 2 */}
                            <div>
                              {specialitiesCol2.map((item, sIdx) => {
                                const isItemActive = pathname === item.href;
                                return (
                                  <Link
                                    key={sIdx}
                                    href={item.href}
                                    style={{
                                      display: 'block',
                                      padding: '9px 12px',
                                      borderRadius: '10px',
                                      backgroundColor: isItemActive ? 'var(--primary-subtle)' : 'transparent',
                                      textDecoration: 'none',
                                      transition: 'all 0.15s ease',
                                      marginBottom: '4px'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = 'var(--primary-subtle)';
                                      e.currentTarget.style.transform = 'translateX(3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                      if (!isItemActive) e.currentTarget.style.backgroundColor = 'transparent';
                                      e.currentTarget.style.transform = 'translateX(0)';
                                    }}
                                  >
                                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--navy)', whiteSpace: 'nowrap' }}>
                                      {item.title}
                                    </div>
                                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.3' }}>
                                      {item.desc}
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          {/* Promo Banner */}
                          <div style={{
                            marginTop: '14px',
                            padding: '12px 16px',
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '0.82rem'
                          }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                              <Sparkles size={14} style={{ color: '#38bdf8' }} />
                              <span>Free Consultation on Invisalign &amp; Dental Implants</span>
                            </span>
                            <button
                              onClick={() => {
                                setDropdownOpen(false);
                                onOpenAppointment();
                              }}
                              style={{
                                background: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
                                color: '#ffffff',
                                border: 'none',
                                padding: '5px 14px',
                                borderRadius: '8px',
                                fontWeight: '800',
                                fontSize: '0.76rem',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              Claim Offer
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === link.href;

                return (
                  <Link
                    key={idx}
                    href={link.href}
                    style={{
                      color: isActive ? 'var(--primary)' : 'var(--navy)',
                      fontWeight: '700',
                      fontSize: '0.92rem',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      position: 'relative',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease',
                      backgroundColor: isActive ? 'var(--primary-light)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary)';
                      e.currentTarget.style.backgroundColor = 'rgba(2, 132, 199, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--navy)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Quick Actions Group - Clean Book Visit CTA */}
            <div className="header-actions-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              {/* Book Visit CTA */}
              <button
                onClick={() => onOpenAppointment?.()}
                className="btn btn-primary header-book-btn"
                style={{
                  padding: isScrolled ? '9px 18px' : '11px 22px',
                  fontSize: '0.92rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 6px 20px rgba(2, 132, 199, 0.38)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Calendar size={15} style={{ flexShrink: 0 }} />
                <span className="book-btn-text-full">Book Visit</span>
                <span className="book-btn-text-short">Book</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (mobileMenuOpen && !mobileMenuClosing) {
                    closeMobileMenu();
                  } else {
                    setMobileMenuOpen(true);
                  }
                }}
                className="mobile-toggle-btn"
                aria-label="Toggle Menu"
                style={{
                  background: 'rgba(2, 132, 199, 0.12)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--navy)',
                  cursor: 'pointer',
                  padding: '8px 10px',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 10001
                }}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

      </header>

      {/* Mobile Navigation Drawer – 75% width slide-in from right */}
      {(mobileMenuOpen || mobileMenuClosing) && (
        <>
          {/* Backdrop */}
          <div
            onClick={closeMobileMenu}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(7, 21, 41, 0.58)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              zIndex: 9998,
              animation: mobileMenuClosing
                ? 'mobileBackdropOut 0.3s ease forwards'
                : 'mobileBackdropIn 0.3s ease forwards'
            }}
          />

          {/* Drawer Panel */}
          <div
            className="mobile-nav-drawer"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '75%',
              maxWidth: '340px',
              backgroundColor: '#ffffff',
              boxShadow: '-8px 0 40px rgba(15, 23, 42, 0.22)',
              overflowY: 'auto',
              overscrollBehavior: 'contain',
              WebkitOverflowScrolling: 'touch',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              animation: mobileMenuClosing
                ? 'mobileDrawerOut 0.3s cubic-bezier(0.4, 0, 1, 1) forwards'
                : 'mobileDrawerIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            {/* Drawer Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 18px',
              borderBottom: '1px solid #e2e8f0',
              background: 'linear-gradient(135deg, #0f172a 0%, #0369a1 100%)',
              flexShrink: 0
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src="/images/logo-3.webp"
                  alt="Simply Smilez"
                  style={{ height: '38px', width: 'auto', objectFit: 'contain', filter: 'brightness(10)' }}
                />
              </div>
              <button
                onClick={closeMobileMenu}
                aria-label="Close menu"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  cursor: 'pointer',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.2s ease'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav Links */}
            <div style={{ flex: 1, padding: '12px 12px 20px', display: 'flex', flexDirection: 'column', gap: '2px' }}>

              {/* Home */}
              <Link
                href="/"
                onClick={closeMobileMenu}
                style={{
                  color: pathname === '/' ? 'var(--primary)' : 'var(--navy)',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  backgroundColor: pathname === '/' ? 'var(--primary-light)' : 'transparent',
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                onClick={closeMobileMenu}
                style={{
                  color: pathname === '/about' ? 'var(--primary)' : 'var(--navy)',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  backgroundColor: pathname === '/about' ? 'var(--primary-light)' : 'transparent',
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <button
                  onClick={() => setMobileServicesOpen(prev => !prev)}
                  style={{
                    width: '100%',
                    background: mobileServicesOpen ? 'var(--primary-light)' : 'transparent',
                    border: 'none',
                    color: isSpecialityActive ? 'var(--primary)' : 'var(--navy)',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {/* Services list */}
                {mobileServicesOpen && (
                  <div style={{
                    background: 'var(--primary-subtle)',
                    borderRadius: '0 0 10px 10px',
                    padding: '8px 8px 10px',
                    animation: 'mobileDropdownIn 0.22s cubic-bezier(0.16,1,0.3,1) forwards'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 6px 8px' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Dental Treatments
                      </span>
                      <Link
                        href="/all-services"
                        onClick={closeMobileMenu}
                        style={{ color: 'var(--navy)', fontSize: '0.75rem', fontWeight: '700', textDecoration: 'none' }}
                      >
                        View All →
                      </Link>
                    </div>
                    {allSpecialities.map((item, sIdx) => (
                      <Link
                        key={sIdx}
                        href={item.href}
                        onClick={closeMobileMenu}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          color: pathname === item.href ? 'var(--primary)' : 'var(--text-body)',
                          fontSize: '0.86rem',
                          fontWeight: '600',
                          padding: '7px 10px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          backgroundColor: pathname === item.href ? 'rgba(2,132,199,0.1)' : 'transparent',
                          transition: 'background 0.15s'
                        }}
                      >
                        <span>• {item.title}</span>
                        {(item as any).badge && (
                          <span style={{ fontSize: '0.65rem', color: '#b45309', backgroundColor: '#fef3c7', padding: '1px 6px', borderRadius: '9999px', fontWeight: '700', flexShrink: 0 }}>
                            {(item as any).badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Doctors */}
              <Link href="/doctor" onClick={closeMobileMenu} style={{ color: pathname === '/doctor' ? 'var(--primary)' : 'var(--navy)', fontWeight: '700', fontSize: '0.95rem', padding: '11px 14px', borderRadius: '10px', backgroundColor: pathname === '/doctor' ? 'var(--primary-light)' : 'transparent', textDecoration: 'none', display: 'block' }}>Doctors</Link>

              {/* Gallery */}
              <Link href="/gallery" onClick={closeMobileMenu} style={{ color: pathname === '/gallery' ? 'var(--primary)' : 'var(--navy)', fontWeight: '700', fontSize: '0.95rem', padding: '11px 14px', borderRadius: '10px', backgroundColor: pathname === '/gallery' ? 'var(--primary-light)' : 'transparent', textDecoration: 'none', display: 'block' }}>Gallery</Link>

              {/* Testimonials */}
              <Link href="/testimonal" onClick={closeMobileMenu} style={{ color: pathname === '/testimonal' ? 'var(--primary)' : 'var(--navy)', fontWeight: '700', fontSize: '0.95rem', padding: '11px 14px', borderRadius: '10px', backgroundColor: pathname === '/testimonal' ? 'var(--primary-light)' : 'transparent', textDecoration: 'none', display: 'block' }}>Testimonials</Link>

              {/* Contact */}
              <Link href="/contact" onClick={closeMobileMenu} style={{ color: pathname === '/contact' ? 'var(--primary)' : 'var(--navy)', fontWeight: '700', fontSize: '0.95rem', padding: '11px 14px', borderRadius: '10px', backgroundColor: pathname === '/contact' ? 'var(--primary-light)' : 'transparent', textDecoration: 'none', display: 'block' }}>Contact</Link>

              {/* Divider */}
              <div style={{ height: '1px', background: '#e2e8f0', margin: '8px 0' }} />

              {/* CTA Buttons */}
              <button
                onClick={() => {
                  closeMobileMenu();
                  onOpenAppointment?.();
                }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}
              >
                <Calendar size={16} /> Book Appointment
              </button>
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
              >
                <MessageSquare size={16} /> WhatsApp Chat
              </a>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        .book-btn-text-short {
          display: none;
        }

        @keyframes mobileDrawerIn {
          from { transform: translateX(100%); opacity: 0.5; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes mobileDrawerOut {
          from { transform: translateX(0);    opacity: 1; }
          to   { transform: translateX(100%); opacity: 0; }
        }
        @keyframes mobileBackdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes mobileBackdropOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes mobileDropdownIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1200px) {
          .header-logo-tag {
            display: none !important;
          }
        }
        @media (max-width: 1040px) {
          .desktop-nav-menu {
            display: none !important;
          }
        }
        @media (max-width: 900px) {
          .header-promo-callout {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .header-top-contacts {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          :root {
            --mobile-header-offset: 112px;
          }
          .header-topbar-inner {
            padding: 0 8px !important;
          }
          .header-navbar-inner {
            padding: 8px 14px !important;
            min-height: 64px !important;
            gap: 8px !important;
          }
          .header-brand-logo {
            height: 48px !important;
            max-width: 180px !important;
          }
          .header-book-btn {
            display: none !important;
          }
          .mobile-toggle-btn {
            width: 38px !important;
            height: 38px !important;
          }
        }
        @media (max-width: 360px) {
          .header-topbar-inner {
            padding: 0 6px !important;
          }
          .header-navbar-inner {
            padding: 6px 10px !important;
            min-height: 58px !important;
            gap: 6px !important;
          }
          .header-brand-logo {
            height: 42px !important;
            max-width: 160px !important;
          }
          .header-actions-group {
            gap: 0 !important;
            flex-shrink: 0 !important;
          }
          .header-book-btn {
            display: none !important;
          }
          .mobile-toggle-btn {
            width: 36px !important;
            height: 36px !important;
            min-width: 36px !important;
            padding: 0 !important;
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
