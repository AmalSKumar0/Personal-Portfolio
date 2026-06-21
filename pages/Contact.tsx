import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ScrollFade } from '@/components/ScrollFade';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Load saved details on mount
    React.useEffect(() => {
        const savedName = localStorage.getItem('visitorName');
        const savedEmail = localStorage.getItem('visitorEmail');
        if (savedName || savedEmail) {
            setFormData(prev => ({
                ...prev,
                name: savedName || '',
                email: savedEmail || ''
            }));
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        // Save details for next time
        localStorage.setItem('visitorName', formData.name);
        localStorage.setItem('visitorEmail', formData.email);

        const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            setStatus('error');
            setErrorMessage('Configuration Error: Telegram credentials missing.');
            return;
        }

        // Fetch IP Address
        let ipAddress = 'Unknown';
        try {
            const ipRes = await fetch('https://api.ipify.org?format=json');
            const ipData = await ipRes.json();
            ipAddress = ipData.ip;
        } catch (error) {
            console.error('Failed to fetch IP:', error);
        }

        // Gather System Metadata
        const systemInfo = `
--------------------------------
*System Info:*
*IP:* \`${ipAddress}\`
*OS:* ${navigator.platform}
*Browser:* ${navigator.userAgent}
*Time:* ${new Date().toLocaleString()}
        `;

        const text = `
*New Message From A Client*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Message:*
${formData.message}
${systemInfo}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'Markdown',
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData(prev => ({ ...prev, message: '' })); // Only clear message
                setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again later.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col items-center bg-cream dark:bg-tech-black transition-colors duration-300">
            <SEO
                title="Contact Me | Amal S Kumar"
                description="Get in touch with Amal S Kumar for freelance projects, job opportunities, or collaboration. Send a message directly."
            />

            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.05] opacity-[0.4] z-0 pointer-events-none transition-opacity duration-300"></div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px] animate-pulse-glow"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
            </div>

            <motion.div
                className="max-w-7xl w-full mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <ScrollFade direction="none" delay={0.1}>
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight text-gray-900 dark:text-white">
                            Get in <span className="text-neon-blue drop-shadow-sm">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Have a project, job opening, or backend architecture topic to discuss? I'd love to chat.
                        </p>
                    </div>
                </ScrollFade>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <ScrollFade direction="up" delay={0.15}>
                        <div className="bg-white/80 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 group-hover:text-neon-blue transition-colors">Contact Information</h2>
                            <div className="space-y-8">
                                <motion.div
                                    className="flex items-start gap-5"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-4 bg-neon-purple/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-6 h-6 text-neon-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">Email</h3>
                                        <p className="text-gray-500 dark:text-gray-400 hover:text-neon-blue transition-colors cursor-pointer">
                                            amalskumarofficialz@gmail.com
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start gap-5"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-4 bg-neon-purple/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                        <Phone className="w-6 h-6 text-neon-purple" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">Phone</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            +91 85907 74603
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start gap-5"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-4 bg-neon-purple/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                        <MessageSquare className="w-6 h-6 text-neon-cyan" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">Socials</h3>
                                        <a
                                            href="https://www.linkedin.com/in/amal-fsd/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 dark:text-gray-400 hover:text-neon-cyan transition-colors cursor-pointer"
                                        >
                                            @amalskumar
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </ScrollFade>

                    {/* Contact Form */}
                    <ScrollFade direction="up" delay={0.25}>
                        <div className="bg-white/80 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 backdrop-blur-md shadow-xl relative">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">
                                        Name
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/10 transition-all placeholder:text-gray-400"
                                        placeholder="Your name"
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">
                                        Email
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/10 transition-all placeholder:text-gray-400"
                                        placeholder="your.email@example.com"
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1">
                                        Message
                                    </label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.01 }}
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/10 transition-all placeholder:text-gray-400 resize-none"
                                        placeholder="How can I help you?"
                                        required
                                        disabled={status === 'sending'}
                                    />
                                </div>

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

                                <motion.button
                                    whileHover={{ scale: 1.02, translateY: -2 }}
                                    tap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={status === 'sending' || status === 'success'}
                                    className={`w-full font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${status === 'success'
                                        ? 'bg-green-500 text-white cursor-default'
                                        : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-tech-black'
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
                                            Send Message
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </ScrollFade>
                </div>
            </motion.div>
        </div>
    );
};
