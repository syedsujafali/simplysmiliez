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
    <div className="mobile-services-slider-container" style={{ position: 'relative', width: '100%' }}>
      {/* Top Header & Navigation Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        marginBottom: '18px',
        padding: '0 4px'
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

      {/* 3D Coverflow Stage with Peeked Neighbor Cards */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '16px 0 24px 0',
          perspective: '1200px'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            /* Each slide occupies 84% width. Offset by 8% so active slide is dead-centered and 8% left/right cards peek */
            transform: `translateX(calc(8% - ${currentIndex * 84}%))`,
            transition: 'transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          {services.map((service, idx) => {
            const isCurrent = idx === currentIndex;
            const isAdjacent = Math.abs(idx - currentIndex) === 1;

            return (
              <div
                key={service.slug}
                onClick={() => {
                  if (!isCurrent) setCurrentIndex(idx);
                }}
                style={{
                  flex: '0 0 84%',
                  width: '84%',
                  maxWidth: '84%',
                  boxSizing: 'border-box',
                  padding: '0 8px',
                  /* 3D depth layer: Active card is full size and raised, side cards step back and dim */
                  transform: isCurrent
                    ? 'scale(1) translateZ(0)'
                    : 'scale(0.91) translateY(8px)',
                  opacity: isCurrent ? 1 : isAdjacent ? 0.72 : 0.4,
                  zIndex: isCurrent ? 10 : 2,
                  transition: 'transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
                  pointerEvents: isCurrent ? 'auto' : 'auto',
                  cursor: isCurrent ? 'default' : 'pointer'
                }}
              >
                <ServiceCard service={service} index={idx} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(56, 189, 248, 0.25)'
        }}>
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to treatment ${idx + 1}`}
              style={{
                height: '9px',
                width: idx === currentIndex ? '30px' : '9px',
                borderRadius: '9999px',
                background: idx === currentIndex
                  ? 'linear-gradient(135deg, #0284c7 0%, #00b4d8 100%)'
                  : '#94a3b8',
                border: idx === currentIndex ? 'none' : '1px solid #64748b',
                boxShadow: idx === currentIndex
                  ? '0 2px 8px rgba(2, 132, 199, 0.5)'
                  : 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                touchAction: 'manipulation'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
