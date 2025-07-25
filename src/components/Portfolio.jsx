import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lightbox from './Lightbox';
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
// Modeling Portrait (first 9)
import mP1 from '../assets/Modeling/Portrait/IMG_8695.JPEG';
import mP2 from '../assets/Modeling/Portrait/IMG_0976.JPEG';
import mP3 from '../assets/Modeling/Portrait/IMG_5376.JPEG';
import mP4 from '../assets/Modeling/Portrait/IMG_6705.JPG';
import mP5 from '../assets/Modeling/Portrait/IMG_6717.JPG';
import mP6 from '../assets/Modeling/Portrait/IMG_5474.JPG';
import mP7 from '../assets/Modeling/Portrait/IMG_5472.JPEG';
import mP8 from '../assets/Modeling/Portrait/IMG_5483.JPEG';
import mP9 from '../assets/Modeling/Portrait/IMG_5476.JPEG';

const commercialImages = [cP1, cP2, cP3, cP4, cP5, cP6, cP7, cP8, cP9];
const modelingImages = [mP1, mP2, mP3, mP4, mP5, mP6, mP7, mP8];

const tabs = [
  { id: 'modeling', label: 'Modeling' },
  { id: 'commercial', label: 'Commercial' }
];

function Portfolio() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('modeling');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const getImages = () => {
    if (activeTab === 'commercial') return commercialImages;
    return modelingImages;
  };

  const handleImageClick = idx => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const handlePrev = () => setLightboxIndex(i => Math.max(0, i - 1));
  const handleNext = () => setLightboxIndex(i => Math.min(getImages().length - 1, i + 1));

  // For Commercial, use only portrait images (first 8)
  const commercialPortraits = [cP1, cP2, cP4, cP5, cP7, cP8, cP9, cP6]; // 8 portrait images (replace with actual portrait images as needed)
  const commercialLandscapes = [cP3, cP6]; // example landscape images
  const commercialPattern = [
    { type: 'portrait', images: [cP1, cP2] },
    { type: 'landscape', images: [cP3] },
    { type: 'portrait', images: [cP4, cP5] },
    { type: 'landscape', images: [cP6] },
  ];

  return (
    <section id="portfolio" style={{ background: '#fff', padding: '3rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          marginBottom: '0.5rem',
          color: '#18181b'
        }}>
          Portfolio
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#555', 
          fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
          marginBottom: '2.5rem' 
        }}>
          Showcasing my work across different categories
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '2.5rem',
          flexWrap: 'wrap'
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: 'clamp(0.5rem, 2vw, 0.7rem) clamp(1.5rem, 4vw, 2.2rem)',
                borderRadius: '2rem',
                border: 'none',
                background: activeTab === tab.id ? '#d6b36a' : '#f3f3f3',
                color: activeTab === tab.id ? '#222' : '#555',
                fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                cursor: 'pointer',
                boxShadow: activeTab === tab.id ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Conditional layout: Commercial = grid, Modeling = masonry */}
        {activeTab === 'commercial' ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            marginBottom: '2.5rem',
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {commercialPortraits.map((img, idx) => (
              <div key={idx} style={{
                borderRadius: '1.2rem',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                background: '#eee',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }} onClick={() => handleImageClick(commercialImages.indexOf(img))}>
                <img
                  src={img}
                  alt={`Portfolio Portrait`}
                  style={{
                    width: '100%',
                    height: 320,
                    objectFit: 'cover',
                    display: 'block',
                    aspectRatio: '3/4',
                    background: '#fff',
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            columnCount: 2,
            columnGap: '1.5rem',
            marginBottom: '2.5rem',
            width: '100%',
            maxWidth: 900, // Limit the width so columns don't get wider
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {getImages().map((img, idx) => (
              <div key={idx} style={{ 
                breakInside: 'avoid', 
                marginBottom: '1.5rem',
                borderRadius: '1.2rem', 
                overflow: 'hidden', 
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)', 
                background: '#eee',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }} onClick={() => handleImageClick(idx)}>
                <img 
                  src={img} 
                  alt={`Portfolio ${idx + 1}`} 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                    aspectRatio: img.toLowerCase().includes('landscape') ? '4/3' : '3/4',
                    background: '#fff'
                  }} 
                />
              </div>
            ))}
          </div>
        )}
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={() => navigate('/portfolio')}
            style={{
              padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1.5rem, 4vw, 2rem)',
              background: '#bfa14a',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
          >
            More
          </button>
        </div>
        <Lightbox 
          images={getImages()} 
          open={lightboxOpen} 
          currentIndex={lightboxIndex} 
          onClose={() => setLightboxOpen(false)} 
          onPrev={handlePrev} 
          onNext={handleNext} 
        />
      </div>
    </section>
  );
}

export default Portfolio; 