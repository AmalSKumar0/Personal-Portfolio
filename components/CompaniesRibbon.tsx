import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { 
    name: 'HOC Art Cafe', 
    logo: '/companies/hoc.webp',
    url: 'https://www.hocartcafe.com/',
    filterClass: 'invert dark:invert-0' // White logo -> Black in light mode, White in dark mode
  },
  { 
    name: 'ZINDA EXTERIORS', 
    logo: '/companies/zinda.png',
    url: 'https://zindaexteriors.com/',
    filterClass: 'dark:invert' // Black logo -> Black in light mode, White in dark mode
  },
  { 
    name: 'TOURS OF GEORGIA', 
    logo: '/companies/toursofgeorgia.png',
    url: 'https://toursofgeorgia.com/',
    filterClass: 'dark:brightness-125' // Colorful logo -> slightly brighter in dark mode
  },
  { 
    name: 'THE NAVIGANS', 
    logo: '/companies/navigans.png',
    url: 'https://thenavigans.com/en/',
    filterClass: 'invert dark:invert-0' // White logo -> Black in light mode, White in dark mode
  },
  { 
    name: 'Hope & Heal', 
    logo: '/companies/hopendheal.png',
    url: 'https://hopeandheal.com.au/',
    filterClass: 'dark:brightness-110' // Colorful logo -> slightly brighter in dark mode
  }
];

export const CompaniesRibbon: React.FC = () => {
  // Quadruple the array to ensure full width coverage for seamless infinite scrolling
  const listItems = [...companies, ...companies, ...companies, ...companies];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full bg-gradient-to-b from-cream via-purple-50/20 to-cream dark:from-tech-black dark:via-purple-950/10 dark:to-tech-black py-10 md:py-14 flex flex-col justify-center overflow-hidden relative border-t border-b border-gray-200/40 dark:border-white/5 transition-all duration-500"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Heading */}
      <div className="text-center mb-10 relative z-10 px-6">
        <h3 className="font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase">
          COMPANIES I HAVE WORKED WITH
        </h3>
      </div>

      {/* Side Fade Gradients for visual blend */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-cream dark:from-tech-black to-transparent z-10 pointer-events-none transition-colors duration-500" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-cream dark:from-tech-black to-transparent z-10 pointer-events-none transition-colors duration-500" />

      {/* Sliding Marquee Track */}
      <div className="w-full overflow-hidden relative z-10 select-none">
        
        {/* Scrolling marquee */}
        <div className="flex items-center w-max gap-12 md:gap-20 px-6 animate-infinite-scroll-reverse hover:[animation-play-state:paused] whitespace-nowrap py-4">
          {listItems.map((company, index) => (
            <a 
              href={company.url}
              key={`company-${index}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block flex-shrink-0 transition-all duration-300 transform hover:scale-110 group/item cursor-pointer"
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                className={`h-12 md:h-16 w-auto object-contain ${company.filterClass} opacity-60 hover:opacity-100 transition-all duration-300`} 
              />
            </a>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default CompaniesRibbon;
