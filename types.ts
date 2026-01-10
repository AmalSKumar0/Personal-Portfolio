export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    tags: string[];
    imageUrl: string;
    demoUrl?: string;
    githubUrl?: string;
    features: string[];
    role: string;
    date: string;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    duration: string;
    description: string;
    achievements: string[];
    logoUrl?: string;
    websiteUrl?: string;
    techStack: string[];
}
