'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Phone,
  MessageSquare
} from 'lucide-react';
import { clinicInfo } from '@/data/clinicData';

interface NavbarProps {
  onOpenAppointment?: (service?: string) => void;
}

export default function Navbar({ onOpenAppointment }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
    { title: 'Dental Implants', href: '/dentalimplant', desc: 'Permanent titanium tooth replacement', badge: 'Popular' },
    { title: 'Microscopic Root Canal Therapy', href: '/laserroot', desc: 'Precision surgical magnification root canal' },
    { title: 'Laser Teeth Whitening', href: '/laserteeth', desc: 'Instant 1-hour clinic smile brightening' },
    { title: 'Pediatric Dentistry', href: '/pediatary', desc: 'Specialized gentle dental care for kids' }
  ];

  const specialitiesCol2 = [
    { title: 'Dental Veneers', href: '/dental-veneers-hyderabad', desc: 'Custom aesthetic porcelain smile makeovers' },
    { title: 'Composite Tooth Fillings', href: '/composite-fillings-hyderabad', desc: 'Seamless natural tooth-colored restorations' },
    { title: 'Dental Crowns & Bridges', href: '/crowns', desc: 'Zirconia & ceramic tooth caps' },
    { title: 'Laser Gum Surgery', href: '/lasergum', desc: 'Painless periodontal laser therapy' },
    { title: 'Wisdom Tooth Extractions', href: '/wisdom', desc: 'Gentle impaction removal & surgical care' }
  ];

  const allSpecialities = [...specialitiesCol1, ...specialitiesCol2];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Specialities', isDropdown: true },
    { name: 'Our Doctors', href: '/doctor' },
    { name: 'Smile Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonal' },
    { name: 'Contact & Map', href: '/contact' }
  ];

  const isSpecialityActive = allSpecialities.some(s => pathname === s.href) || pathname === '/all-services';

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(7, 21, 41, 0.96)' : 'var(--navy)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: isScrolled ? '0 12px 36px rgba(4, 13, 26, 0.35)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(255, 255, 255, 0.09)'
      }}>
        <div className="site-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px'
        }}>
          {/* Mobile Logo / Brand Display */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px'
              }}
              className="mobile-menu-btn"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <Link href="/" className="nav-mobile-logo" style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
              <img src="/images/logo-3.webp" alt="Logo" style={{ height: '36px', width: 'auto' }} />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav-links" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
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
                        background: isSpecialityActive ? 'rgba(0, 180, 216, 0.15)' : 'transparent',
                        border: 'none',
                        color: isSpecialityActive ? '#38bdf8' : '#e2e8f0',
                        fontWeight: '700',
                        fontSize: '0.92rem',
                        padding: '9px 15px',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#38bdf8';
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isSpecialityActive) {
                          e.currentTarget.style.color = '#e2e8f0';
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
                        left: '0',
                        width: '640px',
                        backgroundColor: '#ffffff',
                        borderRadius: '18px',
                        boxShadow: '0 24px 60px rgba(7, 21, 41, 0.25)',
                        padding: '20px',
                        zIndex: 200,
                        border: '1px solid rgba(0, 119, 182, 0.15)',
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
                            View Directory <ArrowRight size={13} />
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
                                    borderRadius: '10px',
                                    backgroundColor: isItemActive ? '#f0f9ff' : 'transparent',
                                    textDecoration: 'none',
                                    transition: 'all 0.15s ease',
                                    marginBottom: '4px'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f0f9ff';
                                    e.currentTarget.style.transform = 'translateX(3px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isItemActive) e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                  }}
                                >
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--navy)' }}>
                                      {item.title}
                                    </span>
                                    {item.badge && (
                                      <span style={{
                                        fontSize: '0.68rem',
                                        fontWeight: '800',
                                        backgroundColor: '#fef3c7',
                                        color: '#b45309',
                                        padding: '2px 6px',
                                        borderRadius: '9999px'
                                      }}>
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.3' }}>
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
                                    padding: '10px 12px',
                                    borderRadius: '10px',
                                    backgroundColor: isItemActive ? '#f0f9ff' : 'transparent',
                                    textDecoration: 'none',
                                    transition: 'all 0.15s ease',
                                    marginBottom: '4px'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f0f9ff';
                                    e.currentTarget.style.transform = 'translateX(3px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isItemActive) e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                  }}
                                >
                                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--navy)' }}>
                                    {item.title}
                                  </div>
                                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.3' }}>
                                    {item.desc}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Bottom Promo Strip */}
                        <div style={{
                          marginTop: '12px',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          background: 'linear-gradient(135deg, #071529 0%, #0f274a 100%)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.8rem'
                        }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                            <Sparkles size={13} style={{ color: '#38bdf8' }} />
                            <span>Free Initial Consultation for Invisalign & Dental Implants</span>
                          </span>
                          <button
                            onClick={() => {
                              setDropdownOpen(false);
                              onOpenAppointment();
                            }}
                            style={{
                              background: '#00b4d8',
                              color: '#071529',
                              border: 'none',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              fontWeight: '800',
                              fontSize: '0.74rem',
                              cursor: 'pointer'
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
                    color: isActive ? '#38bdf8' : '#e2e8f0',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    padding: '9px 15px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    backgroundColor: isActive ? 'rgba(0, 180, 216, 0.12)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#38bdf8';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#e2e8f0';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '15px',
                      right: '15px',
                      height: '2px',
                      backgroundColor: '#38bdf8',
                      borderRadius: '2px'
                    }} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Direct CTA Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={`tel:${clinicInfo.phones[0].value}`}
              className="btn btn-outline-white btn-sm"
              style={{
                display: 'none',
                padding: '8px 14px',
                fontSize: '0.82rem'
              }}
              title="Call Clinic"
            >
              <Phone size={14} /> Call
            </a>
            <button
              onClick={() => onOpenAppointment?.()}
              className="btn btn-primary btn-sm"
              style={{
                boxShadow: '0 4px 20px rgba(0, 119, 182, 0.45)',
                padding: '9px 20px',
                fontSize: '0.88rem'
              }}
            >
              <Calendar size={15} /> Book Visit
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#071529',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px',
            maxHeight: 'calc(100vh - 64px)',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link
                href="/"
                style={{
                  color: pathname === '/' ? '#38bdf8' : '#ffffff',
                  fontWeight: '700',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: pathname === '/' ? 'rgba(0, 180, 216, 0.15)' : 'transparent'
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                style={{
                  color: pathname === '/about' ? '#38bdf8' : '#ffffff',
                  fontWeight: '700',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: pathname === '/about' ? 'rgba(0, 180, 216, 0.15)' : 'transparent'
                }}
              >
                About Us
              </Link>

              {/* Mobile Specialities Box */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '14px',
                marginTop: '4px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px'
                }}>
                  <span style={{
                    color: '#38bdf8',
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}>
                    Treatments & Services
                  </span>
                  <Link href="/all-services" style={{ color: '#ffffff', fontSize: '0.78rem', fontWeight: '700' }}>
                    View All
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {allSpecialities.map((item, sIdx) => (
                    <Link
                      key={sIdx}
                      href={item.href}
                      style={{
                        color: pathname === item.href ? '#38bdf8' : '#cbd5e1',
                        fontSize: '0.86rem',
                        fontWeight: '600',
                        padding: '6px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>• {item.title}</span>
                      {(item as any).badge && (
                        <span style={{ fontSize: '0.68rem', color: '#f59e0b', fontWeight: '700' }}>
                          {(item as any).badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/doctor"
                style={{
                  color: pathname === '/doctor' ? '#38bdf8' : '#ffffff',
                  fontWeight: '700',
                  padding: '12px 16px',
                  borderRadius: '10px'
                }}
              >
                Our Doctors
              </Link>
              <Link
                href="/gallery"
                style={{
                  color: pathname === '/gallery' ? '#38bdf8' : '#ffffff',
                  fontWeight: '700',
                  padding: '12px 16px',
                  borderRadius: '10px'
                }}
              >
                Smile Gallery
              </Link>
              <Link
                href="/testimonal"
                style={{
                  color: pathname === '/testimonal' ? '#38bdf8' : '#ffffff',
                  fontWeight: '700',
                  padding: '12px 16px',
                  borderRadius: '10px'
                }}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                style={{
                  color: pathname === '/contact' ? '#38bdf8' : '#ffffff',
                  fontWeight: '700',
                  padding: '12px 16px',
                  borderRadius: '10px'
                }}
              >
                Contact & Map
              </Link>
            </div>

            {/* Mobile Contact Action Buttons */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                <MessageSquare size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      <style jsx global>{`
        @media (max-width: 991px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .nav-mobile-logo {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
