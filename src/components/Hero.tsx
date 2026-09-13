import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Navbar } from './Navbar';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import portraitImg from '../../image.png';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const isReducedMotion = !!useReducedMotion();

  // Scroll-driven parallax for mobile portrait
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const mobilePortraitY = useTransform(scrollYProgress, [0, 1], [0, 35]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-[100svh] md:h-screen md:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C] text-[#D7E2EA] select-none"
    >
      {/* 1. Top Navbar */}
      <Navbar />

      {/* ========================================== */}
      {/* MOBILE HERO LAYOUT (< md: 768px)           */}
      {/* ========================================== */}
      <div className="flex md:hidden flex-col items-center text-center px-4 pt-2 pb-8 my-auto z-10 w-full max-w-lg mx-auto gap-3.5 sm:gap-4">
        {/* Heading */}
        <FadeIn delay={0.1} direction="up" distance={20} className="w-full">
          <h1 className="hero-heading uppercase font-black tracking-tight leading-none text-[11.5vw] xs:text-[12.5vw] sm:text-[14vw] text-center w-full">
            HI, I'M SUJAL
          </h1>
        </FadeIn>

        {/* Scroll-Driven Parallax Portrait Visual */}
        <FadeIn delay={0.2} direction="up" distance={20} duration={0.6} className="w-full flex justify-center">
          <motion.div
            style={isReducedMotion ? {} : { y: mobilePortraitY }}
            className="w-[190px] xs:w-[220px] sm:w-[260px] relative flex items-center justify-center filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] my-1"
          >
            <img
              src={portraitImg}
              alt="Sujal Panjiyar — CSE Student, Developer & Builder"
              className="w-full h-auto object-contain pointer-events-none select-none"
            />
          </motion.div>
        </FadeIn>

        {/* Role Tag & Description */}
        <FadeIn delay={0.3} direction="up" distance={15} className="flex flex-col items-center gap-2 max-w-xs sm:max-w-sm">
          <div className="text-[10px] sm:text-xs font-mono tracking-widest text-[#D7E2EA]/60 uppercase">
            CSE STUDENT • DEVELOPER • BUILDER
          </div>
          <p className="text-xs sm:text-sm text-[#D7E2EA]/90 font-light uppercase tracking-wide leading-relaxed">
            I build practical web experiences and technology-driven projects that turn ideas into something people can actually use.
          </p>
        </FadeIn>

        {/* Contact CTA & Scroll Indicator */}
        <FadeIn delay={0.4} direction="up" distance={15} className="flex flex-col items-center gap-3 pt-2 w-full">
          <ContactButton />

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#D7E2EA]/40 uppercase tracking-widest pt-1">
            <span>SCROLL TO EXPLORE</span>
            <span className="animate-bounce">↓</span>
          </div>
        </FadeIn>
      </div>

      {/* ========================================== */}
      {/* DESKTOP HERO LAYOUT (>= md: 768px)          */}
      {/* ========================================== */}
      {/* 2. Massive Heading (Dominates Desktop Hero) */}
      <div className="hidden md:flex w-full overflow-hidden justify-center items-center px-2 relative z-0">
        <FadeIn delay={0.15} direction="up" distance={40} className="w-full text-center">
          <h1 className="hero-heading uppercase font-black tracking-tight leading-none whitespace-nowrap w-full text-[16vw] lg:text-[17.5vw] -mt-5">
            HI, I'M SUJAL
          </h1>
        </FadeIn>
      </div>

      {/* 3. Central Portrait Visual with Magnetic Effect */}
      <FadeIn
        delay={0.6}
        direction="up"
        distance={30}
        duration={0.7}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-auto items-end justify-center"
      >
        <Magnet padding={150} strength={3}>
          <div className="w-[400px] lg:w-[480px] xl:w-[520px] relative flex items-end justify-center">
            <img
              src={portraitImg}
              alt="Sujal Panjiyar — CSE Student, Developer & Builder"
              className="w-full h-auto object-contain object-bottom pointer-events-none select-none filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* 4. Bottom Row: Left Description & Right Contact Button */}
      <div className="hidden md:flex relative z-20 w-full px-10 pb-10 justify-between items-end gap-6">
        {/* Bottom-Left Content */}
        <FadeIn delay={0.35} direction="up" distance={20} className="flex flex-col gap-1.5 max-w-[320px]">
          <div className="text-xs font-mono tracking-widest text-[#D7E2EA]/60 uppercase">
            CSE STUDENT • DEVELOPER • BUILDER
          </div>
          <p
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.25rem)' }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
          >
            I build practical web experiences and technology-driven projects that turn ideas into something people can actually use.
          </p>
        </FadeIn>

        {/* Bottom-Right Contact Button */}
        <FadeIn delay={0.5} direction="up" distance={20} className="flex justify-end z-30">
          <Magnet padding={150} strength={3}>
            <ContactButton />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
