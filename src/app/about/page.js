'use client';
import Link from 'next/link';
import { clinicInfo } from '@/data/clinicData';
import { doctorsData } from '@/data/doctorsData';
import { useUI } from '@/components/LayoutWrapper';
import DoctorCard from '@/components/DoctorCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { 
  Sparkles, 
  Calendar, 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Microscope,
  Check
} from 'lucide-react';

export default function AboutPage() {
  const { openAppointment } = useUI();

  const aboutFaqs = [
    {
      question: "Where is Simply Smilez Dental Clinic located in Hyderabad?",
      answer: "Simply Smilez Dental Clinic is located at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad – 500008. The clinic is conveniently accessible to patients from Shaikpet, O.U. Colony, Manikonda, Tolichowki, Mehdipatnam, and nearby areas."
    },
    {
      question: "Do you offer Invisalign treatment?",
      answer: "Yes. We provide Invisalign clear aligners for teens and adults who want a comfortable, discreet alternative to traditional braces. We also offer Invisalign First for children with developing smiles."
    },
    {
      question: "What dental services do you provide?",
      answer: "Our services include Invisalign, Invisalign First for Kids, Root Canal Treatment, Dental Implants, Cosmetic Dentistry, Teeth Whitening, Crowns & Bridges, Smile Makeovers, and General Dental Care."
    },
    {
      question: "Is Root Canal Treatment painful?",
      answer: "Modern root canal treatment is typically comfortable and performed under local anesthesia. Most patients experience little to no pain during the procedure and feel significant relief afterward."
    },
    {
      question: "When was Simply Smilez Dental Clinic established?",
      answer: "The clinic was established in 2018 and has been providing trusted, comprehensive dental care in Shaikpet, Hyderabad since then."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling our clinic directly at +91 96033 38904 / +91 77993 76656 or using the online appointment form / WhatsApp booking on our website."
    }
  ];

  return (
    <>
      {/* Hero Breadcrumb Header */}
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
            <span style={{ color: '#ffffff' }}>About Us</span>
          </div>

          <span className="badge-pill badge-glow-dark" style={{ marginBottom: '16px' }}>
            <Sparkles size={13} /> Established in 2018 • 9+ Years of Excellence
          </span>

          <h1 style={{
            fontSize: '3.1rem',
            color: '#ffffff',
            fontWeight: '900',
            marginBottom: '16px',
            lineHeight: '1.15'
          }}>
            About Simply Smilez Dental Clinic
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#cbd5e1',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.65'
          }}>
            Trusted, patient-focused dental care in Shaikpet, Hyderabad, providing advanced orthodontic, 
            pediatric, restorative, and cosmetic dentistry for all generations.
          </p>
        </div>
      </section>

      {/* Main Story & Core Values */}
      <section style={{
        padding: '95px 0',
        background: 'linear-gradient(180deg, #f8fbfe 0%, #ffffff 100%)',
        position: 'relative'
      }}>
        <div className="site-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '54px',
            alignItems: 'center',
            marginBottom: '80px'
          }}>
            <div>
              <span className="badge-pill badge-primary" style={{ marginBottom: '14px' }}>
                Our Mission & Legacy
              </span>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--navy)', marginBottom: '20px', lineHeight: '1.2' }}>
                Comprehensive Dental Care in Shaikpet Since 2018
              </h2>
              <p style={{ fontSize: '1.02rem', color: 'var(--navy)', fontWeight: '600', lineHeight: '1.7', marginBottom: '16px' }}>
                Established in 2018, <strong>Simply Smilez Dental Clinic</strong> is a patient-focused dental clinic in 
                Shaikpet, Hyderabad, offering comprehensive dental care for children, teens, and adults.
              </p>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '16px' }}>
                With two specialty doctors, we provide personalized treatment with clear communication and a comfortable approach. 
                Our services include <strong>Invisalign, Invisalign First for Kids, braces, dental implants, root canal treatment, 
                crowns, veneers, teeth whitening, pediatric dentistry, wisdom tooth extraction, laser gum treatment, and preventive dental care</strong>.
              </p>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '26px' }}>
                We proudly welcome patients from <strong>O.U. Colony, Dwaraka Nagar Colony, Manikonda, Tolichowki, Raidurg, Puppalguda, 
                Film Nagar, Jubilee Hills, Banjara Hills, Mehdipatnam, Langar Houz, Gachibowli, Narsingi, and nearby areas</strong>.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={openAppointment}
                  className="btn btn-primary"
                >
                  <Calendar size={16} /> Book Consultation
                </button>
                <Link
                  href="/all-services"
                  className="btn btn-secondary"
                >
                  View All Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '26px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--border-subtle)'
              }}>
                <img
                  src="/images/about.webp"
                  alt="Simply Smilez Dental Clinic Team"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>

          {/* Dental Care Designed Around You & Our Commitment */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            <div style={{
              backgroundColor: '#f0f9ff',
              borderRadius: '24px',
              padding: '38px',
              border: '1px solid rgba(0, 119, 182, 0.2)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#0077b6',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <HeartHandshake size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '14px' }}>
                Dental Care Designed Around You
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: '1.7', margin: 0 }}>
                Every smile is different. We take time to understand your concerns, explain suitable treatment options, 
                and provide care based on your individual dental needs. Whether you need routine care, teeth straightening, 
                treatment for a damaged or missing tooth, or cosmetic dental treatment, our goal is to help you maintain healthy teeth and a confident smile.
              </p>
            </div>

            <div style={{
              backgroundColor: '#f0fdf4',
              borderRadius: '24px',
              padding: '38px',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#059669',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '14px' }}>
                Our Commitment to Excellence
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '14px' }}>
                From children's dentistry and orthodontics to restorative and cosmetic treatments, we aim to make quality 
                dental care simple, comfortable, and accessible.
              </p>
              <p style={{ fontSize: '0.94rem', color: '#065f46', fontWeight: '800', margin: 0 }}>
                Simply Smilez Dental Clinic — personalized dental care for healthier, confident smiles in Shaikpet, Hyderabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Doctors Showcase */}
      <section style={{
        padding: '95px 0',
        background: 'linear-gradient(180deg, #f0f7ff 0%, #f8fafc 100%)',
        position: 'relative'
      }}>
        <div className="site-container">
          <div className="section-header" style={{ maxWidth: '750px', margin: '0 auto 44px auto', textAlign: 'center' }}>
            <span className="section-tag badge-primary">
              <Sparkles size={14} /> Our Medical Leadership
            </span>
            <h2 className="section-title">Our Specialist Doctors</h2>
            <p className="section-desc">
              Meet the senior specialists heading orthodontics, pediatric care, and implantology at Simply Smilez.
            </p>
          </div>

          <div className="doctor-redesign-grid">
            {doctorsData.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} onOpenAppointment={openAppointment} />
            ))}
          </div>
        </div>
      </section>

      {/* About Page FAQs */}
      <section style={{
        padding: '95px 0',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative'
      }}>
        <div className="site-container">
          <div className="section-header" style={{ maxWidth: '750px', margin: '0 auto 40px auto', textAlign: 'center' }}>
            <span className="section-tag badge-cyan">
              <Sparkles size={14} /> Common Questions
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Answers to common questions about our clinic, consultations, and specialties.
            </p>
          </div>

          <FAQAccordion faqs={aboutFaqs} showSearch={false} />
        </div>
      </section>

      {/* Consultation CTA */}
      <CTASection onOpenAppointment={openAppointment} />
    </>
  );
}
