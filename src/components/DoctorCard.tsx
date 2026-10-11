'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  Calendar, 
  Phone, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  Building2,
  ShieldCheck,
  Star,
  Check,
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { clinicInfo } from '@/data/clinicData';

export default function DoctorCard({ doctor, onOpenAppointment }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isOrthodontist = doctor.speciality.toLowerCase().includes('orthodont');
  const doctorPhoneDisplay = doctor.phone || (isOrthodontist ? '96033 38904' : '77993 76656');
  const doctorPhoneWa = (doctor.phoneRaw ? doctor.phoneRaw.replace('+', '') : null) || (isOrthodontist ? '919603338904' : '917799376656');

  // Robust scroll lock preventing background scrolling on desktop and iOS/Android mobile
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        const top = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (top) {
          window.scrollTo(0, parseInt(top || '0') * -1);
        }
      };
    }
  }, [isModalOpen]);

  const theme = isOrthodontist 
    ? {
        accent: '#0284c7',
        accentLight: '#e0f2fe',
        accentDark: '#0369a1',
        gradient: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
        badgeBg: 'rgba(2, 132, 199, 0.92)',
        badgeBorder: 'rgba(56, 189, 248, 0.4)',
        roleTag: 'Orthodontics & Invisalign',
        shortDesignation: 'Orthodontist & Certified Invisalign Provider',
        alumni: 'Kamineni & Panineeya Dental Colleges',
        highlights: [
          'Invisalign Clear Aligners',
          'Ceramic & Self-Ligating Braces',
          'Kids Interceptive Orthodontics',
          '3D Digital Smile Simulation',
          'Adult Alignment Correction',
          'Jaw Orthopedics'
        ]
      }
    : {
        accent: '#059669',
        accentLight: '#ecfdf5',
        accentDark: '#047857',
        gradient: 'linear-gradient(135deg, #059669 0%, #06b6d4 100%)',
        badgeBg: 'rgba(5, 150, 105, 0.92)',
        badgeBorder: 'rgba(52, 211, 153, 0.4)',
        roleTag: 'Pediatric Care & Implants',
        shortDesignation: 'Pediatric Dentist & Implantologist',
        alumni: 'Kamineni & Panineeya Dental Colleges',
        highlights: [
          'Painless Laser Pulpectomy (RCT)',
          'Child-Friendly Fear-Free Care',
          'Pediatric Zirconia Crowns',
          'Titanium Dental Implants',
          'Preventive Fluoride & Sealants',
          'Full Mouth Rehabilitation'
        ]
      };

  const regCode = doctor.regNumber ? doctor.regNumber.split(' ')[0] : 'Verified';
  const reachCount = doctor.clinicsCount || (isOrthodontist ? '20+ Consulting Clinics' : '30+ Consulting Clinics');

  return (
    <>
      {/* ========================================================= */}
      {/* MINIMAL & SLEEK DOCTOR CARD */}
      {/* ========================================================= */}
      <div 
        className="doctor-card-modern"
        style={{ cursor: 'pointer' }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Top Accent Gradient Bar */}
        <div style={{
          height: '4px',
          width: '100%',
          background: theme.gradient
        }} />

        {/* Doctor Image Container (Pure photo, no text overlay) */}
        <div className="doctor-image-wrapper" style={{ height: '340px', position: 'relative' }}>
          <img
            src={doctor.image}
            alt={doctor.name}
          />
        </div>

        {/* Doctor Details Below Image */}
        <div style={{
          padding: '24px 26px 20px 26px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          backgroundColor: '#ffffff'
        }}>
          {/* Top Badges Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '14px'
          }}>
            <span style={{
              backgroundColor: theme.accentLight,
              color: theme.accentDark,
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: '800',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              border: `1px solid ${theme.badgeBorder}`,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={13} /> {theme.roleTag}
            </span>

            <span style={{
              backgroundColor: '#f8fafc',
              color: 'var(--navy)',
              padding: '4px 10px',
              borderRadius: '9999px',
              fontSize: '0.76rem',
              fontWeight: '800',
              border: '1px solid #e2e8f0',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <Star size={13} fill="#f59e0b" color="#f59e0b" /> {doctor.experience}
            </span>
          </div>

          {/* Doctor Name */}
          <h3 style={{
            fontSize: '1.5rem',
            color: 'var(--navy)',
            fontWeight: '800',
            lineHeight: '1.25',
            margin: '0 0 6px 0',
            letterSpacing: '-0.02em'
          }}>
            {doctor.name}
          </h3>

          {/* Degree */}
          <div style={{
            color: 'var(--primary)',
            fontSize: '0.92rem',
            fontWeight: '700',
            lineHeight: '1.35',
            marginBottom: '4px'
          }}>
            {doctor.degree}
          </div>

          {/* Short Designation */}
          <div style={{
            color: 'var(--text-muted)',
            fontSize: '0.84rem',
            fontWeight: '500',
            lineHeight: '1.45',
            marginBottom: '18px'
          }}>
            {theme.shortDesignation}
          </div>

          {/* Card Bottom Action Bar */}
          <div style={{
            marginTop: 'auto',
            paddingTop: '16px',
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.9rem',
              fontWeight: '800',
              color: 'var(--primary)'
            }}>
              <span>View Full Profile</span>
              <ChevronRight size={17} />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ULTRA-SLEEK FULL PROFILE MODAL (NOT CHUNKY) */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div 
          className="doctor-modal-backdrop"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="doctor-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '14px 22px',
              borderBottom: '1px solid #f1f5f9',
              backgroundColor: '#fafbfc'
            }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #e2e8f0',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--navy)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1f5f9';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                aria-label="Close Profile"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body: 2-Column Responsive Layout */}
            <div style={{ padding: '26px' }}>
              <div className="doctor-modal-grid">
                
                {/* Left Column: Doctor Portrait & Key Metrics */}
                <div>
                  <div style={{
                    borderRadius: '18px',
                    overflow: 'hidden',
                    height: '280px',
                    backgroundColor: '#071529',
                    position: 'relative',
                    marginBottom: '16px',
                    border: '1px solid rgba(226, 232, 240, 0.9)'
                  }}>
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center'
                      }}
                    />
                  </div>

                  {/* Trust Indicators */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{
                      padding: '10px 14px',
                      backgroundColor: '#f8fafc',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <Star size={16} style={{ color: '#f59e0b', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--navy)' }}>
                          {doctor.experience}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          Clinical Excellence
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Qualifications, Bio & Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  
                  {/* Doctor Title */}
                  <h3 style={{
                    fontSize: '1.75rem',
                    color: 'var(--navy)',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    margin: 0,
                    letterSpacing: '-0.02em'
                  }}>
                    {doctor.name}
                  </h3>

                  <div style={{
                    color: 'var(--primary)',
                    fontSize: '0.96rem',
                    fontWeight: '700',
                    marginTop: '4px',
                    marginBottom: '14px'
                  }}>
                    {doctor.degree}
                  </div>

                  {/* Bio */}
                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-body)',
                    lineHeight: '1.65',
                    marginBottom: '18px'
                  }}>
                    {doctor.bio}
                  </p>

                  {/* Direct Action Row */}
                  <div 
                    className="doctor-modal-actions"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px',
                      marginTop: 'auto',
                      paddingTop: '18px',
                      borderTop: '1px solid #f1f5f9'
                    }}
                  >
                    <button
                      onClick={() => {
                        setIsModalOpen(false);
                        if (onOpenAppointment) onOpenAppointment();
                      }}
                      className="btn btn-primary"
                      style={{
                        padding: '12px 18px',
                        fontSize: '0.88rem',
                        fontWeight: '700',
                        justifyContent: 'center',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <Calendar size={16} /> Book Consultation
                    </button>

                    <a
                      href={`https://wa.me/${doctorPhoneWa}?text=Hi%20Simply%20Smilez%2C%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(doctor.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{
                        padding: '12px 18px',
                        borderRadius: '12px',
                        fontSize: '0.88rem',
                        fontWeight: '700',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        backgroundColor: '#25d366',
                        color: '#ffffff',
                        border: 'none',
                        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)'
                      }}
                      title={`Direct WhatsApp with ${doctor.name}`}
                    >
                      {/* Official WhatsApp SVG Icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.476-.15-.677.15-.2.301-.777.978-.952 1.179-.176.2-.351.226-.652.075-1.392-.698-2.3-1.24-3.218-2.817-.24-.413.241-.383.69-1.28.075-.15.038-.276-.019-.376-.057-.1-.502-1.21-.688-1.658-.18-.436-.364-.376-.502-.383-.13-.007-.276-.007-.423-.007s-.383.055-.584.276c-.2.221-.777.76-.777 1.854 0 1.094.796 2.15 1.907 3.261 1.637 1.637 3.655 2.502 5.093 2.766 1.439.263 2.062.211 2.802.1.828-.124 1.78-.727 2.03-1.43.251-.703.251-1.306.176-1.43-.076-.126-.277-.201-.578-.352zM12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.85.5 3.58 1.38 5.09L2 22l5.05-1.33A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10z"/>
                      </svg>
                      <span>{doctorPhoneDisplay}</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
