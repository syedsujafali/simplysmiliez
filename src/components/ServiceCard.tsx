'use client';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

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

  return (
    <Link
      href={`/${service.slug}`}
      className="luxury-service-card"
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        cursor: 'pointer'
      }}
    >
      {/* Image Stage: Pure & clean image with zero overlays */}
      <div className="service-img-wrap" style={{ display: 'block', position: 'relative' }}>
        <img
          src={service.image}
          alt={service.title}
        />
      </div>

      {/* Card Content Body */}
      <div style={{ padding: '20px 22px 20px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Badges Bar (Rendered BELOW the image) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          marginBottom: '14px',
          flexWrap: 'wrap'
        }}>
          <span style={{
            backgroundColor: 'rgba(2, 132, 199, 0.1)',
            color: '#0284c7',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '0.74rem',
            fontWeight: '800',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            border: '1px solid rgba(2, 132, 199, 0.25)'
          }}>
            {getCategory()}
          </span>

            {/* Special Highlight Badges (if any) */}
            {isSpecialOffer ? (
              <span style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#ffffff',
                padding: '4px 10px',
                borderRadius: '9999px',
                fontSize: '0.72rem',
                fontWeight: '800',
                letterSpacing: '0.03em',
                boxShadow: '0 2px 8px rgba(245, 158, 11, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Sparkles size={11} /> 30% OFF
              </span>
            ) : isLaser ? (
              <span style={{
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                color: '#059669',
                padding: '4px 10px',
                borderRadius: '9999px',
                fontSize: '0.72rem',
                fontWeight: '800',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}>
                <Zap size={11} /> Laser Tech
              </span>
            ) : null}
        </div>

        <h3 style={{
          fontSize: '1.24rem',
          fontWeight: '800',
          marginBottom: '10px',
          lineHeight: '1.3'
        }}>
          <span className="service-title-link">
            {service.title}
          </span>
        </h3>

        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-muted)',
          lineHeight: '1.6',
          marginBottom: '20px',
          flexGrow: 1,
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#0f766e', fontWeight: '700' }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'inline-block',
              boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.2)'
            }} />
            <span>MDS Certified Care</span>
          </div>

          <div
            className="service-cta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '50%'
            }}
            aria-hidden="true"
          >
            <ArrowRight size={17} style={{ display: 'block', margin: 'auto' }} />
          </div>
        </div>
      </div>
    </Link>
  );
}


