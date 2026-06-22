import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Code2, Flame, Layers, Globe, Rocket, Award, CheckCircle2 } from 'lucide-react';
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
  rotation: number;
}

const Thumbtack: React.FC<{ color?: string }> = ({ color = '#C084FC' }) => {
  return (
    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
      {/* Plastic Head with realistic 3D shadows & reflections */}
      <div
        style={{
          backgroundColor: color,
          boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.45), inset 3px 3px 6px rgba(255,255,255,0.7), 0 6px 10px rgba(0,0,0,0.35)'
        }}
        className="w-5.5 h-5.5 rounded-full relative"
      >
        {/* Glass glare highlight */}
        <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/70" />
      </div>
      {/* Shadow of the needle pinned into the page */}
      <div className="w-[1.5px] h-3 bg-black/45 rotate-[20deg] origin-top -mt-0.5 shadow-md" />
    </div>
  );
};

export const AboutTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  const milestones: Milestone[] = [
    {
      id: 1,
      num: "01",
      year: "2022",
      title: "Mahatma Gandhi University (BCA)",
      subtitle: "The Beginning of the Journey",
      description: "Enrolled in Bachelor of Computer Applications (BCA) to build formal foundations in system architecture, logic design, and computer networks.",
      icon: <GraduationCap className="w-4 h-4" />,
      tags: ["C Programming", "Computer Logic", "Network Basics"],
      stats: [
        { label: "Academics", value: "BCA" },
        { label: "Passion", value: "100%" },
        { label: "Lines Written", value: "0" }
      ],
      accentColor: "#F97316", // Orange
      rotation: -2.5
    },
    {
      id: 2,
      num: "02",
      year: "Late 2022",
      title: "First C++ Project",
      subtitle: "The Spark of Creation",
      description: "Knowing next to nothing about programming, hacked together a fully working terminal Tic-Tac-Toe game in C++. Solving logic flows and compiling code sparked a lifelong passion.",
      icon: <Code2 className="w-4 h-4" />,
      tags: ["C++", "CLI Logic", "Algorithms"],
      stats: [
        { label: "Complexity", value: "Basic" },
        { label: "Bugs Fixed", value: "Countless" },
        { label: "Terminal Art", value: "ASCII" }
      ],
      accentColor: "#3B82F6", // Blue
      rotation: 2.0
    },
    {
      id: 3,
      num: "03",
      year: "Summer 2023",
      title: "Self-Taught Shift (Django)",
      subtitle: "Autodidactic Learning Spree",
      description: "Spent the college summer vacation diving deep into python and modern web frameworks. Taught myself Django and built a fully functional locally deployed To-Do application.",
      icon: <Flame className="w-4 h-4" />,
      tags: ["Python", "Django", "SQL", "HTML/CSS"],
      stats: [
        { label: "Self-Study", value: "3+ Months" },
        { label: "App Deployed", value: "Localhost" },
        { label: "Focus", value: "Full Stack" }
      ],
      accentColor: "#A855F7", // Purple
      rotation: -1.8
    },
    {
      id: 4,
      num: "04",
      year: "2023 - 2024",
      title: "BCA 2nd Year (Platform Era)",
      subtitle: "RikshawHub & Swiftride",
      description: "Created RikshawHub (PHP) for local logistics coordination and Swiftride (Python/Django) for micro-transit matching, along with a Pet Adoption portal and FreshCart e-commerce solution.",
      icon: <Layers className="w-4 h-4" />,
      tags: ["PHP", "Django", "MySQL", "Git", "JS"],
      stats: [
        { label: "Systems Built", value: "4 Platforms" },
        { label: "Lines Deployed", value: "5K+" },
        { label: "Database Mod", value: "Relational" }
      ],
      accentColor: "#10B981", // Mint
      rotation: 2.5
    },
    {
      id: 5,
      num: "05",
      year: "Late 2024 - 2025",
      title: "Global Freelance Career",
      subtitle: "Final Year BCA & Professional Delivery",
      description: "Stepped into professional web development during my final year. Delivered production websites (e.g. Tours of Georgia, The Navigans, Zinda Exteriors) to global clients in WordPress, Laravel, and React.",
      icon: <Globe className="w-4 h-4" />,
      tags: ["React", "Laravel", "WordPress", "Tailwind CSS"],
      stats: [
        { label: "Live Systems", value: "6+ Deployed" },
        { label: "Client Rating", value: "5.0/5.0" },
        { label: "Uptime", value: "99.9%" }
      ],
      accentColor: "#EF4444", // Rose/Red
      rotation: -2.0
    },
    {
      id: 6,
      num: "06",
      year: "2025 - Present",
      title: "MCA at Amal Jyothi College",
      subtitle: "NASA Space Apps & Velora System",
      description: "Enrolled in MCA to specialize in backend systems. Designed and deployed Velora (art marketplace with secure workflows). Competed in the NASA Space Apps Challenge, becoming a Global Nominee.",
      icon: <Award className="w-4 h-4" />,
      tags: ["Django REST", "AWS", "Celery/Redis", "LeetCode"],
      stats: [
        { label: "LeetCode Count", value: "185+ Solved" },
        { label: "NASA Award", value: "Global Nominee" },
        { label: "Key Tech", value: "API & Deploy" }
      ],
      accentColor: "#A855F7", // Purple
      rotation: 1.8
    },
    {
      id: 7,
      num: "07",
      year: "Future / 2027",
      title: "The Ultimate Capstone",
      subtitle: "Final Year MCA Flagship Project",
      description: "Leaving space for my most ambitious, highly optimized system architecture yet. R&D is currently underway focused on real-world enterprise scalability, database sharding, and high throughput.",
      icon: <Rocket className="w-4 h-4" />,
      tags: ["Go/Rust", "System Design", "Kubernetes", "gRPC"],
      stats: [
        { label: "Ambition", value: "100%" },
        { label: "Scale Target", value: "Enterprise" },
        { label: "Status", value: "R&D Phase" }
      ],
      accentColor: "#F97316", // Orange
      rotation: -1.5
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 px-4 sm:px-8 bg-cream dark:bg-tech-black transition-colors duration-500 overflow-hidden border-t border-gray-200/50 dark:border-white/10 z-20"
      style={{
        // Subtly ruled notebook paper pattern using background gradients
        backgroundSize: '100% 44px',
        backgroundImage: 'linear-gradient(to bottom, transparent 43px, rgba(139, 92, 246, 0.04) 43px, rgba(139, 92, 246, 0.04) 44px)'
      }}
    >
      {/* Background Soft Falling Petals */}
      <LavenderPetals maxPetals={20} opacityMultiplier={0.5} />

      {/* Background Glows */}
      <div className="absolute top-[30%] left-[-15%] w-[450px] h-[450px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-[#E9D5FF]/10 dark:bg-[#E9D5FF]/2 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col relative z-20">
        
        {/* Title */}
        <div className="text-center mb-32">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#E9D5FF] uppercase font-brand">
            DEV TIMELINE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 dark:text-white font-bold italic mt-3 tracking-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E9D5FF] to-white not-italic font-sans font-extrabold">Milestones</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base font-light">
            Each milestone is pinned to the board. Hover over them to release their stats and reveal more detail.
          </p>
        </div>

        {/* Timeline Path & Grid */}
        <div className="relative w-full">
          
          {/* Sinusoidal Wave Dashed Connector Line (Desktop only) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" fill="none">
            <motion.path
              d="M 50% 40 Q 20% 190, 50% 340 T 50% 640 T 50% 940 T 50% 1240 T 50% 1540 T 50% 1840 T 50% 2140"
              stroke="rgba(192, 132, 252, 0.25)"
              strokeWidth="2"
              strokeDasharray="6 6"
              style={{ pathLength }}
            />
          </svg>

          <div className="flex flex-col gap-20 lg:gap-28 relative w-full">
            {milestones.map((m, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={m.id}
                  className={`flex flex-col lg:flex-row items-center w-full relative ${
                    isEven ? 'lg:justify-start' : 'lg:justify-end'
                  }`}
                >
                  
                  {/* Glassmorphic Sticky Note Card */}
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{
                      layout: { type: "spring", stiffness: 350, damping: 30 },
                      opacity: { duration: 0.5 },
                      y: { type: "spring", stiffness: 180, damping: 18 }
                    }}
                    style={{
                      // Card tilting on default state
                      rotate: hoveredCard === m.id ? 0 : m.rotation,
                      scale: hoveredCard === m.id ? 1.03 : 1,
                    }}
                    onMouseEnter={() => setHoveredCard(m.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="w-full lg:w-[45%] rounded-[1.8rem] border border-lavender-300/10 dark:border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent dark:from-white/[0.05] dark:to-transparent backdrop-blur-3xl pt-8 p-6 shadow-[0_8px_32px_0_rgba(139,92,246,0.015)] hover:shadow-[0_20px_48px_rgba(139,92,246,0.08)] transition-all duration-300 relative group overflow-hidden"
                  >
                    
                    {/* Realistic Pushpin */}
                    <Thumbtack color={m.accentColor} />

                    {/* Pastel Glassy Top Index Band */}
                    <div
                      style={{ backgroundColor: `${m.accentColor}12` }}
                      className="absolute top-0 left-0 right-0 h-10 flex items-center px-6 justify-between border-b border-lavender-300/5 dark:border-white/5"
                    >
                      <span
                        style={{ color: m.accentColor }}
                        className="font-serif italic font-bold text-lg select-none"
                      >
                        {m.num}
                      </span>
                      <span className="font-mono text-[9px] font-bold tracking-widest text-gray-400 dark:text-white/40 uppercase">
                        {m.year}
                      </span>
                    </div>

                    {/* Card Content (shifted down for top band) */}
                    <div className="mt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          style={{ color: m.accentColor }}
                          className="opacity-75 group-hover:scale-110 transition-transform duration-300"
                        >
                          {m.icon}
                        </span>
                        <span className="text-[9px] font-bold font-mono tracking-widest uppercase text-gray-400 dark:text-white/40">
                          {m.subtitle}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold font-sans text-gray-900 dark:text-white mt-1 leading-snug tracking-tight group-hover:text-[#E9D5FF] transition-colors duration-300">
                        {m.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed mt-3 mb-5">
                        {m.description}
                      </p>

                      {/* Tag list */}
                      <div className="flex flex-wrap gap-1.5">
                        {m.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[8px] font-bold font-mono tracking-wider uppercase bg-gray-200/30 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-300/10 dark:border-white/5 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
                      <div className="grid grid-cols-3 gap-2">
                        {m.stats.map((s, idx) => (
                          <div
                            key={idx}
                            className="bg-black/10 border border-white/5 rounded-xl p-2.5 flex flex-col justify-center text-center backdrop-blur-md"
                          >
                            <span className="text-[7px] font-bold font-mono text-gray-500 dark:text-white/40 uppercase tracking-widest block">
                              {s.label}
                            </span>
                            <span
                              style={{ color: m.accentColor }}
                              className="text-[9px] md:text-[11px] font-black tracking-wide block mt-0.5 uppercase"
                            >
                              {s.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Micro hover interaction indicator */}
                    <div className="flex justify-end items-center gap-1.5 mt-4 opacity-20 group-hover:opacity-100 transition-opacity duration-300 text-[9px] font-bold font-mono text-gray-500 dark:text-gray-400 select-none">
                      <CheckCircle2 size={9} style={{ color: m.accentColor }} />
                      <span>{hoveredCard === m.id ? 'Active Focus' : 'Hover to Pin'}</span>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Signature Box (Design Partner / Creator note) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-32 flex flex-col items-center justify-center gap-3 text-center"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#E9D5FF]/30 shadow-md">
            <img
              src="/profile.png"
              alt="Amal S Kumar"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/avatar-badge.jpg';
              }}
            />
          </div>
          <div>
            <span className="font-sans text-[11px] font-bold tracking-widest text-[#E9D5FF] uppercase block">
              Amal S Kumar
            </span>
            <span className="text-[9px] font-mono text-gray-500 dark:text-gray-400 uppercase block mt-0.5">
              Backend Systems & Architecture Partner.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutTimeline;
