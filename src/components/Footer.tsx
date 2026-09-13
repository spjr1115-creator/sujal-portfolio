import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-white/10 select-none">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D7E2EA]/50 uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white tracking-tight">SUJAL.</span>
          <span>© 2026 SUJAL PANJIYAR</span>
        </div>

        <a
          href="#home"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 text-[#BBCCD7] hover:text-white transition-colors duration-200 cursor-pointer"
          aria-label="Scroll back to top of page"
        >
          <span>BACK TO TOP</span>
          <span>↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
