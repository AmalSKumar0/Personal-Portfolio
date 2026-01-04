import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
    image?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = "Amal S Kumar, Full Stack Developer, Python, Django, React, AI, Portfolio",
    url = "https://amalskumar.co.in",
    image = "/assets/img/projects/portfolio.png"
}) => {
    const siteTitle = `${title} | Amal S Kumar`;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};
