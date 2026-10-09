'use client';
import Link from 'next/link';
import { 
  X, 
  ChevronRight, 
  Sparkles, 
  Tooth, 
  Layers, 
  Crown, 
  Smile, 
  Scissors, 
  Wand2, 
  Microscope, 
  Activity, 
  Baby, 
  UserCheck 
} from 'lucide-react';

export default function ServicesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const items = [
    { title: 'All Services', desc: 'Browse our complete range of treatments', href: '/all-services', featured: true },
    { title: 'Composite Fillings', desc: 'Tooth-colored resin restorations', href: '/composite-fillings-hyderabad' },
    { title: 'Crowns & Bridges', desc: 'Durable ceramic & zirconia crowns', href: '/crowns' },
    { title: 'Dental Veneers', desc: 'Porcelain veneers for a perfect smile', href: '/dental-veneers-hyderabad' },
    { title: 'Braces & Invisalign', desc: 'Teeth straightening & clear aligners', href: '/braces' },
    { title: 'Laser Teeth Whitening', desc: 'Instant brightening & stain removal', href: '/laserteeth' },
    { title: 'Laser Root Canal Therapy', desc: 'Painless & precision RCT treatment', href: '/laserroot' },
    { title: 'Laser Gum Surgery', desc: 'Minimally invasive periodontal care', href: '/lasergum' },
    { title: 'Dental Implants', desc: 'Permanent natural tooth replacement', href: '/dentalimplant' },
    { title: 'Pediatric Dentistry', desc: 'Gentle dental care for kids', href: '/pediatary' },
    { title: 'Wisdom Tooth Extractions', desc: 'Safe & comfortable tooth removal', href: '/wisdom' }
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(11, 37, 69, 0.7)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      animation: 'fadeIn 0.2s ease-out'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: '#ffffff',
        width: '100%',
        maxWidth: '540px',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          padding: '18px 22px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0b2545 0%, #134074 100%)',
          color: '#ffffff'
        }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: '700', marginBottom: '2px' }}>
              Our Dental Services
            </h3>
            <p style={{ fontSize: '0.82rem', color: '#cbd5e1', margin: 0 }}>
              Select a service to view complete details & procedures
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Services List */}
        <div style={{
          padding: '16px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: item.featured ? '14px 16px' : '12px 14px',
                borderRadius: '12px',
                backgroundColor: item.featured ? '#e0f2fe' : '#f8fafc',
                border: item.featured ? '1.5px solid #38bdf8' : '1px solid var(--border-subtle)',
                textDecoration: 'none',
                transition: 'all 0.15s ease'
              }}
            >
              <div>
                <div style={{
                  fontSize: '0.94rem',
                  fontWeight: item.featured ? '700' : '600',
                  color: item.featured ? '#0284c7' : 'var(--navy)'
                }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {item.desc}
                </div>
              </div>
              <ChevronRight size={18} style={{ color: item.featured ? '#0284c7' : '#94a3b8' }} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
