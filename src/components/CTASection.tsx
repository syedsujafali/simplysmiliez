'use client';
import { clinicInfo } from '@/data/clinicData';
import { Phone, MapPin, MessageSquare, Calendar, Sparkles, ShieldCheck, Clock } from 'lucide-react';

export default function CTASection({ onOpenAppointment }) {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #071529 0%, #0b2545 50%, #0077b6 100%)',
      color: '#ffffff',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Ambient background glow effects */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 180, 216, 0.22) 0%, transparent 70%)',
        top: '-150px',
        right: '-100px',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
        bottom: '-120px',
        left: '-100px',
        pointerEvents: 'none'
      }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          alignItems: 'center',
          gap: '40px'
        }} className="cta-responsive-grid">
          {/* Left Text Block */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(0, 180, 216, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              padding: '5px 14px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '16px',
              color: '#38bdf8',
              backdropFilter: 'blur(8px)'
            }}>
              <Sparkles size={13} /> Exclusive 30% Discount
            </div>

            <h2 style={{
              fontSize: '2.6rem',
              color: '#ffffff',
              fontWeight: '800',
              lineHeight: '1.18',
              marginBottom: '16px'
            }}>
              Ready for a Healthier, Confident Smile?
            </h2>

            <p style={{
              fontSize: '1.08rem',
              color: '#cbd5e1',
              lineHeight: '1.65',
              marginBottom: '26px'
            }}>
              Consult with senior MDS specialists at Simply Smilez Dental Clinic. Avail <strong>30% discount</strong> on Invisalign and Dental Implants with precision laser technology.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              fontSize: '0.92rem',
              color: '#e2e8f0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={17} style={{ color: '#00b4d8' }} />
                <span>
                  <strong>Direct Helpline:</strong>{' '}
                  <a href={`tel:${clinicInfo.phones[0].value}`} style={{ color: '#ffffff', fontWeight: '700' }}>{clinicInfo.phones[0].display}</a>
                  <span style={{ margin: '0 6px', color: '#64748b' }}>/</span>
                  <a href={`tel:${clinicInfo.phones[1].value}`} style={{ color: '#ffffff', fontWeight: '700' }}>{clinicInfo.phones[1].display}</a>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={17} style={{ color: '#00b4d8', flexShrink: 0, marginTop: '3px' }} />
                <span>
                  <strong>Clinic Address:</strong>{' '}
                  <a href={clinicInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1' }}>
                    P.V. Reddy Complex, 1st Floor, Dwaraka Nagar, Shaikpet, Hyderabad
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Right Action Card */}
          <div 
            className="cta-action-card"
            style={{
              backgroundColor: 'rgba(7, 21, 41, 0.75)',
              border: '1px solid rgba(0, 180, 216, 0.25)',
              padding: '36px',
              borderRadius: '24px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(16px)',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#10b981',
              fontSize: '0.78rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '6px'
            }}>
              <ShieldCheck size={14} /> Immediate Slots Available
            </div>
            
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: '800', marginBottom: '8px' }}>
              Schedule Your Visit Online
            </h3>
            
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '22px' }}>
              Open Monday through Saturday (10am–9pm) and Sunday (11am–4pm).
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={onOpenAppointment}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Calendar size={18} /> Book Online Appointment
              </button>
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageSquare size={18} /> WhatsApp Quick Booking
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .cta-action-card {
            padding: 22px 18px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
