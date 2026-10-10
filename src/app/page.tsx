'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { clinicInfo } from '@/data/clinicData';
import { servicesData } from '@/data/servicesData';
import { doctorsData } from '@/data/doctorsData';
import { mainFaqs } from '@/data/faqsData';
import { useUI } from '@/components/LayoutWrapper';
import ServiceCard from '@/components/ServiceCard';
import MobileServicesSlider from '@/components/MobileServicesSlider';
import DoctorCard from '@/components/DoctorCard';
import GalleryViewer from '@/components/GalleryViewer';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import {
  Calendar,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Activity,
  Microscope,
  HeartHandshake,
  Star,
  Zap,
  Clock,
  Check
} from 'lucide-react';

export default function HomePage() {
  const { openAppointment } = useUI();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      id: 1,
      image: '/images/banner1.jpeg',
      badge: 'Shaikpet, Hyderabad • Premier Dental & Implant Clinic',
      titleLine1: 'Helping You Stay',
      titleHighlight: 'Happy & Smiling',
      subheading: 'Everyday we bring hope and smiles to the patients we serve. Comprehensive, painless, and affordable dental care in Shaikpet with verified senior MDS specialists.',
      showWhatsApp: true,
      tagBadge: '30% Off Invisalign & Implants',
      stat1Number: '9+ Yrs',
      stat1Label: 'Clinical Excellence',
      stat2Number: '2 Senior',
      stat2Label: 'MDS Specialists',
      reviewRating: '4.9/5 (350+ Google Reviews)',
      featureText: '100% Sterile & Pain-Free'
    },
    {
      id: 2,
      image: '/images/banner2.jpeg',
      badge: 'Expert Orthodontics & Dental Implants',
      titleLine1: 'Smile Makes A',
      titleHighlight: 'Lasting Impression',
      subheading: 'Your health is our top priority with comprehensive, affordable dental care. Experience precision digital smile design, painless single-sitting root canals, and invisible aligners.',
      secondaryLink: '#services-section',
      secondaryLinkText: 'Explore Specialities',
      tagBadge: 'Single-Sitting Laser RCT',
      stat1Number: '10+',
      stat1Label: 'Specialized Treatments',
      stat2Number: '100%',
      stat2Label: 'Painless Laser Tech',
      reviewRating: 'Top Rated in Hyderabad',
      featureText: 'Zero-Wait Scheduling'
    }
  ];

  // Top 6 Featured Services in exact order requested (Braces, Laser RCT, Pediatric first)
  const featuredServiceSlugs = [
    'braces',
    'laserroot',
    'pediatary',
    'dentalimplant',
    'dental-veneers-hyderabad',
    'laserteeth'
  ];
  const featuredServices = featuredServiceSlugs
    .map((slug) => servicesData.find((s) => s.slug === slug))
    .filter(Boolean);

  // Auto-advance hero slider
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO SECTION: FULL-WIDTH EDGE-TO-EDGE IMAGE SLIDER */}
      {/* ========================================================= */}
      <section
        className="animate-hero-container"
        style={{
          width: '100%',
          maxWidth: '100%',
          margin: '0 0 36px 0',
          padding: '0',
          boxSizing: 'border-box',
          position: 'relative'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="hero-slider-main-box">
          {/* Background Slide Images with Crossfade */}
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: isActive ? 1 : 0,
                  visibility: isActive ? 'visible' : 'hidden',
                  transform: isActive ? 'scale(1)' : 'scale(1.04)',
                  transition: 'opacity 0.8s ease-in-out, transform 1.2s ease-out',
                  zIndex: isActive ? 1 : 0
                }}
              >
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.titleLine1 + ' ' + slide.titleHighlight}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                {/* Dark Luxury Gradient Overlay - Darker on the right for right-aligned text contrast */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(8, 18, 38, 0.25) 0%, rgba(8, 18, 38, 0.6) 38%, rgba(8, 18, 38, 0.92) 75%, rgba(8, 18, 38, 0.97) 100%)'
                }} />
                {/* Subtle Radial Mesh Glow */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 80% 30%, rgba(2, 132, 199, 0.25) 0%, transparent 60%)',
                  pointerEvents: 'none'
                }} />
              </div>
            );
          })}

          {/* Active Slide Content - Positioned on Right-Hand Side */}
          <div className="hero-slider-content-wrap">
            <div style={{
              maxWidth: '780px',
              width: '100%',
              marginLeft: 'auto'
            }}>
              {/* Live Location / Speciality Badge */}
              <div
                className="animate-hero-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(0, 180, 216, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  padding: '5px 14px',
                  borderRadius: '9999px',
                  color: '#38bdf8',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '16px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <span className="beacon-dot" />
                <span>{heroSlides[currentSlide].badge}</span>
              </div>

              {/* Main Heading */}
              <h1 style={{
                fontSize: '3.3rem',
                color: '#ffffff',
                fontWeight: '900',
                lineHeight: '1.14',
                marginBottom: '18px',
                letterSpacing: '-0.025em'
              }} className="hero-title animate-hero-title">
                {heroSlides[currentSlide].titleLine1}{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #00b4d8 50%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {heroSlides[currentSlide].titleHighlight}
                </span>
              </h1>

              {/* Subheading */}
              <p
                className="animate-hero-desc"
                style={{
                  fontSize: '1.14rem',
                  color: '#cbd5e1',
                  lineHeight: '1.65',
                  marginBottom: '28px',
                  maxWidth: '680px'
                }}
              >
                {heroSlides[currentSlide].subheading}
              </p>

              {/* Action Buttons */}
              <div
                className="animate-hero-actions"
                style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '28px' }}
              >
                <button
                  onClick={openAppointment}
                  className="btn btn-primary btn-lg"
                  style={{
                    boxShadow: '0 8px 25px rgba(2, 132, 199, 0.45)',
                    fontSize: '1rem',
                    padding: '12px 28px'
                  }}
                >
                  <Calendar size={18} /> Book Appointment
                </button>

                {heroSlides[currentSlide].showWhatsApp && (
                  <a
                    href={clinicInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                    style={{ fontSize: '1rem', padding: '12px 26px' }}
                  >
                    <MessageSquare size={18} /> WhatsApp Direct
                  </a>
                )}

                {heroSlides[currentSlide].secondaryLink && (
                  <a
                    href={heroSlides[currentSlide].secondaryLink}
                    className="btn btn-secondary btn-lg"
                    style={{ fontSize: '1rem', padding: '12px 26px' }}
                  >
                    {heroSlides[currentSlide].secondaryLinkText} <ArrowRight size={18} />
                  </a>
                )}

                {(heroSlides[currentSlide] as any).phoneCall && (
                  <a
                    href={`tel:${(heroSlides[currentSlide] as any).phoneCall}`}
                    className="btn btn-secondary btn-lg"
                    style={{ fontSize: '1rem', padding: '12px 26px' }}
                  >
                    <Phone size={18} /> {(heroSlides[currentSlide] as any).phoneDisplay}
                  </a>
                )}
              </div>

              {/* Trust Metrics Bar */}
              <div
                className="animate-hero-trust"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                {/* Google Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ display: 'flex', color: '#f59e0b' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" />
                    ))}
                  </div>
                  <div style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: '700' }}>
                    {heroSlides[currentSlide].reviewRating}
                  </div>
                </div>

                <div style={{ height: '18px', width: '1px', backgroundColor: 'rgba(255,255,255,0.25)' }} />

                <div style={{ color: '#38bdf8', fontSize: '0.88rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={17} /> {heroSlides[currentSlide].featureText}
                </div>
              </div>
            </div>
          </div>

          {/* Slider Navigation: Prev/Next and Dots */}
          <div
            className="animate-hero-nav"
            style={{
              position: 'absolute',
              bottom: '22px',
              right: '48px',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            {/* Prev Arrow Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.65)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {heroSlides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentSlide(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  style={{
                    width: dotIdx === currentSlide ? '28px' : '9px',
                    height: '9px',
                    borderRadius: '9999px',
                    backgroundColor: dotIdx === currentSlide ? '#38bdf8' : 'rgba(255, 255, 255, 0.35)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0
                  }}
                />
              ))}
            </div>

            {/* Next Arrow Button */}
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.65)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. WELCOME & ABOUT SECTION (PORCELAIN AMBIENT BACKDROP) */}
      {/* ========================================================= */}
      <section style={{
        padding: '100px 0 90px 0',
        background: 'linear-gradient(180deg, #f8fbfe 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background ambient accents */}
        <div style={{
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
            gap: '56px',
            alignItems: 'center'
          }} className="about-grid-responsive">

            {/* Left Detailed Copy & Clinical Pillars */}
            <div>
              {/* Eyebrow badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(0, 119, 182, 0.08)',
                border: '1px solid rgba(0, 119, 182, 0.22)',
                padding: '6px 16px',
                borderRadius: '9999px',
                color: '#0077b6',
                fontSize: '0.82rem',
                fontWeight: '800',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                <Sparkles size={15} style={{ color: '#0077b6' }} />
                <span>Welcome to Simply Smilez Dental Clinic</span>
              </div>

              {/* Main Heading */}
              <h2 style={{
                fontSize: '2.6rem',
                color: 'var(--navy)',
                fontWeight: '900',
                lineHeight: '1.18',
                marginBottom: '14px',
                letterSpacing: '-0.02em'
              }}>
                Dental Clinic in <span style={{ color: 'var(--primary)' }}>Shaikpet, Hyderabad</span>
              </h2>

              <h3 style={{
                fontSize: '1.2rem',
                color: '#0284c7',
                fontWeight: '700',
                marginBottom: '20px',
                lineHeight: '1.4'
              }}>
                Quality Dental Care for Children & Adults • Led by Senior MDS Specialists
              </h3>

              {/* Clinic Paragraphs */}
              <p style={{
                fontSize: '1rem',
                color: 'var(--navy)',
                fontWeight: '600',
                lineHeight: '1.7',
                marginBottom: '14px'
              }}>
                {clinicInfo.welcomeText.p1}
              </p>

              <p style={{
                fontSize: '0.94rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                marginBottom: '24px'
              }}>
                {clinicInfo.welcomeText.p2} Looking for a trusted dental clinic in Shaikpet, Hyderabad? Simply Smilez Dental Clinic provides comprehensive dental care with personalized treatments designed to support your oral health and give you a confident smile.
              </p>

              {/* 4 Feature Cards */}
              <div className="about-features-2col">
                <div style={{
                  padding: '16px 18px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: '#e0f2fe',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Award size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy)', fontSize: '0.92rem', display: 'block', marginBottom: '2px' }}>
                      Senior MDS Specialists
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4', display: 'block' }}>
                      Orthodontics & Pediatric dentistry experts
                    </span>
                  </div>
                </div>

                <div style={{
                  padding: '16px 18px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: '#ecfdf5',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy)', fontSize: '0.92rem', display: 'block', marginBottom: '2px' }}>
                      Laser & Digital Tech
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4', display: 'block' }}>
                      Single-sitting RCTs & painless dentistry
                    </span>
                  </div>
                </div>

                <div style={{
                  padding: '16px 18px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: '#fef3c7',
                    color: '#d97706',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy)', fontSize: '0.92rem', display: 'block', marginBottom: '2px' }}>
                      100% Sterile Protocol
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4', display: 'block' }}>
                      Hospital-grade autoclave disinfection
                    </span>
                  </div>
                </div>

                <div style={{
                  padding: '16px 18px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: '#fae8ff',
                    color: '#a855f7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Users size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy)', fontSize: '0.92rem', display: 'block', marginBottom: '2px' }}>
                      Family & Kids Friendly
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4', display: 'block' }}>
                      Comfortable, anxiety-free atmosphere
                    </span>
                  </div>
                </div>
              </div>

              {/* Local Area Anchor Pill Strip */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '28px',
                padding: '10px 16px',
                backgroundColor: '#f1f5f9',
                borderRadius: '12px',
                fontSize: '0.84rem',
                color: 'var(--navy)'
              }}>
                <MapPin size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span style={{ fontWeight: '700' }}>Serving:</span>
                <span>Shaikpet • Manikonda • Kondapur • Jubilee Hills • Gachibowli</span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={openAppointment}
                  className="btn btn-primary btn-md"
                  style={{ boxShadow: '0 6px 20px rgba(2, 132, 199, 0.35)' }}
                >
                  <Calendar size={17} /> Book Appointment
                </button>
                <a
                  href={clinicInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-md"
                >
                  <MessageSquare size={17} /> WhatsApp Direct
                </a>
                <Link
                  href="/about"
                  className="btn btn-secondary btn-md"
                >
                  More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Image Showcase Card (Position Changed to Right) */}
            <div style={{ position: 'relative' }}>
              {/* Outer Decorative Glow Container */}
              <div className="about-image-card">
                <div style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  position: 'relative'
                }}>
                  <img
                    src="/images/bg_3.webp"
                    alt="Happy Patient at Simply Smilez Dental Clinic Shaikpet"
                    style={{
                      transition: 'transform 0.6s ease'
                    }}
                  />
                  {/* Subtle Gradient Shade at bottom of image */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 60%, rgba(15, 23, 42, 0.75) 100%)'
                  }} />

                  {/* Doctor / Specialist Overlay Title at image bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: '18px',
                    left: '20px',
                    right: '20px',
                    zIndex: 5,
                    color: '#ffffff'
                  }}>
                    <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Simply Smilez Dental Clinic
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '800' }}>
                      Compassionate & Painless Treatment Experience
                    </div>
                  </div>
                </div>

                {/* Floating Rating Pill */}
                <div className="about-floating-pill">
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: '#fef3c7',
                    color: '#f59e0b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Star size={20} fill="#f59e0b" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: '800', color: 'var(--navy)' }}>
                      4.9 / 5.0 Rating
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                      350+ Google Reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CLINIC SERVICES SHOWCASE (TOP 6 TREATMENTS: 2 ROWS X 3 COLS) */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '100px 0 95px 0',
          background: 'linear-gradient(180deg, #f0f7ff 0%, #e6f2fe 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
        id="services-section"
      >
        {/* Subtle ambient lighting accent */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 54px auto' }}>
            <span className="badge-pill badge-primary" style={{ marginBottom: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} /> Premier Dental Specialities
            </span>
            <h2 style={{
              fontSize: '2.6rem',
              color: 'var(--navy)',
              fontWeight: '900',
              lineHeight: '1.2',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              Specialized Dental Treatments in <span style={{ color: 'var(--primary)' }}>Shaikpet, Hyderabad</span>
            </h2>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1.06rem',
              lineHeight: '1.65',
              margin: '0 auto'
            }}>
              Experience painless, modern dental solutions powered by digital smile design, hospital-grade sterilization, and verified senior MDS specialists.
            </p>
          </div>

          {/* Grid of 6 Featured Services: Exactly 2 Rows and 3 Columns (Desktop & Tablet) */}
          <div className="services-2x3-grid" style={{ marginBottom: '50px' }}>
            {featuredServices.map((service, idx) => (
              <ServiceCard key={service.slug} service={service} index={idx} />
            ))}
          </div>

          {/* Mobile Only: Touch-Friendly Featured Services Carousel Slider */}
          <div style={{ marginBottom: '40px' }}>
            <MobileServicesSlider services={featuredServices} />
          </div>

          {/* Bottom Action Button */}
          <div style={{ textAlign: 'center', marginTop: '12px' }}>
            <Link
              href="/all-services"
              className="btn btn-primary btn-lg"
              style={{
                padding: '16px 36px',
                boxShadow: '0 8px 25px rgba(2, 132, 199, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Explore All Dental Services & Specialities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. WHY CHOOSE SIMPLY SMILEZ (SLATE PEARL BACKDROP) */}
      {/* ========================================================= */}
      <section style={{
        padding: '100px 0 95px 0',
        background: 'linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background ambient mesh */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-120px',
          left: '-120px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Header */}
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px auto' }}>
            <span className="badge-pill badge-primary" style={{ marginBottom: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} /> Clinical Superiority &amp; Trust
            </span>
            <h2 style={{
              fontSize: '2.6rem',
              color: 'var(--navy)',
              fontWeight: '900',
              lineHeight: '1.2',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              Why Choose <span style={{ color: 'var(--primary)' }}>Simply Smilez Dental Clinic?</span>
            </h2>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1.08rem',
              lineHeight: '1.65',
              margin: '0 auto'
            }}>
              Discover why hundreds of families across Shaikpet, Manikonda, and Hyderabad trust us for gentle, pain-free, and comprehensive dental excellence.
            </p>
          </div>

          {/* Asymmetric Redesigned Layout */}
          <div className="why-choose-layout">

            {/* Left Spotlight Trust Anchor Card */}
            <div style={{
              background: 'linear-gradient(150deg, #091322 0%, #0d2342 55%, #081528 100%)',
              borderRadius: '26px',
              padding: '38px 34px',
              color: '#ffffff',
              boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.28)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative background orb */}
              <div style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(2, 132, 199, 0.3) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />

              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  padding: '5px 14px',
                  borderRadius: '9999px',
                  color: '#38bdf8',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '20px'
                }}>
                  <Sparkles size={13} />
                  <span>The Simply Smilez Standard</span>
                </div>

                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: '900',
                  lineHeight: '1.25',
                  marginBottom: '16px',
                  color: '#ffffff'
                }}>
                  Patient-First Care Rooted in <span style={{ color: '#38bdf8' }}>Clinical Precision</span>
                </h3>

                <p style={{
                  fontSize: '0.94rem',
                  color: '#cbd5e1',
                  lineHeight: '1.7',
                  marginBottom: '28px'
                }}>
                  We combine verified senior MDS specialist expertise with state-of-the-art laser technology, ensuring every treatment is completely painless, transparent, and tailored to your lifelong oral health.
                </p>

                {/* 4 Stats Grid */}
                <div className="why-spotlight-stats-grid">
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '16px'
                  }}>
                    <div style={{ fontSize: '1.55rem', fontWeight: '900', color: '#38bdf8', marginBottom: '2px' }}>
                      9+ Yrs
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: '600' }}>
                      Clinical Practice in Shaikpet
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '16px'
                  }}>
                    <div style={{ fontSize: '1.55rem', fontWeight: '900', color: '#f59e0b', marginBottom: '2px' }}>
                      4.9 ★
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: '600' }}>
                      350+ Google Reviews
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '16px'
                  }}>
                    <div style={{ fontSize: '1.55rem', fontWeight: '900', color: '#10b981', marginBottom: '2px' }}>
                      100%
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: '600' }}>
                      Hospital-Grade Sterilization
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '16px'
                  }}>
                    <div style={{ fontSize: '1.55rem', fontWeight: '900', color: '#a855f7', marginBottom: '2px' }}>
                      2 MDS
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: '600' }}>
                      Senior Specialists On-Site
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons in Spotlight */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={openAppointment}
                  className="btn btn-primary btn-md"
                  style={{
                    boxShadow: '0 6px 20px rgba(2, 132, 199, 0.45)',
                    flexGrow: 1,
                    justifyContent: 'center'
                  }}
                >
                  <Calendar size={17} /> Book Appointment
                </button>
                <a
                  href={clinicInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-md"
                  style={{ flexGrow: 1, justifyContent: 'center' }}
                >
                  <MessageSquare size={17} /> WhatsApp Direct
                </a>
              </div>
            </div>

            {/* Right 6 Interactive Feature Cards (2 Cols x 3 Rows) */}
            <div className="why-card-grid">

              {/* Card 1 */}
              <div className="why-card-item">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#e0f2fe',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(2, 132, 199, 0.25)'
                  }}>
                    <Award size={24} />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#cbd5e1' }}>01</span>
                </div>
                <h4 style={{ fontSize: '1.18rem', fontWeight: '800', color: 'var(--navy)', marginBottom: '8px' }}>
                  Experienced Dental Team
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  Led by verified senior MDS specialists Dr. Ankush Kumar (Orthodontics &amp; Invisalign) and Dr. Susheel Kumar (Pediatric Dentistry &amp; Implants).
                </p>
              </div>

              {/* Card 2 */}
              <div className="why-card-item">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#ecfdf5',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(16, 185, 129, 0.25)'
                  }}>
                    <ShieldCheck size={24} />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#cbd5e1' }}>02</span>
                </div>
                <h4 style={{ fontSize: '1.18rem', fontWeight: '800', color: 'var(--navy)', marginBottom: '8px' }}>
                  Comprehensive Care
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  From routine preventative care to advanced laser root canals, implants, veneers, and full family smile makeovers under one roof.
                </p>
              </div>

              {/* Card 3 */}
              <div className="why-card-item">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#fef3c7',
                    color: '#d97706',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(217, 119, 6, 0.25)'
                  }}>
                    <HeartHandshake size={24} />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#cbd5e1' }}>03</span>
                </div>
                <h4 style={{ fontSize: '1.18rem', fontWeight: '800', color: 'var(--navy)', marginBottom: '8px' }}>
                  Patient-Focused Care
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  We focus on clear communication, transparent treatment roadmaps, zero unnecessary procedures, and personalized patient comfort.
                </p>
              </div>

              {/* Card 4 */}
              <div className="why-card-item">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#fae8ff',
                    color: '#a855f7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(168, 85, 247, 0.25)'
                  }}>
                    <Zap size={24} />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#cbd5e1' }}>04</span>
                </div>
                <h4 style={{ fontSize: '1.18rem', fontWeight: '800', color: 'var(--navy)', marginBottom: '8px' }}>
                  Modern Laser Treatment
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  Advanced dental laser technology, digital impression scanning, 3D diagnostics, and single-visit pain-free procedures.
                </p>
              </div>

              {/* Card 5 */}
              <div className="why-card-item">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#e0e7ff',
                    color: '#4f46e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(79, 70, 229, 0.25)'
                  }}>
                    <MapPin size={24} />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#cbd5e1' }}>05</span>
                </div>
                <h4 style={{ fontSize: '1.18rem', fontWeight: '800', color: 'var(--navy)', marginBottom: '8px' }}>
                  Shaikpet Main Rd Location
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  Situated on O.U. Colony Road in Shaikpet, Hyderabad, easily accessible with parking from Manikonda, Jubilee Hills &amp; Gachibowli.
                </p>
              </div>

              {/* Card 6 */}
              <div className="why-card-item">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#ffe4e6',
                    color: '#e11d48',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(225, 29, 72, 0.25)'
                  }}>
                    <Users size={24} />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#cbd5e1' }}>06</span>
                </div>
                <h4 style={{ fontSize: '1.18rem', fontWeight: '800', color: 'var(--navy)', marginBottom: '8px' }}>
                  Family &amp; Pediatric Care
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  Specialized dental care for toddlers, children, teenagers, and adults in a warm, welcoming, and anxiety-free setting.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CONSULTATION CTA BANNER */}
      {/* ========================================================= */}
      <CTASection onOpenAppointment={openAppointment} />

      {/* ========================================================= */}
      {/* 7. QUOTE SECTION WITH BACKGROUND IMAGE */}
      {/* ========================================================= */}
      <section style={{
        position: 'relative',
        padding: '100px 0',
        backgroundImage: 'url(/images/bg_3.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#ffffff'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(4, 13, 26, 0.88)'
        }} />
        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '700px' }}>
            <span style={{
              color: '#38bdf8',
              fontSize: '0.85rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px',
              display: 'block'
            }}>
              Our Clinical Promise
            </span>
            <h2 style={{
              fontSize: '2.6rem',
              color: '#ffffff',
              fontWeight: '800',
              lineHeight: '1.25',
              margin: 0
            }}>
              "We promised to take care of our patients and we delivered."
            </h2>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. OUR SENIOR DOCTORS SECTION (SOFT FROST TONE) */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '100px 0',
          background: 'linear-gradient(180deg, #f0f7ff 0%, #f8fafc 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
        id="doctorsour"
      >
        <div className="site-container">

          {/* Section Header */}
          <div className="section-header" style={{ maxWidth: '780px', margin: '0 auto 48px auto', textAlign: 'center' }}>
            <span
              className="section-tag badge-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 18px',
                fontSize: '0.82rem',
                fontWeight: '800',
                letterSpacing: '0.04em',
                borderRadius: '9999px',
                marginBottom: '14px'
              }}
            >
              <Sparkles size={14} /> MDS Clinical Leadership
            </span>

            <h2
              className="section-title"
              style={{
                fontSize: '2.65rem',
                fontWeight: '800',
                letterSpacing: '-0.025em',
                marginBottom: '16px'
              }}
            >
              Meet Our Senior Doctors
            </h2>

            <p
              className="section-desc"
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-body)',
                lineHeight: '1.7',
                marginBottom: '24px'
              }}
            >
              Direct personalized care with verified MDS specialists having 9+ years of clinical excellence and 50+ consulting hospital associations across Hyderabad.
            </p>

            {/* Credential Highlights Strip */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '8px'
              }}
            >
              {[
                { icon: ShieldCheck, text: 'TSDC Verified Specialists', color: '#0284c7' },
                { icon: Award, text: 'Certified Invisalign® Provider', color: '#059669' },
                { icon: Users, text: '50+ Consulting Clinics Reach', color: '#0284c7' },
                { icon: Star, text: '4.9 ★ Rating (350+ Reviews)', color: '#d97706' }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <span
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '6px 14px',
                      backgroundColor: '#ffffff',
                      borderRadius: '9999px',
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      color: 'var(--navy)',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                      border: '1px solid rgba(226, 232, 240, 0.9)'
                    }}
                  >
                    <IconComponent size={14} style={{ color: item.color }} /> {item.text}
                  </span>
                );
              })}
            </div>
          </div>

          {/* 2-Column Doctor Cards Grid */}
          <div className="doctor-redesign-grid">
            {doctorsData.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} onOpenAppointment={openAppointment} />
            ))}
          </div>

          {/* Bottom Specialist Care Assurance Strip */}
          <div
            style={{
              maxWidth: '1100px',
              margin: '40px auto 0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '24px 32px',
              border: '1px solid rgba(2, 132, 199, 0.18)',
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
                <div style={{ fontWeight: '800', color: 'var(--navy)', fontSize: '0.98rem' }}>
                  Direct Specialist Care Guarantee
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.86rem', marginTop: '2px' }}>
                  Every diagnosis, braces adjustment, root canal, and implant procedure is personally performed by our Senior MDS Doctors.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={`tel:${clinicInfo.phones?.[0]?.value || '+919603338904'}`}
                className="btn btn-secondary btn-sm"
                style={{
                  fontWeight: '700',
                  fontSize: '0.84rem',
                  padding: '9px 16px',
                  borderRadius: '10px'
                }}
              >
                <Phone size={14} /> Call {clinicInfo.phones?.[0]?.display || '96033 38904'}
              </a>
              <button
                onClick={openAppointment}
                className="btn btn-primary btn-sm"
                style={{
                  fontWeight: '700',
                  fontSize: '0.84rem',
                  padding: '9px 18px',
                  borderRadius: '10px'
                }}
              >
                <Calendar size={14} /> Book Consultation
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. CLINIC GALLERY SECTION (PEARL AMBIENT BACKDROP) */}
      {/* ========================================================= */}
      <section style={{
        padding: '95px 0',
        background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag badge-cyan">Inside Our Clinic</span>
            <h2 className="section-title">Smile Transformations & Gallery</h2>
            <p className="section-desc">
              Take a tour of our sterilization facilities, modern dental suites, and real patient smile transformations.
            </p>
          </div>

          <GalleryViewer limit={6} />

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              href="/gallery"
              className="btn btn-secondary btn-lg"
            >
              View Full Clinic Gallery (17 Photos) <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. TESTIMONIALS SECTION (CALMING WELLNESS MINT TONE) */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '95px 0',
          background: 'linear-gradient(180deg, #ecfdf5 0%, #f0fdf4 40%, #f8fafc 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
        id="testimonials"
      >
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
          <div className="section-header" style={{ maxWidth: '750px', margin: '0 auto 40px auto', textAlign: 'center' }}>
            <span
              className="section-tag badge-mint"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 18px',
                fontSize: '0.82rem',
                fontWeight: '800',
                letterSpacing: '0.04em',
                borderRadius: '9999px',
                marginBottom: '14px'
              }}
            >
              <Sparkles size={14} /> Verified Patient Reviews
            </span>
            <h2 className="section-title" style={{ fontSize: '2.65rem', fontWeight: '800', letterSpacing: '-0.025em', marginBottom: '14px' }}>
              What Our Patients Say About Us
            </h2>
            <p className="section-desc" style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.7' }}>
              Real stories of painless treatments, smile transformations, and gentle care from families across Hyderabad who trust Simply Smilez Dental Clinic.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. FREQUENTLY ASKED QUESTIONS (ALABASTER PEARL TONE) */}
      {/* ========================================================= */}
      <section style={{
        padding: '95px 0',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }} id="faq-section">
        <div className="site-container">
          <div className="section-header" style={{ maxWidth: '750px', margin: '0 auto 40px auto', textAlign: 'center' }}>
            <span
              className="section-tag badge-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 18px',
                fontSize: '0.82rem',
                fontWeight: '800',
                letterSpacing: '0.04em',
                borderRadius: '9999px',
                marginBottom: '14px'
              }}
            >
              <Sparkles size={14} /> Clear Answers &amp; Guidance
            </span>
            <h2 className="section-title" style={{ fontSize: '2.65rem', fontWeight: '800', letterSpacing: '-0.025em', marginBottom: '14px' }}>
              Frequently Asked Questions
            </h2>
            <p className="section-desc" style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.7' }}>
              Have questions about treatments, Invisalign cost, root canals, or appointments in Shaikpet, Hyderabad? Find clear answers below.
            </p>
          </div>

          <FAQAccordion faqs={mainFaqs} initialLimit={6} showSearch={true} />
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .hero-title {
            font-size: 2.35rem !important;
          }
        }
      `}</style>
    </>
  );
}
