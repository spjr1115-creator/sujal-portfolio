import React from 'react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-[1120px] mx-auto px-6 md:px-10 py-24 text-[#D7E2EA]">
      <FadeIn delay={0.1} direction="up">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#B600A8] mb-8">
          <span>01</span>
          <span className="w-8 h-[1px] bg-[#B600A8]" />
          <span>ABOUT</span>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <FadeIn delay={0.2} direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Curious mind.<br />
            <span className="text-[#BBCCD7]">Builder's mindset.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3} direction="up" className="space-y-6 text-[#D7E2EA]/80 font-light text-base sm:text-lg leading-relaxed">
          <p>
            I'm a Computer Science & Engineering student who enjoys turning ideas into working products. I’m building my foundations in programming, web development, databases and software engineering while exploring new technologies.
          </p>
          <p className="text-[#D7E2EA]/60 italic border-l-2 border-white/20 pl-4">
            I believe the fastest way to learn is to build — then break, debug and build better.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
