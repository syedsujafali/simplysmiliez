'use client';
import Link from 'next/link';
import { useUI } from '@/components/LayoutWrapper';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { 
  Sparkles, 
  Calendar, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ChevronRight, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  Award
} from 'lucide-react';

export default function ServiceDetailClient({ service, otherServices, clinicInfo }) {
  const { openAppointment } = useUI();
  const isSpecialOffer = service.slug === 'dentalimplant' || service.slug === 'braces';
  const isLaser = service.slug.includes('laser');

  return (
    <>
      {/* Header Banner */}
      <section style={{
        padding: '60px 0 50px 0',
        position: 'relative'
      }} className="bg-mesh-dark">
        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontSize: '0.84rem',
            color: '#94a3b8',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <Link href="/" style={{ color: '#38bdf8', fontWeight: '600' }}>Home</Link>
            <span>&gt;</span>
            <Link href="/all-services" style={{ color: '#38bdf8', fontWeight: '600' }}>Services</Link>
            <span>&gt;</span>
            <span style={{ color: '#ffffff' }}>{service.title}</span>
          </div>

          <div style={{ maxWidth: '880px' }}>
            {isSpecialOffer ? (
              <span className="badge-pill" style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#ffffff',
                marginBottom: '16px',
                fontWeight: '800'
              }}>
                <Sparkles size={13} /> 30% Discount Available on this Treatment
              </span>
            ) : isLaser ? (
              <span className="badge-pill badge-mint" style={{ marginBottom: '16px' }}>
                <Zap size={13} /> Painless Diode Laser Technology
              </span>
            ) : (
              <span className="badge-pill badge-glow-dark" style={{ marginBottom: '16px' }}>
                <ShieldCheck size={13} /> Senior MDS Specialist Treatment
              </span>
            )}

            <h1 style={{
              fontSize: '2.8rem',
              color: '#ffffff',
              fontWeight: '900',
              lineHeight: '1.18',
              marginBottom: '16px'
            }}>
              {service.heroHeading || service.title}
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: '#cbd5e1',
              lineHeight: '1.65',
              margin: 0
            }}>
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section style={{
        padding: '85px 0',
        background: 'linear-gradient(180deg, #f8fbfe 0%, #ffffff 100%)',
        position: 'relative'
      }}>
        <div className="site-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: '44px',
            alignItems: 'start'
          }} className="service-detail-grid">
            
            {/* Left Content Column */}
            <div>
              {/* Featured Image */}
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '44px',
                maxHeight: '440px'
              }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '440px',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Dynamic Content Sections */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                {service.sections && service.sections.map((sec, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '22px',
                      padding: '34px',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.38rem',
                      color: 'var(--navy)',
                      fontWeight: '800',
                      marginBottom: '18px',
                      paddingBottom: '12px',
                      borderBottom: '2px solid #e0f2fe',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <CheckCircle2 size={22} style={{ color: '#0077b6', flexShrink: 0 }} />
                      <span>{sec.heading}</span>
                    </h3>

                    {/* Paragraphs */}
                    {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        style={{
                          fontSize: '0.95rem',
                          color: 'var(--text-body)',
                          lineHeight: '1.75',
                          marginBottom: pIdx === sec.paragraphs.length - 1 && (!sec.items || sec.items.length === 0) ? 0 : '16px'
                        }}
                      >
                        {p}
                      </p>
                    ))}

                    {/* Bullet List Items */}
                    {sec.items && sec.items.length > 0 && (
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '14px 0 0 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                      }}>
                        {sec.items.map((it, iIdx) => (
                          <li
                            key={iIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              fontSize: '0.94rem',
                              color: 'var(--text-body)',
                              lineHeight: '1.6'
                            }}
                          >
                            <ChevronRight size={17} style={{ color: '#0077b6', flexShrink: 0, marginTop: '3px' }} />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Service FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div style={{ marginTop: '60px' }}>
                  <div style={{ marginBottom: '26px' }}>
                    <span className="badge-pill badge-primary" style={{ marginBottom: '10px' }}>
                      Got Questions?
                    </span>
                    <h2 style={{ fontSize: '2rem', color: 'var(--navy)', fontWeight: '800' }}>
                      Frequently Asked Questions About {service.title}
                    </h2>
                  </div>

                  <FAQAccordion faqs={service.faqs} showSearch={false} />
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
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#e0f2fe',
                  color: '#0077b6',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}>
                  <Calendar size={13} /> Quick Booking
                </div>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '8px' }}>
                  Book {service.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '20px' }}>
                  Schedule a personalized evaluation with our senior dental specialists today.
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
                    <MessageSquare size={16} /> WhatsApp Booking
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

              {/* Other Services List */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                borderRadius: '24px',
                padding: '26px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  color: 'var(--navy)',
                  fontWeight: '800',
                  marginBottom: '16px',
                  paddingBottom: '10px',
                  borderBottom: '1.5px solid #f1f5f9'
                }}>
                  Other Dental Services
                </h4>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {otherServices.slice(0, 8).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${s.slug}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          fontSize: '0.88rem',
                          color: 'var(--text-body)',
                          fontWeight: '700',
                          textDecoration: 'none',
                          backgroundColor: '#f8fafc',
                          transition: 'all 0.18s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#e0f2fe';
                          e.currentTarget.style.color = '#0077b6';
                          e.currentTarget.style.transform = 'translateX(3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#f8fafc';
                          e.currentTarget.style.color = 'var(--text-body)';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <span>{s.title}</span>
                        <ChevronRight size={15} style={{ color: '#0077b6' }} />
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/all-services"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    marginTop: '18px',
                    fontSize: '0.86rem',
                    fontWeight: '800',
                    color: 'var(--primary)'
                  }}
                >
                  View All Services Directory &rarr;
                </Link>
              </div>

              {/* Clinic Timings Widget */}
              <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '20px',
                padding: '22px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                fontSize: '0.86rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', color: 'var(--navy)', marginBottom: '8px' }}>
                  <Clock size={16} style={{ color: '#0077b6' }} /> Clinic Working Hours
                </div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '4px' }}>
                  {clinicInfo.hours.weekdays}
                </div>
                <div style={{ color: 'var(--text-muted)' }}>
                  {clinicInfo.hours.sunday}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection onOpenAppointment={openAppointment} />

      <style jsx global>{`
        @media (max-width: 991px) {
          .service-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
