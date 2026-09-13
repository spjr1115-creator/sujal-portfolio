import React from 'react';
import { FadeIn } from './FadeIn';

interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkText: string;
  category: string;
}

const projectsList: Project[] = [
  {
    id: 'expense-tracker',
    index: '01 / LIVE PROJECT',
    title: 'Expense Tracker',
    description: 'A modern personal finance dashboard for tracking income, expenses, budgets and spending analytics with cloud-backed data.',
    tags: ['JavaScript', 'Firebase', 'Firestore', 'Chart.js'],
    link: 'https://spjr1115-creator.github.io/expense-tracker/',
    linkText: 'View Live Project ↗',
    category: 'Web App',
  },
  {
    id: 'neer-safety-band',
    index: '02 / SAFETY PROJECT',
    title: 'NEER Safety Band',
    description: 'A safety-focused wearable concept combining SOS triggering, location tracking and Firebase-based emergency logging.',
    tags: ['ESP32', 'GPS', 'Firebase', 'JavaScript'],
    link: 'https://github.com/spjr1115-creator',
    linkText: 'Explore Project ↗',
    category: 'IoT & Hardware',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full max-w-[1120px] mx-auto px-6 md:px-10 py-24 text-[#D7E2EA]">
      <FadeIn delay={0.1} direction="up">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#B600A8] mb-4">
          <span>03</span>
          <span className="w-8 h-[1px] bg-[#B600A8]" />
          <span>SELECTED WORK</span>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} direction="up" className="mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Things I've <span className="text-[#BBCCD7]">built.</span>
        </h2>
        <p className="text-[#D7E2EA]/60 font-light text-base">Real projects, real problems, real learning.</p>
      </FadeIn>

      <div className="space-y-16">
        {projectsList.map((project, idx) => (
          <FadeIn key={project.id} delay={0.2 + idx * 0.15} direction="up">
            <article className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-white/20 transition-all duration-300">
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="font-mono text-xs text-[#B600A8] tracking-wider uppercase font-semibold">
                    {project.index}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">{project.title}</h3>
                  <p className="text-[#D7E2EA]/80 font-light text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[#D7E2EA]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white hover:text-[#B600A8] transition-colors duration-200"
                  >
                    {project.linkText}
                  </a>
                </div>
              </div>

              {/* Decorative Project Art Container */}
              <div className="lg:col-span-5 aspect-video bg-[#08080C] rounded-2xl border border-white/10 p-6 flex flex-col justify-center items-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B600A8]/20 via-transparent to-[#78aaff]/10 opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="relative z-10 text-center space-y-2">
                  <div className="font-mono text-xs text-[#BBCCD7]/60 uppercase tracking-widest">{project.category}</div>
                  <div className="text-xl font-bold text-white">{project.title}</div>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
