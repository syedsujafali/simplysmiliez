'use client';
import Link from 'next/link';
import { clinicInfo } from '@/data/clinicData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  MessageSquare, 
  Instagram,
  Facebook
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { title: 'Invisalign & Clear Aligners', href: '/braces' },
    { title: 'Laser Root Canal Therapy', href: '/laserroot' },
    { title: 'Pediatric Dentistry', href: '/pediatary' },
    { title: 'Dental Implants', href: '/dentalimplant' },
    { title: 'Dental Veneers', href: '/dental-veneers-hyderabad' },
    { title: 'Laser Teeth Whitening', href: '/laserteeth' },
    { title: 'Dental Crowns & Bridges', href: '/crowns' },
    { title: 'Composite Fillings', href: '/composite-fillings-hyderabad' },
    { title: 'Wisdom Tooth Extractions', href: '/wisdom' }
  ];

  return (
    <footer style={{
      backgroundColor: '#071220',
      color: '#cbd5e1',
      borderTop: '1px solid rgba(2, 132, 199, 0.25)',
      position: 'relative'
    }}>
      {/* Top Subtle Cyan Glow Accent Line */}
      <div style={{
        height: '2px',
        width: '100%',
        background: 'linear-gradient(90deg, transparent 0%, #0284c7 35%, #06b6d4 65%, transparent 100%)'
      }} />

      <div className="site-container" style={{ paddingTop: '56px', paddingBottom: '24px' }}>
        
        {/* 4-Column Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
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
                href={`tel:${clinicInfo.phones?.[0]?.value || '+919603338904'}`}
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

          {/* Column 2: Dental Treatments */}
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

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {services.map((s, idx) => (
                <li key={idx}>
                  <Link
                    href={s.href}
                    style={{
                      color: '#94a3b8',
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
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ChevronRight size={13} style={{ color: '#0284c7', flexShrink: 0 }} /> {s.title}
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
                  <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px', fontSize: '0.86rem' }}>
                    Phone Numbers:
                  </strong>
                  <div>
                    <a href={`tel:${clinicInfo.phones?.[0]?.value || '+919603338904'}`} style={{ color: '#38bdf8', fontWeight: '700' }}>
                      {clinicInfo.phones?.[0]?.display || '96033 38904'}
                    </a>
                    <span style={{ margin: '0 8px', color: '#64748b' }}>|</span>
                    <a href={`tel:${clinicInfo.phones?.[1]?.value || '+917799376656'}`} style={{ color: '#38bdf8', fontWeight: '700' }}>
                      {clinicInfo.phones?.[1]?.display || '77993 76656'}
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

        {/* Bottom Copyright & Links */}
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
