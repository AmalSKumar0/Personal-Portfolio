import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Code, Terminal } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export const FeaturedProjects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const targetScrollLeft = useRef(0);
  const isAnimating = useRef(false);
  const navigate = useNavigate();

  const smoothScrollTo = (target: number) => {
    if (!scrollRef.current) return;
    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    targetScrollLeft.current = Math.max(0, Math.min(target, maxScroll));
    
    if (!isAnimating.current) {
      isAnimating.current = true;
      const animate = () => {
        if (!scrollRef.current) {
          isAnimating.current = false;
          return;
        }
        const current = scrollRef.current.scrollLeft;
        const diff = targetScrollLeft.current - current;
        // Damping factor - creates a luxurious lag / smooth slide effect
        const step = diff * 0.08;
        
        if (Math.abs(step) > 0.5) {
          scrollRef.current.scrollLeft += step;
          requestAnimationFrame(animate);
        } else {
          scrollRef.current.scrollLeft = targetScrollLeft.current;
          isAnimating.current = false;
        }
      };
      requestAnimationFrame(animate);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Sync on button click if user manually scrolled in the meantime
      if (targetScrollLeft.current !== scrollRef.current.scrollLeft && !isAnimating.current) {
        targetScrollLeft.current = scrollRef.current.scrollLeft;
      }
      const scrollAmount = direction === 'left' ? -420 : 420;
      smoothScrollTo(targetScrollLeft.current + scrollAmount);
    }
  };

  // Convert vertical wheel to smooth horizontal scroll with inertia
  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const isAtStart = el.scrollLeft <= 0;
      const isAtEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;

      if (e.deltaY !== 0) {
        // If scrolling left at start, or right at end, let normal page scrolling happen
        if ((isAtStart && e.deltaY < 0) || (isAtEnd && e.deltaY > 0)) {
          return;
        }

        e.preventDefault();
        
        // Sync starting point if scroll position changed since last wheel event
        if (!isAnimating.current) {
          targetScrollLeft.current = el.scrollLeft;
        }

        const sensitivity = 1.2;
        const newTarget = targetScrollLeft.current + e.deltaY * sensitivity;
        smoothScrollTo(newTarget);
      }
    };

    const handleScroll = () => {
      if (!isAnimating.current) {
        targetScrollLeft.current = el.scrollLeft;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Entry animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-cream via-lavender-50/20 to-cream dark:from-tech-black dark:via-tech-dark/40 dark:to-tech-black py-24 px-4 sm:px-8 border-t border-lavender-200/20 dark:border-white/5 transition-colors duration-500 relative overflow-hidden z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-lavender-200/20 dark:bg-lavender-900/[0.04] blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-neon-purple/5 dark:bg-neon-purple/[0.03] blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Section Header with Scrolling Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-neon-purple dark:text-lavender-300 uppercase font-brand">
              MY PROJECTS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 dark:text-white font-bold italic mt-3 tracking-tight leading-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan dark:from-neon-purple dark:to-lavender-300 not-italic font-sans font-extrabold">Systems</span> & Applications
            </h2>
          </div>
          
          {/* Scroll Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-lavender-100/40 dark:bg-white/5 border border-lavender-300/40 dark:border-white/10 text-lavender-800 dark:text-gray-200 hover:bg-lavender-200/50 dark:hover:bg-white/10 transition-all shadow-sm active:scale-95 cursor-pointer backdrop-blur-md"
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-lavender-100/40 dark:bg-white/5 border border-lavender-300/40 dark:border-white/10 text-lavender-800 dark:text-gray-200 hover:bg-lavender-200/50 dark:hover:bg-white/10 transition-all shadow-sm active:scale-95 cursor-pointer backdrop-blur-md"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex gap-8 overflow-x-auto pb-10 pt-4 px-2 no-scrollbar snap-x snap-mandatory md:snap-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => {
            const yearShort = project.date ? project.date.slice(-2) : '25';

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="w-[280px] sm:w-[380px] shrink-0 snap-start"
              >
                <div 
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) {
                      return;
                    }
                    navigate(`/projects/${project.id}`);
                  }}
                  className="rounded-[2.5rem] border border-lavender-300/40 dark:border-lavender-500/10 bg-lavender-50/20 dark:bg-tech-dark/50 backdrop-blur-xl p-5 md:p-6 flex flex-col justify-between h-[385px] sm:h-[450px] shadow-lg hover:shadow-xl hover:border-lavender-400/60 dark:hover:border-lavender-400/25 transition-all duration-300 relative group overflow-hidden cursor-pointer"
                >
                  
                  {/* Subtle Lavender Glow on Card Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lavender-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Card Header Row */}
                      <div className="flex justify-between items-center mb-4">
                        {/* Left Badge: Role/Category with Lavender Theme */}
                        <span className="bg-lavender-900 dark:bg-lavender-400/20 text-white dark:text-lavender-200 border border-lavender-700/30 dark:border-lavender-400/30 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase shadow-sm">
                          {project.role.split(' ')[0] || 'DEV'}
                        </span>

                        {/* Right Badge: Split Pill Layout inspired by the mock image */}
                        <div className="flex items-center border border-lavender-200/50 dark:border-lavender-500/15 rounded-full overflow-hidden text-[10px] font-bold tracking-wider font-mono shadow-sm bg-lavender-50/30 dark:bg-white/5">
                          <span className="bg-lavender-900 dark:bg-white/10 text-white dark:text-gray-200 px-2.5 py-1 uppercase text-[9px]">
                            YEAR
                          </span>
                          <span className="bg-lavender-50/50 dark:bg-tech-gray text-lavender-900 dark:text-white px-2.5 py-1 text-[9px] border-l border-lavender-200/50 dark:border-white/10">
                            {yearShort}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl font-bold font-sans text-gray-900 dark:text-white tracking-tight leading-tight group-hover:text-neon-purple dark:group-hover:text-lavender-300 transition-colors duration-300 mb-1.5">
                        {project.title}
                      </h3>
                      <p className="text-[13px] sm:text-sm text-lavender-900/60 dark:text-lavender-200/60 font-sans leading-relaxed line-clamp-2 h-[42px] overflow-hidden">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Image with rounded corners and bottom stack overlay */}
                    <div className="relative w-full aspect-[16/13.5] rounded-[2rem] overflow-hidden mt-3 mb-0 border border-lavender-200/45 dark:border-lavender-500/15 shadow-md">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      {/* Gradient shadow inside the image to ensure text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                      {/* Location-like overlay showing tech stack */}
                      <div className="absolute bottom-4 left-4 bg-lavender-50/70 dark:bg-tech-dark/70 backdrop-blur-md border border-lavender-200/40 dark:border-lavender-500/15 rounded-2xl py-1.5 px-3 flex items-center gap-2 shadow-md">
                        <Terminal size={12} className="text-lavender-600 dark:text-lavender-300" />
                        <span className="text-[10px] font-bold text-gray-800 dark:text-white tracking-wide uppercase font-mono">
                          {project.tags.slice(0, 2).join(' • ')}
                        </span>
                      </div>

                      {/* Action Links Overlay Top Right */}
                      <div className="absolute top-4 right-4 flex gap-1.5">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-lavender-50/90 hover:bg-white text-lavender-900 hover:text-neon-purple rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
                          title="View Code"
                        >
                          <Github size={14} />
                        </a>
                        <Link
                          to={`/projects/${project.id}`}
                          className="p-2 bg-lavender-50/90 hover:bg-white text-lavender-900 hover:text-neon-purple rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
                          title="Project Details"
                        >
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA Link - Glassmorphic button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-lavender-100/40 dark:bg-white/5 border border-lavender-300/50 dark:border-white/10 text-lavender-900 dark:text-white rounded-full font-bold hover:bg-lavender-200/50 dark:hover:bg-white/10 backdrop-blur-md shadow-md hover:shadow-lg hover:scale-[1.03] transition-all cursor-pointer group"
          >
            <span>View All Projects</span>
            <Code size={16} className="text-neon-purple dark:text-lavender-300 group-hover:rotate-12 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
