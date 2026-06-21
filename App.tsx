import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { Projects } from './pages/Project';
import { ViewProject } from './pages/ViewProject';
import { Experience } from './pages/Experience';
import { Resume } from './pages/Resume';
import { ThemeToggle } from './components/ThemeToggle';
import { LavenderPetals } from './components/LavenderPetals';
import { ScrollFade } from './components/ScrollFade';
import { Github, Linkedin, Mail } from 'lucide-react';

import { useVisitorTracker } from './hooks/useVisitorTracker';
import { useLenisScroll } from './hooks/useLenisScroll';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFading, setIsFading] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(false);

  // Track visitor on mount
  useVisitorTracker();

  // Initialize Lenis Smooth Scroll
  useLenisScroll();

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
        <div className="min-h-screen bg-white dark:bg-black font-sans overflow-x-hidden transition-colors duration-500">
          
          {/* Responsive Navigation Bar at the top of the viewport */}
          <div
            className={`w-full bg-white/95 dark:bg-tech-black/95 text-gray-900 dark:text-white flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden z-30 ${
              showNavbar 
                ? 'h-[260px] md:h-16 border-b border-gray-200 dark:border-white/10' 
                : 'h-0 pointer-events-none'
            }`}
          >
            <div className="w-full max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-6 md:py-0">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-base md:text-sm font-bold tracking-widest text-gray-800 dark:text-gray-200 uppercase w-full">
                <Link to="/" className="hover:text-neon-purple dark:hover:text-neon-cyan transition-colors" onClick={() => setShowNavbar(false)}>Home</Link>
                <span className="hidden md:inline text-gray-300 dark:text-gray-700 font-light">|</span>
                <Link to="/about" className="hover:text-neon-purple dark:hover:text-neon-cyan transition-colors" onClick={() => setShowNavbar(false)}>About</Link>
                <span className="hidden md:inline text-gray-300 dark:text-gray-700 font-light">|</span>
                <Link to="/projects" className="hover:text-neon-purple dark:hover:text-neon-cyan transition-colors" onClick={() => setShowNavbar(false)}>Projects</Link>
                <span className="hidden md:inline text-gray-300 dark:text-gray-700 font-light">|</span>
                <Link to="/experience" className="hover:text-neon-purple dark:hover:text-neon-cyan transition-colors" onClick={() => setShowNavbar(false)}>Experience</Link>
                <span className="hidden md:inline text-gray-300 dark:text-gray-700 font-light">|</span>
                <Link to="/contact" className="hover:text-neon-purple dark:hover:text-neon-cyan transition-colors" onClick={() => setShowNavbar(false)}>Contact</Link>
              </div>
            </div>
          </div>

          {/* Main Layout Container - shifts down and rounds top corners when menu is open */}
          <div
            className={`min-h-screen bg-cream dark:bg-tech-black transition-all duration-500 ease-in-out flex flex-col relative z-20 shadow-2xl ${
              showNavbar
                ? 'rounded-t-[32px] border-t border-gray-200/50 dark:border-white/10'
                : 'rounded-t-none'
            }`}
          >
            {/* Global Falling Petals Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[9999]">
              <LavenderPetals maxPetals={25} speedMultiplier={0.8} opacityMultiplier={0.4} />
            </div>
            {/* Global Header */}
            <header className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between relative z-30">
              {/* Left: Branding logo */}
              <Link
                to="/"
                className="text-gray-900 dark:text-white font-serif italic text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
                onClick={() => setShowNavbar(false)}
              >
                Amal S Kumar
              </Link>

              {/* Center: Menu Toggle Button */}
              <button
                onClick={() => setShowNavbar(!showNavbar)}
                className="inline-flex items-center gap-2 px-6 py-2 border border-gray-900/10 dark:border-white/10 hover:bg-gray-950/5 dark:hover:bg-white/5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase text-gray-900 dark:text-white bg-transparent transition-all cursor-pointer shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
              >
                {showNavbar ? (
                  <>
                    <span>Close</span>
                    <span className="text-[10px] md:text-xs">✕</span>
                  </>
                ) : (
                  <>
                    <span>Menu</span>
                    <span className="text-[10px] md:text-xs">☰</span>
                  </>
                )}
              </button>

              {/* Right: Theme Toggle & Social Links */}
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <div className="hidden sm:flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <a
                    href="https://www.linkedin.com/in/amal-fsd"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-neon-purple dark:hover:text-neon-cyan transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://github.com/AmalSKumar0"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-neon-purple dark:hover:text-neon-cyan transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="mailto:amalskumardev@gmail.com"
                    className="hover:text-neon-purple dark:hover:text-neon-cyan transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </header>

            <main className="flex-grow flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ViewProject />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <ScrollFade amount={0.05}>
              <Footer />
            </ScrollFade>
          </div>
        </div>
      )}
    </>
  );
};

export default App;