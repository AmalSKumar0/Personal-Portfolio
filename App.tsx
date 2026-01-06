import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DemoSection } from './components/DemoSection';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { TelemetrySection } from './components/TelemetrySection';
import { LoadingScreen } from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFading, setIsFading] = React.useState(false);

  React.useEffect(() => {
    // Logic moved to internal component timer + callback
  }, []);

  const handleLoadingComplete = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <div className="min-h-screen bg-cream dark:bg-tech-black font-sans overflow-x-hidden selection:bg-flow-purple selection:text-flow-dark transition-colors duration-300 animate-fade-in">
          <Navbar />
          <main>
            <Hero />
            <DemoSection />
            <TelemetrySection />
            <Features />
            <Testimonials />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;