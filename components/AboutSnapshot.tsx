import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface WordItem {
  text: string;
  italic?: boolean;
}

const Word: React.FC<{
  text: string;
  italic?: boolean;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ text, italic, progress, range }) => {
  // Reveal opacity from 0.12 (muted/ghost state) to 1.0 (active theme text color)
  const opacity = useTransform(progress, range, [0.12, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.22em] font-serif select-none transition-colors duration-300 ${
        italic 
          ? 'italic font-normal text-neon-purple dark:text-neon-cyan' 
          : 'font-light text-gray-900 dark:text-white'
      }`}
    >
      {text}
    </motion.span>
  );
};

export const AboutSnapshot: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Track scroll position of the entire section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Concentrate the reveal animation while the container is in the central viewport area
  const activeProgress = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);

  // Define the words for the 3 distinct paragraphs based on the provided resume
  const p1: WordItem[] = [
    { text: "I" }, { text: "am" }, { text: "a" }, { text: "Software" }, { text: "Developer" },
    { text: "with" }, { text: "hands-on" }, { text: "experience" }, { text: "building" },
    { text: "scalable" }, { text: "full-stack" }, { text: "web" }, { text: "applications" },
    { text: "using" }, { text: "Python," }, { text: "Django," }, { text: "PHP," }, { text: "and" },
    { text: "Laravel." }
  ];

  const p2: WordItem[] = [
    { text: "I" }, { text: "specialize" }, { text: "in" }, { text: "backend" }, { text: "development," },
    { text: "designing" }, { text: "robust" }, { text: "RESTful" }, { text: "APIs," }, { text: "and" },
    { text: "orchestrating" }, { text: "workflows" }, { text: "with" }, { text: "Redis," }, { text: "Celery," },
    { text: "and" }, { text: "AWS." }, { text: "My" }, { text: "projects" }, { text: "range" },
    { text: "from" }, { text: "digital" }, { text: "marketplaces" }, { text: "like" }, { text: "Velora", italic: true },
    { text: "to" }, { text: "custom" }, { text: "programming" }, { text: "languages." }
  ];

  const p3: WordItem[] = [
    { text: "I" }, { text: "have" }, { text: "delivered" }, { text: "multiple" }, { text: "freelance" },
    { text: "websites" }, { text: "and" }, { text: "continually" }, { text: "strive" }, { text: "to" },
    { text: "develop" }, { text: "business-focused" }, { text: "solutions" }, { text: "with" }, { text: "strong" },
    { text: "foundational" }, { text: "architectures." }
  ];

  // Concatenate all words to compute their individual active range sequentially
  const allWords = [
    ...p1.map(w => ({ ...w, paragraph: 1 })),
    ...p2.map(w => ({ ...w, paragraph: 2 })),
    ...p3.map(w => ({ ...w, paragraph: 3 }))
  ];

  const totalWords = allWords.length;

  return (
    <section 
      ref={containerRef} 
      className="relative bg-cream dark:bg-tech-black transition-colors duration-500 py-24 md:py-32 px-4 sm:px-8 md:px-12 flex flex-col justify-center min-h-[90vh] overflow-hidden border-t border-gray-200/50 dark:border-white/10"
    >
      {/* Background Subtle Mesh Effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-[0.03] z-0 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-neon-purple/5 dark:bg-neon-purple/2 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-neon-cyan/5 dark:bg-neon-cyan/2 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Reduced max width from 6xl to 4xl to tighten the viewing window */}
      <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Top Header */}
        
        {/* Middle Section: Origin Title & Centered Scroll-Reveal Content */}
        <div className="flex-grow flex flex-col justify-center my-auto">
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-10 md:mb-14"
          >
            <h3 className="font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase">
              ABOUT ME
            </h3>
          </motion.div>

          {/* Centered Serif Paragraphs with Sequential Reveal - Larger Unified Size & Tighter Constraints */}
          <div className="flex flex-col gap-12 md:gap-16 text-center">
            
            {/* Paragraph 1 */}
            {/* Increased text size to 7xl, reduced max-width to 3xl */}
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight max-w-3xl mx-auto">
              {p1.map((w, i) => {
                const globalIndex = i;
                const start = globalIndex / totalWords;
                const end = Math.min(1, (globalIndex + 2) / totalWords);
                return (
                  <Word
                    key={`p1-${i}`}
                    text={w.text}
                    italic={w.italic}
                    progress={activeProgress}
                    range={[start, end]}
                  />
                );
              })}
            </p>

            {/* Paragraph 2 */}
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight max-w-3xl mx-auto">
              {p2.map((w, i) => {
                const globalIndex = p1.length + i;
                const start = globalIndex / totalWords;
                const end = Math.min(1, (globalIndex + 2) / totalWords); 
                return (
                  <Word
                    key={`p2-${i}`}
                    text={w.text}
                    italic={w.italic}
                    progress={activeProgress}
                    range={[start, end]}
                  />
                );
              })}
            </p>

            {/* Paragraph 3 */}
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight max-w-3xl mx-auto">
              {p3.map((w, i) => {
                const globalIndex = p1.length + p2.length + i;
                const start = globalIndex / totalWords;
                const end = Math.min(1, (globalIndex + 2) / totalWords);
                return (
                  <Word
                    key={`p3-${i}`}
                    text={w.text}
                    italic={w.italic}
                    progress={activeProgress}
                    range={[start, end]}
                  />
                );
              })}
            </p>

            {/* Conditionally render glassmorphic "View More" button on Home page */}
            {isHomePage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className="mt-16 text-center"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-lavender-100/40 dark:bg-white/5 border border-lavender-300/50 dark:border-white/10 text-lavender-900 dark:text-white rounded-full font-bold hover:bg-lavender-200/50 dark:hover:bg-white/10 backdrop-blur-md shadow-md hover:shadow-lg hover:scale-[1.03] transition-all cursor-pointer group"
                >
                  <span>View More</span>
                  <ArrowRight size={16} className="text-neon-purple dark:text-neon-cyan group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSnapshot;