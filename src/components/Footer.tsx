'use client';
import { useState } from 'react';
import Link from 'next/link';
import { clinicInfo } from '@/data/clinicData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  ChevronDown,
  MessageSquare, 
  Instagram,
  Facebook
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Accordion states for mobile footer
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    treatments: false,
    quickLinks: false,
    timings: false,
    location: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const services = [
    { title: 'Invisalign & Clear Aligners', href: '/braces' },
    { title: 'Microscopic Root Canal Therapy', href: '/laserroot' },
    { title: 'Pediatric Dentistry', href: '/pediatary' },
    { title: 'Dental Implants', href: '/dentalimplant' },
    { title: 'Dental Veneers', href: '/dental-veneers-hyderabad' },
    { title: 'Laser Teeth Whitening', href: '/laserteeth' },
    { title: 'Dental Crowns & Bridges', href: '/crowns' },
    { title: 'Composite Fillings', href: '/composite-fillings-hyderabad' },
    { title: 'Wisdom Tooth Extractions', href: '/wisdom' }
  ];

  const quickLinks = [
    { title: 'Home', href: '/' },
    { title: 'About Clinic', href: '/about' },
    { title: 'Our Doctors', href: '/doctor' },
    { title: 'All Treatments', href: '/all-services' },
    { title: 'Clinic Gallery', href: '/gallery' },
    { title: 'Patient Testimonials', href: '/testimonal' },
    { title: 'Contact & Directions', href: '/contact' }
  ];

  return (
    <footer style={{
      backgroundColor: '#071220',
      color: '#cbd5e1',
      borderTop: '1px solid rgba(2, 132, 199, 0.25)',
      position: 'relative'
    }}>
      {/* Top Subtle Cyan Accent Line */}
      <div style={{
        height: '2px',
        width: '100%',
        background: 'linear-gradient(90deg, transparent 0%, #0284c7 35%, #06b6d4 65%, transparent 100%)'
      }} />

      <div className="site-container" style={{ paddingTop: '50px', paddingBottom: '24px' }}>
        
        {/* ======================================================== */}
        {/* DESKTOP FOOTER (Visible only on desktop screens > 768px) */}
        {/* ======================================================== */}
        <div className="footer-desktop-view">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '36px',
            marginBottom: '44px'
          }}>
            
            {/* Column 1: Clinic Identity & Quick Contact */}
            <div>
              <div style={{ marginBottom: '18px' }}>
                <img
                  src="/images/logo-3.webp"
                  alt={clinicInfo.name}
                  style={{
                    height: '50px',
                    width: 'auto',
                    objectFit: 'contain',
                    backgroundColor: '#ffffff',
                    padding: '7px 16px',
                    borderRadius: '12px'
                  }}
                />
              </div>

              <p style={{
                fontSize: '0.88rem',
                lineHeight: '1.65',
                color: '#94a3b8',
                marginBottom: '20px'
              }}>
                Comprehensive, painless dental care in Shaikpet / Manikonda, Hyderabad. Specializing in Invisalign, laser root canals, pediatric dentistry, and dental implants.
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href={`tel:${clinicInfo.phones?.[0]?.value || '+917799376656'}`}
                  className="btn btn-primary btn-sm"
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.84rem',
                    borderRadius: '8px',
                    fontWeight: '700'
                  }}
                >
                  <Phone size={14} /> Call Clinic
                </a>

                <a
                  href={clinicInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{
                    padding: '8px 14px',
                    fontSize: '0.84rem',
                    borderRadius: '8px',
                    fontWeight: '700'
                  }}
                >
                  <MessageSquare size={14} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Column 2: Dental Treatments (Normal link list on Desktop) */}
            <div>
              <h4 style={{
                color: '#ffffff',
                fontSize: '1.05rem',
                fontWeight: '800',
                marginBottom: '18px',
                paddingBottom: '8px',
                borderBottom: '2px solid #0284c7',
                display: 'inline-block'
              }}>
                Dental Treatments
              </h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {services.map((s, idx) => (
                  <li key={idx}>
                    <Link
                      href={s.href}
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        fontSize: '0.88rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#38bdf8';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#94a3b8';
                        e.currentTarget.style.transform = 'translateX(0px)';
                      }}
                    >
                      <ChevronRight size={13} style={{ color: '#0284c7', flexShrink: 0 }} />
                      <span>{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Timings */}
            <div>
              <h4 style={{
                color: '#ffffff',
                fontSize: '1.05rem',
                fontWeight: '800',
                marginBottom: '18px',
                paddingBottom: '8px',
                borderBottom: '2px solid #0284c7',
                display: 'inline-block'
              }}>
                Contact &amp; Timings
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
                
                {/* Address */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <MapPin size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px', fontSize: '0.86rem' }}>
                      Address:
                    </strong>
                    <a
                      href={clinicInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#94a3b8', lineHeight: '1.5', display: 'block' }}
                    >
                      {clinicInfo.address}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Clock size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px', fontSize: '0.86rem' }}>
                      Opening Hours:
                    </strong>
                    <div style={{ color: '#94a3b8' }}>{clinicInfo.hours.weekdays}</div>
                    <div style={{ color: '#94a3b8' }}>{clinicInfo.hours.sunday}</div>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Phone size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block', marginBottom: '4px', fontSize: '0.86rem' }}>
                      Phone Numbers:
                    </strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px' }}>
                      <a href={`tel:${clinicInfo.phones?.[0]?.value || '+917799376656'}`} style={{ color: '#38bdf8', fontWeight: '700', whiteSpace: 'nowrap' }}>
                        {clinicInfo.phones?.[0]?.display || '77993 76656'}
                      </a>
                      <span style={{ color: '#64748b' }}>•</span>
                      <a href={`tel:${clinicInfo.phones?.[1]?.value || '+919603338904'}`} style={{ color: '#38bdf8', fontWeight: '700', whiteSpace: 'nowrap' }}>
                        {clinicInfo.phones?.[1]?.display || '96033 38904'}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Mail size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px', fontSize: '0.86rem' }}>
                      Email:
                    </strong>
                    <a href={`mailto:${clinicInfo.email}`} style={{ color: '#94a3b8' }}>
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Column 4: Location Map & Social Channels */}
            <div>
              <h4 style={{
                color: '#ffffff',
                fontSize: '1.05rem',
                fontWeight: '800',
                marginBottom: '18px',
                paddingBottom: '8px',
                borderBottom: '2px solid #0284c7',
                display: 'inline-block'
              }}>
                Find Our Clinic
              </h4>

              <div style={{
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(2, 132, 199, 0.25)',
                marginBottom: '12px'
              }}>
                <iframe
                  src={clinicInfo.googleMapsEmbed}
                  title="Simply Smilez Dental Clinic Location in Shaikpet Hyderabad"
                  width="100%"
                  height="170"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <a
                  href={clinicInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.82rem',
                    color: '#38bdf8',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontWeight: '700'
                  }}
                >
                  <MapPin size={13} /> Get Directions &rarr;
                </a>

                {/* Social Channels */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  {clinicInfo.socials?.instagram && (
                    <a
                      href={clinicInfo.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#e1306c';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      title="Instagram"
                      aria-label="Instagram"
                    >
                      <Instagram size={15} />
                    </a>
                  )}

                  {clinicInfo.socials?.facebook && (
                    <a
                      href={clinicInfo.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1877f2';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      title="Facebook"
                      aria-label="Facebook"
                    >
                      <Facebook size={15} />
                    </a>
                  )}

                  <a
                    href={clinicInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#25d366';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    title="WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare size={15} />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE FOOTER (Accordion dropdowns style matching user's image) */}
        {/* ======================================================== */}
        <div className="footer-mobile-view">
          
          {/* Clinic Brand Intro at top of mobile footer */}
          <div style={{ marginBottom: '22px' }}>
            <div style={{ marginBottom: '14px' }}>
              <img
                src="/images/logo-3.webp"
                alt={clinicInfo.name}
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                  backgroundColor: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '10px'
                }}
              />
            </div>
            <p style={{
              fontSize: '0.85rem',
              lineHeight: '1.6',
              color: '#94a3b8',
              margin: '0 0 16px 0'
            }}>
              Comprehensive, painless dental care in Shaikpet / Manikonda, Hyderabad.
            </p>
          </div>

          {/* ACCORDION 1: TREATMENTS & SERVICES */}
          <div className="footer-accordion-item">
            <button
              type="button"
              onClick={() => toggleSection('treatments')}
              className="footer-accordion-trigger"
              aria-expanded={openSections.treatments}
            >
              <span>DENTAL TREATMENTS</span>
              <ChevronDown
                size={18}
                className={`footer-accordion-arrow ${openSections.treatments ? 'rotated' : ''}`}
              />
            </button>
            {openSections.treatments && (
              <div className="footer-accordion-content">
                <ul className="footer-accordion-list">
                  {services.map((s, idx) => (
                    <li key={idx}>
                      <Link href={s.href} className="footer-accordion-link">
                        <span className="footer-accordion-dot" />
                        <span>{s.title}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/all-services" className="footer-accordion-link special">
                      <span className="footer-accordion-dot" />
                      <span>Explore All Services &rarr;</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* ACCORDION 2: QUICK LINKS / COMPANY */}
          <div className="footer-accordion-item">
            <button
              type="button"
              onClick={() => toggleSection('quickLinks')}
              className="footer-accordion-trigger"
              aria-expanded={openSections.quickLinks}
            >
              <span>QUICK LINKS</span>
              <ChevronDown
                size={18}
                className={`footer-accordion-arrow ${openSections.quickLinks ? 'rotated' : ''}`}
              />
            </button>
            {openSections.quickLinks && (
              <div className="footer-accordion-content">
                <ul className="footer-accordion-list">
                  {quickLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} className="footer-accordion-link">
                        <span className="footer-accordion-dot" />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ACCORDION 3: CLINIC TIMINGS */}
          <div className="footer-accordion-item">
            <button
              type="button"
              onClick={() => toggleSection('timings')}
              className="footer-accordion-trigger"
              aria-expanded={openSections.timings}
            >
              <span>CLINIC TIMINGS</span>
              <ChevronDown
                size={18}
                className={`footer-accordion-arrow ${openSections.timings ? 'rotated' : ''}`}
              />
            </button>
            {openSections.timings && (
              <div className="footer-accordion-content" style={{ padding: '8px 0 16px 0', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0' }}>
                    <Clock size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8' }}>Mon - Sat:</strong>
                      <span>{clinicInfo.hours.weekdays}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0' }}>
                    <Clock size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8' }}>Sunday:</strong>
                      <span>{clinicInfo.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ACCORDION 4: LOCATION & MAP */}
          <div className="footer-accordion-item">
            <button
              type="button"
              onClick={() => toggleSection('location')}
              className="footer-accordion-trigger"
              aria-expanded={openSections.location}
            >
              <span>FIND OUR CLINIC</span>
              <ChevronDown
                size={18}
                className={`footer-accordion-arrow ${openSections.location ? 'rotated' : ''}`}
              />
            </button>
            {openSections.location && (
              <div className="footer-accordion-content" style={{ padding: '8px 0 16px 0' }}>
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(2, 132, 199, 0.25)',
                  marginBottom: '10px'
                }}>
                  <iframe
                    src={clinicInfo.googleMapsEmbed}
                    title="Simply Smilez Dental Clinic Location"
                    width="100%"
                    height="160"
                    style={{ border: 0, display: 'block' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={clinicInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.82rem',
                    color: '#38bdf8',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontWeight: '700'
                  }}
                >
                  <MapPin size={13} /> Open in Google Maps &rarr;
                </a>
              </div>
            )}
          </div>

          {/* INQUIRIES & CONTACT SECTION (Always visible below accordions like reference image) */}
          <div style={{ marginTop: '26px', marginBottom: '24px' }}>
            <h4 style={{
              color: '#38bdf8',
              fontSize: '0.95rem',
              fontWeight: '800',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}>
              INQUIRIES &amp; APPOINTMENTS
            </h4>

            <div style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>{clinicInfo.address}</div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <Phone size={15} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <span>Call: </span>
                <a href={`tel:${clinicInfo.phones?.[0]?.value || '+917799376656'}`} style={{ color: '#38bdf8', fontWeight: '700' }}>
                  {clinicInfo.phones?.[0]?.display || '77993 76656'}
                </a>
                <span>•</span>
                <a href={`tel:${clinicInfo.phones?.[1]?.value || '+919603338904'}`} style={{ color: '#38bdf8', fontWeight: '700' }}>
                  {clinicInfo.phones?.[1]?.display || '96033 38904'}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <a href={`mailto:${clinicInfo.email}`} style={{ color: '#94a3b8' }}>
                  {clinicInfo.email}
                </a>
              </div>
            </div>

            {/* Action Buttons: Schedule Online & Direct Call */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '18px' }}>
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '11px',
                  borderRadius: '10px',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  border: '1.5px solid #0284c7',
                  color: '#ffffff'
                }}
              >
                <MessageSquare size={16} /> BOOK ON WHATSAPP
              </a>

              <a
                href={`tel:${clinicInfo.phones?.[0]?.value || '+917799376656'}`}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '12px',
                  borderRadius: '10px',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                <Phone size={16} /> CALL NOW: {clinicInfo.phones?.[0]?.display || '77993 76656'}
              </a>
            </div>

            {/* Social Channels on mobile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
              <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '600' }}>Connect with us:</span>
              {clinicInfo.socials?.instagram && (
                <a
                  href={clinicInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}
                  aria-label="Instagram"
                >
                  <Instagram size={15} />
                </a>
              )}
              {clinicInfo.socials?.facebook && (
                <a
                  href={clinicInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}
                  aria-label="Facebook"
                >
                  <Facebook size={15} />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* Bottom Copyright & Legal Links */}
        {/* ======================================================== */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          <div>
            &copy; {currentYear} Simply Smilez Dental Clinic. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#94a3b8' }}>Home</Link>
            <Link href="/about" style={{ color: '#94a3b8' }}>About</Link>
            <Link href="/doctor" style={{ color: '#94a3b8' }}>Doctors</Link>
            <Link href="/all-services" style={{ color: '#94a3b8' }}>Treatments</Link>
            <Link href="/gallery" style={{ color: '#94a3b8' }}>Gallery</Link>
            <Link href="/contact" style={{ color: '#94a3b8' }}>Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
