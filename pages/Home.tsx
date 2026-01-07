import React from 'react';
import { Hero } from '../components/Hero';
import { DemoSection } from '../components/DemoSection';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { TelemetrySection } from '../components/TelemetrySection';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
    return (
        <>
            <SEO
                title="Amal S Kumar | Full Stack Developer"
                description="Portfolio of Amal S Kumar, expert in React, Node.js, and Python. View projects, skills, and contact information."
            />
            <Hero />
            <DemoSection />
            <TelemetrySection />
            <Features />
            <Testimonials />
        </>
    );
};
