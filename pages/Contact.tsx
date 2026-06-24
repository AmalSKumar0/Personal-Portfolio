import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ScrollFade } from '@/components/ScrollFade';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Load saved details on mount
    React.useEffect(() => {
        const savedFirstName = localStorage.getItem('visitorFirstName');
        const savedLastName = localStorage.getItem('visitorLastName');
        const savedEmail = localStorage.getItem('visitorEmail');
        if (savedFirstName || savedLastName || savedEmail) {
            setFormData(prev => ({
                ...prev,
                firstName: savedFirstName || '',
                lastName: savedLastName || '',
                email: savedEmail || ''
            }));
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        // Save details for next time
        localStorage.setItem('visitorFirstName', formData.firstName);
        localStorage.setItem('visitorLastName', formData.lastName);
        localStorage.setItem('visitorEmail', formData.email);

        // Fetch IP Address
        let ipAddress = 'Unknown';
        try {
            const ipRes = await fetch('https://api.ipify.org?format=json');
            const ipData = await ipRes.json();
            ipAddress = ipData.ip;
        } catch (error) {
            console.error('Failed to fetch IP:', error);
        }

        const metadata = {
            ip: ipAddress,
            os: navigator.platform || 'Unknown',
            browser: navigator.userAgent || 'Unknown',
            time: new Date().toLocaleString()
        };

        const apiEndpoint = import.meta.env.VITE_CONTACT_API_URL || 'http://localhost:8080/api/contact/';

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    message: formData.message,
                    metadata: metadata
                }),
            });

            // Read response
            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('success');
                setFormData(prev => ({ ...prev, message: '' })); // Clear message
                setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'Failed to send message. Please try again later.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden min-h-screen flex flex-col items-center bg-cream dark:bg-tech-black transition-colors duration-300">
            <SEO
                title="Contact Me | Amal S Kumar"
                description="Get in touch with Amal S Kumar for freelance projects, job opportunities, or collaboration. Send a message directly."
            />

            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.03] opacity-[0.2] z-0 pointer-events-none transition-opacity duration-300"></div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-pink-500/5 dark:bg-pink-500/2 rounded-full blur-[120px] animate-pulse-glow"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
            </div>

            <motion.div
                className="max-w-7xl w-full mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Massive Header Section */}
                <ScrollFade direction="none" delay={0.1}>
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-gray-900 dark:text-white leading-none mb-16 select-none">
                        Contact me
                    </h1>
                </ScrollFade>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 w-full">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full">
                        <div>
                            <ScrollFade direction="up" delay={0.15}>
                                <div className="space-y-12">
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-mono mb-2">Location &amp; Year</h3>
                                        <p className="text-base font-semibold text-gray-800 dark:text-gray-250">Kerala, India &copy; 2026</p>
                                    </div>

                                    
                                </div>
                            </ScrollFade>

                            {/* Large Contact Info */}
                            <ScrollFade direction="up" delay={0.2}>
                                <div className="space-y-6 mt-16 lg:mt-32">
                                    <a
                                        href="mailto:amalskumardev@gmail.com"
                                        className="block text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-neon-purple dark:hover:text-neon-cyan transition-colors duration-300 break-all"
                                    >
                                        amalskumardev@gmail.com
                                    </a>
                                    <a
                                        href="tel:+918590774603"
                                        className="block text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-neon-purple dark:hover:text-neon-cyan transition-colors duration-300"
                                    >
                                        +91 85907 74603
                                    </a>
                                </div>
                            </ScrollFade>
                        </div>

                        {/* Social Links and Meta */}
                        <ScrollFade direction="up" delay={0.25}>
                            <div className="pt-8 mt-12 border-t border-gray-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-405">
                                <div>
                                    <p>Kerala, India / 2026</p>
                                    <p>Say hello: Work with us</p>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/AmalSKumar0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-neon-purple dark:hover:text-neon-cyan transition-colors font-semibold"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/amal-fsd/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-neon-purple dark:hover:text-neon-cyan transition-colors font-semibold"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href="mailto:amalskumardev@gmail.com"
                                        className="hover:text-neon-purple dark:hover:text-neon-cyan transition-colors font-semibold"
                                    >
                                        Email
                                    </a>
                                </div>
                            </div>
                        </ScrollFade>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-7">
                        <ScrollFade direction="up" delay={0.2}>
                            <div className="bg-transparent">
                                <form onSubmit={handleSubmit} className="space-y-12">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="relative group">
                                            <label htmlFor="firstName" className="block text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-mono mb-2 select-none">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="First Name"
                                                required
                                                disabled={status === 'sending'}
                                                className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 focus:border-neon-purple dark:focus:border-neon-cyan py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label htmlFor="lastName" className="block text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-mono mb-2 select-none">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Last Name"
                                                required
                                                disabled={status === 'sending'}
                                                className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 focus:border-neon-purple dark:focus:border-neon-cyan py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                   

                                    {/* Email */}
                                    <div className="relative group">
                                        <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-mono mb-2 select-none">
                                            Email Address (required)
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            required
                                            disabled={status === 'sending'}
                                            className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 focus:border-neon-purple dark:focus:border-neon-cyan py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none transition-colors"
                                        />
                                    </div>

                                   

                                    {/* Project Description */}
                                    <div className="relative group">
                                        <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-mono mb-2 select-none">
                                            Project description
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Tell me about your project details, goals, timeline..."
                                            required
                                            disabled={status === 'sending'}
                                            className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 focus:border-neon-purple dark:focus:border-neon-cyan py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Status Feedback */}
                                    <AnimatePresence mode="wait">
                                        {status === 'error' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl flex items-center gap-2 text-sm"
                                            >
                                                <AlertCircle size={16} />
                                                {errorMessage}
                                            </motion.div>
                                        )}
                                        {status === 'success' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-3 rounded-xl flex items-center gap-2 text-sm"
                                            >
                                                <CheckCircle size={16} />
                                                Message sent successfully! I'll get back to you soon.
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02, translateY: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={status === 'sending' || status === 'success'}
                                            className={`font-bold py-3.5 px-10 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                                                status === 'success'
                                                    ? 'bg-green-500 text-white cursor-default'
                                                    : 'bg-slate-900 dark:bg-white hover:bg-neon-purple dark:hover:bg-neon-cyan text-white dark:text-tech-black hover:text-white dark:hover:text-tech-black'
                                            }`}
                                        >
                                            {status === 'sending' ? (
                                                <Loader2 className="animate-spin" />
                                            ) : status === 'success' ? (
                                                <>
                                                    Sent
                                                    <CheckCircle className="w-4 h-4" />
                                                </>
                                            ) : (
                                                <>
                                                    Submit
                                                    <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        </ScrollFade>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

