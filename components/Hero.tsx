import {
    Server, Database, Activity, Zap, Boxes,
    Shield, Globe, CheckCircle, Brain, Lock
} from 'lucide-react';
import { Satellite } from './Satellite';
import { SpaceBattle } from './SpaceBattle';

import { useState, useEffect } from 'react';
import { TelemetrySection } from './TelemetrySection';

export const Hero: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate position relative to center of screen
            // "Very slow" follow means a small factor (e.g. 0.02)
            const x = (e.clientX - window.innerWidth / 2) * 0.05;
            const y = (e.clientY - window.innerHeight / 2) * 0.05;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <SpaceBattle />
            <section className="pt-48 pb-24 px-6 relative overflow-hidden bg-gray-50 min-h-screen flex flex-col items-center">

                {/* CSS for custom animations and grid pattern */}
                <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(300px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(300px) rotate(-360deg); }
        }
        @keyframes float-random-x {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(150px); }
            50% { transform: translateX(-50px); }
            75% { transform: translateX(-150px); }
        }
        @keyframes float-random-y {
            0%, 100% { transform: translateY(0); }
            33% { transform: translateY(-100px); }
            66% { transform: translateY(100px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; animation-delay: 1s; }
        .animate-pulse-glow { animation: pulse-glow 3s infinite; }
        .animate-orbit { animation: orbit 20s linear infinite; }
        .perspective-1000 { perspective: 1000px; }
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
        }
        /* Custom Satellite SVG Styles */
        .outline-blue { stroke: #3b82f6; fill: none; stroke-width: 2px; }
        .outline-pink { stroke: #ec4899; fill: none; stroke-width: 2px; }
        .thin { stroke-width: 1px; }
        .micro { stroke-width: 0.5px; }
        .dashed { stroke-dasharray: 4 2; }
      `}</style>

                {/* Abstract Perspective Grid Background */}
                <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-50"></div>

                {/* Geometric Decorations */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
                    <svg className="absolute top-0 right-[-20%] w-[800px] h-[800px] opacity-30 text-purple-500 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                        <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                    <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
                </div>

                {/* Orbiting Interactive Satellite */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 hidden lg:block">
                    <div className="w-full h-full animate-[spin_60s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-auto">
                            <div className="w-full h-full animate-[spin_60s_linear_infinite_reverse]">
                                <div
                                    className="transition-transform duration-100 ease-out flex items-center justify-center p-4 hover:scale-110 transition-all duration-500"
                                    style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
                                >
                                    <Satellite className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">

                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full pl-2 pr-4 py-1.5 mb-8 shadow-sm hover:shadow-md transition-all cursor-default">
                        <div className="bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Status</div>
                        <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
                            Open to work <span className="text-gray-300">|</span> <span className="text-blue-500">Available for projects</span>
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="flex flex-col items-center mb-10 relative z-10 w-full">
                        <div className="flex items-center gap-6 mb-4 transition-all duration-300">
                            <span className="text-6xl md:text-8xl font-display font-bold text-gray-900 leading-none">Hello, I'm</span>
                            <div className="hidden md:block w-48 h-24 bg-blue-100 rounded-full shadow-lg overflow-hidden relative group rotate-3 hover:rotate-0 transition-all duration-300">
                                <img
                                    src="/avatar-badge.jpg"
                                    alt="Avatar"
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <h1 className="text-7xl md:text-9xl font-display font-bold text-gray-900 leading-[1.05] tracking-tight transition-all duration-300 text-center">
                            <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                Amal S Kumar
                            </span>
                        </h1>
                    </div>

                    {/* Subheadline */}
                    <p className="text-xl text-gray-500 max-w-xl mx-auto mb-12 text-balance leading-relaxed">
                        Full-Stack Developer & AI Explorer. <br className="hidden md:block" />
                        Technology should solve real problems — I build systems that make that happen.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-24">
                        <button className="bg-gray-900 hover:bg-gray-800 transition-all transform hover:-translate-y-1 text-white px-8 py-4 rounded-full text-base font-bold shadow-2xl shadow-blue-500/20 flex items-center gap-2">
                            Get in Touch
                            <Zap size={18} className="text-yellow-400 fill-current" />
                        </button>
                        <button className="bg-white border border-gray-200 hover:border-gray-400 transition-all text-gray-900 px-8 py-4 rounded-full text-base font-bold flex items-center gap-2">
                            Download Resume
                        </button>
                    </div>

                    {/* Main Visual Composition */}
            
                </div>
            </section>
        </>
    );
};