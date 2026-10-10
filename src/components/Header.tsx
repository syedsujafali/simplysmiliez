'use client';
import Link from 'next/link';
import { clinicInfo } from '@/data/clinicData';
import { Phone, MapPin, Clock, MessageSquare, ShieldCheck, Award } from 'lucide-react';

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
      padding: '14px 0',
      transition: 'all 0.3s ease',
      position: 'relative',
      zIndex: 40
    }}>
      <div className="site-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px'
      }}>
        {/* Logo & Brand Identity */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <img
            src="/images/logo-3.webp"
            alt={clinicInfo.name}
            style={{
              height: '54px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
          <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '14px' }} className="header-brand-tag">
            <div style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Dental & Implant Clinic
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '500' }}>
              Shaikpet • Manikonda • Gachibowli
            </div>
          </div>
        </Link>

        {/* Info Highlights (Desktop Only) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px'
        }} className="header-info-blocks">
          {/* Location Chip */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '280px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              border: '1px solid rgba(0, 119, 182, 0.15)'
            }}>
              <MapPin size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Clinic Location
              </div>
              <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.35', display: 'block' }}
              >
                P.V.Reddy Complex, Shaikpet
              </a>
            </div>
          </div>

          {/* Direct Emergency / Phone Line */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              border: '1px solid rgba(0, 119, 182, 0.15)'
            }}>
              <Phone size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Helpline & Consultations
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--navy)' }}>
                <a href={`tel:${clinicInfo.phones[0].value}`} style={{ color: 'var(--primary)' }}>
                  {clinicInfo.phones[0].display}
                </a>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Chat */}
          <a
            href={clinicInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            style={{ padding: '9px 18px', fontSize: '0.86rem' }}
          >
            <MessageSquare size={15} /> WhatsApp Chat
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .header-info-blocks, .header-brand-tag {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
