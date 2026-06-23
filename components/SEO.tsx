import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Project } from '../types';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    project?: Project;
}

export const SEO: React.FC<SEOProps> = ({
    title = "Amal S Kumar | Backend Engineer & Systems Builder",
    description = "Portfolio of Amal S Kumar, Backend Engineer specializing in scalable APIs, distributed systems, database optimization, and high-performance server-side applications.",
    keywords = "Amal S Kumar, Backend Engineer, Systems Builder, Software Developer Kerala, Full Stack Developer India, React Developer, Django Expert, Systems Programmer, Python Django, C Interpreter, Developer Portfolio",
    image = "/portfolio.png",
    url = "https://amalskumar.dev"
}) => {
    const siteTitle = title === "Amal S Kumar | Backend Engineer & Systems Builder" ? title : `${title} | Amal S Kumar`;

    // Ensure OG/Twitter images use absolute URLs
    const absoluteImageUrl = image.startsWith('http') ? image : `${url}${image}`;

    // Base JSON-LD schemas
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://amalskumar.dev/#person",
        "name": "Amal S Kumar",
        "url": "https://amalskumar.dev",
        "jobTitle": "Backend Engineer & Systems Builder",
        "image": "https://amalskumar.dev/portfolio.png",
        "description": "Backend Engineer specializing in scalable APIs, distributed systems, compiler design, and high-performance applications.",
        "knowsAbout": [
            "React", "TypeScript", "Python", "Django", "PostgreSQL", "C", "Systems Programming", "Web Development", "API Design", "Docker"
        ],
        "sameAs": [
            "https://linkedin.com/in/amal-fsd",
            "https://github.com/AmalSKumar0"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://amalskumar.dev/#website",
        "url": "https://amalskumar.dev",
        "name": "Amal S Kumar - Personal Developer Portfolio",
        "description": "Premium developer portfolio of Amal S Kumar specializing in React, Django, C, and custom systems development.",
        "publisher": {
            "@id": "https://amalskumar.dev/#person"
        }
    };

    const schemas: any[] = [personSchema, websiteSchema];

    // Append project schema when on a case study page
    if (project) {
        const projectSchema = {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "@id": `https://amalskumar.dev/project/${project.id}#project`,
            "name": project.title,
            "description": project.fullDescription || project.shortDescription,
            "codeRepository": project.githubUrl || undefined,
            "programmingLanguage": project.tags,
            "targetProduct": project.demoUrl ? {
                "@type": "WebApplication",
                "name": project.title,
                "url": project.demoUrl
            } : undefined,
            "author": {
                "@id": "https://amalskumar.dev/#person"
            }
        };
        schemas.push(projectSchema);
    }

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Amal S Kumar" />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#8B5CF6" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImageUrl} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Amal S Kumar Portfolio" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={absoluteImageUrl} />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemas)}
            </script>
        </Helmet>
    );
};
