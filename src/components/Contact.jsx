import React, { useState } from 'react';

function Contact() {
  const [showShare, setShowShare] = useState(false);
  const portfolioUrl = typeof window !== 'undefined' ? window.location.origin : 'https://nardosportfolio.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioUrl);
    alert('Portfolio link copied!');
  };

  return (
    <section id="contact" style={{ background: '#f7f9fa', padding: '4rem 0' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#18181b', textAlign: 'center' }}>Get In Touch</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', width: '100%' }}>
            <div style={{ marginBottom: '1rem' }}><strong>Email:</strong> <a href="mailto:hello@nardosberhane.com" style={{ color: '#bfa14a', textDecoration: 'none' }}>hello@nardosberhane.com</a></div>
            <div style={{ marginBottom: '1rem' }}><strong>Phone:</strong> <a href="tel:+251912345678" style={{ color: '#bfa14a', textDecoration: 'none' }}>+251 912 345 678</a></div>
            <div><strong>Location:</strong> Addis Ababa, Ethiopia</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a 
              href="https://www.instagram.com/nardosberhane_/?igsh=MW5uZTdheG00NHdybw%3D%3D#" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: '#E1306C', 
                fontSize: '2rem', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="32" height="32" viewBox="0 0 448 512" fill="#E1306C" xmlns="http://www.w3.org/2000/svg">
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.36-30.36C293.19,117.36,224,115.92,224,115.92s-69.19,1.44-94.35,15.38a54,54,0,0,0-30.36,30.36C85.36,162.81,83.92,232,83.92,232s1.44,69.19,15.38,94.35a54,54,0,0,0,30.36,30.36c25.16,13.94,94.35,15.38,94.35,15.38s69.19-1.44,94.35-15.38a54,54,0,0,0,30.36-30.36c13.94-25.16,15.38-94.35,15.38-94.35S362.65,162.81,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85.4-148.6a19.2,19.2,0,1,1-19.2-19.2A19.2,19.2,0,0,1,309.4,189.4Z"/>
              </svg>
            </a>
          </div>
          <button style={{ background: '#bfa14a', color: '#fff', border: 'none', borderRadius: '2rem', padding: '0.8rem 2.2rem', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', marginTop: '1rem' }} onClick={() => setShowShare(true)}>Share My Portfolio</button>
        </div>
      </div>
      {/* Share Modal */}
      {showShare && (
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
              onClick={() => setShowShare(false)}
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
            <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 16 }}>Share My Portfolio</h3>
            <div style={{ marginBottom: 24 }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                background: '#f5f5f5',
                padding: '8px 12px',
                borderRadius: '8px',
                marginBottom: '16px'
              }}>
              <input 
                value={portfolioUrl}
                readOnly
                  style={{ 
                    flex: 1,
                    padding: '8px',
                    border: 'none',
                    background: 'transparent',
                    fontSize: '0.95rem',
                    color: '#444'
                  }}
              />
                <button 
                  onClick={handleCopy} 
                  style={{ 
                    background: '#bfa14a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px 16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Copy
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: 16 }}>
              <a 
                href={`mailto:?subject=Check%20out%20Nardos%20Berhane's%20Portfolio&body=${encodeURIComponent(portfolioUrl)}`}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#EA4335',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href={`https://wa.me/?text=Check%20out%20this%20model%20portfolio:%20${encodeURIComponent(portfolioUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21L4.7 16.3C3.6 14.3 3.3 12 3.9 9.8C4.5 7.6 5.9 5.7 7.8 4.3C9.7 3 12 2.3 14.3 2.5C16.6 2.7 18.7 3.7 20.3 5.3C21.9 7 22.8 9.1 22.9 11.4C23 13.7 22.3 16 20.9 17.9C19.5 19.8 17.6 21.2 15.4 21.8C13.2 22.4 10.9 22.1 8.9 21L3 21ZM9.2 18.8C11 19.8 13.1 20 15 19.4C16.9 18.8 18.5 17.5 19.5 15.8C20.5 14 20.8 12 20.3 10C19.8 8.1 18.6 6.4 16.9 5.3C15.2 4.2 13.1 3.7 11.1 4C9.1 4.3 7.3 5.3 6 6.7C4.7 8.2 4 10.1 4 12C4 13.8 4.5 15.5 5.5 17L4 20L9.2 18.8Z" fill="currentColor"/>
                  <path d="M16.8 13.5C16.5 13.3 15.9 13 15.2 12.7C14.5 12.4 13.9 12.1 13.7 12C13.4 11.8 13.1 11.8 12.8 12.2C12.5 12.6 12 13.1 11.8 13.4C11.6 13.7 11.4 13.7 11.1 13.6C10.8 13.4 10.1 13.2 9.3 12.5C8.6 11.9 8.2 11.2 8 10.9C7.8 10.6 8 10.4 8.2 10.2C8.4 10 8.6 9.7 8.8 9.5C9 9.3 9.1 9 9.2 8.8C9.3 8.6 9.3 8.4 9.2 8.2C9.1 8 8.2 6.4 7.9 5.8C7.6 5.2 7.3 5.3 7.1 5.3C6.9 5.3 6.6 5.3 6.3 5.3C6 5.3 5.5 5.4 5.1 5.8C4.7 6.2 4 6.9 4 8.5C4 10.1 5.1 11.6 5.3 11.9C5.5 12.2 8.2 16.2 12.1 17.9C13 18.3 13.7 18.5 14.3 18.7C15.2 19 16.1 18.9 16.8 18.8C17.6 18.7 18.9 18.1 19.2 17.4C19.5 16.7 19.5 16.1 19.4 15.9C19.3 15.7 19 15.6 18.6 15.4C18.2 15.2 16.8 14.5 16.4 14.4C16 14.3 15.8 14.2 15.5 14.6C15.2 15 14.7 15.5 14.5 15.8C14.3 16.1 14 16.1 13.7 16C13.4 15.9 12.4 15.5 11.2 14.4C10.3 13.6 9.7 12.6 9.5 12.2C9.3 11.8 9.5 11.6 9.7 11.4C9.9 11.2 10.1 10.9 10.3 10.7C10.5 10.5 10.6 10.3 10.7 10C10.8 9.7 10.7 9.5 10.6 9.3C10.5 9.1 10 7.5 9.6 6.3" fill="white"/>
                </svg>
              </a>
              <a 
                href={`instagram://library?AssetPath=${encodeURIComponent(portfolioUrl)}`}
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#E1306C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  // Try to open Instagram app first
                  window.location.href = `instagram://library?AssetPath=${encodeURIComponent(portfolioUrl)}`;
                  // Fallback to web share if app doesn't open
                  setTimeout(() => {
                    window.open('https://www.instagram.com/create/story', '_blank');
                  }, 500);
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.36-30.36C293.19,117.36,224,115.92,224,115.92s-69.19,1.44-94.35,15.38a54,54,0,0,0-30.36,30.36C85.36,162.81,83.92,232,83.92,232s1.44,69.19,15.38,94.35a54,54,0,0,0,30.36,30.36c25.16,13.94,94.35,15.38,94.35,15.38s69.19-1.44,94.35-15.38a54,54,0,0,0,30.36-30.36c13.94-25.16,15.38-94.35,15.38-94.35S362.65,162.81,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85.4-148.6a19.2,19.2,0,1,1-19.2-19.2A19.2,19.2,0,0,1,309.4,189.4Z"/>
                </svg>
              </a>
            </div>
            <div style={{ fontSize: '0.95rem', color: '#888' }}>Share directly on your favorite platform!</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact; 