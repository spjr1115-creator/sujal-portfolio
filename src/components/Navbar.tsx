import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FadeIn delay={0} direction="down" distance={20} className="w-full relative z-50">
      <header className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium tracking-wider uppercase text-sm md:text-lg lg:text-[1.4rem] select-none">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="font-bold text-xl md:text-2xl tracking-tighter text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200"
        >
          SUJAL<span className="text-[#B600A8]">.</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#D7E2EA] p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.293 5.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0C0C0C]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-4 md:hidden z-50">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-[#D7E2EA] py-2 text-base font-medium hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </FadeIn>
  );
};
