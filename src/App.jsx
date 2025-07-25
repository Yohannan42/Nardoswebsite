import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WorkExperiencePage from './pages/WorkExperiencePage';
import PortfolioPage from './pages/PortfolioPage';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-experience" element={<WorkExperiencePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
