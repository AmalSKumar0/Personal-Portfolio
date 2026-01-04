import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DemoSection } from './components/DemoSection';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream font-sans overflow-x-hidden selection:bg-flow-purple selection:text-flow-dark">
      <Navbar />
      <main>
        <Hero />
        <DemoSection />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;