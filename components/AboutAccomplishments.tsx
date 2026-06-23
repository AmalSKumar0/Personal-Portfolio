import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface AccomplishmentItem {
    id: string;
    num: string;
    title: string;
    description: string;
    bullets: string[];
    bgClass: string;
    numClass: string;
    arrowClass: string;
}

export const AboutAccomplishments: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'achievements' | 'skills'>('achievements');

    const achievements: AccomplishmentItem[] = [
        {
            id: "ach-1",
            num: "01",
            title: "NASA Space Apps Global Nominee",
            description: "Selected as a Global Nominee in the NASA Space Apps Challenge 2024, representing top-tier collaborative engineering.",
            bullets: [
                "Architected a space-data query pipeline during the hackathon.",
                "Leveraged open NASA datasets for real-time visualization.",
                "Recognized for innovative systems thinking and team execution."
            ],
            bgClass: "bg-purple-100/70 dark:bg-[#201c38] text-purple-950 dark:text-purple-200 border border-purple-200/80 dark:border-purple-900/50 shadow-sm",
            numClass: "bg-white/50 dark:bg-white/10 text-purple-900 dark:text-purple-200",
            arrowClass: "text-purple-600 dark:text-purple-400"
        },
        {
            id: "ach-2",
            num: "02",
            title: "Global Freelance Live Sites",
            description: "Built and deployed 6+ production-grade web applications for diverse global businesses.",
            bullets: [
                "Shipped clients including Tours of Georgia and The Navigans.",
                "Engineered integrations for bookings, galleries, and leads.",
                "Sustained 100% satisfaction with optimized page load speeds."
            ],
            bgClass: "bg-[#f3f0ea]/80 dark:bg-[#1a1917] text-zinc-900 dark:text-zinc-300 border border-[#e5e1d7] dark:border-zinc-800 shadow-sm",
            numClass: "bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-300",
            arrowClass: "text-zinc-500 dark:text-zinc-400"
        },
        {
            id: "ach-3",
            num: "03",
            title: "LeetCode 185+ Solved",
            description: "Actively refined algorithmic problem-solving capabilities, focusing on efficiency and system optimizations.",
            bullets: [
                "Solved 185+ data structure & algorithm problems.",
                "Maintained optimization metrics in execution speed and memory.",
                "Regular practice of system design patterns."
            ],
            bgClass: "bg-zinc-900 dark:bg-[#0c0c0e] text-zinc-100 dark:text-zinc-300 border border-zinc-800 dark:border-zinc-900 shadow-sm",
            numClass: "bg-white/10 dark:bg-white/5 text-zinc-200 dark:text-zinc-300",
            arrowClass: "text-zinc-450 dark:text-zinc-500"
        },
        {
            id: "ach-4",
            num: "04",
            title: "Academic Capstone (Velora)",
            description: "Engineered high-performance web systems and full-stack projects during BCA and MCA programs.",
            bullets: [
                "Designed Velora, a robust digital marketplace.",
                "Integrated Celery task queues and Redis caches.",
                "Maintained clean coding standards and optimized database indexes."
            ],
            bgClass: "bg-[#f3f0ea]/80 dark:bg-[#1a1917] text-zinc-900 dark:text-zinc-300 border border-[#e5e1d7] dark:border-zinc-800 shadow-sm",
            numClass: "bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-300",
            arrowClass: "text-zinc-500 dark:text-zinc-400"
        }
    ];

    const skills: AccomplishmentItem[] = [
        {
            id: "sk-1",
            num: "01",
            title: "API Engineering & Design",
            description: "Structuring scalable, secure, and intuitive web services and gateway architectures.",
            bullets: [
                "Expertise in RESTful APIs with Django REST Framework.",
                "Implemented secure authentication and webhook handshakes.",
                "Proficient in system design and data normalization."
            ],
            bgClass: "bg-purple-100/70 dark:bg-[#201c38] text-purple-950 dark:text-purple-200 border border-purple-200/80 dark:border-purple-900/50 shadow-sm",
            numClass: "bg-white/50 dark:bg-white/10 text-purple-900 dark:text-purple-200",
            arrowClass: "text-purple-600 dark:text-purple-400"
        },
        {
            id: "sk-2",
            num: "02",
            title: "Database Tuning & Modeling",
            description: "Optimizing relational schemas and queries for low-latency response times.",
            bullets: [
                "Advanced indexing and query execution plan tuning in MySQL.",
                "Structured complex relationships and integrity constraints.",
                "Managed seamless schema migrations without downtime."
            ],
            bgClass: "bg-[#f3f0ea]/80 dark:bg-[#1a1917] text-zinc-900 dark:text-zinc-300 border border-[#e5e1d7] dark:border-zinc-800 shadow-sm",
            numClass: "bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-300",
            arrowClass: "text-zinc-500 dark:text-zinc-400"
        },
        {
            id: "sk-3",
            num: "03",
            title: "Caching & Task Queues",
            description: "Orchestrating asynchronous task queues and memory caches to minimize load bottlenecks.",
            bullets: [
                "Utilized Redis for cache layers and token blacklists.",
                "Configured Celery workers for long-running background tasks.",
                "Reduced heavy query processing times by over 40%."
            ],
            bgClass: "bg-zinc-900 dark:bg-[#0c0c0e] text-zinc-100 dark:text-zinc-300 border border-zinc-800 dark:border-zinc-900 shadow-sm",
            numClass: "bg-white/10 dark:bg-white/5 text-zinc-200 dark:text-zinc-300",
            arrowClass: "text-zinc-450 dark:text-zinc-500"
        },
        {
            id: "sk-4",
            num: "04",
            title: "Cloud Infrastructure & AWS",
            description: "Deploying and managing production systems on resilient cloud architecture.",
            bullets: [
                "Configured AWS EC2 instances, S3 storage, and networks.",
                "Experienced with standard Git environments and SSH pipelines.",
                "Focused on high availability and secure server settings."
            ],
            bgClass: "bg-[#f3f0ea]/80 dark:bg-[#1a1917] text-zinc-900 dark:text-zinc-300 border border-[#e5e1d7] dark:border-zinc-800 shadow-sm",
            numClass: "bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-300",
            arrowClass: "text-zinc-500 dark:text-zinc-400"
        }
    ];

    const currentItems = activeTab === 'achievements' ? achievements : skills;

    const handleScrollDown = () => {
        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-cream dark:bg-tech-black transition-colors duration-500 border-t border-gray-200/50 dark:border-white/10 z-20 overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[140px] pointer-events-none z-0" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Layout */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
                    <div className="max-w-3xl">
                        {/* Tab Pills */}
                        <div className="flex items-center gap-4 mb-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveTab('achievements')}
                                className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                                    activeTab === 'achievements'
                                        ? 'bg-[#E5DFD9] dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 border border-zinc-300 dark:border-zinc-700 shadow-sm'
                                        : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-150'
                                }`}
                            >
                                ACHIEVEMENTS
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveTab('skills')}
                                className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                                    activeTab === 'skills'
                                        ? 'bg-[#E5DFD9] dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 border border-zinc-300 dark:border-zinc-700 shadow-sm'
                                        : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-150'
                                }`}
                            >
                                CORE EXPERTISE
                            </motion.button>
                        </div>

                        {/* Title & Description with AnimatePresence */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                            >
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 dark:text-white font-bold italic tracking-tight mb-6">
                                    {activeTab === 'achievements' ? 'Milestones & Accomplishments' : 'Engineering Focus Areas'}
                                </h2>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
                                    {activeTab === 'achievements'
                                        ? 'A showcase of validated milestones, project awards, and technical triumphs that define my developmental standard.'
                                        : 'Core backend architectures, caching configurations, and infrastructure setups that I actively implement to sustain high-availability systems.'}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Scroll Down Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleScrollDown}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-gray-100 transition-all shadow-md group cursor-pointer self-start md:self-end"
                        aria-label="Scroll to Timeline"
                    >
                        <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                    </motion.button>
                </div>

                {/* Cards Container with AnimatePresence for tab switching */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.08
                                    }
                                }
                            }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {currentItems.map((item, index) => {
                                // Dynamic rotations based on index to recreate the image's layout feel
                                const rotationClass = 
                                    index === 0 ? 'lg:rotate-[-1.5deg]' :
                                    index === 1 ? 'lg:rotate-[1.5deg]' :
                                    index === 2 ? 'lg:rotate-[-2deg]' : 'lg:rotate-[2deg]';

                                return (
                                    <motion.div
                                        key={item.id}
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                        whileHover={{ 
                                            scale: 1.03, 
                                            rotate: 0,
                                            y: -8,
                                            boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)"
                                        }}
                                        className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[380px] transition-all duration-500 ease-out z-10 ${rotationClass} ${item.bgClass}`}
                                    >
                                        <div>
                                            {/* Card Header */}
                                            <div className="flex justify-between items-center mb-8">
                                                <div className={`w-10 h-10 flex items-center justify-center rounded-full text-xs font-mono font-bold ${item.numClass}`}>
                                                    {item.num}
                                                </div>
                                                <ArrowUpRight size={18} className={item.arrowClass} />
                                            </div>

                                            {/* Card Content */}
                                            <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight leading-tight mb-4 text-inherit">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-inherit opacity-85 leading-relaxed font-sans font-light">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Bullet Points */}
                                        <ul className="space-y-2.5 mt-6 border-t border-current/10 pt-6 text-[11px] font-sans leading-relaxed text-inherit opacity-90">
                                            {item.bullets.map((bullet, bulletIdx) => (
                                                <li key={bulletIdx} className="flex items-start gap-2">
                                                    <span className="text-[10px] mt-0.5 select-none opacity-60">•</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AboutAccomplishments;
