'use client';
import { useState } from 'react';
import { clinicInfo } from '@/data/clinicData';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Smile as Tooth 
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: 'Morning (10:00 AM - 1:00 PM)',
    doctor: 'Any Available Specialist',
    service: 'Invisalign & Clear Aligners',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message
    const text = encodeURIComponent(
      `*New Appointment Request - Simply Smilez Dental*\n` +
      `👤 *Patient Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📅 *Preferred Date:* ${formData.date || 'Earliest Available'}\n` +
      `⏰ *Preferred Time:* ${formData.time}\n` +
      `🩺 *Doctor:* ${formData.doctor}\n` +
      `🦷 *Service/Treatment:* ${formData.service}\n` +
      (formData.notes ? `📝 *Notes:* ${formData.notes}\n` : '')
    );

    const waUrl = `https://wa.me/917799376656?text=${text}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(11, 37, 69, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 1100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'fadeIn 0.25s ease-out'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: '#ffffff',
        width: '100%',
        maxWidth: '560px',
        borderRadius: '24px',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column'
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div style={{
          padding: '20px 24px',
          background: 'linear-gradient(135deg, #0b2545 0%, #0284c7 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '2px 10px',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              marginBottom: '4px'
            }}>
              <Sparkles size={12} /> Instant Booking
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: '700', margin: 0 }}>
              Book Dental Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', overflowY: 'auto' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: '#ecfdf5',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <CheckCircle2 size={42} />
              </div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '10px' }}>
                Booking Request Prepared!
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
                Your appointment details have been forwarded to Simply Smilez Dental Clinic. 
                Our team will confirm your slot shortly via WhatsApp or call.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <a
                  href={`tel:${clinicInfo.phones[0].value}`}
                  className="btn btn-primary"
                >
                  <Phone size={16} /> Call Clinic Directly
                </a>
                <button
                  onClick={handleReset}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Full Name & Phone Number */}
              <div className="appointment-modal-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '600', color: 'var(--navy)', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 36px',
                        borderRadius: '10px',
                        border: '1.5px solid var(--border-subtle)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    <User size={16} style={{ position: 'absolute', left: '12px', top: '13px', color: '#94a3b8' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '600', color: 'var(--navy)', marginBottom: '6px' }}>
                    Phone Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 36px',
                        borderRadius: '10px',
                        border: '1.5px solid var(--border-subtle)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    <Phone size={16} style={{ position: 'absolute', left: '12px', top: '13px', color: '#94a3b8' }} />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '600', color: 'var(--navy)', marginBottom: '6px' }}>
                  Select Treatment / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 12px',
                    borderRadius: '10px',
                    border: '1.5px solid var(--border-subtle)',
                    fontSize: '0.9rem',
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
                  <option value="Routine Dental Checkup">Routine Dental Checkup & Cleaning</option>
                </select>
              </div>

              {/* Doctor Preference */}
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '600', color: 'var(--navy)', marginBottom: '6px' }}>
                  Doctor Preference
                </label>
                <select
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 12px',
                    borderRadius: '10px',
                    border: '1.5px solid var(--border-subtle)',
                    fontSize: '0.9rem',
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                >
                  <option value="Any Available Specialist">Any Available Senior Specialist</option>
                  <option value="Dr. Ankush Kumar MDS (Orthodontist & Invisalign Provider)">Dr. Ankush Kumar MDS (Orthodontist & Invisalign)</option>
                  <option value="Dr. Susheel Kumar MDS (Pediatric Dentist & Implantologist)">Dr. Susheel Kumar MDS (Pediatric & Implants)</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="appointment-modal-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '600', color: 'var(--navy)', marginBottom: '6px' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--border-subtle)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '600', color: 'var(--navy)', marginBottom: '6px' }}>
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 12px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--border-subtle)',
                      fontSize: '0.9rem',
                      backgroundColor: '#ffffff',
                      outline: 'none'
                    }}
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                    <option value="Sunday (11:00 AM - 4:00 PM)">Sunday (11:00 AM - 4:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '600', color: 'var(--navy)', marginBottom: '6px' }}>
                  Describe Any Symptoms / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Pain in lower molar, interested in Invisalign quotation..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    border: '1.5px solid var(--border-subtle)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              {/* Submit Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                <button
                  type="submit"
                  className="btn btn-whatsapp btn-lg"
                  style={{ width: '100%' }}
                >
                  <MessageSquare size={18} /> Confirm via WhatsApp (Instant Reply)
                </button>
                <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Or call directly: <a href={`tel:${clinicInfo.phones[0].value}`} style={{ color: 'var(--primary)', fontWeight: '700' }}>{clinicInfo.phones[0].display}</a> / <a href={`tel:${clinicInfo.phones[1].value}`} style={{ color: 'var(--primary)', fontWeight: '700' }}>{clinicInfo.phones[1].display}</a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 520px) {
          .appointment-modal-2col {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
