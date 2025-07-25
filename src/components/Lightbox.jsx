import React from 'react';

function Lightbox({ images = [], open, currentIndex = 0, onClose, onPrev, onNext }) {
  if (!open || !images.length) return null;
  return (
    <div className="lightbox" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ position: 'relative', background: '#fff', borderRadius: 12, padding: 20, maxWidth: 800, width: '90vw', maxHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10, background: '#bfa14a', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1rem', cursor: 'pointer', zIndex: 2 }}>Close</button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
          <button onClick={onPrev} disabled={currentIndex === 0} style={{ fontSize: 28, background: 'none', border: 'none', color: '#bfa14a', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', marginRight: 16 }}>&lt;</button>
          <img src={images[currentIndex]} alt="Portfolio" style={{ maxWidth: '70vw', maxHeight: '70vh', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }} />
          <button onClick={onNext} disabled={currentIndex === images.length - 1} style={{ fontSize: 28, background: 'none', border: 'none', color: '#bfa14a', cursor: currentIndex === images.length - 1 ? 'not-allowed' : 'pointer', marginLeft: 16 }}>&gt;</button>
        </div>
        <div style={{ marginTop: 16, color: '#888', fontSize: 16 }}>{currentIndex + 1} of {images.length}</div>
      </div>
    </div>
  );
}

export default Lightbox; 