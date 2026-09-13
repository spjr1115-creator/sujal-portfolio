import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full max-w-[1120px] mx-auto px-6 md:px-10 py-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D7E2EA]/60 select-none">
      <span>© 2026 Sujal Panjiyar</span>
      <span>Learning • Building • Evolving</span>
      <a
        href="#home"
        onClick={scrollToTop}
        className="hover:text-white transition-colors duration-200"
      >
        Back to top ↑
      </a>
    </footer>
  );
};
