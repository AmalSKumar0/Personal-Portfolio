import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream pt-0 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Large CTA */}
        <div className="relative w-full rounded-[3rem] overflow-hidden mb-20 bg-black text-white p-12 md:p-24 text-center">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
             
             <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-5xl md:text-7xl font-sans font-bold mb-6 tracking-tight">Ready to build?</h2>
                 <p className="text-lg text-gray-400 mb-10">
                     Let's turn your idea into a reality. Schedule a free consultation to discuss your project requirements.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                         Start a Project <ArrowRight size={18} />
                     </button>
                     <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                         View Portfolio
                     </button>
                 </div>
             </div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-12 gap-12 border-t border-gray-200 pt-16">
             <div className="md:col-span-4">
                 <div className="font-bold text-2xl mb-6">DevStudio.</div>
                 <p className="text-gray-500 text-sm max-w-xs">
                     A premier software development agency helping businesses scale through technology.
                 </p>
             </div>
             <div className="md:col-span-2">
                 <div className="font-bold mb-6">Services</div>
                 <ul className="space-y-3 text-sm text-gray-500">
                     <li><a href="#" className="hover:text-black transition-colors">Web Development</a></li>
                     <li><a href="#" className="hover:text-black transition-colors">Mobile Apps</a></li>
                     <li><a href="#" className="hover:text-black transition-colors">Cloud Solutions</a></li>
                     <li><a href="#" className="hover:text-black transition-colors">UI/UX Design</a></li>
                 </ul>
             </div>
             <div className="md:col-span-2">
                 <div className="font-bold mb-6">Company</div>
                 <ul className="space-y-3 text-sm text-gray-500">
                     <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                     <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                     <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                     <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                 </ul>
             </div>
             <div className="md:col-span-4 flex md:justify-end">
                 <div className="space-y-6">
                    <div className="font-bold">Connect</div>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Github size={18} /></a>
                        <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Linkedin size={18} /></a>
                        <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Mail size={18} /></a>
                    </div>
                 </div>
             </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 mt-16 text-center text-xs text-gray-400">
             &copy; 2025 DevStudio Inc. All rights reserved.
        </div>

      </div>
    </footer>
  );
};