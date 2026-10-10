'use client';
import Link from 'next/link';
import { useUI } from '@/components/LayoutWrapper';
import GalleryViewer from '@/components/GalleryViewer';
import CTASection from '@/components/CTASection';
import { Sparkles, Camera, Image as ImageIcon } from 'lucide-react';

export default function GalleryPage() {
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
            <span style={{ color: '#ffffff' }}>Gallery</span>
          </div>

          <span className="badge-pill badge-glow-dark" style={{ marginBottom: '16px' }}>
            <Camera size={13} /> Visual Tour & Smile Transformations
          </span>

          <h1 style={{
            fontSize: '3.1rem',
            color: '#ffffff',
            fontWeight: '900',
            marginBottom: '16px',
            lineHeight: '1.15'
          }}>
            Our Clinic &amp; Treatment Gallery
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#cbd5e1',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.65'
          }}>
            Take a visual tour inside Simply Smilez Dental Clinic in Shaikpet, Hyderabad, and explore our sterile operatory suites, patient care facilities, and real smile transformations.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '95px 0', background: 'linear-gradient(180deg, #f8fafc 0%, #f0f7ff 100%)', position: 'relative' }}>
        <div className="site-container">
          <GalleryViewer />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection onOpenAppointment={openAppointment} />
    </>
  );
}
