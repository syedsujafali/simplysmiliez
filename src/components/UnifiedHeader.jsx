'use client';
import { useState, useEffect } from 'react';
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

export default function UnifiedHeader({ onOpenAppointment }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const specialitiesCol1 = [
    { title: 'Invisalign & Braces', href: '/braces', desc: 'Invisible aligners & orthodontic smile correction', badge: '30% Off' },
    { title: 'Dental Implants', href: '/dentalimplant', desc: 'Permanent titanium tooth replacement', badge: '30% Off' },
    { title: 'Single-Sitting Laser RCT', href: '/laserroot', desc: 'Painless laser endodontics root canal' },
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
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
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
          zIndex: 50
        }}
      >
        <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', boxSizing: 'border-box' }}>
          {/* Clinic Timings & Location */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#e2e8f0',
            fontSize: '0.78rem',
            whiteSpace: 'nowrap'
          }}>
            <span className="beacon-dot" />
            <span><strong style={{ color: '#ffffff' }}>Open Today:</strong> {clinicInfo.hours.weekdays}</span>
            <span style={{ color: '#64748b', margin: '0 2px' }}>•</span>
            <span style={{ color: '#94a3b8', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={12} style={{ color: '#38bdf8' }} /> Shaikpet, Hyderabad
            </span>
          </div>

          {/* 30% Off Discount Callout */}
          <div style={{
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

          {/* Direct Phone & WhatsApp */}
          <div className="header-top-contacts" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: '0.78rem',
            whiteSpace: 'nowrap'
          }}>
            <a
              href={`tel:${clinicInfo.phones[0].value}`}
              style={{
                color: '#ffffff',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <Phone size={12} style={{ color: '#38bdf8' }} />
              <span>{clinicInfo.phones[0].display}</span>
            </a>
            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#25d366',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
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
          transition: 'all 0.3s ease',
          position: 'relative'
        }}
      >
        <div style={{
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
              {/* Book Visit CTA */}
              <button
                onClick={onOpenAppointment}
                className="btn btn-primary"
                style={{
                  padding: isScrolled ? '10px 22px' : '12px 24px',
                  fontSize: '0.94rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 6px 20px rgba(2, 132, 199, 0.38)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Calendar size={16} />
                <span>Book Visit</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  display: 'none',
                  background: 'rgba(2, 132, 199, 0.1)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--navy)',
                  cursor: 'pointer',
                  padding: '9px',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease'
                }}
                className="mobile-toggle-btn"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '2px solid #e2e8f0',
          padding: '20px',
          maxHeight: 'calc(100vh - 120px)',
          overflowY: 'auto',
          boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Link
              href="/"
              style={{
                color: pathname === '/' ? 'var(--primary)' : 'var(--navy)',
                fontWeight: '700',
                padding: '10px 14px',
                borderRadius: '8px',
                backgroundColor: pathname === '/' ? 'var(--primary-light)' : 'transparent',
                whiteSpace: 'nowrap'
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              style={{
                color: pathname === '/about' ? 'var(--primary)' : 'var(--navy)',
                fontWeight: '700',
                padding: '10px 14px',
                borderRadius: '8px',
                backgroundColor: pathname === '/about' ? 'var(--primary-light)' : 'transparent',
                whiteSpace: 'nowrap'
              }}
            >
              About Us
            </Link>

            {/* Mobile Specialities Accordion */}
            <div style={{
              background: 'var(--primary-subtle)',
              borderRadius: '12px',
              padding: '12px',
              border: '1px solid rgba(2, 132, 199, 0.15)',
              margin: '4px 0'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}>
                <span style={{
                  color: 'var(--primary)',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap'
                }}>
                  Dental Treatments
                </span>
                <Link href="/all-services" style={{ color: 'var(--navy)', fontSize: '0.78rem', fontWeight: '700' }}>
                  View All &rarr;
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {allSpecialities.map((item, sIdx) => (
                  <Link
                    key={sIdx}
                    href={item.href}
                    style={{
                      color: pathname === item.href ? 'var(--primary)' : 'var(--text-body)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      padding: '6px 8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>• {item.title}</span>
                    {item.badge && (
                      <span style={{ fontSize: '0.68rem', color: '#b45309', backgroundColor: '#fef3c7', padding: '1px 6px', borderRadius: '9999px', fontWeight: '700' }}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/doctor"
              style={{
                color: pathname === '/doctor' ? 'var(--primary)' : 'var(--navy)',
                fontWeight: '700',
                padding: '10px 14px',
                borderRadius: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              Doctors
            </Link>
            <Link
              href="/gallery"
              style={{
                color: pathname === '/gallery' ? 'var(--primary)' : 'var(--navy)',
                fontWeight: '700',
                padding: '10px 14px',
                borderRadius: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              Gallery
            </Link>
            <Link
              href="/testimonal"
              style={{
                color: pathname === '/testimonal' ? 'var(--primary)' : 'var(--navy)',
                fontWeight: '700',
                padding: '10px 14px',
                borderRadius: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              style={{
                color: pathname === '/contact' ? 'var(--primary)' : 'var(--navy)',
                fontWeight: '700',
                padding: '10px 14px',
                borderRadius: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Actions */}
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={16} /> Book Appointment
            </button>
            <a
              href={clinicInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquare size={16} /> WhatsApp Consultation
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1200px) {
          .header-logo-tag {
            display: none !important;
          }
        }
        @media (max-width: 1040px) {
          .desktop-nav-menu {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @media (max-width: 768px) {
          .header-top-contacts {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
