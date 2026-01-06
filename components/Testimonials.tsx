import React from 'react';
import { ArrowUpRight, Monitor, Smartphone, Award, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
    return (
        <section className="bg-cream dark:bg-tech-black py-24 px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* Metric Cards - Moved up */}
                <div className="grid md:grid-cols-2 gap-6 mb-24">
                    <div className="bg-[#111] rounded-[2rem] p-10 text-white flex flex-col justify-between min-h-[240px] group cursor-pointer transition-transform hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="flex justify-between items-start relative z-10">
                            <h3 className="text-4xl font-sans font-bold">10+ Projects<br /><span className="text-gray-500">Delivered</span></h3>
                            <ArrowUpRight className="opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="relative z-10">
                            <p className="text-gray-400 text-sm mb-4">From academic projects to freelance clients.</p>
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800"></div>
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-black bg-gray-700 flex items-center justify-center text-[10px]">10+</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-tech-gray rounded-[2rem] p-10 border border-gray-100 dark:border-white/10 flex flex-col justify-between min-h-[240px] group cursor-pointer transition-all hover:-translate-y-1">
                        <div className="flex justify-between items-start">
                            <h3 className="text-4xl font-sans font-bold text-tech-black dark:text-white transition-colors">Client<br /><span className="text-gray-400">Focus</span></h3>
                            <Award className="text-yellow-500" size={32} />
                        </div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-300 text-sm mb-4 transition-colors">I prioritize delivering high-quality, scalable solutions that solve real problems.</p>
                            <div className="text-sm font-bold underline dark:text-white">View GitHub</div>
                        </div>
                    </div>
                </div>

                {/* Client Stories */}
                <div className="bg-[#FAFBFF] dark:bg-tech-gray/20 rounded-[3rem] px-6 py-24 relative overflow-hidden transition-colors duration-300">

                    <div className="text-center mb-20 relative z-10">
                        <h2 className="text-5xl font-sans font-bold text-gray-900 dark:text-white mb-4 transition-colors">Selected Works</h2>
                        <p className="text-gray-500 dark:text-gray-400 transition-colors">A glimpse into my development journey.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 relative z-10">
                        {/* Testimonial 1 */}
                        <div className="bg-white dark:bg-tech-gray/50 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col transition-colors">
                            <Monitor className="text-blue-100 dark:text-blue-500/30 mb-4" size={40} />
                            <h4 className="font-bold text-lg mb-2 dark:text-white">Hope and Heal (Australia)</h4>
                            <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6 flex-1 transition-colors">"Designed and deployed a fully responsive WordPress website for a disability aid company, ensuring accessibility and SEO compliance."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center text-xs font-bold dark:text-white">HH</div>
                                <div>
                                    <div className="font-bold text-sm dark:text-white">Web Development</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Freelance</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white dark:bg-tech-gray/50 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col transition-colors">
                            <Monitor className="text-blue-100 dark:text-blue-500/30 mb-4" size={40} />
                            <h4 className="font-bold text-lg mb-2 dark:text-white">HOC Art Cafe (Bangalore)</h4>
                            <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6 flex-1 transition-colors">"Developed a custom café website using HTML, CSS, and JS with smooth scrolling and fast load times."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center text-xs font-bold dark:text-white">HC</div>
                                <div>
                                    <div className="font-bold text-sm dark:text-white">Frontend Development</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Freelance</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white dark:bg-tech-gray/50 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col transition-colors">
                            <Smartphone className="text-blue-100 dark:text-blue-500/30 mb-4" size={40} />
                            <h4 className="font-bold text-lg mb-2 dark:text-white">Taxi Booking System</h4>
                            <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6 flex-1 transition-colors">"Final Year Project using Python Django. A comprehensive system for booking and managing taxi rides."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center text-xs font-bold dark:text-white">TBS</div>
                                <div>
                                    <div className="font-bold text-sm dark:text-white">Full-Stack App</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Academic Project</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
