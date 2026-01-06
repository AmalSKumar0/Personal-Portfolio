import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-6 px-4 flex justify-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'
        }`}
    >
      <div className="bg-white/90 dark:bg-tech-black/90 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-sm rounded-full px-6 py-3 flex items-center gap-8 md:gap-12 max-w-4xl mx-auto transition-colors duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Updated: Logo background to match the dark status badge */}
          <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-tech-black font-bold text-sm shadow-md transition-colors duration-300">
            <Code2 size={18} />
          </div>
          <span className="font-bold text-gray-900 dark:text-white tracking-tight text-xl transition-colors duration-300">
            Amal S Kumar
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">
          {/* Updated: Hover color to match the Blue text from your image */}
          <a href="#" className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
            Skills
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
            Experience
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
            Projects
          </a>
        </div>

        {/* CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          {/* Updated: Button background to match the "STATUS" badge (Dark Navy) */}
          <button className="bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-gray-200 transition-colors text-white dark:text-tech-black px-5 py-2 rounded-full text-sm font-medium">
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 ml-auto">
          <ThemeToggle />
          <button
            className="p-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && isVisible && (
        <div className="absolute top-24 left-4 right-4 bg-white dark:bg-tech-gray border border-gray-100 dark:border-white/10 rounded-3xl p-6 md:hidden flex flex-col gap-4 shadow-xl z-50 transition-colors duration-300">
          <a href="#" className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
            Skills
          </a>
          <a href="#" className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
            Experience
          </a>
          <a href="#" className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
            Projects
          </a>
          <button className="bg-slate-900 dark:bg-white text-white dark:text-tech-black px-5 py-3 rounded-full text-base font-medium mt-2 transition-colors">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};