'use client';
import { useState, useRef, useEffect } from 'react';
import { testimonialsData } from '@/data/testimonialsData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function TestimonialSlider() {
  const count = testimonialsData.length;
  // 3 sets of items to guarantee infinite seamless looping without any empty space
  const loopedItems = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  // Start in the middle set (index = count)
  const [currentIndex, setCurrentIndex] = useState(count);
  const [isAnimated, setIsAnimated] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // Measure card width + gap on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (trackRef.current && trackRef.current.children.length > 0) {
        const firstCard = trackRef.current.children[0];
        const gap = 24; // 24px gap between cards
        setCardWidth(firstCard.offsetWidth + gap);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const nextSlide = () => {
    setIsAnimated(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsAnimated(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Seamless jump when reaching loop bounds
  const handleTransitionEnd = () => {
    if (currentIndex >= count * 2) {
      // Reached beyond second set, instantly jump back to first set without animation
      setIsAnimated(false);
      setCurrentIndex(currentIndex - count);
    } else if (currentIndex < count) {
      // Reached before second set, instantly jump to equivalent in second set
      setIsAnimated(false);
      setCurrentIndex(currentIndex + count);
    }
  };

  // Re-enable animation on next render if it was disabled for loop jump
  useEffect(() => {
    if (!isAnimated) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimated(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isAnimated]);

  const activeRealIndex = currentIndex % count;

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
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      
      {/* Top Controls & Rating Summary Bar */}
      <div 
        className="testimonial-controls-bar"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '28px',
          padding: '0 4px'
        }}
      >
        {/* Google Rating Trust Badge */}
        <div 
          className="testimonial-trust-badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#ffffff',
            padding: '8px 18px',
            borderRadius: '9999px',
            boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)',
            border: '1px solid rgba(226, 232, 240, 0.9)'
          }}
        >
          <div style={{ display: 'flex', gap: '3px' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
          <span style={{ fontSize: '0.86rem', fontWeight: '800', color: 'var(--navy)' }}>
            4.9 / 5.0
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
            • 350+ Google Reviews
          </span>
        </div>

        {/* Navigation Arrows & Counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            fontSize: '0.84rem',
            fontWeight: '800',
            color: 'var(--navy)',
            marginRight: '6px',
            backgroundColor: '#ffffff',
            padding: '6px 14px',
            borderRadius: '9999px',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
          }}>
            {String(activeRealIndex + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>

          <button
            onClick={prevSlide}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              color: 'var(--navy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.06)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.transform = 'scale(1.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = 'var(--navy)';
              e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Previous Review"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              color: 'var(--navy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.06)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.transform = 'scale(1.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = 'var(--navy)';
              e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Next Review"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Slider Viewport (Seamless Loop Track) */}
      <div 
        ref={containerRef}
        className="testimonial-slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          ref={trackRef}
          className="testimonial-track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: cardWidth > 0 ? `translateX(-${currentIndex * cardWidth}px)` : `translateX(-${currentIndex * 42}%)`,
            transition: isAnimated ? 'transform 0.48s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
          }}
        >
          {loopedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="testimonial-card-slide"
            >
              {/* Watermark Quote Icon */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                color: 'rgba(2, 132, 199, 0.08)',
                pointerEvents: 'none'
              }}>
                <Quote size={56} />
              </div>

              {/* Card Top: Stars & Verified Badge */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={17} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>

                  <span style={{
                    backgroundColor: '#ecfdf5',
                    color: '#059669',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontWeight: '800',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    <CheckCircle2 size={13} /> {item.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p style={{
                  fontSize: '0.96rem',
                  color: 'var(--text-body)',
                  lineHeight: '1.7',
                  marginBottom: '24px',
                  position: 'relative',
                  zIndex: 2,
                  fontWeight: '500'
                }}>
                  "{item.text}"
                </p>
              </div>

              {/* Card Bottom: Author Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                paddingTop: '18px',
                borderTop: '1px solid #f1f5f9',
                position: 'relative',
                zIndex: 2
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #e0f2fe',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div style={{
                    fontSize: '1.02rem',
                    fontWeight: '800',
                    color: 'var(--navy)',
                    lineHeight: '1.2'
                  }}>
                    {item.name}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginTop: '2px'
                  }}>
                    {item.role} • <span style={{ color: 'var(--primary)', fontWeight: '700' }}>{item.doctor}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Slide Pagination Indicator Dots */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        marginTop: '12px'
      }}>
        {testimonialsData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsAnimated(true);
              setCurrentIndex(count + idx);
            }}
            style={{
              height: '8px',
              width: activeRealIndex === idx ? '28px' : '8px',
              borderRadius: '9999px',
              backgroundColor: activeRealIndex === idx ? 'var(--primary)' : '#cbd5e1',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
