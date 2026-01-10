import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      <div className="bg-white/90 dark:bg-tech-black/90 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-sm rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-4 md:gap-12 max-w-4xl mx-auto transition-colors duration-300">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* Updated: Logo background to match the dark status badge */}
          <span className="font-bold text-gray-900 dark:text-white tracking-tight text-xl transition-colors duration-300">
            Amal S Kumar
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">
          {/* Updated: Hover color to match the Blue text from your image */}
          <Link to="/about">
            <div href="#" className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
              About
            </div>
          </Link>
          <Link to="/projects">
            <div className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
              Projects
            </div>
          </Link>
          <Link to="/experience">
            <div className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
              Experience
            </div>
          </Link>
          <Link to="/contact">
            <div className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
              Contact
            </div>
          </Link>
        </div>

        {/* CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          {/* Updated: Button background to match the "STATUS" badge (Dark Navy) */}
          <Link to="/contact">
            <button className="bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-gray-200 transition-colors text-white dark:text-tech-black px-5 py-2 rounded-full text-sm font-medium">
              Hire Me
            </button>
          </Link>
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
          <Link to="/about" className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
            Skills
          </Link>
          <Link to="/experience" className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
            Experience
          </Link>
          <Link to="/projects" className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
            Projects
          </Link>
          <Link to="/contact">
            <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-tech-black px-5 py-3 rounded-full text-base font-medium mt-2 transition-colors">
              Hire Me
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};
