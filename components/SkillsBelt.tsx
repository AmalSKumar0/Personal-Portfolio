import React from 'react';
import {
    Atom,
    Server,
    Database,
    Cpu,
    Code2,
    Terminal,
    Globe,
    Wifi
} from 'lucide-react';

// Specialized list based on your profile (React, Backend, IoT, etc.)
const skills = [
    { name: 'React', icon: Atom },
    { name: 'Django', icon: Server },
    { name: 'Laravel', icon: Globe },
    { name: 'Go', icon: Terminal },
    { name: 'IoT / ESP32', icon: Wifi },
    { name: 'System Design', icon: Cpu },
    { name: 'SQL', icon: Database },
    { name: 'Algorithms', icon: Code2 },
];

export const SkillsBelt: React.FC = () => {
    return (
        <div className="w-full bg-gradient-to-br from-cream via-white to-cream dark:from-tech-black dark:via-tech-dark dark:to-tech-black py-16 flex flex-col justify-center overflow-hidden relative border-y border-neon-blue/10 dark:border-neon-blue/5 transition-colors duration-300">

            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 transition-opacity duration-300">
                <div className="absolute inset-0 bg-grid-pattern"></div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"></div>

            {/* Title */}
            <div className="text-center mb-8 relative z-20">
                <h2 className="text-2xl font-brand font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                    Technology Stack
                </h2>
            </div>

            {/* Left Fade Gradient */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream via-cream/80 to-transparent dark:from-tech-black dark:via-tech-black/80 z-10 pointer-events-none transition-colors duration-300" />

            {/* Right Fade Gradient */}
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream via-cream/80 to-transparent dark:from-tech-black dark:via-tech-black/80 z-10 pointer-events-none transition-colors duration-300" />

            {/* The Sliding Track */}
            <div className="flex w-max group">

                {/* First Set */}
                <div className="flex animate-infinite-scroll group-hover:paused">
                    {skills.map((skill, index) => (
                        <div key={`list-1-${index}`} className="flex items-center gap-3 mx-8 select-none group/item">
                            <div className="p-3 bg-white dark:bg-tech-gray rounded-xl border-2 border-neon-blue/20 dark:border-white/10 text-neon-blue shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 hover:scale-110 hover:border-neon-blue/40">
                                <skill.icon size={28} className="animate-icon-spin" />
                            </div>
                            <span className="text-tech-dark dark:text-gray-300 font-mono font-semibold whitespace-nowrap text-sm tracking-wide group-hover/item:text-neon-blue transition-colors duration-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Second Set (Duplicate) */}
                <div className="flex animate-infinite-scroll group-hover:paused" aria-hidden="true">
                    {skills.map((skill, index) => (
                        <div key={`list-2-${index}`} className="flex items-center gap-3 mx-8 select-none group/item">
                            <div className="p-3 bg-white dark:bg-tech-gray rounded-xl border-2 border-neon-blue/20 dark:border-white/10 text-neon-blue shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 hover:scale-110 hover:border-neon-blue/40">
                                <skill.icon size={28} className="animate-icon-spin" />
                            </div>
                            <span className="text-tech-dark dark:text-gray-300 font-mono font-semibold whitespace-nowrap text-sm tracking-wide group-hover/item:text-neon-blue transition-colors duration-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SkillsBelt;
