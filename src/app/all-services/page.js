'use client';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { useUI } from '@/components/LayoutWrapper';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { 
  Sparkles, 
  Calendar, 
  ChevronRight, 
  Stethoscope, 
  Baby, 
  Smile, 
  Crown, 
  Microscope, 
  Activity, 
  HeartHandshake, 
  ShieldCheck, 
  Layers,
  ArrowRight,
  Zap
} from 'lucide-react';

export default function AllServicesPage() {
  const { openAppointment } = useUI();

  const directories = [
    {
      category: "General Dentistry",
      icon: <Stethoscope size={22} />,
      items: [
        "Dental Consultation",
        "Comprehensive Dental Exam",
        "Digital Dental X-Ray",
        "Preventive Dentistry",
        "Tooth-Colored Fillings",
        "Composite Dental Fillings",
        "Dental Bonding",
        "Toothache Treatment",
        "Sensitive Teeth Treatment",
        "Emergency Dental Care",
        "Preventive Dental Care"
      ]
    },
    {
      category: "Invisalign & Clear Aligners",
      icon: <Sparkles size={22} />,
      featured: true,
      badge: "30% Discount",
      items: [
        "Invisalign Treatment",
        "Invisalign Consultation",
        "Invisalign First for Kids",
        "Invisalign Teen",
        "Invisalign for Children",
        "Clear Aligners",
        "Adult Clear Aligners",
        "Teen Clear Aligners",
        "Pediatric Clear Aligners",
        "Invisalign Orthodontics",
        "Digital Orthodontic Exam",
        "Digital Smile Assessment",
        "Invisalign Treatment Plan",
        "Invisalign Retainers & Vivera",
        "Invisalign Go & Go Plus"
      ]
    },
    {
      category: "Pediatric Dentistry",
      icon: <Baby size={22} />,
      items: [
        "Pediatric Dental Care",
        "Children's Dentistry",
        "Kids Dental Checkup",
        "Pediatric Consultation",
        "Preventive Pediatric Care",
        "Kids Fluoride Treatment",
        "Dental Sealants for Kids",
        "Children's Dental Fillings",
        "Pediatric Root Canal (Pulpectomy)",
        "Stainless Steel Crowns",
        "Pediatric Zirconia Crowns",
        "Space Maintainers",
        "Early Orthodontic Evaluation",
        "Interceptive Orthodontics",
        "Phase 1 Orthodontics"
      ]
    },
    {
      category: "Braces & Orthodontics",
      icon: <Layers size={22} />,
      items: [
        "Orthodontic Consultation",
        "Traditional Metal Braces",
        "Ceramic Braces",
        "Self-Ligating Braces",
        "Early Orthodontic Care",
        "Teen Orthodontic Treatment",
        "Adult Orthodontic Care",
        "Class II Malocclusion",
        "Teeth Alignment & Straightening",
        "Teeth Crowding Correction",
        "Teeth Spacing Correction",
        "Orthodontic Retainers",
        "Fixed & Removable Retainers"
      ]
    },
    {
      category: "Root Canal & Endodontics",
      icon: <Microscope size={22} />,
      items: [
        "Root Canal Treatment",
        "Laser Root Canal Therapy",
        "Single Sitting Root Canal",
        "Root Canal Consultation",
        "Infected Tooth Treatment",
        "Tooth Nerve Treatment",
        "Dental Abscess Treatment",
        "Root Canal Aftercare",
        "Post-RCT Dental Crown"
      ]
    },
    {
      category: "Restorative & Cosmetic Dentistry",
      icon: <Smile size={22} />,
      items: [
        "Dental Veneers",
        "Porcelain Veneers",
        "Composite Veneers",
        "Cosmetic Smile Makeover",
        "Dental Crowns",
        "Ceramic Crowns",
        "Zirconia Dental Crowns",
        "Dental Bridges",
        "Tooth Restoration",
        "Aesthetic Fillings"
      ]
    },
    {
      category: "Hygiene & Gum Care (Periodontics)",
      icon: <Activity size={22} />,
      items: [
        "Dental Cleaning & Scaling",
        "Dental Polishing",
        "Gum Disease Treatment",
        "Periodontal Care",
        "Laser Gum Treatment",
        "Laser Gum Surgery",
        "Gingivitis Treatment",
        "Periodontitis Care",
        "Bleeding Gums Treatment",
        "Laser Depigmentation"
      ]
    },
    {
      category: "Oral Surgery & Tooth Extraction",
      icon: <ShieldCheck size={22} />,
      items: [
        "Wisdom Tooth Extraction",
        "Impacted Wisdom Tooth Removal",
        "Surgical Tooth Extraction",
        "Simple Tooth Extraction",
        "Emergency Extraction",
        "Tooth Removal Consultation",
        "Post-Extraction Care"
      ]
    },
    {
      category: "Teeth Whitening",
      icon: <Zap size={22} />,
      items: [
        "Laser Teeth Whitening",
        "Professional Teeth Whitening",
        "In-Clinic Teeth Whitening",
        "Dental Bleaching",
        "Stain Removal Treatment",
        "Cosmetic Teeth Brightening"
      ]
    },
    {
      category: "Advanced Dentistry & Implants",
      icon: <Crown size={22} />,
      featured: true,
      badge: "30% Discount",
      items: [
        "Dental Implants",
        "Single Tooth Implant",
        "Multiple Teeth Implants",
        "Full Mouth Dental Implants",
        "Implant Consultation & Assessment",
        "Implant Supported Crowns",
        "Laser Assisted Dentistry"
      ]
    }
  ];

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
            <span style={{ color: '#ffffff' }}>Services</span>
          </div>

          <span className="badge-pill badge-glow-dark" style={{ marginBottom: '16px' }}>
            <Sparkles size={13} /> Complete Clinical Treatments & Specialities
          </span>

          <h1 style={{
            fontSize: '3.1rem',
            color: '#ffffff',
            fontWeight: '900',
            marginBottom: '16px',
            lineHeight: '1.15'
          }}>
            Dental Services in Hyderabad
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#cbd5e1',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.65'
          }}>
            Explore comprehensive dental services at Simply Smilez Dental Clinic, including Invisalign, 
            pediatric dentistry, braces, root canals, whitening, dental implants and more.
          </p>
        </div>
      </section>

      {/* 10 Core Services Grid */}
      <section style={{ padding: '95px 0', background: 'linear-gradient(180deg, #f0f7ff 0%, #e6f2fe 100%)', position: 'relative' }}>
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag badge-primary">Primary Specialities</span>
            <h2 className="section-title">Explore Our 10 Core Dental Services</h2>
            <p className="section-desc">
              At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, we combine advanced dental technology 
              with compassionate care to protect, restore, and enhance your smile.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '26px'
          }}>
            {servicesData.map((service, idx) => (
              <ServiceCard key={service.slug} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Treatment Directory (10 Comprehensive Categories) */}
      <section style={{
        padding: '95px 0',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative'
      }}>
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag badge-cyan">Full Treatment Index</span>
            <h2 className="section-title">Specialized Treatments &amp; Services Directory</h2>
            <p className="section-desc">
              A comprehensive overview of all dental procedures, specialized consultations, and treatments available at Simply Smilez Dental Clinic.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {directories.map((dir, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '22px',
                  padding: '30px',
                  boxShadow: 'var(--shadow-md)',
                  border: dir.featured ? '2px solid #0077b6' : '1px solid rgba(226, 232, 240, 0.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {dir.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    color: '#ffffff',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: '800'
                  }}>
                    {dir.badge}
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  paddingBottom: '16px',
                  marginBottom: '16px',
                  borderBottom: '1.5px solid #f1f5f9'
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: dir.featured ? '#e0f2fe' : '#f0f9ff',
                    color: '#0077b6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(0, 119, 182, 0.2)'
                  }}>
                    {dir.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', fontWeight: '800', margin: 0 }}>
                    {dir.category}
                  </h3>
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontSize: '0.9rem',
                  color: 'var(--text-body)'
                }}>
                  {dir.items.map((it, iIdx) => (
                    <li key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ChevronRight size={15} style={{ color: '#0077b6', flexShrink: 0 }} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <CTASection onOpenAppointment={openAppointment} />
    </>
  );
}
