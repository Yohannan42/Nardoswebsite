import React, { useState } from 'react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.2rem 2rem',
      background: '#fff',
      borderBottom: '1px solid #eee',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#18181b' }}>Nardos Berhane</div>
      
      {/* Desktop Menu */}
      <div style={{ 
        display: 'flex', 
        gap: '2.5rem', 
        fontSize: '1.1rem',
        '@media (max-width: 768px)': {
          display: 'none'
        }
      }}>
        <a href="#home" style={{ color: '#555', textDecoration: 'none' }}>Home</a>
        <a href="#about" style={{ color: '#555', textDecoration: 'none' }}>About</a>
        <a href="#portfolio" style={{ color: '#555', textDecoration: 'none' }}>Portfolio</a>
        <a href="#videos" style={{ color: '#555', textDecoration: 'none' }}>Videos</a>
        <a href="#experience" style={{ color: '#555', textDecoration: 'none' }}>Experience</a>
        <a href="#contact" style={{ color: '#555', textDecoration: 'none' }}>Contact</a>
      </div>

      {/* Mobile Hamburger Menu */}
      <button 
        onClick={toggleMenu}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0.5rem',
          '@media (max-width: 768px)': {
            display: 'block'
          }
        }}
      >
        ☰
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '@media (min-width: 769px)': {
            display: 'none'
          }
        }}>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            minWidth: '250px'
          }}>
            <button 
              onClick={toggleMenu}
              style={{
                alignSelf: 'flex-end',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
            <a href="#home" onClick={toggleMenu} style={{ color: '#555', textDecoration: 'none', fontSize: '1.2rem', padding: '0.5rem 0' }}>Home</a>
            <a href="#about" onClick={toggleMenu} style={{ color: '#555', textDecoration: 'none', fontSize: '1.2rem', padding: '0.5rem 0' }}>About</a>
            <a href="#portfolio" onClick={toggleMenu} style={{ color: '#555', textDecoration: 'none', fontSize: '1.2rem', padding: '0.5rem 0' }}>Portfolio</a>
            <a href="#videos" onClick={toggleMenu} style={{ color: '#555', textDecoration: 'none', fontSize: '1.2rem', padding: '0.5rem 0' }}>Videos</a>
            <a href="#experience" onClick={toggleMenu} style={{ color: '#555', textDecoration: 'none', fontSize: '1.2rem', padding: '0.5rem 0' }}>Experience</a>
            <a href="#contact" onClick={toggleMenu} style={{ color: '#555', textDecoration: 'none', fontSize: '1.2rem', padding: '0.5rem 0' }}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation; 