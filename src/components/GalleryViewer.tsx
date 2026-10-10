'use client';
import { useState, useEffect } from 'react';
import { galleryData, galleryCategories } from '@/data/galleryData';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function GalleryViewer({ limit = null }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Close lightbox on Escape key
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
  }, [lightboxIndex]);

  const filteredItems = galleryData.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

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
                onClick={() => setSelectedCategory(cat)}
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

      {/* 2 Rows x 3 Columns Gallery Grid */}
      <div className={limit ? "gallery-2x3-grid" : "gallery-2x3-grid"}>
        {displayItems.map((item, idx) => {
          const numStr = String(idx + 1).padStart(2, '0');
          return (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="gallery-card-modern"
            >
              {/* Gallery Image */}
              <img
                src={item.src}
                alt={item.alt || item.title}
              />

              {/* Gradient Dark Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 21, 41, 0.92) 0%, rgba(7, 21, 41, 0.35) 45%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '20px',
                color: '#ffffff',
                zIndex: 2
              }}>
                <div style={{
                  fontSize: '0.74rem',
                  color: '#38bdf8',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Sparkles size={11} /> {item.category}
                </div>
                <div style={{
                  fontSize: '1.02rem',
                  fontWeight: '800',
                  lineHeight: '1.3',
                  color: '#ffffff',
                  letterSpacing: '-0.01em'
                }}>
                  {item.title}
                </div>
              </div>

              {/* Numeric Badge (Top Left) */}
              <div style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                backgroundColor: 'rgba(7, 21, 41, 0.75)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#38bdf8',
                fontSize: '0.74rem',
                fontWeight: '800',
                padding: '4px 10px',
                borderRadius: '9999px',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                {numStr}
              </div>

              {/* Zoom Icon Badge (Top Right) */}
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                color: 'var(--navy)',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                zIndex: 2,
                transition: 'all 0.25s ease'
              }}>
                <Maximize2 size={15} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(7, 21, 41, 0.94)',
            backdropFilter: 'blur(14px)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Close Lightbox"
          >
            <X size={22} />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Previous Photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Next Photo"
          >
            <ChevronRight size={28} />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '900px',
              width: '100%',
              maxHeight: '88vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#071529',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <div style={{
              width: '100%',
              maxHeight: '72vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#030a14',
              padding: '10px'
            }}>
              <img
                src={displayItems[lightboxIndex].src}
                alt={displayItems[lightboxIndex].title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: '10px'
                }}
              />
            </div>
            
            <div style={{
              padding: '16px 24px',
              width: '100%',
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: '#071529'
            }}>
              <div>
                <span style={{ fontSize: '0.76rem', color: '#38bdf8', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {displayItems[lightboxIndex].category}
                </span>
                <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: '800', margin: '2px 0 0 0' }}>
                  {displayItems[lightboxIndex].title}
                </h4>
              </div>
              <div style={{
                fontSize: '0.84rem',
                color: '#94a3b8',
                fontWeight: '700',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '4px 12px',
                borderRadius: '9999px'
              }}>
                {lightboxIndex + 1} / {displayItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
