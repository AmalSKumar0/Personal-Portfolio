import React from 'react';
import { motion } from 'framer-motion';

export const Resume: React.FC = () => {
    return (
        <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 bg-gray-50 dark:bg-tech-black flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-5xl h-[85vh] bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
                <div className="w-full h-full flex flex-col">
                    <div className="p-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Resume Preview</h1>
                        <a
                            href="/resume/resume.pdf"
                            download="Amal_S_Kumar_Resume.pdf"
                            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Download PDF
                        </a>
                    </div>
                    <iframe
                        src="/resume/resume.pdf"
                        className="w-full flex-grow"
                        title="Resume"
                    />
                </div>
            </motion.div>
        </div>
    );
};
