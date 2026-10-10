'use client';
import { Phone, Grid, MapPin, MessageSquare } from 'lucide-react';
import { clinicInfo } from '@/data/clinicData';

export default function MobileBottomBar({ onOpenServices }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      borderTop: '1px solid var(--border-subtle)',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
      zIndex: 900,
      display: 'none',
      height: '62px'
    }} className="mobile-fixed-bottom-bar">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        height: '100%',
        alignItems: 'center'
      }}>
        {/* 1: Call */}
        <a
          href={`tel:${clinicInfo.phones[0].value}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--navy)',
            textDecoration: 'none',
            fontSize: '0.72rem',
            fontWeight: '600',
            gap: '3px'
          }}
        >
          <Phone size={18} style={{ color: 'var(--primary)' }} />
          <span>Call</span>
        </a>

        {/* 2: Services Modal */}
        <button
          onClick={onOpenServices}
          style={{
            background: 'transparent',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--navy)',
            cursor: 'pointer',
            fontSize: '0.72rem',
            fontWeight: '600',
            gap: '3px'
          }}
        >
          <Grid size={18} style={{ color: 'var(--primary)' }} />
          <span>Services</span>
        </button>

        {/* 3: Location */}
        <a
          href={clinicInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--navy)',
            textDecoration: 'none',
            fontSize: '0.72rem',
            fontWeight: '600',
            gap: '3px'
          }}
        >
          <MapPin size={18} style={{ color: 'var(--primary)' }} />
          <span>Location</span>
        </a>

        {/* 4: WhatsApp */}
        <a
          href={clinicInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#25d366',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '0.72rem',
            fontWeight: '700',
            gap: '3px',
            height: '100%'
          }}
        >
          <MessageSquare size={18} />
          <span>WhatsApp</span>
        </a>
      </div>

      <style jsx global>{`
        @media (max-width: 991px) {
          .mobile-fixed-bottom-bar {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
