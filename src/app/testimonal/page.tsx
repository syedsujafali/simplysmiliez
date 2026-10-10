'use client';
import Link from 'next/link';
import { useUI } from '@/components/LayoutWrapper';
import TestimonialSlider from '@/components/TestimonialSlider';
import CTASection from '@/components/CTASection';
import { Star, MessageSquare, CheckCircle2, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function TestimonialsPage() {
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
            <span style={{ color: '#ffffff' }}>Testimonials</span>
          </div>

          <span className="badge-pill badge-glow-dark" style={{ marginBottom: '16px' }}>
            <Star size={13} fill="#f59e0b" color="#f59e0b" /> 4.9★ Google Rated Patient Care
          </span>

          <h1 style={{
            fontSize: '3.1rem',
            color: '#ffffff',
            fontWeight: '900',
            marginBottom: '16px',
            lineHeight: '1.15'
          }}>
            Patient Reviews &amp; Testimonials
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#cbd5e1',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.65'
          }}>
            Read genuine patient testimonials for Simply Smilez Dental Clinic in Shaikpet, Hyderabad, and learn about our gentle, quality dental care experiences.
          </p>
        </div>
      </section>

      {/* Testimonials List */}
      <section style={{
        padding: '95px 0',
        background: 'linear-gradient(180deg, #ecfdf5 0%, #f0fdf4 40%, #f8fafc 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient mint glow */}
        <div style={{
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="section-tag badge-mint">
              <Sparkles size={14} /> Verified Feedback
            </span>
            <h2 className="section-title">Stories from Our Happy Patients</h2>
            <p className="section-desc">
              Discover why families across Shaikpet, Manikonda, and Gachibowli trust Simply Smilez Dental Clinic.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection onOpenAppointment={openAppointment} />
    </>
  );
}
