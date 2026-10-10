'use client';
import { useState, useRef } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function MobileServicesSlider({ services = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  // Touch swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
  };

  if (!services || services.length === 0) return null;

  return (
    <div className="mobile-services-slider-container">
      {/* Top Header & Navigation Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        marginBottom: '18px',
        padding: '0 2px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#ffffff',
          padding: '6px 14px',
          borderRadius: '9999px',
          border: '1px solid rgba(226, 232, 240, 0.95)',
          boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
          fontSize: '0.82rem',
          fontWeight: '800',
          color: 'var(--navy)'
        }}>
          <Sparkles size={13} style={{ color: 'var(--primary)' }} />
          <span>Treatment {String(currentIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={prevSlide}
            aria-label="Previous Treatment"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(226, 232, 240, 0.95)',
              color: 'var(--navy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)',
              transition: 'all 0.2s ease',
              touchAction: 'manipulation'
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Treatment"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              border: '1px solid var(--primary)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)',
              transition: 'all 0.2s ease',
              touchAction: 'manipulation'
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swipeable Slider Window */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden',
          borderRadius: '24px'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {services.map((service, idx) => (
            <div
              key={service.slug}
              style={{
                flex: '0 0 100%',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}
            >
              <ServiceCard service={service} index={idx} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '20px'
      }}>
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to treatment ${idx + 1}`}
            style={{
              height: '8px',
              width: idx === currentIndex ? '28px' : '8px',
              borderRadius: '9999px',
              backgroundColor: idx === currentIndex ? 'var(--primary)' : '#cbd5e1',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              touchAction: 'manipulation'
            }}
          />
        ))}
      </div>
    </div>
  );
}
