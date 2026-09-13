import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { Mail, Github, Instagram, Linkedin, ArrowUpRight, FileText } from 'lucide-react';

export const Contact: React.FC = () => {
  const isReducedMotion = !!useReducedMotion();

  return (
    <section
      id="contact"
      className="relative w-full min-h-[90vh] py-24 sm:py-32 md:py-40 px-6 md:px-12 bg-[#0C0C0C] text-[#D7E2EA] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Subtle ambient lighting accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#B600A8]/10 via-[#78aaff]/10 to-transparent blur-[160px] pointer-events-none z-0" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0 opacity-40" />

      <div className="max-w-[1240px] mx-auto w-full relative z-10 flex flex-col justify-between h-full gap-16 sm:gap-24">
        {/* Section Tag */}
        <FadeIn delay={0.1} direction="up" distance={20} className="flex items-center gap-3">
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#BBCCD7]/70 uppercase">
            04 // GET IN TOUCH
          </span>
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#BBCCD7]/40 to-transparent" />
        </FadeIn>

        {/* Main Content Area */}
        <div className="flex flex-col gap-8 sm:gap-12 max-w-[1100px]">
          {/* Massive Heading */}
          <motion.h2
            initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            whileInView={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="hero-heading uppercase font-black tracking-tight leading-[0.95] text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-left"
          >
            LET'S BUILD<br />
            SOMETHING.
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            whileInView={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base sm:text-xl md:text-2xl text-[#D7E2EA]/75 font-light leading-relaxed max-w-[720px]"
          >
            Have an idea, project, or problem worth solving? Let's turn it into something real.
          </motion.p>

          {/* Action Buttons: Primary GET IN TOUCH & Secondary DOWNLOAD RESUME */}
          <motion.div
            initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            whileInView={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Magnet padding={100} strength={2.5}>
              <a
                href="mailto:spjr1115@gmail.com"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 15px rgba(181, 1, 167, 0.3), 4px 4px 12px #7721B1 inset',
                }}
                className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase text-white hover:scale-105 border-2 border-white/80 transition-all duration-300 shadow-2xl group"
                aria-label="Get in touch via email"
              >
                <Mail className="w-5 h-5" />
                <span>GET IN TOUCH</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </a>
            </Magnet>

            <Magnet padding={100} strength={2.5}>
              <a
                href={`${import.meta.env.BASE_URL}Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download="Sujal_Panjiyar_Resume.pdf"
                className="inline-flex items-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-mono font-semibold tracking-wider uppercase text-[#D7E2EA] bg-white/5 hover:bg-white/10 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg group"
                aria-label="Download Sujal Panjiyar Resume PDF"
              >
                <FileText className="w-4.5 h-4.5 text-[#BBCCD7]" />
                <span>DOWNLOAD RESUME</span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">↗</span>
              </a>
            </Magnet>
          </motion.div>
        </div>

        {/* Minimal Social Links & Direct Contacts */}
        <motion.div
          initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={isReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex flex-wrap items-center gap-5 sm:gap-8">
            {/* Email Link */}
            <a
              href="mailto:spjr1115@gmail.com"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#D7E2EA]/80 hover:text-white uppercase tracking-wider transition-colors duration-200"
              aria-label="Send email to spjr1115@gmail.com"
            >
              <Mail className="w-4 h-4 text-[#B600A8]" />
              <span>EMAIL</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D7E2EA]/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>

            {/* GitHub Profile Link */}
            <a
              href="https://github.com/spjr1115-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#D7E2EA]/80 hover:text-white uppercase tracking-wider transition-colors duration-200"
              aria-label="Open Sujal Panjiyar GitHub Profile"
            >
              <Github className="w-4 h-4 text-[#BBCCD7]" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D7E2EA]/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>

            {/* Instagram Profile Link */}
            <a
              href="https://www.instagram.com/iamspjr15/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#D7E2EA]/80 hover:text-white uppercase tracking-wider transition-colors duration-200"
              aria-label="Open Sujal Panjiyar Instagram Profile"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" />
              <span>INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D7E2EA]/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>

            {/* LinkedIn Profile Link */}
            <a
              href="https://www.linkedin.com/in/sujal-panjiyar-67b9bb393/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#D7E2EA]/80 hover:text-white uppercase tracking-wider transition-colors duration-200"
              aria-label="Open Sujal Panjiyar LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D7E2EA]/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          <div className="text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-widest pt-2 md:pt-0">
            CSE STUDENT • DEVELOPER • BUILDER
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
