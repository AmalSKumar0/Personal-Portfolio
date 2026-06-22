import React from 'react';
import { SEO } from '../components/SEO';
import { AboutIllustration } from '../components/AboutIllustration';
import { AboutSnapshot } from '../components/AboutSnapshot';
import { AboutTimeline } from '../components/AboutTimeline';
import { ScrollFade } from '../components/ScrollFade';

export const About: React.FC = () => {
    return (
        <div className="pt-0 pb-24 px-0 relative overflow-x-clip min-h-screen bg-cream dark:bg-tech-black transition-colors duration-300">
            <SEO
                title="About Me | Amal S Kumar"
                description="Learn about Amal S Kumar's journey, software capabilities, education, and freelance client collaborations."
            />

            {/* Grid Pattern and Ambient Backgrounds */}
            <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.03] opacity-[0.2] z-0 pointer-events-none transition-opacity duration-300" />
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-pink-500/5 dark:bg-pink-500/2 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[140px] pointer-events-none z-0" />

            <div className="w-full relative z-10 flex flex-col">
                {/* Section: Developer Identity 3D Illustration & Storyteller */}
                <AboutIllustration />
                
                {/* Section: My Story Scroll Reveal */}
                <ScrollFade amount={0.1}>
                    <AboutSnapshot />
                </ScrollFade>

                {/* Section: Interactive Dev Timeline */}
                <AboutTimeline />
            </div>
        </div>
    );
};

export default About;
