'use client';
import Link from 'next/link';
import { doctorsData } from '@/data/doctorsData';
import { useUI } from '@/components/LayoutWrapper';
import DoctorCard from '@/components/DoctorCard';
import CTASection from '@/components/CTASection';
import { Sparkles, Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function DoctorsPage() {
  const { openAppointment } = useUI();

  return (
    <>
      {/* Header Banner */}
      <section style={{
        padding: '70px 0 60px 0',
        textAlign: 'center',
        position: 'relative'
      }} className="bg-mesh-dark">
        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontSize: '0.84rem',
            color: '#94a3b8',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <Link href="/" style={{ color: '#38bdf8', fontWeight: '600' }}>Home</Link>
            <span>&gt;</span>
            <span style={{ color: '#ffffff' }}>Doctors</span>
          </div>

          <span className="badge-pill badge-glow-dark" style={{ marginBottom: '16px' }}>
            <Sparkles size={13} /> Senior MDS Dentists • Specialists in Hyderabad
          </span>

          <h1 style={{
            fontSize: '3.1rem',
            color: '#ffffff',
            fontWeight: '900',
            marginBottom: '16px',
            lineHeight: '1.15'
          }}>
            Meet Our Specialist Doctors
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#cbd5e1',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.65'
          }}>
            Experienced, verified dental surgeons and orthodontists providing world-class, painless clinical care in Shaikpet, Hyderabad.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section style={{
        padding: '95px 0',
        background: 'linear-gradient(180deg, #f0f7ff 0%, #f8fafc 100%)',
        position: 'relative'
      }}>
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag badge-primary">
              <Sparkles size={14} /> Clinical Leadership
            </span>
            <h2 className="section-title">Senior Orthodontists &amp; Pediatric Specialists</h2>
            <p className="section-desc">
              Dedicated to compassionate, pain-free dental health for toddlers, children, teens, and adults in Shaikpet, Hyderabad.
            </p>
          </div>

          <div className="doctor-redesign-grid" style={{ marginBottom: '50px' }}>
            {doctorsData.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} onOpenAppointment={openAppointment} />
            ))}
          </div>

          {/* Clinical Assurance Strip */}
          <div
            style={{
              maxWidth: '1080px',
              margin: '0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '26px 34px',
              border: '1px solid rgba(2, 132, 199, 0.2)',
              boxShadow: '0 8px 24px -6px rgba(2, 132, 199, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 500px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <ShieldCheck size={24} style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <div style={{ fontWeight: '800', color: 'var(--navy)', fontSize: '1rem' }}>
                  Direct Senior MDS Specialist Care Guarantee
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '2px' }}>
                  Every diagnosis, Invisalign check, root canal, and implant procedure is personally performed by Dr. Ankush Kumar &amp; Dr. Susheel Kumar.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <CTASection onOpenAppointment={openAppointment} />
    </>
  );
}
