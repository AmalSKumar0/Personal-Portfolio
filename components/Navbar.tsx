import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-4 flex justify-center">
      <div className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm rounded-full px-6 py-3 flex items-center gap-8 md:gap-12 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
              <Code2 size={18} />
            </div>
            <span className="font-bold text-gray-900 tracking-tight">DevStudio</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black transition-colors">Services</a>
          <a href="#" className="hover:text-black transition-colors">Portfolio</a>
          <a href="#" className="hover:text-black transition-colors">Process</a>
          <a href="#" className="hover:text-black transition-colors">About</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <button className="bg-black hover:bg-gray-800 transition-colors text-white px-5 py-2 rounded-full text-sm font-medium">
            Start a Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-1 text-gray-600 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white border border-gray-100 rounded-3xl p-6 md:hidden flex flex-col gap-4 shadow-xl z-50">
          <a href="#" className="text-lg font-medium text-gray-600">Services</a>
          <a href="#" className="text-lg font-medium text-gray-600">Portfolio</a>
          <a href="#" className="text-lg font-medium text-gray-600">Process</a>
          <a href="#" className="text-lg font-medium text-gray-600">About</a>
          <button className="bg-black text-white px-5 py-3 rounded-full text-base font-medium mt-2">
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
};