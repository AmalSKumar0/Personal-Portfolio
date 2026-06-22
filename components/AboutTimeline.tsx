import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Code2, Flame, Layers, Globe, Rocket, Award, CheckCircle2 } from 'lucide-react';

interface Milestone {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  stats: { label: string; value: string }[];
  accentColor: string;
}

export const AboutTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Track scroll progress through the timeline container to animate the central path line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  const milestones: Milestone[] = [
    {
      id: 1,
      year: "2022",
      title: "Mahatma Gandhi University (BCA)",
      subtitle: "The Beginning of the Journey",
      description: "Enrolled in Bachelor of Computer Applications (BCA) to build formal foundations in system architecture, logic design, and computer networks.",
      icon: <GraduationCap className="w-5 h-5" />,
      tags: ["C Programming", "Computer Logic", "Network Basics"],
      stats: [
        { label: "Academics", value: "BCA" },
        { label: "Passion", value: "100%" },
        { label: "Lines Written", value: "0" }
      ],
      accentColor: "#E9D5FF"
    },
    {
      id: 2,
      year: "Late 2022",
      title: "First C++ Project",
      subtitle: "The Spark of Creation",
      description: "Knowing next to nothing about programming, hacked together a fully working terminal Tic-Tac-Toe game in C++. Solving logic flows and compiling code sparked a lifelong passion.",
      icon: <Code2 className="w-5 h-5" />,
      tags: ["C++", "CLI Logic", "Algorithms"],
      stats: [
        { label: "Complexity", value: "Basic" },
        { label: "Bugs Fixed", value: "Countless" },
        { label: "Terminal Art", value: "ASCII" }
      ],
      accentColor: "#93C5FD"
    },
    {
      id: 3,
      year: "Summer 2023",
      title: "Self-Taught Shift (Django)",
      subtitle: "Autodidactic Learning Spree",
      description: "Spent the college summer vacation diving deep into python and modern web frameworks. Taught myself Django and built a fully functional locally deployed To-Do application.",
      icon: <Flame className="w-5 h-5" />,
      tags: ["Python", "Django", "SQL", "HTML/CSS"],
      stats: [
        { label: "Self-Study", value: "3+ Months" },
        { label: "App Deployed", value: "Localhost" },
        { label: "Focus", value: "Full Stack" }
      ],
      accentColor: "#FDE047"
    },
    {
      id: 4,
      year: "2023 - 2024",
      title: "BCA 2nd Year (Platform Era)",
      subtitle: "RikshawHub & Swiftride",
      description: "Created RikshawHub (PHP) for local logistics coordination and Swiftride (Python/Django) for micro-transit matching, along with a Pet Adoption portal and FreshCart e-commerce solution.",
      icon: <Layers className="w-5 h-5" />,
      tags: ["PHP", "Django", "MySQL", "Git", "JS"],
      stats: [
        { label: "Systems Built", value: "4 Platforms" },
        { label: "Lines Deployed", value: "5K+" },
        { label: "Database Mod", value: "Relational" }
      ],
      accentColor: "#A7F3D0"
    },
    {
      id: 5,
      year: "Late 2024 - 2025",
      title: "Global Freelance Career",
      subtitle: "Final Year BCA & Professional Delivery",
      description: "Stepped into professional web development during my final year. Delivered production websites (e.g. Tours of Georgia, The Navigans, Zinda Exteriors) to global clients in WordPress, Laravel, and React.",
      icon: <Globe className="w-5 h-5" />,
      tags: ["React", "Laravel", "WordPress", "Tailwind CSS"],
      stats: [
        { label: "Live Systems", value: "6+ Deployed" },
        { label: "Client Rating", value: "5.0/5.0" },
        { label: "Uptime", value: "99.9%" }
      ],
      accentColor: "#F87171"
    },
    {
      id: 6,
      year: "2025 - Present",
      title: "MCA at Amal Jyothi College",
      subtitle: "NASA Space Apps & Velora System",
      description: "Enrolled in MCA to specialize in backend systems. Designed and deployed Velora (art marketplace with secure workflows). Competed in the NASA Space Apps Challenge, becoming a Global Nominee.",
      icon: <Award className="w-5 h-5" />,
      tags: ["Django REST", "AWS", "Celery/Redis", "LeetCode"],
      stats: [
        { label: "LeetCode Count", value: "185+ Solved" },
        { label: "NASA Award", value: "Global Nominee" },
        { label: "Key Tech", value: "API & Deploy" }
      ],
      accentColor: "#E9D5FF"
    },
    {
      id: 7,
      year: "Future / 2027",
      title: "The Ultimate Capstone",
      subtitle: "Final Year MCA Flagship Project",
      description: "Leaving space for my most ambitious, highly optimized system architecture yet. R&D is currently underway focused on real-world enterprise scalability, database sharding, and high throughput.",
      icon: <Rocket className="w-5 h-5" />,
      tags: ["Go/Rust", "System Design", "Kubernetes", "gRPC"],
      stats: [
        { label: "Ambition", value: "100%" },
        { label: "Scale Target", value: "Enterprise" },
        { label: "Status", value: "R&D Phase" }
      ],
      accentColor: "#C084FC"
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-32 px-4 sm:px-8 bg-cream dark:bg-tech-black transition-colors duration-500 overflow-hidden border-t border-gray-200/50 dark:border-white/10 z-20">
      {/* Background Glows */}
      <div className="absolute top-[30%] left-[-15%] w-[450px] h-[450px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-[#E9D5FF]/10 dark:bg-[#E9D5FF]/2 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Title */}
        <div className="text-center mb-24">
          <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#E9D5FF] uppercase font-brand">
            DEV TIMELINE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 dark:text-white font-bold italic mt-3 tracking-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E9D5FF] to-white not-italic font-sans font-extrabold">Milestones</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base font-light">
            Hover over any milestone card to reveal performance statistics, tools, and technical outcomes.
          </p>
        </div>

        {/* Timeline Track container */}
        <div className="relative w-full">
          {/* Vertical central tracking line (Desktop only) */}
          <div className="absolute left-[50%] -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200/50 dark:bg-white/10 hidden lg:block">
            <motion.div
              style={{ scaleY: pathLength, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-[#E9D5FF] via-purple-400 to-[#E9D5FF] rounded-full"
            />
          </div>

          <div className="flex flex-col gap-12 lg:gap-24 relative w-full">
            {milestones.map((m, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={m.id}
                  className={`flex flex-col lg:flex-row items-center w-full relative ${
                    isEven ? 'lg:justify-start' : 'lg:justify-end'
                  }`}
                >
                  {/* Central Node Indicator (Desktop only) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-cream dark:border-tech-black bg-black z-25 hidden lg:flex items-center justify-center overflow-hidden">
                    <motion.div
                      style={{
                        backgroundColor: hoveredCard === m.id ? m.accentColor : '#1E1B4B',
                        borderColor: m.accentColor,
                      }}
                      className="w-3 h-3 rounded-full border transition-all duration-300"
                    />
                  </div>

                  {/* Glassmorphic Milestone Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setHoveredCard(m.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`w-full lg:w-[46%] rounded-[2rem] border border-gray-200/50 dark:border-white/10 bg-white/5 dark:bg-black/30 backdrop-blur-2xl p-6 md:p-8 shadow-xl transition-all duration-300 relative group overflow-hidden ${
                      hoveredCard === m.id
                        ? 'border-[#E9D5FF]/45 dark:border-[#E9D5FF]/20 shadow-[#E9D5FF]/5'
                        : ''
                    }`}
                  >
                    {/* Background glow strip */}
                    <div
                      style={{ backgroundColor: m.accentColor }}
                      className="absolute top-0 left-0 right-0 h-1 opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          style={{ color: m.accentColor, borderColor: `${m.accentColor}30` }}
                          className="p-3 bg-black/40 border rounded-xl flex items-center justify-center"
                        >
                          {m.icon}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold font-mono tracking-widest uppercase text-gray-500 dark:text-gray-400">
                            {m.subtitle}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold font-sans text-gray-900 dark:text-white mt-0.5 tracking-tight group-hover:text-[#E9D5FF] transition-colors duration-300">
                            {m.title}
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono font-black text-xs md:text-sm text-[#E9D5FF] border border-[#E9D5FF]/20 bg-[#E9D5FF]/10 px-3 py-1 rounded-full shadow-sm">
                        {m.year}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm font-sans font-light leading-relaxed mb-6">
                      {m.description}
                    </p>

                    {/* Tag list */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {m.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold font-mono tracking-wider uppercase bg-gray-200/40 dark:bg-white/5 text-gray-800 dark:text-gray-300 border border-gray-300/20 dark:border-white/5 px-2.5 py-1 rounded-md"
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
                      className="overflow-hidden border-t border-gray-200/50 dark:border-white/10 mt-6 pt-6"
                    >
                      <div className="grid grid-cols-3 gap-2">
                        {m.stats.map((s, idx) => (
                          <div
                            key={idx}
                            className="bg-black/20 border border-white/5 rounded-xl p-3 flex flex-col justify-center text-center backdrop-blur-md"
                          >
                            <span className="text-[8px] font-bold font-mono text-gray-500 dark:text-white/40 uppercase tracking-widest block">
                              {s.label}
                            </span>
                            <span
                              style={{ color: m.accentColor }}
                              className="text-xs md:text-sm font-black tracking-wide block mt-1 uppercase"
                            >
                              {s.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Micro hover interaction indicator */}
                    <div className="flex justify-end items-center gap-1.5 mt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold font-mono text-gray-500 dark:text-gray-400 select-none">
                      <CheckCircle2 size={10} style={{ color: m.accentColor }} />
                      <span>{hoveredCard === m.id ? 'Active Focus' : 'Hover to Expand'}</span>
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
