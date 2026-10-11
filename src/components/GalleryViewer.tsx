'use client';
import { useState, useEffect, useRef } from 'react';
import { galleryData, galleryCategories } from '@/data/galleryData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

function GalleryCard({ item, onOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="luxury-gallery-card"
      style={{
        display: 'flex',
        width: '100%',
        aspectRatio: '1 / 1',
        position: 'relative',
        cursor: 'pointer'
      }}
      role="button"
      tabIndex={0}
      aria-label="Click to enlarge photo"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <div className="gallery-img-wrap" style={{ width: '100%', height: '100%', position: 'relative' }}>
        <img
          src={item.src}
          alt={item.alt || 'Simply Smilez Dental Clinic Gallery'}
        />

        {/* Subtle Frosted Hover Zoom Indicator (No text, pure icon) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(7, 21, 41, 0.25)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.25s ease',
          pointerEvents: 'none'
        }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
            transform: isHovered ? 'scale(1)' : 'scale(0.85)',
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <Maximize2 size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryViewer({ limit = null }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwiping = useRef(false);

  const filteredItems = galleryData.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : displayItems.length - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < displayItems.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
    isSwiping.current = false;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
  };

  // Close lightbox on Escape key, navigate on Arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev + 1) % displayItems.length);
      }
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev - 1 + displayItems.length) % displayItems.length);
      }
    };
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, displayItems.length]);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % displayItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + displayItems.length) % displayItems.length);
  };

  return (
    <div>
      {/* Category Filter Pills (if not limited) */}
      {!limit && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '36px'
        }}>
          {galleryCategories.map((cat, idx) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: '600',
                  border: isActive ? '1.5px solid var(--primary)' : '1.5px solid var(--border-subtle)',
                  backgroundColor: isActive ? 'var(--primary)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--navy)',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 4px 12px rgba(2, 132, 199, 0.3)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Desktop & Tablet Grid */}
      <div className="gallery-2x3-grid">
        {displayItems.map((item, idx) => (
          <GalleryCard
            key={item.id}
            item={item}
            onOpen={() => openLightbox(idx)}
          />
        ))}
      </div>

      {/* Mobile Only: Touch-Friendly Gallery Carousel Slider */}
      <div className="mobile-gallery-slider-container" style={{ position: 'relative', width: '100%' }}>
        {/* Navigation Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '8px',
          marginBottom: '14px',
          padding: '0 4px'
        }}>
          <button
            onClick={prevSlide}
            aria-label="Previous Photo"
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
            aria-label="Next Photo"
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

        {/* 3D Coverflow Stage with Peeked Neighbor Cards */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            padding: '12px 0 20px 0',
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
              transform: `translateX(calc(8% - ${currentIndex * 84}%))`,
              transition: 'transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {displayItems.map((item, idx) => {
              const isCurrent = idx === currentIndex;
              const isAdjacent = Math.abs(idx - currentIndex) === 1;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    // If not swiping, open lightbox directly on click
                    if (!isSwiping.current) {
                      openLightbox(idx);
                    }
                  }}
                  style={{
                    flex: '0 0 84%',
                    width: '84%',
                    maxWidth: '84%',
                    boxSizing: 'border-box',
                    padding: '0 8px',
                    transform: isCurrent
                      ? 'scale(1) translateZ(0)'
                      : 'scale(0.91) translateY(8px)',
                    opacity: isCurrent ? 1 : isAdjacent ? 0.72 : 0.4,
                    zIndex: isCurrent ? 10 : 2,
                    transition: 'transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
                    cursor: 'pointer'
                  }}
                >
                  <GalleryCard
                    item={item}
                    onOpen={() => openLightbox(idx)}
                  />
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
          marginTop: '14px',
          overflowX: 'auto',
          padding: '4px'
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
            boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(56, 189, 248, 0.25)',
            maxWidth: '100%',
            overflowX: 'auto'
          }}>
            {displayItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to photo ${idx + 1}`}
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
                  flexShrink: 0,
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  touchAction: 'manipulation'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(7, 21, 41, 0.96)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          {/* Close button (top right of screen) */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 20,
              transition: 'all 0.2s ease'
            }}
            aria-label="Close Lightbox"
          >
            <X size={22} />
          </button>

          {/* Clean Image Container - ZERO ARROWS ON THE IMAGE */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '850px',
              width: '100%',
              maxHeight: '76vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#030a14',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 30px 70px rgba(0, 0, 0, 0.7)',
              border: '1.5px solid rgba(56, 189, 248, 0.35)',
              position: 'relative'
            }}
          >
            <img
              src={displayItems[lightboxIndex].src}
              alt="Simply Smilez Dental Clinic Gallery Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>

          {/* Bottom Navigation Bar - OUTSIDE AND BELOW THE IMAGE */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '18px',
              zIndex: 20
            }}
          >
            <button
              onClick={prevImage}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              aria-label="Previous Photo"
            >
              <ChevronLeft size={18} /> Prev
            </button>

            <span style={{
              color: '#38bdf8',
              fontSize: '0.86rem',
              fontWeight: '800',
              padding: '6px 14px',
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              borderRadius: '9999px',
              border: '1px solid rgba(56, 189, 248, 0.25)'
            }}>
              {lightboxIndex + 1} / {displayItems.length}
            </span>

            <button
              onClick={nextImage}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '9999px',
                backgroundColor: 'var(--primary)',
                border: '1px solid var(--primary)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)',
                transition: 'all 0.2s ease'
              }}
              aria-label="Next Photo"
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
