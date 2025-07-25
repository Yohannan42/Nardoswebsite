import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lightbox from '../components/Lightbox';

const allExperiences = [
  { company: 'Made Films/ Zeleman Communications', role: 'Sunsilk Shampoo', date: 'Oct, 2022' },
  { company: 'Kinetic Dawn', role: 'Keste Demena Matress', date: 'Apr, 2023' },
  { company: 'Zeleman Communications', role: 'Negus Malt Drink', date: 'Apr, 2023' },
  { company: 'Age Photography', role: "Beki's Design", date: 'May, 2023' },
  { company: 'Mezo Production', role: 'Fitsu Sports wear', date: 'June, 2023' },
  { company: "Mekbib's Studio", role: 'Kisto App', date: 'Jul, 2023' },
  { company: 'Teret Production', role: 'Owl Events', date: 'Jul, 2023' },
  { company: 'Berry Advertising', role: 'Wallet Birr', date: 'Oct, 2023' },
  { company: "Mekbib's Studio", role: 'Hamu Design', date: 'Oct, 2023' },
  { company: 'Youthopians Advertising', role: 'Yango', date: 'Nov, 2023' },
  { company: 'Zeleman Communications', role: 'Amhara Bank', date: 'Dec, 2023' },
  { company: 'Zeleman Communications', role: 'Sunsilk Shampoo and Conditioner', date: 'Dec, 2023' },
  { company: 'Kura Production', role: 'Shak, Endeza Nech (Lead Actress)', date: 'Dec, 2023' },
];

const images = [
  'https://via.placeholder.com/300x200', // Placeholder for img1
  'https://via.placeholder.com/300x200', // Placeholder for img2
  'https://via.placeholder.com/300x200', // Placeholder for img3
  'https://via.placeholder.com/300x200', // Placeholder for img4
  'https://via.placeholder.com/300x200', // Placeholder for img5
  'https://via.placeholder.com/300x200', // Placeholder for img6
  'https://via.placeholder.com/300x200', // Placeholder for img7
];

function WorkExperiencePage() {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleView = () => {
    // Pick 3 random images for demo
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    setSelectedImages(shuffled.slice(0, 3));
    setLightboxOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #bfa14a 0%, #a3b7be 100%)', padding: '3rem 0' }}>
      <button onClick={() => navigate('/')} style={{ position: 'fixed', top: 24, left: 24, background: '#fff', color: '#bfa14a', border: 'none', borderRadius: 8, padding: '0.5rem 1.5rem', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', zIndex: 1100 }}>Back</button>
      <h2 style={{ textAlign: 'center', fontSize: '2.7rem', fontWeight: 800, color: '#fff', marginBottom: '2.5rem', letterSpacing: 1 }}>All Work Experience</h2>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {allExperiences.map((exp, idx) => (
          <div key={idx} style={{ background: 'rgba(255,255,255,0.95)', borderRadius: '1.2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#bfa14a', marginBottom: 8 }}>{exp.company}</h3>
            <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: 4 }}>{exp.role}</p>
            <div style={{ marginTop: 8, fontWeight: 600, color: '#888', fontSize: '1rem' }}>{exp.date}</div>
            <button onClick={handleView} style={{ marginTop: '1.2rem', padding: '0.5rem 1.5rem', background: '#bfa14a', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', alignSelf: 'flex-end' }}>View</button>
          </div>
        ))}
      </div>
      <Lightbox images={selectedImages} open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </div>
  );
}

export default WorkExperiencePage; 