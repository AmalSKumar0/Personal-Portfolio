import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Mountain, 
  Compass, 
  Heart, 
  Palette, 
  Home 
} from 'lucide-react';

const companies = [
  { 
    name: 'Naturals', 
    icon: Leaf,
    colorClass: 'text-purple-500 dark:text-purple-400',
    fontClass: 'font-serif italic font-semibold text-xl tracking-tight'
  },
  { 
    name: 'TOURS OF GEORGIA', 
    icon: Mountain,
    colorClass: 'text-pink-500 dark:text-pink-400',
    fontClass: 'font-sans font-bold text-sm tracking-[0.2em]'
  },
  { 
    name: 'THE NAVIGANS', 
    icon: Compass,
    colorClass: 'text-violet-500 dark:text-violet-400',
    fontClass: 'font-mono font-medium text-sm tracking-widest'
  },
  { 
    name: 'Hope & Heal', 
    icon: Heart,
    colorClass: 'text-rose-500 dark:text-rose-400',
    fontClass: 'font-sans font-medium text-lg tracking-tight'
  },
  { 
    name: 'HOC Art Cafe', 
    icon: Palette,
    colorClass: 'text-indigo-500 dark:text-indigo-400',
    fontClass: 'font-display font-extrabold text-base tracking-normal'
  },
  { 
    name: 'ZINDA EXTERIORS', 
    icon: Home,
    colorClass: 'text-fuchsia-500 dark:text-fuchsia-400',
    fontClass: 'font-brand font-semibold text-xs tracking-[0.25em]'
  }
];

export const CompaniesRibbon: React.FC = () => {
  // Triple the array to ensure full width coverage for seamless reverse scrolling
  const listItems = [...companies, ...companies, ...companies];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full bg-gradient-to-b from-cream via-purple-50/20 to-cream dark:from-tech-black dark:via-purple-950/10 dark:to-tech-black py-16 md:py-20 flex flex-col justify-center overflow-hidden relative border-t border-b border-gray-200/40 dark:border-white/5 transition-all duration-500"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Heading */}
      <div className="text-center mb-10 md:mb-12 relative z-10 px-6">
        <h3 className="font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase">
          COMPANIES I HAVE WORKED WITH
        </h3>
      </div>

      {/* Side Fade Gradients for visual blend */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-cream dark:from-tech-black to-transparent z-10 pointer-events-none transition-colors duration-500" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-cream dark:from-tech-black to-transparent z-10 pointer-events-none transition-colors duration-500" />

      {/* Sliding Marquee Track */}
      <div className="flex w-[200%] md:w-max relative z-10 select-none group">
        
        {/* Left-to-right scrolling marquee */}
        <div className="flex items-center gap-12 md:gap-16 px-6 animate-infinite-scroll-reverse group-hover:paused">
          {listItems.map((company, index) => {
            const Icon = company.icon;
            return (
              <div 
                key={`company-1-${index}`} 
                className="flex items-center gap-3.5 opacity-40 hover:opacity-100 transition-all duration-300 transform hover:scale-105 group/item cursor-default"
              >
                <div className={`p-2 bg-white/40 dark:bg-tech-gray/40 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-white/10 ${company.colorClass} shadow-sm group-hover/item:border-neon-purple/20 dark:group-hover/item:border-neon-cyan/20 transition-all duration-300`}>
                  <Icon size={20} className="group-hover/item:rotate-12 transition-transform duration-300" />
                </div>
                <span className={`text-gray-700 dark:text-gray-300 group-hover/item:text-gray-950 dark:group-hover/item:text-white transition-colors duration-300 ${company.fontClass}`}>
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
};

export default CompaniesRibbon;
