import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export interface ProjectVisual {
  id: string;
  title: string;
  category: string;
  badge: string;
  gradient: string;
  accentColor: string;
  type: 'zayathon' | 'ecoquest' | 'neer' | 'expense' | 'dashboard';
}

const projectVisuals: ProjectVisual[] = [
  {
    id: 'zayathon-1',
    title: 'Zayathon',
    category: 'Hackathon & Builder Platform',
    badge: 'HACKATHON',
    gradient: 'from-[#18011F] via-[#2A083B] to-[#0C0C0C]',
    accentColor: '#B600A8',
    type: 'zayathon',
  },
  {
    id: 'ecoquest-1',
    title: 'EcoQuest',
    category: 'Gamified Environmental Tracker',
    badge: 'SUSTAINABILITY',
    gradient: 'from-[#052014] via-[#0E3824] to-[#0C0C0C]',
    accentColor: '#62e59a',
    type: 'ecoquest',
  },
  {
    id: 'neer-1',
    title: 'NEER Safety Band',
    category: 'IoT Telemetry & SOS Alert',
    badge: 'HARDWARE & IOT',
    gradient: 'from-[#09152C] via-[#122548] to-[#0C0C0C]',
    accentColor: '#78aaff',
    type: 'neer',
  },
  {
    id: 'expense-1',
    title: 'Expense Tracker',
    category: 'Cloud Finance & Analytics',
    badge: 'FINANCE APP',
    gradient: 'from-[#1E112A] via-[#351A48] to-[#0C0C0C]',
    accentColor: '#8d7bff',
    type: 'expense',
  },
  {
    id: 'dashboard-1',
    title: 'Main Dashboard',
    category: 'Software Engineering Hub',
    badge: 'DEV PORTAL',
    gradient: 'from-[#141A29] via-[#1E273C] to-[#0C0C0C]',
    accentColor: '#BBCCD7',
    type: 'dashboard',
  },
  {
    id: 'zayathon-2',
    title: 'Zayathon Leaderboard',
    category: 'Project Scoring & Submissions',
    badge: 'COLLABORATION',
    gradient: 'from-[#22042C] via-[#3B0A4C] to-[#0C0C0C]',
    accentColor: '#B600A8',
    type: 'zayathon',
  },
  {
    id: 'ecoquest-2',
    title: 'EcoQuest Impact',
    category: 'Carbon Offset & Tree Metrics',
    badge: 'GREEN METRICS',
    gradient: 'from-[#082819] via-[#12442C] to-[#0C0C0C]',
    accentColor: '#62e59a',
    type: 'ecoquest',
  },
  {
    id: 'neer-2',
    title: 'NEER Cloud Stream',
    category: 'Firebase Emergency Dispatch',
    badge: 'SAFETY SYS',
    gradient: 'from-[#0D1D3A] via-[#162D58] to-[#0C0C0C]',
    accentColor: '#78aaff',
    type: 'neer',
  },
  {
    id: 'expense-2',
    title: 'Expense Tracker Stats',
    category: 'Budget Breakdown & Chart.js',
    badge: 'LIVE APP',
    gradient: 'from-[#251336] via-[#411F5E] to-[#0C0C0C]',
    accentColor: '#8d7bff',
    type: 'expense',
  },
  {
    id: 'dashboard-2',
    title: 'System Telemetry',
    category: 'Cloud Firestore Stream',
    badge: 'INFRASTRUCTURE',
    gradient: 'from-[#111A2E] via-[#1C2A48] to-[#0C0C0C]',
    accentColor: '#BBCCD7',
    type: 'dashboard',
  },
];

// Row 1 & Row 2 visual sequences
const row1Items = [...projectVisuals.slice(0, 5), ...projectVisuals.slice(0, 5), ...projectVisuals.slice(0, 5)];
const row2Items = [...projectVisuals.slice(5, 10), ...projectVisuals.slice(5, 10), ...projectVisuals.slice(5, 10)];

export const ProjectMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-driven horizontal transforms (Row 1 moves Right, Row 2 moves Left)
  const xRow1 = useTransform(scrollYProgress, [0, 1], ['-15%', '5%']);
  const xRow2 = useTransform(scrollYProgress, [0, 1], ['5%', '-15%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-x-clip select-none"
      aria-label="Project Visual Marquee"
    >
      {/* Ambient background glow gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#B600A8]/10 via-[#7621B0]/10 to-[#78aaff]/10 blur-3xl pointer-events-none opacity-40" />

      <div className="flex flex-col gap-3 relative z-10">
        {/* ROW 1: Moves RIGHT on scroll */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : xRow1,
            willChange: 'transform',
          }}
          className="flex gap-3 w-max"
        >
          {row1Items.map((item, idx) => (
            <MarqueeTile key={`r1-${item.id}-${idx}`} item={item} />
          ))}
        </motion.div>

        {/* ROW 2: Moves LEFT on scroll */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : xRow2,
            willChange: 'transform',
          }}
          className="flex gap-3 w-max"
        >
          {row2Items.map((item, idx) => (
            <MarqueeTile key={`r2-${item.id}-${idx}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MarqueeTile: React.FC<{ item: ProjectVisual }> = ({ item }) => {
  return (
    <div
      className={`relative w-[260px] sm:w-[340px] md:w-[420px] h-[170px] sm:h-[220px] md:h-[270px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b ${item.gradient} p-4 sm:p-6 flex flex-col justify-between group hover:scale-[1.02] hover:border-white/25 transition-all duration-300 cursor-pointer shadow-lg`}
    >
      {/* Background Accent Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 group-hover:opacity-20 transition-opacity" />

      {/* Top Header of Tile */}
      <div className="relative z-10 flex justify-between items-center">
        <span
          style={{ color: item.accentColor }}
          className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10"
        >
          {item.badge}
        </span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Mini Mockup UI Window Preview */}
      <div className="relative z-10 my-auto bg-[#08080C]/80 backdrop-blur-md rounded-xl p-3 border border-white/10 space-y-2 group-hover:border-white/20 transition-colors">
        <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
          <span className="text-xs font-mono text-white/70 font-medium">{item.title}</span>
          <span style={{ color: item.accentColor }} className="text-[10px] font-mono">
            ● LIVE
          </span>
        </div>
        <div className="space-y-1">
          <div className="h-1.5 rounded-full bg-white/15 w-3/4" />
          <div className="h-1.5 rounded-full bg-white/10 w-1/2" />
        </div>
      </div>

      {/* Bottom Overlay Label (Reveals subtly on hover) */}
      <div className="relative z-10 flex justify-between items-end pt-2 border-t border-white/10">
        <div>
          <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">{item.title}</h4>
          <p className="text-[11px] sm:text-xs text-[#D7E2EA]/60 font-light">{item.category}</p>
        </div>
        <span className="text-xs text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all">
          ↗
        </span>
      </div>
    </div>
  );
};
