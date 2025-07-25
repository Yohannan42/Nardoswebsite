import React from 'react';
import videoCover from '../assets/IMG_4995.jpg';
import videoCover2 from '../assets/IMG_4996.jpg';
import owlEventsCover from '../assets/IMG_5004.jpg';
import fitsUAfricaCover from '../assets/IMG_5003.jpg';
import contentMakingCover from '../assets/IMG_0976.JPEG';

const instagramReels = [
  {
    url: 'https://www.instagram.com/reel/DIa_yM5I3LG/?igsh=eXdoeDBpMm1jZXVm',
    cover: videoCover,
    alt: 'Instagram Reel 1',
    description: 'Andegna Furniture Commercial',
  },
  {
    url: 'https://www.instagram.com/reel/DJtKf8dsu8j/?igsh=d24yMGYydGJ0b2tu',
    cover: videoCover2,
    alt: 'Instagram Reel 2',
    description: 'BEU Delivery Commercial',
  },
  {
    url: 'https://www.instagram.com/reel/C9Agq1Ftq4S/?igsh=MWQ2cjFlcjk1bGVxOQ==',
    cover: videoCover2,
    alt: 'Instagram Reel 3',
    description: 'BEU Delivery Commercial',
  },
  {
    url: 'https://www.instagram.com/reel/CxLDn8ySTl6/?igsh=MXFhdHF5bXlhYjBoMw==',
    cover: owlEventsCover,
    alt: 'Instagram Reel 4',
    description: 'OWL Events',
  },
  {
    url: 'https://www.instagram.com/reel/Cuq6xyVIaUy/?igsh=MXV4dzlha3B6NXp1cA==',
    cover: fitsUAfricaCover,
    alt: 'Instagram Reel 5',
    description: 'Fits_U_Africa Commercial',
  },
  {
    url: 'https://www.instagram.com/reel/C8KsLxuocxd/?igsh=OTlyYW9xNWthZ2xr',
    cover: contentMakingCover,
    alt: 'Instagram Reel 6',
    description: 'Content making video',
  },
  {
    url: 'https://www.instagram.com/reel/DJtD8lOIXbv/?igsh=MTV1eWF3NTRlNTg2YQ==',
    cover: videoCover,
    alt: 'Instagram Reel 7',
    description: 'Andegna Furniture Commercial',
  },
];

function Videos() {
  return (
    <section id="videos" style={{ background: '#f7f9fa', padding: '4rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#18181b', textAlign: 'center' }}>Videos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {instagramReels.map((reel, idx) => (
            <div key={idx}>
              <div
                style={{ position: 'relative', borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', background: '#eee', cursor: 'pointer' }}
                onClick={() => window.open(reel.url, '_blank')}
              >
                <img src={reel.cover} alt={reel.alt ? reel.alt : 'Instagram Reel video cover'} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="28" stroke="white" strokeWidth="3" fill="rgba(255,255,255,0.15)" />
                    <polygon points="25,20 25,40 42,30" fill="white" fillOpacity="0.85" />
                  </svg>
                </div>
                <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(255,255,255,0.85)', color: '#E1306C', fontWeight: 700, fontSize: '1.3rem', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="22" height="22" viewBox="0 0 448 512" fill="#E1306C" xmlns="http://www.w3.org/2000/svg"><path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.36-30.36C293.19,117.36,224,115.92,224,115.92s-69.19,1.44-94.35,15.38a54,54,0,0,0-30.36,30.36C85.36,162.81,83.92,232,83.92,232s1.44,69.19,15.38,94.35a54,54,0,0,0,30.36,30.36c25.16,13.94,94.35,15.38,94.35,15.38s69.19-1.44,94.35-15.38a54,54,0,0,0,30.36-30.36c13.94-25.16,15.38-94.35,15.38-94.35S362.65,162.81,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85.4-148.6a19.2,19.2,0,1,1-19.2-19.2A19.2,19.2,0,0,1,309.4,189.4Z"/></svg>
                </div>
              </div>
              <div style={{ marginTop: 12, textAlign: 'center', color: '#222', fontSize: '1.05rem', fontWeight: 500 }}>{reel.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videos; 