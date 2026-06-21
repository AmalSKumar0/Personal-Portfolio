import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSnapshot } from '../components/AboutSnapshot';
import { CompaniesRibbon } from '../components/CompaniesRibbon';
import { TechStackSnapshot } from '../components/TechStackSnapshot';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { SEO } from '../components/SEO';
import { ScrollFade } from '../components/ScrollFade';

export const Home: React.FC = () => {
    return (
        <>
            <SEO
                title="Amal S Kumar | Backend Engineer & Systems Builder"
                description="Portfolio of Amal S Kumar, Backend Engineer specializing in scalable APIs, distributed systems, database optimization, and high-performance server-side applications."
            />
            <ScrollFade delay={0.1} amount={0.05} direction="none">
                <Hero />
            </ScrollFade>
            <ScrollFade amount={0.1}>
                <CompaniesRibbon />
            </ScrollFade>
            <ScrollFade amount={0.1}>
                <AboutSnapshot />
            </ScrollFade>
            <ScrollFade amount={0.1}>
                <TechStackSnapshot />
            </ScrollFade>
            <ScrollFade amount={0.1}>
                <FeaturedProjects />
            </ScrollFade>
        </>
    );
};
