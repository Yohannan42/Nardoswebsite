import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Commercial Portrait
import cP1 from '../assets/Commercial/Portrait/537E83C7-D45A-4B6B-A0AA-EF9F25A68472.PNG';
import cP2 from '../assets/Commercial/Portrait/IMG_0743.JPEG';
import cP3 from '../assets/Commercial/Portrait/IMG_0535.JPEG';
import cP4 from '../assets/Commercial/Portrait/IMG_0540.PNG';
import cP5 from '../assets/Commercial/Portrait/IMG_2148.PNG';
import cP6 from '../assets/Commercial/Portrait/IMG_2149.PNG';
import cP7 from '../assets/Commercial/Portrait/IMG_2150.PNG';
import cP8 from '../assets/Commercial/Portrait/IMG_2151.PNG';
import cP9 from '../assets/Commercial/Portrait/IMG_5383.PNG';
import cP10 from '../assets/Commercial/Portrait/IMG_5384.PNG';
import cP11 from '../assets/Commercial/Portrait/IMG_5393.PNG';
import cP12 from '../assets/Commercial/Portrait/IMG_5417.JPEG';
// Commercial Landscape
import cL1 from '../assets/Commercial/Landscape/7358A8B4-E813-4062-9953-36519BDFC39E.PNG';
import cL2 from '../assets/Commercial/Landscape/E4188AF8-9888-4AF8-8BE2-DBEB132BFC02.PNG';
import cL3 from '../assets/Commercial/Landscape/IMG_5192.PNG';
import cL4 from '../assets/Commercial/Landscape/IMG_5193.PNG';
import cL5 from '../assets/Commercial/Landscape/IMG_5381.PNG';
import cL6 from '../assets/Commercial/Landscape/IMG_5385.PNG';
import cL7 from '../assets/Commercial/Landscape/IMG_5386.PNG';
import cL8 from '../assets/Commercial/Landscape/IMG_5388.PNG';
import cL9 from '../assets/Commercial/Landscape/IMG_5389.PNG';
import cL10 from '../assets/Commercial/Landscape/IMG_5390.PNG';
import cL11 from '../assets/Commercial/Landscape/IMG_5391.PNG';
import cL12 from '../assets/Commercial/Landscape/IMG_5392.PNG';
import cL13 from '../assets/Commercial/Landscape/IMG_4080.JPEG';
// Modeling Portrait
import mP1 from '../assets/Modeling/Portrait/IMG_8695.JPEG';
import mP2 from '../assets/Modeling/Portrait/IMG_0976.JPEG';
import mP3 from '../assets/Modeling/Portrait/IMG_5376.JPEG';
import mP4 from '../assets/Modeling/Portrait/IMG_6705.JPG';
import mP5 from '../assets/Modeling/Portrait/IMG_6717.JPG';
import mP6 from '../assets/Modeling/Portrait/IMG_5474.JPG';
import mP7 from '../assets/Modeling/Portrait/IMG_5472.JPEG';
import mP8 from '../assets/Modeling/Portrait/IMG_5483.JPEG';
import mP9 from '../assets/Modeling/Portrait/IMG_5476.JPEG';
import mP10 from '../assets/Modeling/Portrait/IMG_5478.JPEG';
import mP11 from '../assets/Modeling/Portrait/IMG_5485.JPEG';
import mP12 from '../assets/Modeling/Portrait/IMG_5486.JPEG';
import mP13 from '../assets/Modeling/Portrait/IMG_3387.JPEG';
import mP14 from '../assets/Modeling/Portrait/IMG_5383_2.PNG';
import mP15 from '../assets/Modeling/Portrait/IMG_5385.JPG';
import mP16 from '../assets/Modeling/Portrait/IMG_5393.JPG';
import mP17 from '../assets/Modeling/Portrait/IMG_5391.JPG';
import mP18 from '../assets/Modeling/Portrait/IMG_5386.JPG';
import mP19 from '../assets/Modeling/Portrait/IMG_5394.JPG';
import mP20 from '../assets/Modeling/Portrait/IMG_5382.PNG';
import mP21 from '../assets/Modeling/Portrait/IMG_5381_2.PNG';
import mP22 from '../assets/Modeling/Portrait/IMG_5380.PNG';
import mP23 from '../assets/Modeling/Portrait/IMG_5423.JPG';
import mP24 from '../assets/Modeling/Portrait/9ED40E78-C90E-4EFA-B69C-84755018EC46.JPG';
import mP25 from '../assets/Modeling/Portrait/IMG_5421.JPEG';
import mP26 from '../assets/Modeling/Portrait/IMG_5420.JPEG';
import mP27 from '../assets/Modeling/Portrait/6448209A-31CB-46B8-869F-280B6EE765BF.JPG';
import mP28 from '../assets/Modeling/Portrait/E562885C-4561-4F25-8BAE-CC097C2BCC05.JPG';
import mP29 from '../assets/Modeling/Portrait/681938E3-4017-4FEC-9730-FB977241DA56.JPG';
import mP30 from '../assets/Modeling/Portrait/IMG_4978.jpg';
import mP31 from '../assets/Modeling/Portrait/7902F6F6-F0B5-42E5-ACC4-F7738260087A.JPG';

