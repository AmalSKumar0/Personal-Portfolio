import React from 'react';
import { ArrowUpRight, Monitor, Smartphone, Award, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Metric Cards - Moved up */}
             <div className="grid md:grid-cols-2 gap-6 mb-24">
                 <div className="bg-[#111] rounded-[2rem] p-10 text-white flex flex-col justify-between min-h-[240px] group cursor-pointer transition-transform hover:-translate-y-1 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                     <div className="flex justify-between items-start relative z-10">
                         <h3 className="text-4xl font-sans font-bold">50+ Projects<br/><span className="text-gray-500">Delivered</span></h3>
                         <ArrowUpRight className="opacity-50 group-hover:opacity-100 transition-opacity" />
                     </div>
                     <div className="relative z-10">
                         <p className="text-gray-400 text-sm mb-4">From startups to Fortune 500s.</p>
                         <div className="flex -space-x-2">
                              {[1,2,3,4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800"></div>
                              ))}
                              <div className="w-8 h-8 rounded-full border-2 border-black bg-gray-700 flex items-center justify-center text-[10px]">+40</div>
                         </div>
                     </div>
                 </div>

                 <div className="bg-white rounded-[2rem] p-10 border border-gray-100 flex flex-col justify-between min-h-[240px] group cursor-pointer transition-transform hover:-translate-y-1">
                     <div className="flex justify-between items-start">
                         <h3 className="text-4xl font-sans font-bold">100% Client<br/><span className="text-gray-400">Satisfaction</span></h3>
                         <Award className="text-yellow-500" size={32} />
                     </div>
                     <div>
                         <p className="text-gray-500 text-sm mb-4">We prioritize long-term partnerships over one-off gigs.</p>
                         <div className="text-sm font-bold underline">Read our reviews</div>
                     </div>
                 </div>
             </div>

        {/* Client Stories */}
        <div className="bg-[#FAFBFF] rounded-[3rem] px-6 py-24 relative overflow-hidden">
             
             <div className="text-center mb-20 relative z-10">
                 <h2 className="text-5xl font-sans font-bold text-gray-900 mb-4">What our clients say</h2>
                 <p className="text-gray-500">Don't just take our word for it.</p>
             </div>

             <div className="grid md:grid-cols-3 gap-6 relative z-10">
                  {/* Testimonial 1 */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                        <Quote className="text-blue-100 mb-4" size={40} />
                        <p className="text-gray-800 leading-relaxed mb-6 flex-1">"DevStudio transformed our legacy system into a modern, scalable cloud platform. The transition was seamless and improved our efficiency by 300%."</p>
                        <div className="flex items-center gap-3">
                             <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden"></div>
                             <div>
                                 <div className="font-bold text-sm">Sarah Jenkins</div>
                                 <div className="text-xs text-gray-500">CTO, FinTech Co</div>
                             </div>
                        </div>
                  </div>
                  
                  {/* Testimonial 2 */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                         <Quote className="text-blue-100 mb-4" size={40} />
                        <p className="text-gray-800 leading-relaxed mb-6 flex-1">"The best development agency we've worked with. Their attention to UI/UX detail coupled with solid engineering is rare to find."</p>
                        <div className="flex items-center gap-3">
                             <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden"></div>
                             <div>
                                 <div className="font-bold text-sm">Michael Chen</div>
                                 <div className="text-xs text-gray-500">Founder, HealthApp</div>
                             </div>
                        </div>
                  </div>

                  {/* Testimonial 3 */}
                   <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                         <Quote className="text-blue-100 mb-4" size={40} />
                        <p className="text-gray-800 leading-relaxed mb-6 flex-1">"They delivered our mobile app 2 weeks ahead of schedule. The code quality is top-notch and easy for our internal team to maintain."</p>
                        <div className="flex items-center gap-3">
                             <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden"></div>
                             <div>
                                 <div className="font-bold text-sm">Elena Rodriguez</div>
                                 <div className="text-xs text-gray-500">Product Manager, E-Shop</div>
                             </div>
                        </div>
                  </div>
             </div>

        </div>
      </div>
    </section>
  );
};