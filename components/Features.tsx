import React from 'react';
import { ArrowRight, Code2, Layers, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
    return (
        <div className="bg-white dark:bg-tech-black py-24 px-6 relative overflow-hidden transition-colors duration-300">
            {/* Background Dots */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1]" style={{
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>
            <div className="absolute inset-0 z-0 opacity-0 dark:opacity-[0.1]" style={{
                backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>

            <motion.div
                className="max-w-7xl mx-auto relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ staggerChildren: 0.1 }}
            >

                {/* Intro Section */}
                <motion.div
                    className="text-center mb-20"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                    <h2 className="text-5xl font-display font-bold text-tech-black dark:text-white mb-6 transition-colors">My Expertise <br /> <span className="text-neon-blue"> & Journey.</span></h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-balance transition-colors">
                        I’m a Computer Applications graduate passionate about designing and building systems that solve real-world problems. From backend architecture to polished UI.
                    </p>
                </motion.div>

                {/* BENTO GRID LAYOUT */}
                <div className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* Feature 1: Modern Architecture (Large Card) */}
                    <motion.div
                        className="md:col-span-2 bg-gray-50 dark:bg-tech-dark rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 relative overflow-hidden group hover:border-gray-200 dark:hover:border-white/10 transition-colors"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-white dark:from-white/5 to-transparent rounded-full translate-x-1/3 -translate-y-1/3 transition-colors"></div>

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-xl shadow-sm flex items-center justify-center mb-6 text-tech-black dark:text-white transition-colors">
                                <Layers size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Professional Experience</h3>
                            <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8 transition-colors">Dec 2024 - Present: Freelance Web Developer delivering responsive solutions.</p>

                            {/* Illustration: Nodes */}
                            <div className="mt-auto relative h-32 w-full flex items-center">
                                <div className="flex gap-4 items-center w-full">
                                    <div className="flex-1 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center relative group-hover:-translate-y-1 transition-transform duration-500">
                                        <div className="text-xs font-mono text-gray-400">Hope_Heal</div>
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="w-8 border-t-2 border-dashed border-gray-300"></div>
                                    <div className="flex-1 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center relative group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                                        <div className="text-xs font-mono text-gray-400">HOC_Cafe</div>
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="w-8 border-t-2 border-dashed border-gray-300"></div>
                                    <div className="flex-1 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center relative group-hover:-translate-y-1 transition-transform duration-500 delay-150">
                                        <div className="text-xs font-mono text-gray-400">Project_XYZ</div>
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2: High Performance (Dark Card) */}
                    <motion.div
                        className="md:col-span-1 bg-tech-black dark:bg-[#050505] dark:border dark:border-white/10 rounded-[2rem] p-8 relative overflow-hidden text-white flex flex-col justify-between group transition-colors"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
                        }}
                    >
                        {/* Abstract Line Background */}
                        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 Q 30 60 100 20" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" />
                            <path d="M0 100 Q 50 50 100 0" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" />
                            <defs>
                                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <Cpu size={24} className="text-neon-cyan" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Achievements</h3>
                            <p className="text-gray-400 text-sm">Participated in IDE bootcamp. 2nd Prize in Idea pitching Competition.</p>
                        </div>

                        <div className="relative z-10 mt-8">
                            <div className="flex items-end gap-2 mb-2">
                                <div className="text-4xl font-mono font-bold text-white">10<span className="text-neon-blue">+</span></div>
                                <div className="text-xs text-gray-400 mb-1">Full-Stack Apps</div>
                            </div>
                            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-gradient-to-r from-neon-blue to-neon-cyan"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 3: Clean Code */}
                    <motion.div
                        className="md:col-span-1 bg-white dark:bg-tech-dark border border-gray-100 dark:border-white/5 rounded-[2rem] p-8 shadow-lg shadow-gray-100/50 dark:shadow-none flex flex-col hover:-translate-y-1 transition-all duration-300"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
                        }}
                    >
                        <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6 text-neon-purple transition-colors">
                            <Code2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Education</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 transition-colors">Bachelor of Computer Applications (BCA) - MG University.</p>

                        <div className="bg-gray-900 rounded-lg p-3 font-mono text-[10px] text-gray-300 mt-auto shadow-inner">
                            <div className="text-purple-400">interface <span className="text-yellow-300">Degree</span> {'{'}</div>
                            <div className="pl-2">course: <span className="text-green-400">'BCA'</span>;</div>
                            <div className="pl-2">cgpa: <span className="text-blue-400">7.82</span>;</div>
                            <div>{'}'}</div>
                        </div>
                    </motion.div>

                    {/* Feature 4: Integration (Wide) */}
                    <motion.div
                        className="md:col-span-2 bg-gradient-to-br from-gray-900 to-tech-black rounded-[2rem] p-8 text-white relative overflow-hidden flex items-center"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
                        }}
                    >
                        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-neon-blue/10 to-transparent pointer-events-none"></div>

                        <div className="relative z-10 w-1/2">
                            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
                            <p className="text-gray-400 text-sm mb-6">Python (Django, Flask), PHP (Laravel), React.js, Tailwind CSS, SQL, Git.</p>
                            <button className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all text-neon-blue">
                                View GitHub <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Abstract Grid of Logos */}
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-48 h-48 grid grid-cols-2 gap-4 opacity-50 rotate-12">
                            <div className="bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"></div>
                            <div className="bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 translate-y-4"></div>
                            <div className="bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 -translate-y-4"></div>
                            <div className="bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"></div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </div>
    );
};
