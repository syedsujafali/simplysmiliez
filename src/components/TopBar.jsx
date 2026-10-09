'use client';
import Link from 'next/link';
import { clinicInfo } from '@/data/clinicData';
import { Sparkles, Phone, Clock, MapPin, MessageSquare } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #040d1a 0%, #071529 35%, #0a2540 70%, #040d1a 100%)',
      color: '#ffffff',
      fontSize: '0.82rem',
      padding: '7px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      zIndex: 60
    }}>
      <div className="site-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        {/* Live Clinic Status Beacon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#cbd5e1',
          fontSize: '0.8rem'
        }}>
          <span className="beacon-dot" style={{ backgroundColor: '#10b981' }} />
          <span><strong style={{ color: '#ffffff' }}>Open Today:</strong> {clinicInfo.hours.weekdays}</span>
          <span style={{ color: '#475569', margin: '0 4px' }}>|</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#94a3b8' }}>
            <MapPin size={12} style={{ color: '#00b4d8' }} /> Shaikpet, Hyderabad
          </span>
        </div>

        {/* Special Offer Banner */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            color: '#ffffff',
            padding: '2px 9px',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            boxShadow: '0 0 10px rgba(245, 158, 11, 0.4)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Sparkles size={11} /> 30% OFF
          </span>
          <span style={{ fontWeight: '500', color: '#e2e8f0', fontSize: '0.82rem' }}>
            Special discount on <strong style={{ color: '#38bdf8' }}>Invisalign & Dental Implants</strong>
          </span>
        </div>

        {/* Direct Contact Numbers */}
        <div className="topbar-contacts" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          fontSize: '0.8rem'
        }}>
          <a
            href={`tel:${clinicInfo.phones[0].value}`}
            style={{
              color: '#ffffff',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              transition: 'color 0.2s'
            }}
          >
            <Phone size={12} style={{ color: '#00b4d8' }} />
            <span>{clinicInfo.phones[0].display}</span>
          </a>
          <a
            href={clinicInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#25d366',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              transition: 'color 0.2s'
            }}
          >
            <MessageSquare size={12} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 840px) {
          .topbar-contacts {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
