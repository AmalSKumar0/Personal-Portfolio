import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Cpu, Calendar, Award, Briefcase, GraduationCap, ExternalLink, ArrowRight, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrollFade } from '../components/ScrollFade';
import { AboutSnapshot } from '../components/AboutSnapshot';
import { TechStackSnapshot } from '../components/TechStackSnapshot';
import { experience } from '../data/experience';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const resumeUrl = isMobile ? '/resume/resume.pdf' : '/resume';

    return (
        <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-cream dark:bg-tech-black transition-colors duration-300">
            <SEO
                title="About Me | Amal S Kumar"
                description="Learn about Amal S Kumar's journey, software capabilities, education, and freelance client collaborations."
            />

            {/* Grid Pattern and Ambient Backgrounds */}
            <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.03] opacity-[0.2] z-0 pointer-events-none transition-opacity duration-300" />
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-pink-500/5 dark:bg-pink-500/2 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[140px] pointer-events-none z-0" />

            <div className="max-w-7xl w-full mx-auto relative z-10">
                
               

                {/* Section 2: Reusing the Scroll-based AboutSnapshot */}
                <div className="-mt-12 -mb-8">
                    <AboutSnapshot />
                </div>

                {/* Section 3: Education & Freelance Philosophy Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                    
                    {/* Education Card */}
                    <ScrollFade direction="up" delay={0.15}>
                        <div className="bg-white/80 dark:bg-tech-dark/40 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between h-full hover:border-pink-300/40 dark:hover:border-neon-cyan/20 transition-all duration-300">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 bg-purple-50 dark:bg-purple-950/40 rounded-xl text-neon-purple dark:text-neon-cyan border border-purple-100/50 dark:border-white/5">
                                        <GraduationCap size={20} />
                                    </span>
                                    Educational Foundation
                                </h2>
                                
                                <div className="space-y-8">
                                    {/* MCA */}
                                    <div className="relative pl-6 border-l border-purple-200 dark:border-white/10">
                                        <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-neon-purple" />
                                        <div className="flex justify-between items-start gap-4 mb-2">
                                            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Master of Computer Applications (MCA)</h3>
                                            <span className="text-xs font-bold text-neon-purple bg-purple-50 dark:bg-purple-950/40 border border-purple-200/50 dark:border-white/5 px-2.5 py-1 rounded-full whitespace-nowrap">2024 - 2026</span>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">Amal Jyothi College of Engineering</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                            Advanced curriculum focusing on software engineering paradigms, API architectures, data structures, cloud deployment pipelines, and database optimization.
                                        </p>
                                    </div>

                                    {/* BCA */}
                                    <div className="relative pl-6 border-l border-purple-200 dark:border-white/10">
                                        <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-neon-cyan" />
                                        <div className="flex justify-between items-start gap-4 mb-2">
                                            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Bachelor of Computer Applications (BCA)</h3>
                                            <span className="text-xs font-bold text-neon-cyan bg-cyan-50/50 dark:bg-cyan-950/40 border border-cyan-200/50 dark:border-white/5 px-2.5 py-1 rounded-full whitespace-nowrap">2019 - 2022</span>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">MG University</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 leading-relaxed">
                                            Comprehensive fundamentals of computer science, object-oriented programming, and relational database systems. Completed with a graduation index of 7.82 CGPA.
                                        </p>
                                        <div className="bg-gray-900 rounded-xl p-3.5 font-mono text-[10px] text-gray-300 shadow-inner max-w-xs">
                                            <div className="text-purple-400">interface <span className="text-yellow-300">Degree</span> {'{'}</div>
                                            <div className="pl-3">course: <span className="text-green-400">'BCA'</span>;</div>
                                            <div className="pl-3">cgpa: <span className="text-neon-cyan font-bold">7.82</span>;</div>
                                            <div>{'}'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollFade>

                    {/* Freelance Journey Overview */}
                    <ScrollFade direction="up" delay={0.25}>
                        <div className="bg-white/80 dark:bg-tech-dark/40 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between h-full hover:border-pink-300/40 dark:hover:border-neon-cyan/20 transition-all duration-300">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 bg-purple-50 dark:bg-purple-950/40 rounded-xl text-neon-purple dark:text-neon-cyan border border-purple-100/50 dark:border-white/5">
                                        <Briefcase size={20} />
                                    </span>
                                    Freelance Web Engineer
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                    <p>
                                        Since transitioning to independent software consulting, I have collaborated with various companies and organizations to engineer custom platforms, optimize server workflows, and deliver modern responsive web applications.
                                    </p>
                                    <p>
                                        I operate as a full-cycle software builder—working directly with business owners to extract requirements, design database models, structure API interactions, and code the front-end layouts with fluid transitions.
                                    </p>
                                    <p>
                                        Whether launching interactive web spaces for local art establishments, architecting scheduling logic for tour operators, or implementing accessibility compliance guidelines for Australian healthcare clients, I prioritize security, speed, and standard compliance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollFade>

                </div>

                {/* Section 4: Reusing the Capabilities TechStackSnapshot */}
                <div className="-mx-4 sm:-mx-6 lg:-mx-8">
                    <TechStackSnapshot />
                </div>

                {/* Section 5: Past Collaborations & Client Projects */}
                <div className="my-24">
                    <ScrollFade direction="up" delay={0.1}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                                Past <span className="text-neon-purple dark:text-neon-cyan font-serif italic font-normal">Collaborations</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed mt-4">
                                Freelance engagements and software contract work delivered to real clients and companies.
                            </p>
                        </div>
                    </ScrollFade>

                    {/* Timeline of client project cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {experience.map((item, index) => (
                            <ScrollFade key={item.id} direction="up" delay={0.15 + (index * 0.05)}>
                                <div className="bg-white/80 dark:bg-tech-dark/40 border border-gray-100 dark:border-white/10 p-8 rounded-[2rem] backdrop-blur-md shadow-lg flex flex-col justify-between h-full hover:border-pink-300/40 dark:hover:border-neon-cyan/20 transition-all duration-300 group">
                                    <div className="space-y-6">
                                        
                                        {/* Header */}
                                        <div className="flex justify-between items-start gap-4">
                                            <div>
                                                <span className="text-xs font-bold text-neon-purple dark:text-neon-cyan tracking-wider uppercase bg-purple-50 dark:bg-purple-950/40 border border-purple-100/50 dark:border-white/5 px-2.5 py-1 rounded-lg">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-3">
                                                    {item.company}
                                                </h3>
                                                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-mono mt-1">
                                                    {item.role}
                                                </p>
                                            </div>
                                            {item.websiteUrl && (
                                                <a 
                                                    href={item.websiteUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="p-2.5 bg-slate-50 dark:bg-white/5 text-gray-500 hover:text-neon-purple dark:hover:text-neon-cyan border border-gray-100 dark:border-white/5 rounded-full flex items-center justify-center shadow-sm transition-all hover:scale-110"
                                                    title={`Visit ${item.company}`}
                                                >
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>

                                        <div className="h-px bg-gray-200/50 dark:bg-white/10 w-full" />

                                        {/* Description */}
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* Key Deliverables */}
                                        <div className="space-y-2">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-300">Deliverables & Achievements:</h4>
                                            <ul className="space-y-2.5">
                                                {item.achievements.map((ach, idx) => (
                                                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-500 dark:text-gray-400 leading-normal">
                                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neon-purple dark:bg-neon-cyan shrink-0" />
                                                        <span>{ach}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mt-8">
                                        {item.techStack.map((tech) => (
                                            <span 
                                                key={tech} 
                                                className="bg-purple-50/50 dark:bg-purple-950/20 text-neon-purple dark:text-neon-cyan border border-purple-200/30 dark:border-white/5 px-2.5 py-0.5 rounded-lg font-mono text-[9px] font-bold uppercase tracking-wider"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </ScrollFade>
                        ))}
                    </div>
                </div>

                {/* Section 6: Action Call CTA */}
                <ScrollFade direction="up" delay={0.15}>
                    <section className="p-8 sm:p-12 rounded-[2rem] bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-purple/5 border border-neon-blue/20 dark:border-white/10 backdrop-blur-md text-center max-w-4xl mx-auto shadow-xl">
                        <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">Want to review the complete profile?</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                            For technical discussions, comprehensive details, or design collaboration inquiries, feel free to view my resume or drop me a line directly.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a
                                href={resumeUrl}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-tech-black px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-all shadow-md cursor-pointer text-sm"
                            >
                                View Resume
                            </a>
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/40 dark:bg-white/5 border border-gray-300/30 dark:border-white/10 text-gray-800 dark:text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/60 dark:hover:bg-white/10 backdrop-blur-md transition-all shadow-sm cursor-pointer text-sm"
                            >
                                Let's Connect <ArrowRight size={16} />
                            </Link>
                        </div>
                    </section>
                </ScrollFade>

            </div>
        </div>
    );
};

export default About;
