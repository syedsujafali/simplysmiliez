'use client';
import Link from 'next/link';
import { useUI } from '@/components/LayoutWrapper';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  Calendar, 
  Phone, 
  MessageSquare, 
  Building2, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  MapPin,
  ArrowRight
} from 'lucide-react';

export default function DoctorDetailClient({ doctor, otherDoctor, clinicInfo }) {
  const { openAppointment } = useUI();

  return (
    <>
      {/* Header Profile Section */}
      <section style={{
        padding: '60px 0 50px 0',
        position: 'relative'
      }} className="bg-mesh-dark">
        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontSize: '0.84rem',
            color: '#94a3b8',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Link href="/" style={{ color: '#38bdf8', fontWeight: '600' }}>Home</Link>
            <span>&gt;</span>
            <Link href="/doctor" style={{ color: '#38bdf8', fontWeight: '600' }}>Doctors</Link>
            <span>&gt;</span>
            <span style={{ color: '#ffffff' }}>{doctor.name}</span>
          </div>

          {/* Profile Header Card */}
          <div style={{
            backgroundColor: 'rgba(11, 31, 58, 0.88)',
            borderRadius: '26px',
            padding: '40px',
            boxShadow: '0 24px 60px rgba(4, 13, 26, 0.6)',
            border: '1px solid rgba(0, 180, 216, 0.3)',
            backdropFilter: 'blur(16px)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '320px 1fr',
              gap: '44px',
              alignItems: 'center'
            }} className="doctor-hero-grid">
              
              {/* Avatar Column */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  position: 'relative',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-xl)',
                  backgroundColor: '#071529',
                  border: '2px solid rgba(0, 180, 216, 0.3)'
                }}>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    style={{
                      width: '100%',
                      height: '380px',
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                  />
                </div>
              </div>

              {/* Bio Details Column */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  color: '#10b981',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '5px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '14px'
                }}>
                  <CheckCircle2 size={14} /> {doctor.badge}
                </div>

                <h1 style={{
                  fontSize: '2.8rem',
                  color: '#ffffff',
                  fontWeight: '900',
                  lineHeight: '1.18',
                  marginBottom: '8px'
                }}>
                  {doctor.name}
                </h1>

                <div style={{
                  fontSize: '1.2rem',
                  color: '#38bdf8',
                  fontWeight: '700',
                  marginBottom: '14px'
                }}>
                  {doctor.title}
                </div>

                <div style={{
                  fontSize: '0.94rem',
                  color: '#cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '18px'
                }}>
                  <GraduationCap size={18} style={{ color: '#00b4d8' }} />
                  <strong>{doctor.degree}</strong>
                </div>

                <p style={{
                  fontSize: '0.96rem',
                  color: '#e2e8f0',
                  lineHeight: '1.7',
                  marginBottom: '26px'
                }}>
                  {doctor.bio}
                </p>

                {/* Stats Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '12px',
                  marginBottom: '28px'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '14px',
                    borderRadius: '14px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#38bdf8', display: 'block' }}>9+</span>
                    <span style={{ fontSize: '0.76rem', color: '#cbd5e1', fontWeight: '600' }}>Years Experience</span>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '14px',
                    borderRadius: '14px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#38bdf8', display: 'block' }}>{doctor.clinicsCount.split(' ')[0]}</span>
                    <span style={{ fontSize: '0.76rem', color: '#cbd5e1', fontWeight: '600' }}>Consulting Clinics</span>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '14px',
                    borderRadius: '14px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#10b981', display: 'block' }}>MDS</span>
                    <span style={{ fontSize: '0.76rem', color: '#cbd5e1', fontWeight: '600' }}>Specialist Degree</span>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '14px',
                    borderRadius: '14px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#10b981', display: 'block' }}>Verified</span>
                    <span style={{ fontSize: '0.76rem', color: '#cbd5e1', fontWeight: '600' }}>State Dental Council</span>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={openAppointment}
                    className="btn btn-primary"
                  >
                    <Calendar size={16} /> Book Consultation
                  </button>
                  <a
                    href={clinicInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageSquare size={16} /> WhatsApp Booking
                  </a>
                  <a
                    href={`tel:${clinicInfo.phones[0].value}`}
                    className="btn btn-outline-white"
                  >
                    <Phone size={16} /> Call Clinic
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Details Sections */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="site-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: '44px',
            alignItems: 'start'
          }} className="doctor-content-grid">
            
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              
              {/* About Specialist */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '22px',
                padding: '36px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{
                  fontSize: '1.45rem',
                  color: 'var(--navy)',
                  fontWeight: '800',
                  marginBottom: '18px',
                  paddingBottom: '12px',
                  borderBottom: '2px solid #e0f2fe'
                }}>
                  About {doctor.name}
                </h3>
                {doctor.aboutLong.map((para, idx) => (
                  <p key={idx} style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: '1.75', marginBottom: '16px' }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Specializations Grid */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '22px',
                padding: '36px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{
                  fontSize: '1.45rem',
                  color: 'var(--navy)',
                  fontWeight: '800',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '2px solid #e0f2fe'
                }}>
                  Areas of Practice &amp; Specializations
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '12px'
                }}>
                  {doctor.specializations.map((spec, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#f0f9ff',
                        borderLeft: '4px solid #0077b6',
                        padding: '14px 16px',
                        borderRadius: '10px',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        color: 'var(--navy)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: '#0077b6', flexShrink: 0 }} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Qualifications */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '22px',
                padding: '36px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{
                  fontSize: '1.45rem',
                  color: 'var(--navy)',
                  fontWeight: '800',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '2px solid #e0f2fe'
                }}>
                  Education &amp; Qualifications
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {doctor.education.map((edu, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      paddingBottom: idx === doctor.education.length - 1 ? 0 : '16px',
                      borderBottom: idx === doctor.education.length - 1 ? 'none' : '1px solid #f1f5f9'
                    }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: '#e0f2fe',
                        color: '#0077b6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                        border: '1px solid rgba(0, 119, 182, 0.2)'
                      }}>
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--navy)' }}>
                          {edu.degree}
                        </div>
                        <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                          {edu.institution} • {edu.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Experience & Memberships */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '22px',
                padding: '36px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{
                  fontSize: '1.45rem',
                  color: 'var(--navy)',
                  fontWeight: '800',
                  marginBottom: '18px',
                  paddingBottom: '12px',
                  borderBottom: '2px solid #e0f2fe'
                }}>
                  Professional Experience &amp; Memberships
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {doctor.memberships.map((mem, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.94rem', color: 'var(--text-body)' }}>
                      <Award size={20} style={{ color: '#0077b6', flexShrink: 0 }} />
                      <span>{mem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Doctor FAQs */}
              {doctor.faqs && doctor.faqs.length > 0 && (
                <div>
                  <h3 style={{ fontSize: '1.45rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '20px' }}>
                    Frequently Asked Questions
                  </h3>
                  <FAQAccordion faqs={doctor.faqs} showSearch={false} />
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <aside style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: '26px' }}>
              {/* Appointment Card */}
              <div style={{
                background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)',
                border: '1.5px solid rgba(0, 119, 182, 0.25)',
                borderRadius: '24px',
                padding: '30px',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '8px' }}>
                  Consult {doctor.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '20px' }}>
                  Schedule your specialist consultation slot at Simply Smilez Dental Clinic, Shaikpet.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <button
                    onClick={openAppointment}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Calendar size={16} /> Book Appointment
                  </button>
                  <a
                    href={clinicInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageSquare size={16} /> WhatsApp Consultation
                  </a>
                  <a
                    href={`tel:${clinicInfo.phones[0].value}`}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Phone size={14} /> Call: {clinicInfo.phones[0].display}
                  </a>
                </div>
              </div>

              {/* Other Specialist Card */}
              {otherDoctor && (
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  padding: '26px',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '16px' }}>
                    Also Meet
                  </h4>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <img
                      src={otherDoctor.image}
                      alt={otherDoctor.name}
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '14px',
                        objectFit: 'cover',
                        flexShrink: 0
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '0.98rem', fontWeight: '800', color: 'var(--navy)' }}>
                        <Link href={`/doctor/${otherDoctor.slug}`} style={{ color: 'inherit' }}>
                          {otherDoctor.name}
                        </Link>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '700' }}>
                        {otherDoctor.speciality}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/doctor/${otherDoctor.slug}`}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      marginTop: '18px',
                      fontSize: '0.86rem',
                      fontWeight: '800',
                      color: 'var(--primary)'
                    }}
                  >
                    View Profile &rarr;
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection onOpenAppointment={openAppointment} />

      <style jsx global>{`
        @media (max-width: 991px) {
          .doctor-hero-grid, .doctor-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
