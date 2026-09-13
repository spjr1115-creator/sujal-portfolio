import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FadeIn } from './FadeIn';

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
  isReducedMotion: boolean;
}

const Word: React.FC<WordProps> = ({ children, progress, range, isReducedMotion }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, ['rgba(215, 226, 234, 0.25)', 'rgba(215, 226, 234, 1)']);
  const y = useTransform(progress, range, [4, 0]);

  if (isReducedMotion) {
    return <span className="inline-block mr-[0.28em] text-[#D7E2EA] opacity-100">{children}</span>;
  }

  return (
    <motion.span
      style={{ opacity, color, y }}
      className="inline-block mr-[0.28em] transition-colors duration-150 select-none"
    >
      {children}
    </motion.span>
  );
};

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = !!useReducedMotion();

  // Target the text container directly with a tight viewport offset:
  // Starts when paragraph top is at 85% viewport (entering lower screen)
  // Completes when paragraph top reaches 25% viewport (centered in main screen)
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 0.85', 'start 0.25'],
  });

  const p1Text =
    "I'm Sujal, a Computer Science Engineering student, developer, and builder. I focus on building practical web experiences and software projects while continuously expanding my technical foundations.";

  const p2Text =
    "Through hands-on development and experimentation, I turn ideas into working applications. I enjoy building responsive web systems, exploring emerging technologies, and learning by shipping real projects.";

  const p1Words = p1Text.split(' ');
  const p2Words = p2Text.split(' ');
  const totalWords = p1Words.length + p2Words.length;

  // Header subtle parallax mapped to section scroll
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(sectionProgress, [0, 1], [0, -40]);
  const headerOpacity = useTransform(sectionProgress, [0, 0.2, 0.8, 1], [0.3, 0.6, 0.6, 0.2]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen py-24 sm:py-32 md:py-40 px-6 md:px-12 bg-[#0C0C0C] text-[#D7E2EA] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#646973]/10 to-[#BBCCD7]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-gradient-to-b from-[#B600A8]/5 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Grid overlay lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0 opacity-40" />

      <div className="max-w-[1240px] mx-auto w-full relative z-10 flex flex-col gap-12 sm:gap-16 md:gap-24">
        {/* Massive Section Title */}
        <div className="w-full overflow-hidden flex justify-start items-center relative">
          <motion.h2
            style={isReducedMotion ? {} : { y: headerY, opacity: headerOpacity }}
            className="hero-heading uppercase font-black tracking-tight leading-none text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[15vw] opacity-40 select-none whitespace-nowrap -ml-1 sm:-ml-2"
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* Scroll-Reveal Main Paragraph Container */}
        <div ref={textRef} className="max-w-[1100px] w-full">
          {/* Tag & Subheading Indicator */}
          <FadeIn delay={0.1} direction="up" distance={20} className="mb-6 sm:mb-8 flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#BBCCD7]/70 uppercase">
              01 // BIOGRAPHY & VISION
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-r from-[#BBCCD7]/40 to-transparent" />
          </FadeIn>

          {/* Paragraph 1 */}
          <p
            className="font-normal tracking-tight leading-[1.25] text-left mb-8 sm:mb-10"
            style={{ fontSize: 'clamp(1.35rem, 3.2vw, 2.75rem)' }}
          >
            {p1Words.map((word, i) => {
              // Compressed word range mapping so reveal completes smoothly within 85% of progress
              const step = 0.80 / totalWords;
              const start = i * step;
              const end = Math.min(1, start + 0.15);
              return (
                <Word key={`p1-${i}`} progress={scrollYProgress} range={[start, end]} isReducedMotion={isReducedMotion}>
                  {word}
                </Word>
              );
            })}
          </p>

          {/* Paragraph 2 */}
          <p
            className="font-normal tracking-tight leading-[1.25] text-left"
            style={{ fontSize: 'clamp(1.2rem, 2.6vw, 2.25rem)' }}
          >
            {p2Words.map((word, i) => {
              const globalIdx = p1Words.length + i;
              const step = 0.80 / totalWords;
              const start = globalIdx * step;
              const end = Math.min(1, start + 0.15);
              return (
                <Word key={`p2-${i}`} progress={scrollYProgress} range={[start, end]} isReducedMotion={isReducedMotion}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

        {/* Lower Portion Personal Details Metadata Grid */}
        <FadeIn
          delay={0.3}
          direction="up"
          distance={30}
          className="pt-10 sm:pt-14 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          {/* Detail Item 1 */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#D7E2EA]/50 uppercase">
              ROLE & STATUS
            </span>
            <span className="text-sm sm:text-base font-medium tracking-wide text-[#D7E2EA]">
              CSE STUDENT • DEVELOPER • BUILDER
            </span>
          </div>

          {/* Detail Item 2 */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#D7E2EA]/50 uppercase">
              LOCATION
            </span>
            <span className="text-sm sm:text-base font-medium tracking-wide text-[#D7E2EA]">
              BASED IN INDIA
            </span>
          </div>

          {/* Detail Item 3 — CURRENTLY Micro-Content */}
          <div className="flex flex-col gap-1.5 sm:col-span-2 lg:col-span-1">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#BBCCD7] uppercase font-semibold">
              CURRENTLY
            </span>
            <div className="text-xs sm:text-sm font-mono tracking-wide text-[#D7E2EA]/90 flex flex-col gap-1">
              <span>• Building web applications</span>
              <span>• Exploring AI & IoT</span>
              <span>• Learning by shipping projects</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
