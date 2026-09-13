import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-wrapper bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans overflow-x-clip">
      {/* Phase 1: Fully redesigned Hero section */}
      <Hero />

      {/* Preserved sections below hero */}
      <main className="relative z-10">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
