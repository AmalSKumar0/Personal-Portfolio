import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className="bg-cream dark:bg-tech-black pt-0 pb-12 px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* Large CTA */}
                <div className="relative w-full rounded-[3rem] overflow-hidden mb-20 bg-lavender-50/30 dark:bg-tech-dark/40 border border-lavender-300/30 dark:border-white/10 p-12 md:p-24 text-center backdrop-blur-xl shadow-xl transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.05] mix-blend-overlay"></div>
                    
                    {/* Soft lavender background glow */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-neon-purple/10 dark:bg-neon-purple/5 blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-neon-cyan/10 dark:bg-neon-cyan/5 blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-7xl font-display font-bold mb-6 tracking-tight text-gray-900 dark:text-white">Let's build systems together.</h2>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10">
                            Looking to design scalable APIs, distributed systems, or optimize databases? Let's talk.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="mailto:amalskumardev@gmail.com" className="bg-slate-900 dark:bg-white text-white dark:text-tech-black px-8 py-4 rounded-full font-bold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg">
                                Email Me <ArrowRight size={18} />
                            </a>
                            {isMobile ? (
                                <a href="/resume/resume.pdf" className="bg-white/40 dark:bg-white/5 border border-gray-300/30 dark:border-white/10 text-gray-800 dark:text-white px-8 py-4 rounded-full font-bold hover:bg-white/60 dark:hover:bg-white/10 backdrop-blur-md transition-all inline-flex items-center justify-center shadow-sm">
                                    View Resume
                                </a>
                            ) : (
                                <Link to="/resume" className="bg-white/40 dark:bg-white/5 border border-gray-300/30 dark:border-white/10 text-gray-800 dark:text-white px-8 py-4 rounded-full font-bold hover:bg-white/60 dark:hover:bg-white/10 backdrop-blur-md transition-all inline-flex items-center justify-center shadow-sm">
                                    View Resume
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid md:grid-cols-12 gap-12 border-t border-gray-200 dark:border-white/10 pt-16">
                    <div className="md:col-span-4">
                        <div className="font-bold text-2xl mb-6 text-gray-900 dark:text-white">Amal S Kumar.</div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                            Backend Engineer & Distributed Systems Builder.
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <div className="font-bold mb-6 text-gray-900 dark:text-white">Expertise</div>
                        <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                            <li>API Development</li>
                            <li>Distributed Systems</li>
                            <li>Database Architecture</li>
                            <li>Performance Tuning</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <div className="font-bold mb-6 text-gray-900 dark:text-white">Explore</div>
                        <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link to="/about" className="hover:text-neon-blue dark:hover:text-neon-cyan transition-colors">About</Link></li>
                            <li><Link to="/experience" className="hover:text-neon-blue dark:hover:text-neon-cyan transition-colors">Experience</Link></li>
                            <li><Link to="/projects" className="hover:text-neon-blue dark:hover:text-neon-cyan transition-colors">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-neon-blue dark:hover:text-neon-cyan transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-4 flex md:justify-end">
                        <div className="space-y-6">
                            <div className="font-bold text-gray-900 dark:text-white">Connect</div>
                            <div className="flex gap-4">
                                <a href="https://github.com/AmalSKumar0" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-neon-purple hover:text-white dark:hover:bg-neon-purple transition-colors dark:text-white"><Github size={18} /></a>
                                <a href="https://www.linkedin.com/in/amal-fsd/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-neon-purple hover:text-white dark:hover:bg-neon-purple transition-colors dark:text-white"><Linkedin size={18} /></a>
                                <a href="mailto:amalskumardev@gmail.com" className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-neon-purple hover:text-white dark:hover:bg-neon-purple transition-colors dark:text-white"><Mail size={18} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 dark:border-white/10 pt-8 mt-16 text-center text-xs text-gray-400">
                    &copy; 2026 Amal S Kumar. All rights reserved.
                </div>

            </div>
        </footer>
    );
};
