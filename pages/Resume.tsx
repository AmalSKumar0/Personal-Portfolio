import React from 'react';

export const Resume: React.FC = () => {
    return (
        <div className="w-full h-[calc(100vh-5.5rem)] md:h-[calc(100vh-6.5rem)] flex flex-col bg-cream dark:bg-tech-black">
            <div className="w-full h-full flex-grow">
                <iframe
                    src="/resume/resume.pdf"
                    className="w-full h-full border-none"
                    title="Resume"
                />
            </div>
        </div>
    );
};

export default Resume;
