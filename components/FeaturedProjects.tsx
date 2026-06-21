import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredList = [
  {
    id: 'copper',
    title: 'Copper',
    shortDescription: 'A custom interpreted programming language created from scratch in C, exploring compiler theory and lexical analysis.',
    tags: ['C', 'Systems Programming', 'Language Design'],
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/AmalSKumar0/Copper',
    isHighlighted: false
  },
  {
    id: 'tic-tac-toe',
    title: 'TicTacToe Multiplayer',
    shortDescription: 'Real-time multiplayer game server implementing WebSocket communication, state channels, and lobby matchmaking.',
    tags: ['React', 'WebSockets', 'Django Channels', 'Redis'],
    imageUrl: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/AmalSKumar0/tictactoe',
    isHighlighted: true
  },
  {
    id: 'momentum',
    title: 'Momentum',
    shortDescription: 'A productivity habit tracker built in PHP featuring custom analytics progress visualizations and gamification rewards.',
    tags: ['PHP', 'MySQL', 'Chart.js', 'Gamification'],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/AmalSKumar0/Momentum',
    isHighlighted: false
  }
];

export const FeaturedProjects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <section className="w-full bg-cream dark:bg-tech-black py-20 px-6 border-t border-gray-200/40 dark:border-white/5 transition-colors duration-500 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16 max-w-xl mx-auto"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-neon-purple dark:text-neon-cyan uppercase font-mono">
            FEATURED WORK
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 dark:text-white font-normal italic mt-3 tracking-tight">
            Selected Projects
          </h2>
        </motion.div>
 
        {/* Projects Grid (3 columns matching capability snapshot layout) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 w-full"
        >
          {featuredList.map((project) => {
            if (project.isHighlighted) {
              return (
                /* Card 2: Highlighted Card (Gradient background) */
                <motion.div 
                  key={project.id}
                  variants={cardVariants}
                  className="w-full h-full"
                >
                  <motion.div
                    animate={{ y: [4, -4] }}
                    transition={{ repeat: Infinity, repeatType: 'mirror', duration: 7, ease: 'easeInOut', delay: 0.2 }}
                    className="rounded-[2.5rem] bg-gradient-to-br from-neon-purple via-purple-500 to-pink-500 text-white p-6 md:p-8 flex flex-col justify-between min-h-[380px] shadow-xl hover:scale-[1.02] hover:shadow-neon-purple/20 transition-all duration-300 relative overflow-hidden group h-full border-2 border-white/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/35 opacity-40 mix-blend-overlay z-0" />
                    
                    <div className="space-y-4 relative z-10">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold font-sans tracking-tight leading-tight">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center shadow-md transition-colors"
                          >
                            <Github size={16} />
                          </a>
                          <Link 
                            to={`/projects/${project.id}`}
                            className="p-2 bg-pink-100 text-pink-600 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
                          >
                            <ArrowUpRight size={16} className="stroke-[2.5]" />
                          </Link>
                        </div>
                      </div>
                      <div className="h-px bg-white/20 w-full" />
                      <p className="text-xs text-white/80 font-sans leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-white/10 text-white border border-white/25 px-2.5 py-1 rounded-lg font-mono text-[9px] font-bold uppercase tracking-wider cursor-default select-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            }
 
            return (
              /* Cards 1 & 3: Minimal Outline Cards */
              <motion.div 
                key={project.id}
                variants={cardVariants}
                className="w-full h-full"
              >
                <motion.div
                  animate={{ y: [-4, 4] }}
                  transition={{ repeat: Infinity, repeatType: 'mirror', duration: project.id === 'copper' ? 6 : 6.5, ease: 'easeInOut', delay: project.id === 'copper' ? 0 : 0.4 }}
                  className="rounded-[2.5rem] border-2 border-purple-200/70 dark:border-white/10 bg-white/40 dark:bg-tech-dark/40 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-xl hover:border-pink-300/50 dark:hover:border-neon-cyan/30 transition-all duration-300 group h-full"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold font-sans text-gray-900 dark:text-white tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-purple-50 dark:bg-purple-950/40 text-neon-purple dark:text-neon-cyan hover:bg-neon-purple hover:text-white dark:hover:bg-neon-cyan dark:hover:text-black rounded-full flex items-center justify-center border border-purple-200/50 dark:border-white/5 shadow-sm transition-colors"
                        >
                          <Github size={16} />
                        </a>
                        <Link 
                          to={`/projects/${project.id}`}
                          className="p-2 bg-purple-50 dark:bg-purple-950/40 text-neon-purple dark:text-neon-cyan hover:bg-neon-purple hover:text-white dark:hover:bg-neon-cyan dark:hover:text-black rounded-full flex items-center justify-center border border-purple-200/50 dark:border-white/5 shadow-sm transition-colors"
                        >
                          <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                    <div className="h-px bg-purple-200/50 dark:bg-white/10 w-full" />
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-purple-50/55 dark:bg-purple-950/30 text-neon-purple dark:text-neon-cyan border border-purple-200/40 dark:border-white/5 px-2.5 py-1 rounded-lg font-mono text-[9px] font-bold uppercase tracking-wider hover:bg-purple-100/50 dark:hover:bg-purple-900/30 transition-all duration-305 cursor-default select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
 
        {/* View All CTA Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-950 dark:bg-white text-white dark:text-tech-black text-sm font-sans font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all cursor-pointer"
          >
            <span>View All Projects</span>
            <Code size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
export default FeaturedProjects;
