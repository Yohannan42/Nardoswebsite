import React from 'react';
import aboutImg from '../assets/Modeling/Portrait/IMG_5485.JPEG';

function About() {
  return (
    <section id="about" style={{ background: '#f7f9fa', padding: '4rem 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
          fontWeight: 700, 
          marginBottom: '1.5rem', 
          color: '#18181b',
          textAlign: 'center'
        }}>
          About Me
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'justify'
        }}>
          <p style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.15rem)', 
            color: '#555', 
            lineHeight: 1.8,
            marginBottom: '-0.5rem'
          }}>
            Hi, I'm Nardos Berhane a 23-year-old model from Addis Ababa, Ethiopia. Modeling has always been more than just a profession for me, it's a creative outlet and a way to express different sides of myself.
          </p>
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.15rem)', 
          color: '#555', 
            lineHeight: 1.8,
            marginBottom: '1rem'
        }}>
            I've had the privilege of traveling for shoots and working across various styles, including TV and social media commercials, fitness modeling, and lifestyle campaigns. Each project is a new opportunity to connect with a vision and bring it to life with energy and intention. I'm passionate about exploring both the creative and professional sides of modeling, bringing concepts to life, working with visionary teams, and continuing to grow through every experience the industry brings my way.
        </p>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem', 
          marginTop: '3rem' 
        }}>
          <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', minWidth: 120 }}>
            <h3 style={{ fontWeight: 600, color: '#222', marginBottom: 6, fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Age</h3>
            <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#bfa14a', fontWeight: 700 }}>23</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', minWidth: 120 }}>
            <h3 style={{ fontWeight: 600, color: '#222', marginBottom: 6, fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Height</h3>
            <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#bfa14a', fontWeight: 700 }}>5'2"</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', minWidth: 120 }}>
            <h3 style={{ fontWeight: 600, color: '#222', marginBottom: 6, fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Eye Color</h3>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#444' }}>Dark Brown</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', minWidth: 120 }}>
            <h3 style={{ fontWeight: 600, color: '#222', marginBottom: 6, fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Hair Color</h3>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#444' }}>Black</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 