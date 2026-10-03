import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import WorkSection from './components/WorkSection';
import Capabilities from './components/Capabilities';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-brand-black flex flex-col overflow-x-hidden">
      {/* 1. Minimal Clean Navbar */}
      <Navbar />

      {/* 2. Minimal Hero with Ribbon & Clean Balanced Floating Visuals */}
      <Hero />

      {/* 3. Editorial Manifesto Statement */}
      <Manifesto />

      {/* 4. Portfolio Centerpiece: Work Section with 3 Smooth Carousels */}
      <WorkSection />

      {/* 5. Technical Capabilities ("What I Can Build") */}
      <Capabilities />

      {/* 6. Services ("What I Do") */}
      <Services />

      {/* 7. Process ("From Idea -> Output") */}
      <Process />

      {/* 8. About Section with Authenticated Social Proof */}
      <About />

      {/* 9. Final High-Impact CTA */}
      <FinalCTA />

      {/* 10. Minimal Clean Footer */}
      <Footer />
    </div>
  );
}
