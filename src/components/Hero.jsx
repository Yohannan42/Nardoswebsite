import React, { useState } from 'react';
import heroImg from '../assets/Modeling/Portrait/IMG_5383_2.PNG';

function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `url(${heroImg}) center 20%/200% no-repeat`,
      color: '#fff',
      textAlign: 'center',
      overflow: 'hidden',
      padding: '0 1rem'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.35)',
        zIndex: 1
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 4rem)', 
          fontWeight: 'bold', 
          marginBottom: '1.2rem', 
          lineHeight: 1.1 
        }}>
          Nardos Berhane Ekubaezgi
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
          color: '#f3f3f3', 
          marginBottom: '2.5rem' 
        }}>
          Commercial & Lifestyle Model
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1.2rem',
          flexWrap: 'wrap'
        }}>
          <a href="#portfolio" style={{ 
            background: '#d6b36a', 
            color: '#222', 
            border: 'none', 
            borderRadius: '2rem', 
            padding: 'clamp(0.7rem, 2vw, 0.9rem) clamp(1.5rem, 4vw, 2.5rem)', 
            fontWeight: 600, 
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', 
            textDecoration: 'none', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            whiteSpace: 'nowrap'
          }}>
            View Portfolio
          </a>
          <button 
            onClick={() => setShowModal(true)}
            style={{ 
              background: '#fff', 
              color: '#111', 
              border: 'none', 
              borderRadius: '2rem', 
              padding: 'clamp(0.7rem, 2vw, 0.9rem) clamp(1.5rem, 4vw, 2.5rem)', 
              fontWeight: 600, 
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              whiteSpace: 'nowrap',
              cursor: 'pointer'
            }}
          >
            Book now
          </button>
        </div>
      </div>
      {/* Modal Pop-up */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{
            background: '#fff',
            color: '#222',
            borderRadius: 16,
            padding: '2.5rem 2rem 2rem 2rem',
            minWidth: 280,
            maxWidth: '90vw',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            position: 'relative',
            textAlign: 'center'
          }}>
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: 12,
                right: 16,
                background: 'none',
                border: 'none',
                fontSize: 24,
                color: '#888',
                cursor: 'pointer',
                fontWeight: 700
              }}
              aria-label="Close"
            >
              ✕
            </button>
            <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 16 }}>Book Now</h3>
            <div style={{ fontSize: '1.1rem', marginBottom: 10 }}>
              <strong>Phone:</strong> <a href="tel:+251912345678" style={{ color: '#bfa14a', textDecoration: 'none' }}>+251 912 345 678</a>
            </div>
            <div style={{ fontSize: '1.1rem' }}>
              <strong>Email:</strong> <a href="mailto:nardos@email.com" style={{ color: '#bfa14a', textDecoration: 'none' }}>nardos@email.com</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero; 