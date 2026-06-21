import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const backendSkills = [
  'Python', 'PHP', 'Django', 'Laravel', 'MySQL', 'PostgreSQL', 'Redis', 'Celery', 'SQL', 'REST APIs', 'System Design'
];

const frontendSkills = [
  'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite', 'Responsive UI', 'Framer Motion'
];

const toolSkills = [
  'Git', 'GitHub', 'AWS', 'VS Code', 'Google Colab', 'Agile / Scrum', 'SEO Optimization', 'C', 'C++', 'Java'
];

export const TechStackSnapshot: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative bg-cream dark:bg-tech-black transition-colors duration-500 py-24 md:py-32 px-6 md:px-12 flex flex-col justify-center min-h-[80vh] overflow-hidden border-t border-gray-200/50 dark:border-white/10">
      
      {/* Ambient background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-[0.03] z-0 pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] bg-pink-500/5 dark:bg-pink-500/2 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] left-[-10%] w-[450px] h-[450px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col gap-16 md:gap-24">
        
        {/* Top Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200/35 dark:border-white/5 pb-8"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              My Capabilities
            </h2>
          </div>
          <div className="max-w-xs md:max-w-sm">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
              A structured overview of programming languages, backend frameworks, interactive interfaces, and developer workflows.
            </p>
          </div>
        </motion.div>

        {/* 3 Column Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          
          {/* Card 1: Backend & Systems (Outline Card) */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="w-full"
          >
            <motion.div
              animate={{ y: [-4, 4] }}
              transition={{ repeat: Infinity, repeatType: 'mirror', duration: 6, ease: 'easeInOut' }}
              className="rounded-[2rem] border-2 border-purple-200/70 dark:border-white/10 bg-white/40 dark:bg-tech-dark/40 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between min-h-[360px] shadow-sm hover:shadow-xl hover:border-pink-300/50 dark:hover:border-neon-cyan/30 transition-all duration-300 group h-full"
            >
              {/* Card Info Header */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold font-sans text-gray-900 dark:text-white tracking-tight leading-tight">
                    Backend &<br />Systems
                  </h3>
                  <div className="p-2 bg-purple-50 dark:bg-purple-950/40 text-neon-purple dark:text-neon-cyan rounded-full flex items-center justify-center border border-purple-200/50 dark:border-white/5 shadow-sm">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="h-px bg-purple-200/50 dark:bg-white/10 w-full" />
                <p className="text-xs text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
                  Designing secure, high-performance, and scalable server-side systems with optimized database indexing and background queues.
                </p>
              </div>
              
              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {backendSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-purple-50/55 dark:bg-purple-950/30 text-neon-purple dark:text-neon-cyan border border-purple-200/40 dark:border-white/5 px-2.5 py-1 rounded-lg font-mono text-[9px] font-bold uppercase tracking-wider hover:bg-purple-100/50 dark:hover:bg-purple-900/30 transition-all duration-305 cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2: Frontend & Interactive (Gradient Highlight Card) */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="w-full"
          >
            <motion.div
              animate={{ y: [4, -4] }}
              transition={{ repeat: Infinity, repeatType: 'mirror', duration: 7, ease: 'easeInOut', delay: 0.2 }}
              className="rounded-[2rem] bg-gradient-to-br from-neon-purple via-purple-500 to-pink-500 text-white p-6 md:p-8 flex flex-col justify-between min-h-[360px] shadow-xl hover:scale-[1.02] hover:shadow-neon-purple/20 transition-all duration-300 relative overflow-hidden group h-full"
            >
              {/* Background Accent Gradients */}
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute inset-0 border-2 border-white/10 rounded-[2rem] pointer-events-none" />
              
              {/* Card Info Header */}
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold font-sans tracking-tight leading-tight">
                    Frontend &<br />Interactive
                  </h3>
                  <div className="p-2 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center shadow-md">
                    <ArrowUpRight size={16} className="stroke-[2.5]" />
                  </div>
                </div>
                <div className="h-px bg-white/20 w-full" />
                <p className="text-xs text-white/80 font-sans leading-relaxed">
                  Crafting pixel-perfect user interfaces, modular components, and fluid animations for responsive web engines.
                </p>
              </div>
              
              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                {frontendSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-white/10 text-white border border-white/25 px-2.5 py-1 rounded-lg font-mono text-[9px] font-bold uppercase tracking-wider hover:bg-white/20 transition-all duration-300 cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3: Tools & Workflows (Outline Card) */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <motion.div
              animate={{ y: [-4, 4] }}
              transition={{ repeat: Infinity, repeatType: 'mirror', duration: 6.5, ease: 'easeInOut', delay: 0.4 }}
              className="rounded-[2rem] border-2 border-purple-200/70 dark:border-white/10 bg-white/40 dark:bg-tech-dark/40 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between min-h-[360px] shadow-sm hover:shadow-xl hover:border-pink-300/50 dark:hover:border-neon-cyan/30 transition-all duration-300 group h-full"
            >
              {/* Card Info Header */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold font-sans text-gray-900 dark:text-white tracking-tight leading-tight">
                    Tools &<br />Workflows
                  </h3>
                  <div className="p-2 bg-purple-50 dark:bg-purple-950/40 text-neon-purple dark:text-neon-cyan rounded-full flex items-center justify-center border border-purple-200/50 dark:border-white/5 shadow-sm">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="h-px bg-purple-200/50 dark:bg-white/10 w-full" />
                <p className="text-xs text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
                  Managing version control, cloud deployment paths, search index optimizations, and academic programming foundations.
                </p>
              </div>
              
              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {toolSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-purple-50/55 dark:bg-purple-950/30 text-neon-purple dark:text-neon-cyan border border-purple-200/40 dark:border-white/5 px-2.5 py-1 rounded-lg font-mono text-[9px] font-bold uppercase tracking-wider hover:bg-purple-100/50 dark:hover:bg-purple-900/30 transition-all duration-305 cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechStackSnapshot;
