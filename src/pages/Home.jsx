import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Videos from '../components/Videos';
import WorkExperience from '../components/WorkExperience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';

function Home() {
  return (
    <div className="home-page">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Videos />
      <WorkExperience />
      <Contact />
      <Footer />
      <Lightbox />
    </div>
  );
}

export default Home;
