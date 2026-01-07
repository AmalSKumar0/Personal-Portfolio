import React from 'react';
import { Hero } from '../components/Hero';
import { DemoSection } from '../components/DemoSection';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { TelemetrySection } from '../components/TelemetrySection';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <DemoSection />
            <TelemetrySection />
            <Features />
            <Testimonials />
        </>
    );
};
