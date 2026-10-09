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

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
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

        {/* Doctor Image Container */}
        <div className="doctor-image-wrapper" style={{ height: '370px' }}>
          <img
            src={doctor.image}
            alt={doctor.name}
          />
          
          {/* Deep Vignette Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(7, 21, 41, 0.95) 0%, rgba(7, 21, 41, 0.4) 50%, rgba(7, 21, 41, 0.1) 100%)'
          }} />

          {/* Floating Top Badges */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            right: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 2
          }}>
            {/* Role Badge */}
            <span style={{
              backgroundColor: theme.badgeBg,
              color: '#ffffff',
              padding: '5px 14px',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: '800',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.badgeBorder}`,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={13} /> {theme.roleTag}
            </span>

            {/* Experience Badge */}
            <span style={{
              backgroundColor: '#ffffff',
              color: 'var(--navy)',
              padding: '5px 12px',
              borderRadius: '9999px',
              fontSize: '0.76rem',
              fontWeight: '800',
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <Star size={13} fill="#f59e0b" color="#f59e0b" /> {doctor.experience}
            </span>
          </div>

          {/* Overlaid Doctor Details */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '22px',
            right: '22px',
            zIndex: 2
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#34d399',
              fontSize: '0.74rem',
              fontWeight: '700',
              letterSpacing: '0.03em',
              marginBottom: '6px',
              backgroundColor: 'rgba(6, 78, 59, 0.45)',
              padding: '3px 10px',
              borderRadius: '6px',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(52, 211, 153, 0.3)'
            }}>
              <ShieldCheck size={13} /> TSDC Verified: {regCode}
            </div>

            <h3 style={{
              fontSize: '1.6rem',
              color: '#ffffff',
              fontWeight: '800',
              lineHeight: '1.2',
              margin: '0 0 4px 0',
              letterSpacing: '-0.02em'
            }}>
              {doctor.name}
            </h3>

            <div style={{
              color: '#38bdf8',
              fontSize: '0.92rem',
              fontWeight: '700',
              lineHeight: '1.35',
              marginBottom: '4px'
            }}>
              {doctor.degree}
            </div>

            <div style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '0.82rem',
              fontWeight: '500'
            }}>
              {theme.shortDesignation}
            </div>
          </div>
        </div>

        {/* Clean Card Bottom Strip */}
        <div style={{
          padding: '16px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          borderTop: '1px solid #f1f5f9'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.86rem',
            fontWeight: '700',
            color: 'var(--primary)'
          }}>
            <span>View Full Profile</span>
            <ChevronRight size={16} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={(e) => e.stopPropagation()}>
            <a
              href={`https://wa.me/917799376656?text=Hi%20Simply%20Smilez%2C%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(doctor.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ padding: '8px 12px', borderRadius: '8px' }}
              title={`WhatsApp with ${doctor.name}`}
            >
              <MessageSquare size={14} />
            </a>

            <button
              onClick={() => onOpenAppointment && onOpenAppointment()}
              className="btn btn-primary btn-sm"
              style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '0.82rem' }}
            >
              <Calendar size={13} /> Book
            </button>
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
              justifyContent: 'space-between',
              padding: '18px 26px',
              borderBottom: '1px solid #f1f5f9',
              backgroundColor: '#fafbfc'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  backgroundColor: theme.accentLight,
                  color: theme.accentDark,
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.74rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}>
                  Senior MDS Profile
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  Simply Smilez Dental Clinic
                </span>
              </div>

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
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(7, 21, 41, 0.88)',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      fontSize: '0.76rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <ShieldCheck size={14} style={{ color: '#34d399' }} />
                      <span>TSDC Reg: {doctor.regNumber}</span>
                    </div>
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

                    <div style={{
                      padding: '10px 14px',
                      backgroundColor: '#f0fdf4',
                      borderRadius: '12px',
                      border: '1px solid rgba(34, 197, 94, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <Building2 size={16} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#166534' }}>
                          {reachCount}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#15803d' }}>
                          Senior Consultant Network
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
                    marginBottom: '8px'
                  }}>
                    {doctor.degree}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginBottom: '16px'
                  }}>
                    <GraduationCap size={15} style={{ color: 'var(--primary)' }} />
                    <span>Alumni of {theme.alumni}</span>
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

                  {/* Clinical Focus Chips */}
                  <div style={{ marginBottom: '22px' }}>
                    <div style={{
                      fontSize: '0.74rem',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--text-muted)',
                      marginBottom: '8px'
                    }}>
                      Specialized Clinical Procedures:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {theme.highlights.map((item, idx) => (
                        <span key={idx} className="doctor-chip">
                          <Check size={12} style={{ color: theme.accent, strokeWidth: 3 }} /> {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Row */}
                  <div 
                    className="doctor-modal-actions"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr) auto',
                      gap: '10px',
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
                        padding: '11px 16px',
                        fontSize: '0.86rem',
                        fontWeight: '700',
                        justifyContent: 'center',
                        borderRadius: '12px'
                      }}
                    >
                      <Calendar size={15} /> Book Consultation
                    </button>

                    <Link
                      href={`/doctor/${doctor.slug}`}
                      className="btn btn-secondary"
                      style={{
                        padding: '11px 14px',
                        fontSize: '0.84rem',
                        fontWeight: '700',
                        justifyContent: 'center',
                        borderRadius: '12px'
                      }}
                    >
                      Dedicated Page <ExternalLink size={13} />
                    </Link>

                    <a
                      href={`https://wa.me/917799376656?text=Hi%20Simply%20Smilez%2C%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(doctor.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{
                        padding: '11px 14px',
                        borderRadius: '12px'
                      }}
                      title={`Direct WhatsApp with ${doctor.name}`}
                    >
                      <MessageSquare size={16} />
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
