import React from 'react';
import { Navbar } from './Navbar';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import portraitImg from '../../image.png';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C] text-[#D7E2EA] select-none"
    >
      {/* 1. Top Navbar */}
      <Navbar />

      {/* 2. Massive Heading (Dominates the Hero) */}
      <div className="w-full overflow-hidden flex justify-center items-center px-2 relative z-0">
        <FadeIn delay={0.15} direction="up" distance={40} className="w-full text-center">
          <h1 className="hero-heading uppercase font-black tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            HI, I'M SUJAL
          </h1>
        </FadeIn>
      </div>

      {/* 3. Central Portrait Visual (Overlapping lower portion of typography) */}
      <FadeIn
        delay={0.6}
        direction="up"
        distance={30}
        duration={0.7}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-0 z-10 pointer-events-auto flex items-end justify-center"
      >
        <Magnet padding={150} strength={3}>
          <div className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[480px] xl:w-[520px] relative flex items-end justify-center">
            <img
              src={portraitImg}
              alt="Sujal Panjiyar — CSE Student, Developer & Builder"
              className="w-full h-auto object-contain object-bottom pointer-events-none select-none filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* 4. Bottom Row: Bottom-Left Description & Bottom-Right Contact Button */}
      <div className="relative z-20 w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
        {/* Bottom-Left Content */}
        <FadeIn delay={0.35} direction="up" distance={20} className="flex flex-col gap-2 max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <div className="text-[10px] sm:text-xs font-mono tracking-widest text-[#D7E2EA]/60 uppercase">
            CSE STUDENT • DEVELOPER • BUILDER
          </div>
          <p
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
          >
            A CSE student driven by building practical software, exploring new technologies, and turning ideas into working products.
          </p>
        </FadeIn>

        {/* Bottom-Right Contact Button */}
        <FadeIn delay={0.5} direction="up" distance={20} className="w-full md:w-auto flex justify-end z-30">
          <Magnet padding={150} strength={3}>
            <ContactButton />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};
