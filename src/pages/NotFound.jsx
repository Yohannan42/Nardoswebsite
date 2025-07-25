import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: 'linear-gradient(135deg, #bfa14a 0%, #a3b7be 100%)',
      color: '#fff',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist.
      </p>
      <button 
        onClick={() => navigate('/')}
        style={{
          padding: '1rem 2rem',
          background: '#fff',
          color: '#bfa14a',
          border: 'none',
          borderRadius: '0.5rem',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
