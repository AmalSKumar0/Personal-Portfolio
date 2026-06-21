import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSnapshot } from '../components/AboutSnapshot';
import { CompaniesRibbon } from '../components/CompaniesRibbon';
import { TechStackSnapshot } from '../components/TechStackSnapshot';
import { TelemetrySection } from '../components/TelemetrySection';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
    return (
        <>
            <SEO
                title="Amal S Kumar | Backend Engineer & Systems Builder"
                description="Portfolio of Amal S Kumar, Backend Engineer specializing in scalable APIs, distributed systems, database optimization, and high-performance server-side applications."
            />
            <Hero />
            <CompaniesRibbon />
            <AboutSnapshot />
            <TechStackSnapshot />
        </>
    );
};
