import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  status: string;
  description: string;
  tags: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: '01',
    title: 'WEB DEVELOPMENT',
    status: 'BUILDING WITH',
    description:
      'Build responsive websites and web applications with modern frontend technologies, clean component architecture, and solid foundations.',
    tags: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    id: '02',
    title: 'UI & INTERACTIVE EXPERIENCES',
    status: 'BUILDING WITH',
    description:
      'Create polished interfaces with thoughtful interaction, smooth motion, and responsive layouts that prioritize user experience.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'CSS Animations'],
  },
  {
    id: '03',
    title: 'SOFTWARE & APPLICATION LOGIC',
    status: 'WORKING WITH',
    description:
      'Build practical applications focused on solving specific problems, algorithmic logic, and structured software development.',
    tags: ['Java', 'Python', 'JavaScript', 'C/C++'],
  },
  {
    id: '04',
    title: 'AI, DATA & AUTOMATION',
    status: 'EXPLORING & LEARNING',
    description:
      'Experiment with intelligent applications, data-driven solutions, webhooks, and automation to streamline workflows.',
    tags: ['Python', 'JavaScript', 'Web APIs', 'Data Concepts'],
  },
  {
    id: '05',
    title: 'IOT & CONNECTED SYSTEMS',
    status: 'BUILDING & EXPERIMENTING',
    description:
      'Build and experiment with technology that connects web software with real-world data tracking, location services, and live telemetry.',
    tags: ['Firebase', 'IoT Concepts', 'GPS / Location', 'Webhooks'],
  },
];

export const Skills: React.FC = () => {
  const isReducedMotion = !!useReducedMotion();

  return (
    <section
      id="skills"
      className="relative w-full py-24 sm:py-32 md:py-40 px-6 md:px-12 bg-[#0C0C0C] text-[#D7E2EA] overflow-hidden select-none"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[300px] bg-gradient-to-l from-[#646973]/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-gradient-to-tr from-[#B600A8]/5 to-transparent rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Grid overlay lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0 opacity-40" />

      <div className="max-w-[1240px] mx-auto w-full relative z-10 flex flex-col gap-14 sm:gap-20">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-[900px]">
          <FadeIn delay={0.1} direction="up" distance={20} className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#BBCCD7]/70 uppercase">
              02 // CAPABILITIES & SERVICES
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-r from-[#BBCCD7]/40 to-transparent" />
          </FadeIn>

          <FadeIn delay={0.15} direction="up" distance={25}>
            <h2 className="hero-heading uppercase font-black tracking-tight leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-left">
              WHAT I BUILD
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} direction="up" distance={20}>
            <p className="text-base sm:text-xl text-[#D7E2EA]/75 font-light leading-relaxed max-w-[720px] mt-2">
              From interactive web experiences to practical software systems, I like turning ideas into things people can actually use.
            </p>
          </FadeIn>
        </div>

        {/* Editorial Service Items List */}
        <div className="w-full flex flex-col border-t border-white/10">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={isReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: isReducedMotion ? 0 : index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative w-full py-8 sm:py-12 border-b border-white/10 hover:border-white/25 transition-colors duration-300 px-2 sm:px-4 rounded-xl hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Number & Factual Status Badge */}
                <div className="lg:col-span-3 flex items-center justify-between lg:flex-col lg:items-start gap-3">
                  <span className="font-mono text-xs sm:text-sm text-[#BBCCD7]/60 tracking-widest">
                    {service.id}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#BBCCD7] uppercase">
                    {service.status}
                  </span>
                </div>

                {/* Service Title & Description */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-[#BBCCD7] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#BBCCD7]/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                  </div>
                  <p className="text-sm sm:text-base text-[#D7E2EA]/75 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Skill / Technology Tags */}
                <div className="lg:col-span-3 flex flex-wrap lg:justify-end gap-2 pt-2 lg:pt-0">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono tracking-wide rounded-full bg-white/[0.04] border border-white/10 text-[#D7E2EA]/80 group-hover:border-white/20 group-hover:text-white transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Understated Footer Statement */}
        <FadeIn
          delay={0.3}
          direction="up"
          distance={20}
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 text-xs sm:text-sm font-mono text-[#D7E2EA]/60 uppercase tracking-widest"
        >
          <span>ALWAYS LEARNING • ALWAYS BUILDING REAL THINGS</span>
          <span className="text-[#BBCCD7]/40">SUJAL PANJIYAR // 2026</span>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;
