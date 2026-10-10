'use client';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function ServiceCard({ service, index = 0 }) {
  const isSpecialOffer = service.slug === 'braces' || service.slug === 'dentalimplant';
  const isLaser = service.slug.includes('laser');

  // Determine category badge
  const getCategory = () => {
    if (service.slug === 'braces') return 'Orthodontics';
    if (service.slug === 'laserroot') return 'Endodontics';
    if (service.slug === 'pediatary') return 'Pediatric Dentistry';
    if (service.slug === 'dentalimplant') return 'Implantology';
    if (service.slug === 'dental-veneers-hyderabad') return 'Cosmetic Dentistry';
    if (service.slug === 'laserteeth') return 'Laser Aesthetics';
    if (service.slug === 'crowns') return 'Prosthodontics';
    if (service.slug === 'composite-fillings-hyderabad') return 'Restorative Care';
    if (service.slug === 'lasergum') return 'Periodontics';
    if (service.slug === 'wisdom') return 'Oral Surgery';
    return 'Speciality Care';
  };

  const formattedNumber = index < 9 ? `0${index + 1}` : `${index + 1}`;

  return (
    <div className="luxury-service-card">
      {/* Image Stage */}
      <Link href={`/${service.slug}`} className="service-img-wrap" style={{ display: 'block', position: 'relative' }}>
        <img
          src={service.image}
          alt={service.title}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.72) 0%, rgba(15, 23, 42, 0.15) 50%, transparent 100%)'
        }} />

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          right: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10,
          pointerEvents: 'none'
        }}>
          <span style={{
            backgroundColor: 'rgba(15, 23, 42, 0.82)',
            color: '#38bdf8',
            padding: '5px 12px',
            borderRadius: '9999px',
            fontSize: '0.74rem',
            fontWeight: '800',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            {getCategory()}
          </span>

          {isSpecialOffer ? (
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#ffffff',
              padding: '5px 12px',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: '800',
              letterSpacing: '0.03em',
              boxShadow: '0 4px 14px rgba(245, 158, 11, 0.45)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Sparkles size={12} /> 30% OFF
            </span>
          ) : isLaser ? (
            <span style={{
              background: 'rgba(16, 185, 129, 0.92)',
              color: '#ffffff',
              padding: '5px 12px',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: '800',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.35)'
            }}>
              <Zap size={12} /> Laser Tech
            </span>
          ) : null}
        </div>

        {/* Index Tag on Bottom-Right of Image */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '14px',
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          color: '#e2e8f0',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '8px',
          padding: '2px 8px',
          fontSize: '0.72rem',
          fontWeight: '800',
          letterSpacing: '0.05em'
        }}>
          {formattedNumber}
        </div>
      </Link>

      {/* Card Content Body */}
      <div style={{ padding: '24px 26px 22px 26px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{
          fontSize: '1.28rem',
          fontWeight: '800',
          marginBottom: '10px',
          lineHeight: '1.3'
        }}>
          <Link
            href={`/${service.slug}`}
            className="service-title-link"
          >
            {service.title}
          </Link>
        </h3>

        <p style={{
          fontSize: '0.91rem',
          color: 'var(--text-muted)',
          lineHeight: '1.62',
          marginBottom: '22px',
          flexGrow: 1
        }}>
          {service.shortDesc}
        </p>

        {/* Card Footer with Details Link & Animated Arrow Circle */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '16px',
          borderTop: '1px solid #f1f5f9'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#0f766e', fontWeight: '700' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'inline-block',
              boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.2)'
            }} />
            <span>MDS Certified Care</span>
          </div>

          <Link
            href={`/${service.slug}`}
            className="service-cta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '50%'
            }}
            aria-label={`View details for ${service.title}`}
          >
            <ArrowRight size={18} style={{ display: 'block', margin: 'auto' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}


