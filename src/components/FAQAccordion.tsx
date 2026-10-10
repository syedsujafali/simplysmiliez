'use client';
import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Search, 
  Sparkles, 
  Phone, 
  MessageSquare,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { clinicInfo } from '@/data/clinicData';

export default function FAQAccordion({ faqs = [], initialLimit = 6, showSearch = true }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category).filter(Boolean)))];

  // Filter based on search term and selected category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = !searchTerm.trim() || (
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Determine items to display: If searching or category is picked, show all matching; otherwise limit to 6 unless expanded
  const isFiltering = searchTerm.trim().length > 0 || selectedCategory !== 'All';
  const displayedFaqs = (isFiltering || isExpanded) 
    ? filteredFaqs 
    : filteredFaqs.slice(0, initialLimit);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const remainingCount = filteredFaqs.length - initialLimit;

  return (
    <div style={{ maxWidth: '880px', margin: '0 auto', width: '100%' }}>
      
      {/* Search & Category Filter Bar */}
      {showSearch && (
        <div style={{ marginBottom: '32px' }}>
          {/* Search Box */}
          <div style={{
            position: 'relative',
            marginBottom: '16px'
          }}>
            <input
              type="text"
              placeholder="Search questions (e.g., Invisalign cost, Root Canal, Implants, Timings)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 50px',
                borderRadius: '16px',
                border: '1.5px solid rgba(226, 232, 240, 0.95)',
                fontSize: '0.96rem',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                outline: 'none',
                color: 'var(--navy)',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--primary)';
                e.target.style.boxShadow = '0 0 0 4px rgba(2, 132, 199, 0.12)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(226, 232, 240, 0.95)';
                e.target.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.04)';
              }}
            />
            <Search size={20} style={{ position: 'absolute', left: '18px', top: '17px', color: '#94a3b8' }} />
          </div>

          {/* Quick Category Filter Pills */}
          {categories.length > 2 && (
            <div className="faq-category-pills-wrap">
              {categories.map((cat, idx) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '6px 16px',
                      borderRadius: '9999px',
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      border: isActive ? '1px solid var(--primary)' : '1px solid rgba(226, 232, 240, 0.9)',
                      backgroundColor: isActive ? 'var(--primary)' : '#ffffff',
                      color: isActive ? '#ffffff' : 'var(--navy)',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 4px 12px rgba(2, 132, 199, 0.25)' : '0 2px 6px rgba(15, 23, 42, 0.03)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Accordion FAQ List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {displayedFaqs.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '48px 24px',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)'
          }}>
            <HelpCircle size={36} style={{ color: 'var(--primary)', margin: '0 auto 12px auto' }} />
            <h4 style={{ fontSize: '1.1rem', color: 'var(--navy)', fontWeight: '800', marginBottom: '6px' }}>
              No matching questions found
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '16px' }}>
              Have a specific inquiry? Our doctors and team are ready to assist you right now!
            </p>
            <a
              href={`tel:${clinicInfo.phones?.[0]?.value || '+919603338904'}`}
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex' }}
            >
              <Phone size={14} /> Call Helpline: 96033 38904
            </a>
          </div>
        ) : (
          displayedFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const qNum = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={faq.id || idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  border: isOpen ? '1.5px solid rgba(2, 132, 199, 0.45)' : '1px solid rgba(226, 232, 240, 0.95)',
                  boxShadow: isOpen ? '0 10px 25px -5px rgba(2, 132, 199, 0.12)' : '0 2px 8px rgba(15, 23, 42, 0.03)',
                  overflow: 'hidden',
                  transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: isOpen ? 'linear-gradient(90deg, #f8fafc 0%, #ffffff 100%)' : '#ffffff',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: isOpen ? 'var(--primary)' : 'var(--navy)',
                    fontSize: '1.02rem',
                    fontWeight: '700',
                    transition: 'all 0.2s ease'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <span style={{
                      backgroundColor: isOpen ? 'var(--primary)' : 'var(--primary-light)',
                      color: isOpen ? '#ffffff' : 'var(--primary-dark)',
                      fontSize: '0.74rem',
                      fontWeight: '800',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      marginTop: '2px',
                      flexShrink: 0,
                      transition: 'all 0.2s ease'
                    }}>
                      Q{qNum}
                    </span>
                    <span style={{ lineHeight: '1.4' }}>{faq.question}</span>
                  </span>

                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'var(--primary)' : '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: isOpen ? '#ffffff' : '#64748b',
                    boxShadow: isOpen ? '0 4px 10px rgba(2, 132, 199, 0.3)' : 'none',
                    transition: 'all 0.25s ease'
                  }}>
                    <ChevronDown size={17} style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
                    }} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '16px 24px 24px 58px',
                    color: 'var(--text-body)',
                    fontSize: '0.94rem',
                    lineHeight: '1.75',
                    borderTop: '1px solid #f1f5f9',
                    backgroundColor: '#ffffff',
                    position: 'relative'
                  }}>
                    {/* Left Accent Indicator Bar */}
                    <div style={{
                      position: 'absolute',
                      left: '32px',
                      top: '20px',
                      bottom: '24px',
                      width: '3px',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '2px'
                    }} />

                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Show More / Show Less Button */}
      {!isFiltering && filteredFaqs.length > initialLimit && (
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn btn-secondary btn-lg"
            style={{
              padding: '13px 28px',
              borderRadius: '9999px',
              fontSize: '0.94rem',
              fontWeight: '700',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {isExpanded ? (
              <>
                Show Fewer FAQs <ChevronUp size={18} />
              </>
            ) : (
              <>
                Show More FAQs (+{remainingCount} More Questions) <ChevronDown size={18} />
              </>
            )}
          </button>
        </div>
      )}

      {/* Still Have Questions Reassurance Box */}
      <div style={{
        marginTop: '50px',
        backgroundColor: '#f8fafc',
        borderRadius: '22px',
        padding: '28px 32px',
        border: '1px solid rgba(226, 232, 240, 0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 380px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            backgroundColor: 'var(--primary-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <HelpCircle size={24} style={{ color: 'var(--primary)' }} />
          </div>
          <div>
            <div style={{ fontSize: '1.02rem', fontWeight: '800', color: 'var(--navy)' }}>
              Still have questions about your dental treatment?
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              Speak directly with our senior dental specialists or coordinators.
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <a
            href={`tel:${clinicInfo.phones?.[0]?.value || '+919603338904'}`}
            className="btn btn-secondary btn-sm"
            style={{ borderRadius: '10px', padding: '9px 16px', fontWeight: '700' }}
          >
            <Phone size={14} /> 96033 38904
          </a>
          <a
            href={clinicInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            style={{ borderRadius: '10px', padding: '9px 16px', fontWeight: '700' }}
          >
            <MessageSquare size={14} /> Ask on WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
}
