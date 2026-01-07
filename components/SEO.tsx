import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title = "Amal S Kumar | Full Stack Developer",
    description = "Portfolio of Amal S Kumar, a Computer Science student and Full Stack Developer from Kerala, India. Specialize in React, Django, and scalable web solutions.",
    keywords = "Amal S Kumar, Computer Science Student, Web Developer Kerala, Full Stack Developer India, React Developer, Django Expert, Software Engineer Portfolio",
    image = "/image.png", // Assuming this is in public folder
    url = "https://amalskumar.co.in"
}) => {
    const siteTitle = title === "Amal S Kumar | Full Stack Developer" ? title : `${title} | Amal S Kumar`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Amal S Kumar",
        "url": "https://amalskumar.co.in",
        "jobTitle": "Student & Full Stack Developer",
        "image": "https://amalskumar.co.in/image.png",
        "sameAs": [
            "https://linkedin.com/in/amal-fsd",
            "https://github.com/AmalSKumar0"
        ]
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

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

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};
