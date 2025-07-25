import React from 'react';
import { useNavigate } from 'react-router-dom';

const experiences = [
  { company: 'Made Films/ Zeleman Communications', role: 'Sunsilk Shampoo', description: '', date: 'Oct, 2022' },
  { company: 'Kinetic Dawn', role: 'Keste Demena Matress', description: '', date: 'Apr, 2023' },
  { company: 'Zeleman Communications', role: 'Negus Malt Drink', description: '', date: 'Apr, 2023' },
  { company: 'Age Photography', role: 'Beki\'s Design', description: '', date: 'May, 2023' },
  // ... add the rest in the new page ...
];

function WorkExperience() {
  const navigate = useNavigate();
  return (
    <section id="experience" style={{ background: '#fff', padding: '4rem 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#18181b' }}>Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.slice(0, 4).map((exp, idx) => (
            <div key={idx} style={{ background: '#f7f9fa', borderLeft: '5px solid #bfa14a', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#222', marginBottom: 6 }}>{exp.company}</h3>
                  <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: 4 }}>{exp.role}</p>
                  {exp.description && <p style={{ color: '#888', fontSize: '1rem' }}>{exp.description}</p>}
                </div>
                <div style={{ marginTop: 12, fontWeight: 600, color: '#bfa14a', fontSize: '1.1rem' }}>{exp.date}</div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => navigate('/work-experience')} style={{ marginTop: '2rem', padding: '0.75rem 2rem', background: '#bfa14a', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer' }}>More</button>
      </div>
    </section>
  );
}

export default WorkExperience; 