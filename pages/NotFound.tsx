import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-tech-black flex flex-col items-center justify-center px-4 transition-colors duration-300">
            <SEO title="404 - Page Not Found | Amal S Kumar" description="The page you are looking for does not exist." />

            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-9xl font-display font-bold text-gray-200 dark:text-gray-800 mb-4 select-none">
                    404
                </h1>

                <div className="relative z-10 -mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-500/20"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
