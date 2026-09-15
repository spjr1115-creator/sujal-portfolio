import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ExternalLink, Github, Layers, ShieldAlert, Leaf, Wallet } from 'lucide-react';

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  accentColor: string;
  gradientBg: string;
  icon: React.ReactNode;
}

const projects: ProjectData[] = [
  {
    id: 'expense-tracker',
    number: '01',
    title: 'EXPENSE TRACKER',
    category: 'Personal Finance Dashboard',
    badge: 'FINANCE APP',
    description:
      'A responsive web application that helps users manage personal finances. Allows recording income and expenses, categorizing spending, setting budgets, and viewing monthly analytics through interactive charts. Data is securely stored using Firebase Authentication and Cloud Firestore, deployed on GitHub Pages.',
    tags: ['Firebase Auth', 'Cloud Firestore', 'HTML', 'JavaScript', 'GitHub Pages'],
    githubUrl: 'https://github.com/spjr1115-creator/expense-tracker',
    liveUrl: 'https://spjr1115-creator.github.io/expense-tracker/',
    accentColor: '#8d7bff',
    gradientBg: 'from-[#25133B] via-[#461D69] to-[#0C0C0C]',
    icon: <Wallet className="w-5 h-5 text-[#8d7bff]" />,
  },
  {
    id: 'neer',
    number: '02',
    title: 'NEER BAND',
    category: 'Women Safety Smart Watch',
    badge: 'IOT & SAFETY SYSTEM',
    description:
      'A women safety smart watch designed to improve personal security during emergencies. Enables real-time location tracking and emergency response assistance. Developed web components, integrated Firebase for tracking, and implemented safety features.',
    tags: ['HTML', 'Java', 'Firebase', 'Location Tracking', 'Emergency Response'],
    githubUrl: 'https://github.com/spjr1115-creator/NEER',
    accentColor: '#78aaff',
    gradientBg: 'from-[#0B1F42] via-[#17386D] to-[#0C0C0C]',
    icon: <ShieldAlert className="w-5 h-5 text-[#78aaff]" />,
  },
  {
    id: 'zayathon',
    number: '03',
    title: 'ZAYATHON REDESIGN',
    category: 'Cinematic Hackathon Platform',
    badge: 'HACKATHON PLATFORM',
    description:
      'ZAYATHON 2026 is a modern, cinematic hackathon platform built for ZAYA CODE HUB. Features interactive event domains, timeline, prizes, FAQ, real-time countdown, team registration, and a secure admin dashboard.',
    tags: ['Astro', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel'],
    githubUrl: 'https://github.com/spjr1115-creator/Zayathon',
    liveUrl: 'https://zayathon-xi.vercel.app/',
    accentColor: '#B600A8',
    gradientBg: 'from-[#1E022A] via-[#390A50] to-[#0C0C0C]',
    icon: <Layers className="w-5 h-5 text-[#B600A8]" />,
  },
];

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = !!useReducedMotion();

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 bg-[#0C0C0C] text-[#D7E2EA] overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#B600A8]/10 via-[#78aaff]/10 to-transparent blur-[160px] pointer-events-none z-0" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0 opacity-40" />

      <div className="max-w-[1280px] mx-auto w-full relative z-10 flex flex-col gap-12 sm:gap-20">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-[900px] px-2 sm:px-0">
          <FadeIn delay={0.1} direction="up" distance={20} className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#BBCCD7]/70 uppercase">
              03 // SELECTED WORK
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-r from-[#BBCCD7]/40 to-transparent" />
          </FadeIn>

          <FadeIn delay={0.15} direction="up" distance={25}>
            <h2 className="hero-heading uppercase font-black tracking-tight leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-left">
              SELECTED WORK
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} direction="up" distance={20}>
            <p className="text-base sm:text-xl text-[#D7E2EA]/75 font-light leading-relaxed max-w-[720px] mt-2">
              A selection of things I've built while learning, experimenting, and solving real problems through code.
            </p>
          </FadeIn>
        </div>

        {/* 3D Stacked Perspective Container */}
        <div className="relative w-full flex flex-col gap-12 sm:gap-20 md:gap-28 [perspective:1200px] [transform-style:preserve-3d]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
              isReducedMotion={isReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
  isReducedMotion: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total, isReducedMotion }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track card progress through viewport for entry, 3D fold, exit & parallax
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // 3D Fold Transform Calculations (top edge tilts backward as card recedes)
  const rotateX = useTransform(scrollYProgress, [0.1, 0.4, 0.75, 1], [6, 0, 0, -12]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.75, 1], [0.94, 1, 1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.75, 1], [0.65, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0.1, 0.4, 0.75, 1], [40, 0, 0, -30]);

  // Lighting fold shadow overlay (fades in as card folds backward into light gradient)
  const foldShadowOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 0.4]);

  // Inner screenshot preview subtle parallax transform
  const imageY = useTransform(scrollYProgress, [0, 1], ['0px', '-30px']);

  return (
    <motion.div
      ref={cardRef}
      style={
        isReducedMotion
          ? {}
          : {
              rotateX,
              scale,
              opacity,
              y,
              transformOrigin: '50% 0%',
              transformStyle: 'preserve-3d',
            }
      }
      className="sticky top-16 sm:top-24 md:top-28 w-full max-w-[1240px] mx-auto rounded-xl sm:rounded-3xl border border-white/15 bg-[#0F0F12] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-colors duration-300 hover:border-white/30"
    >
      {/* 3D Fold Shadow Ambient Overlay */}
      {!isReducedMotion && (
        <motion.div
          style={{ opacity: foldShadowOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none z-30 transition-opacity"
        />
      )}

      <div className={`relative w-full bg-gradient-to-b ${project.gradientBg} p-4 sm:p-8 md:p-12 flex flex-col justify-between gap-6 md:gap-12 min-h-[65vh] sm:min-h-[75vh] md:min-h-[78vh]`}>
        {/* Ambient grid texture inside card */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        {/* Card Header Bar */}
        <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-3 sm:pb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs sm:text-base font-bold text-white/50">
              [0{index + 1} / 0{total}]
            </span>
            <span
              style={{ color: project.accentColor }}
              className="font-mono text-[9px] sm:text-xs font-semibold tracking-widest uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-1.5 sm:gap-2"
            >
              {project.icon}
              {project.badge}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-white/40">
            <span>SUJAL PANJIYAR</span>
            <span>•</span>
            <span className="uppercase">{project.category}</span>
          </div>
        </div>

        {/* Main Body Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center my-auto">
          {/* Left Column: Text Info & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 justify-center">
            <div>
              <span className="font-mono text-[10px] sm:text-xs text-[#BBCCD7]/60 tracking-widest uppercase mb-1 block">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight">
                {project.title}
              </h3>
            </div>

            <p className="text-xs sm:text-base md:text-lg text-[#D7E2EA]/80 font-light leading-relaxed">
              {project.description}
            </p>

            {/* Technology Stack Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-mono tracking-wide rounded-full bg-white/5 border border-white/10 text-[#D7E2EA] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-mono tracking-wider text-white uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-md group min-h-[44px]"
              >
                <Github className="w-4 h-4" />
                <span>VIEW ON GITHUB</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: project.accentColor }}
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-mono tracking-wider text-black uppercase font-bold hover:brightness-110 transition-all duration-300 shadow-lg group min-h-[44px]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LIVE PROJECT</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: UI Mockup Preview Frame with Image Parallax */}
          <motion.div
            style={isReducedMotion ? {} : { y: imageY }}
            className="lg:col-span-6 w-full"
          >
            <ProjectUIMockup project={project} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* Bespoke UI Window Mockup Frame */
const ProjectUIMockup: React.FC<{ project: ProjectData }> = ({ project }) => {
  return (
    <div className="w-full aspect-[16/10] bg-[#09090C] rounded-xl sm:rounded-2xl border border-white/15 overflow-hidden shadow-2xl flex flex-col group relative">
      {/* Mockup Browser Window Header */}
      <div className="w-full bg-[#121216] border-b border-white/10 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="bg-black/50 px-3 py-1 rounded-md text-[10px] sm:text-xs font-mono text-[#D7E2EA]/50 truncate max-w-[180px] sm:max-w-[260px] text-center border border-white/5">
          {project.id}.app
        </div>
        <div className="w-4" />
      </div>

      {/* Mockup Window Workspace Content */}
      <div className="relative flex-1 p-4 sm:p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0D0D12] to-[#14141E]">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

        {/* Top Wireframe Navigation Bar */}
        <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.accentColor }} />
            <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
              {project.title} WORKSPACE
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/70">
            {project.badge}
          </span>
        </div>

        {/* Center Simulated Interface */}
        <div className="relative z-10 my-auto grid grid-cols-3 gap-3">
          <div className="col-span-2 bg-white/[0.03] border border-white/10 rounded-lg p-3 space-y-2 group-hover:border-white/20 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-white/60 uppercase">SYSTEM STATUS</span>
              <span className="text-[10px] font-mono font-bold" style={{ color: project.accentColor }}>ACTIVE</span>
            </div>
            <div className="h-2 w-3/4 bg-white/20 rounded-full" />
            <div className="h-2 w-1/2 bg-white/10 rounded-full" />
            <div className="pt-2 flex gap-1.5">
              <div className="h-6 flex-1 rounded bg-white/5 border border-white/10" />
              <div className="h-6 flex-1 rounded bg-white/5 border border-white/10" />
            </div>
          </div>

          <div className="col-span-1 bg-white/[0.03] border border-white/10 rounded-lg p-3 flex flex-col justify-between group-hover:border-white/20 transition-colors">
            <span className="text-[10px] font-mono text-white/60 uppercase">METRICS</span>
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-white/20 rounded" />
              <div className="h-1.5 w-2/3 bg-white/10 rounded" />
              <div className="h-1.5 w-4/5 bg-white/15 rounded" />
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="relative z-10 pt-3 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-[#D7E2EA]/60">
          <span>VERIFIED REPOSITORY</span>
          <span className="group-hover:translate-x-1 transition-transform" style={{ color: project.accentColor }}>
            EXPLORE DETAILS ↗
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