const allImages = [
  cP1, cP2, cP3, cP4, cP5, cP6, cP7, cP8, cP9, cP10, cP11, cP12,
  cL1, cL2, cL3, cL4, cL5, cL6, cL7, cL8, cL9, cL10, cL11, cL12, cL13,
  mP1, mP2, mP3, mP4, mP5, mP6, mP7, mP8, mP9, mP10, mP11, mP12, mP13, mP14, mP15, mP16, mP17, mP18, mP19, mP20, mP21, mP22, mP23, mP24, mP25, mP26, mP27, mP28, mP29, mP30, mP31
];

function PortfolioPage() {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', padding: '3rem 0' }}>
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')} 
        style={{ 
          position: 'fixed', 
          top: 24, 
          left: 24, 
          background: '#fff', 
          color: '#bfa14a', 
          border: 'none', 
          borderRadius: 8, 
          padding: '0.5rem 1.5rem', 
          fontWeight: 700, 
          fontSize: '1.1rem', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)', 
          cursor: 'pointer', 
          zIndex: 1100 
        }}
      >
        Back
      </button>
      {/* Page Title */}
      <h2 style={{ 
        textAlign: 'center', 
        fontSize: '2.7rem', 
        fontWeight: 800, 
        color: '#18181b', 
        marginBottom: '2.5rem', 
        letterSpacing: 1 
      }}>
        Portfolio Gallery
      </h2>
      {/* Image Grid */}
      <div style={{
        maxWidth: 800,
        margin: '0 auto',
        columnCount: 2,
        columnGap: '12px',
        padding: '0 1.5rem',
        background: 'transparent',
      }}>
        {allImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            style={{
              breakInside: 'avoid',
              marginBottom: '12px',
              borderRadius: 0,
              overflow: 'hidden',
              boxShadow: 'none',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
          >
            <img
              src={img}
              alt={`Portfolio ${idx + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
                background: 'transparent',
              }}
            />
          </div>
        ))}
      </div>
      {/* Full Screen Lightbox */}
      {lightboxOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'rgba(255,255,255,0.2)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 50,
              height: 50,
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2001
            }}
          >
            ✕
          </button>
          {/* Previous Button */}
          <button 
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 60,
              height: 60,
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2001
            }}
          >
            ‹
          </button>
          {/* Image */}
          <img 
            src={allImages[currentImageIndex]} 
            alt={`Portfolio ${currentImageIndex + 1}`}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: 8
            }}
          />
          {/* Next Button */}
          <button 
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 60,
              height: 60,
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2001
            }}
          >
            ›
          </button>
          {/* Image Counter */}
          <div style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#fff',
            fontSize: '1.1rem',
            background: 'rgba(0,0,0,0.5)',
            padding: '0.5rem 1rem',
            borderRadius: 20
          }}>
            {currentImageIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioPage; 