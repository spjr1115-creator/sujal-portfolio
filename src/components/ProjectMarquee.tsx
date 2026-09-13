import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export interface ProjectVisual {
  id: string;
  title: string;
  category: string;
  badge: string;
  gradient: string;
  accentColor: string;
  techStack: string[];
}

const projectVisuals: ProjectVisual[] = [
  {
    id: 'zayathon',
    title: 'Zayathon',
    category: 'Hackathon & Builder Platform',
    badge: 'HACKATHON',
    gradient: 'from-[#1E022A] via-[#390A50] to-[#0C0C0C]',
    accentColor: '#B600A8',
    techStack: ['React', 'Firebase', 'Tailwind'],
  },
  {
    id: 'ecoquest',
    title: 'EcoQuest',
    category: 'Gamified Environmental Tracker',
    badge: 'SUSTAINABILITY',
    gradient: 'from-[#052C1C] via-[#0F4E30] to-[#0C0C0C]',
    accentColor: '#62e59a',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: 'neer',
    title: 'NEER Safety Band',
    category: 'IoT Safety & SOS System',
    badge: 'HARDWARE & IOT',
    gradient: 'from-[#0B1F42] via-[#17386D] to-[#0C0C0C]',
    accentColor: '#78aaff',
    techStack: ['ESP32', 'GPS', 'Firebase'],
  },
  {
    id: 'expense',
    title: 'Expense Tracker',
    category: 'Personal Finance & Expense Management',
    badge: 'FINANCE APP',
    gradient: 'from-[#25133B] via-[#461D69] to-[#0C0C0C]',
    accentColor: '#8d7bff',
    techStack: ['JavaScript', 'Firestore', 'Chart.js'],
  },
  {
    id: 'dashboard',
    title: 'Main Dashboard',
    category: 'Project Management Dashboard',
    badge: 'WEB APP',
    gradient: 'from-[#15233C] via-[#23365B] to-[#0C0C0C]',
    accentColor: '#BBCCD7',
    techStack: ['React', 'TypeScript', 'Vite'],
  },
];

// Row 1 & Row 2 visual sequences duplicated 3 times for a seamless, gapless infinite loop
const row1Items = [...projectVisuals, ...projectVisuals, ...projectVisuals];
const row2Items = [
  projectVisuals[1],
  projectVisuals[3],
  projectVisuals[0],
  projectVisuals[4],
  projectVisuals[2],
  projectVisuals[1],
  projectVisuals[3],
  projectVisuals[0],
  projectVisuals[4],
  projectVisuals[2],
  projectVisuals[1],
  projectVisuals[3],
  projectVisuals[0],
  projectVisuals[4],
  projectVisuals[2],
];

export const ProjectMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-driven horizontal transforms:
  // Row 1 moves RIGHT as user scrolls down; Row 2 moves LEFT as user scrolls down.
  const xRow1 = useTransform(scrollYProgress, [0, 1], ['-18%', '4%']);
  const xRow2 = useTransform(scrollYProgress, [0, 1], ['4%', '-18%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0C0C0C] pt-20 sm:pt-32 md:pt-40 pb-12 overflow-hidden select-none"
      aria-label="Project Visual Marquee"
    >
      {/* Subtle ambient gradient overlay linking Hero to Marquee */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#B600A8]/10 via-[#7621B0]/10 to-[#78aaff]/10 blur-3xl pointer-events-none opacity-40" />

      <div className="flex flex-col gap-4 sm:gap-6 relative z-10">
        {/* ROW 1: Moves RIGHT as user scrolls down */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : xRow1,
            willChange: 'transform',
          }}
          className="flex gap-4 sm:gap-6 w-max"
        >
          {row1Items.map((item, idx) => (
            <MarqueeCard key={`row1-${item.id}-${idx}`} item={item} />
          ))}
        </motion.div>

        {/* ROW 2: Moves LEFT as user scrolls down */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : xRow2,
            willChange: 'transform',
          }}
          className="flex gap-4 sm:gap-6 w-max"
        >
          {row2Items.map((item, idx) => (
            <MarqueeCard key={`row2-${item.id}-${idx}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MarqueeCard: React.FC<{ item: ProjectVisual }> = ({ item }) => {
  return (
    <div
      className={`relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] h-[170px] sm:h-[210px] md:h-[250px] lg:h-[280px] rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b ${item.gradient} p-5 sm:p-6 flex flex-col justify-between group hover:scale-[1.02] hover:border-white/30 transition-all duration-300 cursor-pointer shadow-2xl backdrop-blur-md`}
    >
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 group-hover:opacity-20 transition-opacity" />

      {/* Top Bar: Badge & Project Name */}
      <div className="relative z-10 flex justify-between items-center">
        <span
          style={{ color: item.accentColor }}
          className="font-mono text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          {item.badge}
        </span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Center Project Presentation Window */}
      <div className="relative z-10 my-auto bg-[#08080C]/80 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/15 space-y-2 group-hover:border-white/30 transition-colors">
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <h3 className="text-sm sm:text-base font-mono font-bold text-white tracking-tight">
            {item.title}
          </h3>
          <span style={{ color: item.accentColor }} className="text-xs">
            ↗
          </span>
        </div>

        {/* Factual Tech Stack Badges (Zero Fake Metrics) */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[10px] sm:text-xs font-mono text-[#D7E2EA]/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Factual Category Description */}
      <div className="relative z-10 flex justify-between items-end pt-2 border-t border-white/10">
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase">
            {item.title}
          </h4>
          <p className="text-[10px] sm:text-xs text-[#D7E2EA]/60 font-light truncate max-w-[200px] sm:max-w-[280px]">
            {item.category}
          </p>
        </div>
        <span
          style={{ color: item.accentColor }}
          className="text-xs sm:text-sm font-bold group-hover:translate-x-1 transition-transform"
        >
          Explore
        </span>
      </div>
    </div>
  );
};
