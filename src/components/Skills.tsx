import React from 'react';
import { FadeIn } from './FadeIn';

interface SkillItem {
  number: string;
  category: string;
  items: string;
}

const skillData: SkillItem[] = [
  { number: '01', category: 'Programming', items: 'C · Java · JavaScript' },
  { number: '02', category: 'Web', items: 'HTML · CSS · Responsive UI' },
  { number: '03', category: 'Backend & Cloud', items: 'Firebase · Firestore · Authentication' },
  { number: '04', category: 'Tools', items: 'Git · GitHub · VS Code' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full max-w-[1120px] mx-auto px-6 md:px-10 py-24 text-[#D7E2EA]">
      <FadeIn delay={0.1} direction="up">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#B600A8] mb-4">
          <span>02</span>
          <span className="w-8 h-[1px] bg-[#B600A8]" />
          <span>SKILLS</span>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} direction="up">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          My current toolkit.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillData.map((skill, index) => (
          <FadeIn key={skill.number} delay={0.2 + index * 0.1} direction="up">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#B600A8]/50 transition-colors duration-300 h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#B600A8] font-semibold">{skill.number}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-white">{skill.category}</h3>
              </div>
              <p className="text-sm text-[#D7E2EA]/70 font-light">{skill.items}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
