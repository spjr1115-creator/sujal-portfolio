import React from 'react';
import { FadeIn } from './FadeIn';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full max-w-[1120px] mx-auto px-6 md:px-10 py-24 text-[#D7E2EA]">
      <FadeIn delay={0.1} direction="up">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#B600A8] mb-4">
          <span>04</span>
          <span className="w-8 h-[1px] bg-[#B600A8]" />
          <span>CONTACT</span>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} direction="up" className="space-y-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Let's build something<br />
          <em className="not-italic text-[#BBCCD7]">interesting.</em>
        </h2>

        <p className="text-[#D7E2EA]/70 text-base sm:text-lg font-light">
          Have an idea, opportunity or just want to connect?
        </p>

        <div className="pt-6">
          <a
            href="mailto:spjr1115@gmail.com"
            className="inline-block text-2xl sm:text-4xl md:text-5xl font-bold text-white hover:text-[#B600A8] border-b-2 border-white/20 hover:border-[#B600A8] transition-all duration-300 pb-2"
          >
            spjr1115@gmail.com <span className="text-xl sm:text-3xl">↗</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
};
