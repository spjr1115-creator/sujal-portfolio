import React from 'react';
import { Navbar } from './Navbar';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C] select-none"
    >
      {/* 1. Top Navbar */}
      <Navbar />

      {/* 2. Central Massive Heading */}
      <div className="w-full overflow-hidden flex justify-center items-center px-2">
        <FadeIn delay={0.15} direction="up" distance={40} className="w-full text-center">
          <h1 className="hero-heading uppercase font-black tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            HI, I'M SUJAL
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Visual (Positioned behind/around hero typography) */}
      <FadeIn
        delay={0.6}
        direction="up"
        distance={30}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-0 z-0 pointer-events-auto"
      >
        <Magnet padding={150} strength={3}>
          <div className="w-[240px] sm:w-[320px] md:w-[400px] lg:w-[480px] aspect-square relative flex items-center justify-center">
            {/* Ambient Background Glowing Halos */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#18011F]/40 via-[#B600A8]/20 to-[#7621B0]/30 blur-3xl opacity-60 animate-pulse" />
            
            {/* Futuristic Orbiting Rings */}
            <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-12 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Terminal Code Window Visual */}
            <div className="relative w-full max-w-[90%] bg-[#08080C]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-purple-950/40">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-[#D7E2EA]/50">~/sujal-dev</span>
                <div className="w-2 h-2 rounded-full bg-[#B600A8] animate-ping" />
              </div>

              {/* Terminal Code Content */}
              <div className="font-mono text-xs sm:text-sm space-y-2 text-[#D7E2EA]/90 leading-relaxed">
                <div>
                  <span className="text-[#B600A8]">const</span> sujal = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-[#BBCCD7]">role:</span> <span className="text-[#62e59a]">"CSE Student"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#BBCCD7]">focus:</span> <span className="text-[#78aaff]">"Practical Software"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#BBCCD7]">status:</span> <span className="text-purple-400">"Building & Evolving"</span>
                </div>
                <div>{'};'}</div>
                <div className="pt-1 text-xs text-[#D7E2EA]/40 flex items-center gap-1">
                  <span>&gt;</span>
                  <span className="inline-block w-2 h-4 bg-[#D7E2EA]/80 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </Magnet>
      </FadeIn>

      {/* 4. Bottom Row: Developer Identity, Subtext & Contact Button */}
      <div className="relative z-10 w-full px-6 md:px-10 pb-8 md:pb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        {/* Left Side: Developer Identity + Hero Subtext */}
        <div className="flex flex-col gap-3 max-w-[180px] sm:max-w-[260px]">
          {/* Subtle Developer Identity Element */}
          <FadeIn delay={0.25} direction="up" distance={15}>
            <div className="text-[10px] sm:text-xs font-mono tracking-widest text-[#D7E2EA]/60 uppercase border-l-2 border-[#B600A8] pl-2">
              CSE Student • Developer • Builder
            </div>
          </FadeIn>

          {/* Hero Subtext */}
          <FadeIn delay={0.35} direction="up" distance={20}>
            <p
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            >
              A CSE student driven by building practical software, exploring new technologies, and turning ideas into working products.
            </p>
          </FadeIn>
        </div>

        {/* Right Side: Contact Button with Magnet Effect */}
        <FadeIn delay={0.5} direction="up" distance={20} className="w-full md:w-auto flex justify-end">
          <Magnet padding={150} strength={3}>
            <ContactButton />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};
