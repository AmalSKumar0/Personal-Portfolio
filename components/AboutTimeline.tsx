import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Code2, Flame, Layers, Globe, Rocket, Award, ChevronRight } from 'lucide-react';
import { LavenderPetals } from './LavenderPetals';

interface Milestone {
  id: number;
  year: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  stats: { label: string; value: string }[];
  accentColor: string;
  glowColor: string;
}

export const AboutTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Scroll progress for the central path tracking line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 65, damping: 22 });

  const milestones: Milestone[] = [
    {
      id: 1,
      num: "01",
      year: "2022",
      title: "MG University (BCA)",
      subtitle: "BCA Computer Applications",
      description: "Started my formal computer science education at Mahatma Gandhi University, focusing on system architecture, database theories, logic design, and basic C coding.",
      icon: <GraduationCap className="w-5 h-5" />,
      tags: ["C Logic", "OS Systems", "SQL Databases"],
      stats: [
        { label: "Phase", value: "BCA Start" },
        { label: "Focus", value: "Fundamentals" },
        { label: "Curiosity", value: "100%" }
      ],
      accentColor: "#C084FC", // Purple
      glowColor: "rgba(192, 132, 252, 0.45)"
    },
    {
      id: 2,
      num: "02",
      year: "Late 2022",
      title: "First C++ Engine",
      subtitle: "Tic-Tac-Toe Game",
      description: "Hacked together my very first programming project—a functional terminal Tic-Tac-Toe in C++. Discovering how variables, loops, and conditions created a playable system sparked a deep interest in software development.",
      icon: <Code2 className="w-5 h-5" />,
      tags: ["C++ Basics", "Terminal I/O", "Game Loops"],
      stats: [
        { label: "Bugs Fixed", value: "Countless" },
        { label: "Complexity", value: "Simple" },
        { label: "Status", value: "Shipped" }
      ],
      accentColor: "#60A5FA", // Blue
      glowColor: "rgba(96, 165, 250, 0.45)"
    },
    {
      id: 3,
      num: "03",
      year: "Summer 2023",
      title: "Self-Taught Django",
      subtitle: "Full-Stack Autodidact",
      description: "Invested the college summer vacation into self-studying Web Architecture. Learned Python, model-view-template architectures, database schema modeling, and built a To-Do system.",
      icon: <Flame className="w-5 h-5" />,
      tags: ["Python", "Django Framework", "Relational DBs"],
      stats: [
        { label: "Method", value: "Self-Study" },
        { label: "Timeframe", value: "Summer Break" },
        { label: "Apps Deployed", value: "Localhost" }
      ],
      accentColor: "#FBBF24", // Yellow/Gold
      glowColor: "rgba(251, 191, 36, 0.45)"
    },
    {
      id: 4,
      num: "04",
      year: "2023 - 2024",
      title: "Advanced Platforms",
      subtitle: "RikshawHub & Swiftride",
      description: "Designed RikshawHub in PHP for local delivery logistics and Swiftride in Django for micro-transit services. Built a Pet Adoption platform and FreshCart to refine database schemas.",
      icon: <Layers className="w-5 h-5" />,
      tags: ["PHP Laravel", "Django Core", "MySQL", "Git Workflow"],
      stats: [
        { label: "Projects", value: "4 Platforms" },
        { label: "Lines Written", value: "8K+" },
        { label: "Architecture", value: "MVC Model" }
      ],
      accentColor: "#34D399", // Mint/Emerald
      glowColor: "rgba(52, 211, 153, 0.45)"
    },
    {
      id: 5,
      num: "05",
      year: "Late 2024 - 2025",
      title: "Global Freelance Era",
      subtitle: "Production Deployments",
      description: "Started freelance web development in my final BCA year. Deployed high-performance production websites (e.g. Tours of Georgia, The Navigans, Zinda Exteriors) using Laravel and React for clients globally.",
      icon: <Globe className="w-5 h-5" />,
      tags: ["React.js", "Laravel", "WordPress Core", "SEO & Speed"],
      stats: [
        { label: "Clients", value: "Global" },
        { label: "Completed", value: "6 Live Sites" },
        { label: "Satisfaction", value: "100%" }
      ],
      accentColor: "#F87171", // Rose
      glowColor: "rgba(248, 113, 113, 0.45)"
    },
    {
      id: 6,
      num: "06",
      year: "2025 - Present",
      title: "MCA Specialization",
      subtitle: "AWS, APIs & Leetcode 185+",
      description: "Joined MCA at Amal Jyothi College. Built Velora (marketplace). Focused on cloud services, caching, task queues, API performance, and solved 185+ LeetCode problems (actively maintaining progress). Joined NASA Space Apps Challenge, becoming a Global Nominee.",
      icon: <Award className="w-5 h-5" />,
      tags: ["Django REST", "AWS S3/EC2", "Celery & Redis", "NASA Nominee"],
      stats: [
        { label: "LeetCode", value: "185+ Solved" },
        { label: "NASA Status", value: "Global Nom" },
        { label: "Uptime Focus", value: "Cloud Deploy" }
      ],
      accentColor: "#C084FC", // Purple
      glowColor: "rgba(192, 132, 252, 0.45)"
    },
    {
      id: 7,
      num: "07",
      year: "Future / 2027",
      title: "Flagship Capstone",
      subtitle: "Scalable Enterprise System",
      description: "Reserving space for the final year MCA capstone project. Investigating system architecture topics including database sharding, caching strategies, distributed consensus, and containerized scale.",
      icon: <Rocket className="w-5 h-5" />,
      tags: ["Go Lang", "gRPC / Protobuf", "Docker & K8s", "Systems Design"],
      stats: [
        { label: "Scale Target", value: "Enterprise" },
        { label: "R&D Stage", value: "Active Research" },
        { label: "Ambition", value: "Infinite" }
      ],
      accentColor: "#60A5FA", // Blue
      glowColor: "rgba(96, 165, 250, 0.45)"
    }
  ];

  return (
    <section 
      ref={containerRef} 
      id="timeline"
      className="relative w-full py-32 px-4 sm:px-8 bg-cream dark:bg-tech-black transition-colors duration-500 overflow-hidden border-t border-gray-200/50 dark:border-white/10 z-20"
    >
      {/* Background Soft Falling Petals */}
      <LavenderPetals maxPetals={15} opacityMultiplier={0.4} />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.02] opacity-[0.1] z-0 pointer-events-none" />

      {/* Background Glows */}
      <div className="absolute top-[30%] left-[-15%] w-[450px] h-[450px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-neon-cyan/5 dark:bg-neon-cyan/2 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col relative z-20">
        
        {/* Title */}
        <div className="text-center mb-36">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-neon-purple dark:text-neon-cyan uppercase font-brand">
            DEV TIMELINE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 dark:text-white font-bold italic mt-3 tracking-tight">
            Interconnected <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue not-italic font-sans font-extrabold">Milestones</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base font-light">
            A flowing network connecting education, freelance systems, and cloud development. Hover over nodes to inspect engineering statistics.
          </p>
        </div>

        {/* Timeline Path & Grid */}
        <div className="relative w-full">
          
          {/* Central spine track line (Desktop only) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200/50 dark:bg-white/5 hidden lg:block">
            <motion.div
              style={{ scaleY: pathLength, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan rounded-full"
            />
          </div>

          <div className="flex flex-col gap-24 lg:gap-32 relative w-full">
            {milestones.map((m, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={m.id}
                  className={`flex flex-col lg:flex-row items-center w-full relative ${
                    isEven ? 'lg:justify-start' : 'lg:justify-end'
                  }`}
                >
                  
                  {/* Central Spine Node Indicator (Desktop only) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cream dark:bg-tech-black border border-gray-200 dark:border-white/10 z-30 hidden lg:flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: hoveredCard === m.id ? [1, 1.2, 1] : 1,
                        boxShadow: hoveredCard === m.id ? `0 0 16px ${m.accentColor}` : 'none'
                      }}
                      transition={{ duration: 1.5, repeat: hoveredCard === m.id ? Infinity : 0 }}
                      style={{ backgroundColor: m.accentColor }}
                      className="w-3.5 h-3.5 rounded-full"
                    />
                  </div>

                  {/* Horizontal Connector Arm (Desktop only) */}
                  {isEven ? (
                    // Right-to-Left branch: from spine (50%) to card right edge (45%)
                    <svg className="absolute top-1/2 -translate-y-1/2 left-[45%] w-[5%] h-4 pointer-events-none hidden lg:block overflow-visible" fill="none">
                      <motion.line
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        x1="100%" y1="50%" x2="0%" y2="50%"
                        stroke={hoveredCard === m.id ? m.accentColor : 'rgba(139, 92, 246, 0.2)'}
                        strokeWidth="2"
                        strokeDasharray={hoveredCard === m.id ? "0" : "4 4"}
                      />
                      <motion.circle
                        cx="0%" cy="50%" r="3"
                        fill={m.accentColor}
                        className="opacity-75"
                      />
                    </svg>
                  ) : (
                    // Left-to-Right branch: from spine (50%) to card left edge (55%)
                    <svg className="absolute top-1/2 -translate-y-1/2 left-[50%] w-[5%] h-4 pointer-events-none hidden lg:block overflow-visible" fill="none">
                      <motion.line
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        x1="0%" y1="50%" x2="100%" y2="50%"
                        stroke={hoveredCard === m.id ? m.accentColor : 'rgba(139, 92, 246, 0.2)'}
                        strokeWidth="2"
                        strokeDasharray={hoveredCard === m.id ? "0" : "4 4"}
                      />
                      <motion.circle
                        cx="100%" cy="50%" r="3"
                        fill={m.accentColor}
                        className="opacity-75"
                      />
                    </svg>
                  )}

                  {/* Interconnected Tech Glass Card */}
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{
                      layout: { type: "spring", stiffness: 350, damping: 30 },
                      opacity: { duration: 0.5 },
                      x: { type: "spring", stiffness: 180, damping: 20 }
                    }}
                    onMouseEnter={() => setHoveredCard(m.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      boxShadow: hoveredCard === m.id 
                        ? `0 20px 40px -15px ${m.glowColor}, 0 0 0 1px ${m.accentColor}30`
                        : '0 10px 30px -15px rgba(0,0,0,0.05)'
                    }}
                    className={`w-full lg:w-[45%] rounded-3xl border-2 border-lavender-200/80 dark:border-white/10 bg-white/95 dark:bg-[#121214]/80 backdrop-blur-3xl p-6 sm:p-8 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden`}
                  >
                    
                    {/* Glowing index corner tag */}
                    <div 
                      style={{ color: m.accentColor, backgroundColor: `${m.accentColor}12` }}
                      className="absolute top-0 right-0 px-4 py-2 rounded-bl-3xl border-l border-b border-lavender-200/30 dark:border-white/10 font-mono text-xs font-bold"
                    >
                      {m.year}
                    </div>

                    {/* Card Header */}
                    <div className="flex items-start gap-4 mb-4 mt-2">
                      <div
                        style={{ color: m.accentColor, borderColor: `${m.accentColor}25` }}
                        className="p-3 bg-lavender-50 dark:bg-white/5 border-2 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      >
                        {m.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold font-mono tracking-widest uppercase text-neon-purple dark:text-neon-cyan">
                          {m.subtitle}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-sans text-gray-900 dark:text-white mt-0.5 tracking-tight group-hover:text-neon-purple dark:group-hover:text-neon-cyan transition-colors duration-300">
                          {m.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Description */}
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-sans font-light leading-relaxed mb-6">
                      {m.description}
                    </p>

                    {/* Tags block */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {m.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold font-mono tracking-wider uppercase bg-lavender-50 dark:bg-white/5 text-lavender-800 dark:text-gray-300 border border-lavender-100 dark:border-white/5 px-2.5 py-0.5 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Stat Drawer */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: hoveredCard === m.id ? 'auto' : 0,
                        opacity: hoveredCard === m.id ? 1 : 0
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-gray-200/30 dark:border-white/5 mt-5 pt-5"
                    >
                      <div className="grid grid-cols-3 gap-2.5">
                        {m.stats.map((s, idx) => (
                          <div
                            key={idx}
                            className="bg-lavender-50/50 dark:bg-black/20 border border-lavender-100 dark:border-white/5 rounded-xl p-2.5 flex flex-col justify-center text-center backdrop-blur-md"
                          >
                            <span className="text-[7px] font-bold font-mono text-gray-500 dark:text-white/40 uppercase tracking-widest block">
                              {s.label}
                            </span>
                            <span
                              style={{ color: m.accentColor }}
                              className="text-[10px] md:text-[11px] font-black tracking-wide block mt-0.5 uppercase"
                            >
                              {s.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Micro hover indicator */}
                    <div className="flex justify-end items-center gap-1.5 mt-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300 text-[9px] font-bold font-mono text-gray-500 dark:text-gray-400 select-none">
                      <span>{hoveredCard === m.id ? 'Core Connected' : 'Hover to Inspect'}</span>
                      <ChevronRight size={10} style={{ color: m.accentColor }} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
