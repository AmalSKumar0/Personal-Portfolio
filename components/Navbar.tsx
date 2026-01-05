import React from 'react';
import { 
  Code2, 
  Cpu, 
  Briefcase, 
  Layers, 
  Sparkles,
  User
} from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <>
      {/* =======================================
          1. DESKTOP NAVIGATION (Hidden on Mobile)
         ======================================= */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 py-6 px-4 justify-center">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-slate-200/50 rounded-full px-6 py-2.5 flex items-center gap-12 max-w-4xl mx-auto ring-1 ring-slate-100">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-md">
              <Code2 size={18} />
            </div>
            <span className="font-bold text-slate-800 tracking-tight text-lg">Amal S Kumar</span>
          </div>

          {/* Desktop Links */}
          <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
            {['Skills', 'Experience', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-slate-900 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <button className="bg-slate-900 hover:bg-slate-800 transition-all text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-slate-900/20 active:scale-95">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* =======================================
          2. MOBILE LAYOUT
         ======================================= */}

      {/* A. Mobile Top Bar (Logo Only) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 px-6 py-4 bg-gradient-to-b from-white/90 to-transparent pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto w-fit">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-sm">
            <Code2 size={18} />
          </div>
          <span className="font-bold text-slate-800 text-lg">Amal</span>
        </div>
      </div>

      {/* B. Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-xl border border-white/20 ring-1 ring-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl p-2 flex justify-between items-center px-4">
          
          {/* Nav Item: Skills */}
          <MobileNavItem icon={Cpu} label="Skills" />
          
          {/* Nav Item: Exp */}
          <MobileNavItem icon={Briefcase} label="Exp." />
          
          {/* Nav Item: Projects */}
          <MobileNavItem icon={Layers} label="Work" active />

          {/* Nav Item: About */}
          <MobileNavItem icon={User} label="About" />

          {/* Mobile CTA (Floating Action Button style) */}
          <button className="bg-slate-900 text-white p-3 rounded-xl shadow-lg shadow-slate-900/20 active:scale-90 transition-transform">
            <Sparkles size={20} />
          </button>

        </div>
      </div>
    </>
  );
};

/* Helper Component for Mobile Nav Items */
const MobileNavItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <a href="#" className="flex flex-col items-center gap-1 p-2 min-w-[3.5rem] group">
    <Icon 
      size={20} 
      className={`transition-colors ${active ? 'text-blue-600 fill-blue-50' : 'text-slate-400 group-hover:text-slate-600'}`} 
    />
    <span className={`text-[10px] font-medium transition-colors ${active ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`}>
      {label}
    </span>
  </a>
);