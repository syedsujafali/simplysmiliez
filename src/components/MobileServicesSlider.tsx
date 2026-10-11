'use client';
import { useState, useRef, useEffect } from 'react';
import ServiceCard from '@/components/ServiceCard';

export default function MobileServicesSlider({ services = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  // Fast auto-scroll: advances card every 2.6 seconds (pauses on touch)
  useEffect(() => {
    if (isPaused || !services || services.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 2600);

    return () => clearInterval(timer);
  }, [isPaused, services.length, currentIndex]);

  // Touch swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    setIsPaused(true);
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
    // Resume auto-scroll shortly after touch interaction finishes
    setTimeout(() => {
      setIsPaused(false);
    }, 2500);
  };

  if (!services || services.length === 0) return null;

  return (
    <div className="mobile-services-slider-container" style={{ position: 'relative', width: '100%' }}>
      {/* 3D Coverflow Stage with Peeked Neighbor Cards (Swipe Enabled) */}
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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            /* Each slide occupies 96% width for full wide card presentation on mobile */
            transform: `translateX(calc(2% - ${currentIndex * 96}%))`,
            transition: 'transform 0.32s cubic-bezier(0.25, 1, 0.5, 1)'
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
                  flex: '0 0 96%',
                  width: '96%',
                  maxWidth: '96%',
                  boxSizing: 'border-box',
                  padding: '0 4px',
                  /* 3D depth layer: Active card is full size, side cards step back and dim */
                  transform: isCurrent
                    ? 'scale(1) translateZ(0)'
                    : 'scale(0.96) translateY(4px)',
                  opacity: isCurrent ? 1 : isAdjacent ? 0.75 : 0.35,
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
