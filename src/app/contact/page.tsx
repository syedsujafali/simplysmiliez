'use client';
import { useState } from 'react';
import Link from 'next/link';
import { clinicInfo } from '@/data/clinicData';
import { useUI } from '@/components/LayoutWrapper';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  User, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function ContactPage() {
  const { openAppointment } = useUI();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Invisalign & Clear Aligners',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Contact / Appointment Inquiry - Simply Smilez*\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🦷 *Interested Service:* ${formData.service}\n` +
      `📅 *Preferred Date:* ${formData.date || 'Earliest Available'}\n` +
      (formData.message ? `📝 *Message:* ${formData.message}\n` : '')
    );
    window.open(`https://wa.me/917799376656?text=${text}`, '_blank');
    setSubmitted(true);
  };

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
            <span style={{ color: '#ffffff' }}>Contact Us</span>
          </div>

          <span className="badge-pill badge-glow-dark" style={{ marginBottom: '16px' }}>
            <Phone size={13} /> Get In Touch • Immediate Appointments Available
          </span>

          <h1 style={{
            fontSize: '3.1rem',
            color: '#ffffff',
            fontWeight: '900',
            marginBottom: '16px',
            lineHeight: '1.15'
          }}>
            Contact Simply Smilez Dental Clinic
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#cbd5e1',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.65'
          }}>
            Located conveniently on O.U. Colony Road in Shaikpet, Hyderabad. Reach out to schedule your appointment or consult our dental team.
          </p>
        </div>
      </section>

      {/* 4 Contact Cards Grid */}
      <section style={{
        padding: '75px 0 25px 0',
        background: 'linear-gradient(180deg, #f0f7ff 0%, #f8fafc 100%)',
        position: 'relative'
      }}>
        <div className="site-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '50px'
          }}>
            {/* 1: Address */}
            <div className="hover-lift" style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '22px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(226, 232, 240, 0.9)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: '#e0f2fe',
                color: '#0077b6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                border: '1px solid rgba(0, 119, 182, 0.2)'
              }}>
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '1.18rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '8px' }}>
                Clinic Address
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '14px' }}>
                {clinicInfo.address}
              </p>
              <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.84rem', fontWeight: '800', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Get Directions <ExternalLink size={13} />
              </a>
            </div>

            {/* 2: Phone */}
            <div className="hover-lift" style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '22px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(226, 232, 240, 0.9)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: '#e0f2fe',
                color: '#0077b6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                border: '1px solid rgba(0, 119, 182, 0.2)'
              }}>
                <Phone size={24} />
              </div>
              <h3 style={{ fontSize: '1.18rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '8px' }}>
                Call Us
              </h3>
              <div style={{ fontSize: '0.96rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '8px' }}>
                <a href={`tel:${clinicInfo.phones[0].value}`} style={{ color: 'var(--primary)', display: 'block' }}>
                  +91 {clinicInfo.phones[0].display}
                </a>
                <a href={`tel:${clinicInfo.phones[1].value}`} style={{ color: 'var(--primary)', display: 'block', marginTop: '4px' }}>
                  +91 {clinicInfo.phones[1].display}
                </a>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Direct Clinic Hotline
              </span>
            </div>

            {/* 3: WhatsApp */}
            <div className="hover-lift" style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '22px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(226, 232, 240, 0.9)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: '#ecfdf5',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <MessageSquare size={24} />
              </div>
              <h3 style={{ fontSize: '1.18rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '8px' }}>
                WhatsApp Chat
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '14px' }}>
                Instant booking & inquiry via WhatsApp support.
              </p>
              <a
                href={clinicInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.84rem', fontWeight: '800', color: '#16a34a', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            {/* 4: Working Hours */}
            <div className="hover-lift" style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '22px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(226, 232, 240, 0.9)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: '#e0f2fe',
                color: '#0077b6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                border: '1px solid rgba(0, 119, 182, 0.2)'
              }}>
                <Clock size={24} />
              </div>
              <h3 style={{ fontSize: '1.18rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '8px' }}>
                Clinic Timings
              </h3>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                <div><strong>Mon - Sat:</strong> 10:00 AM – 9:00 PM</div>
                <div><strong>Sunday:</strong> 11:00 AM – 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form & Map Section */}
      <section style={{
        padding: '35px 0 95px 0',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative'
      }}>
        <div className="site-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '36px',
            alignItems: 'start'
          }} className="contact-grid-responsive">
            {/* Left Contact & Booking Form */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '26px',
              padding: '32px 28px',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(226, 232, 240, 0.9)'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#e0f2fe',
                color: '#0077b6',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}>
                <Sparkles size={13} /> Online Consultation Form
              </div>

              <h2 style={{ fontSize: '2rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '10px' }}>
                Send Us a Message / Book a Visit
              </h2>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '26px' }}>
                Fill out your details below and our team will get back to you immediately to confirm your appointment.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '36px 10px' }}>
                  <CheckCircle2 size={50} style={{ color: '#10b981', margin: '0 auto 16px auto' }} />
                  <h3 style={{ color: 'var(--navy)', marginBottom: '8px', fontSize: '1.4rem' }}>Thank you!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
                    Your message has been initiated via WhatsApp. Our team will assist you right away.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-subtle)',
                        fontSize: '0.94rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9603338904"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-subtle)',
                        fontSize: '0.94rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                      Select Treatment / Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-subtle)',
                        fontSize: '0.94rem',
                        backgroundColor: '#ffffff',
                        outline: 'none'
                      }}
                    >
                      <option value="Invisalign & Clear Aligners">Invisalign & Clear Aligners (30% Discount)</option>
                      <option value="Dental Implants">Dental Implants (30% Discount)</option>
                      <option value="Invisalign First for Kids">Invisalign First for Kids</option>
                      <option value="Braces & Orthodontics">Braces & Orthodontics</option>
                      <option value="Laser Root Canal Therapy">Laser Root Canal Therapy</option>
                      <option value="Dental Crowns & Bridges">Dental Crowns & Bridges</option>
                      <option value="Dental Veneers">Dental Veneers</option>
                      <option value="Laser Teeth Whitening">Laser Teeth Whitening</option>
                      <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                      <option value="Composite Fillings">Composite Fillings</option>
                      <option value="Laser Gum Treatment">Laser Gum Treatment</option>
                      <option value="Wisdom Tooth Extraction">Wisdom Tooth Extraction</option>
                      <option value="Routine Dental Checkup">General Dental Checkup</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-subtle)',
                        fontSize: '0.94rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                      Additional Message / Dental Concerns (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your dental symptoms or preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        border: '1.5px solid var(--border-subtle)',
                        fontSize: '0.94rem',
                        outline: 'none',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-whatsapp btn-lg"
                    style={{ marginTop: '12px', justifyContent: 'center' }}
                  >
                    <MessageSquare size={18} /> Submit via WhatsApp
                  </button>
                </form>
              )}
            </div>

            {/* Right Map & Google Business Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
              {/* Google Business Photo Card */}
              <div style={{
                borderRadius: '26px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.9)'
              }}>
                <a href={clinicInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                  <img
                    src="/images/gmb.webp"
                    alt="Simply Smilez Dental Clinic Google Business"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </a>
              </div>

              {/* Interactive Google Map Embed */}
              <div style={{
                borderRadius: '26px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                backgroundColor: '#ffffff'
              }}>
                <iframe
                  src={clinicInfo.googleMapsEmbed}
                  title="Simply Smilez Dental Clinic location"
                  width="100%"
                  height="340"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Areas Served Pill List */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '22px',
                padding: '26px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '14px' }}>
                  Areas We Serve in Hyderabad
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {clinicInfo.areasServed.map((area, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: '#f1f5f9',
                        color: 'var(--navy)',
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        fontSize: '0.82rem',
                        fontWeight: '700'
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
