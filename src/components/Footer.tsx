import React, { useState, useEffect } from 'react';
import { ArrowUp, Linkedin, Github, Instagram } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { personal } = PORTFOLIO_DATA;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800">
          
          {/* Brand Col */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center gap-2.5 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white font-heading font-bold text-sm">
                TS
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Tanisk Sahu
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-medium">
              Graphic Designer & Web Developer
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
            <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors">
              Overview
            </button>
            <button onClick={() => onNavigate('canva-hub')} className="hover:text-white transition-colors">
              Graphic Design
            </button>
            <button onClick={() => onNavigate('web-projects')} className="hover:text-white transition-colors">
              Websites
            </button>
            <button onClick={() => onNavigate('certifications')} className="hover:text-white transition-colors">
              Certifications
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Tanisk Sahu. All rights reserved.
          </div>

          {/* Scroll to Top */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold transition-colors border border-zinc-800"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </footer>
  );
}
