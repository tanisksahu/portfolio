import React from 'react';
import { motion } from 'motion/react';
import { Globe, Palette, Mail, ArrowRight, Presentation, BookOpen, FileText, Image, Layout } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  darkMode: boolean;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { personal } = PORTFOLIO_DATA;

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const workCapabilities = [
    { label: 'Presentations & PPT Decks', icon: Presentation },
    { label: 'Tri-Fold & Multi-Page Brochures', icon: Layout },
    { label: 'E-Magazines & E-Books', icon: BookOpen },
    { label: 'Business Proposals & Reports', icon: FileText },
    { label: 'Event Posters & Campaign Ads', icon: Image },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#FAFAFA] dark:bg-[#0A0C10] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Hero Copy */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Minimal Subtitle */}
            <motion.div variants={itemVariants} className="text-sm font-semibold tracking-wide text-zinc-500 dark:text-zinc-400 uppercase flex items-center gap-2">
              <Palette className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              <span>GRAPHIC DESIGN & VISUAL DOCUMENT ARCHITECTURE</span>
            </motion.div>

            {/* Headline highlighting Graphic Designer & Work Types */}
            <motion.h1 variants={itemVariants} className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
              Graphic Designer for PPTs, Brochures, E-Magazines & Proposals.
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
              Specialized in all types of graphic & document design: high-impact investor pitch decks (PPTs), tri-fold & corporate brochures, editorial e-magazines, formal business proposals, executive reports, event posters, and brand identity kits.
            </motion.p>

            {/* Visual Capability Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1">
              {workCapabilities.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-xs font-semibold border border-zinc-200 dark:border-zinc-700/80"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
                    <span>{item.label}</span>
                  </span>
                );
              })}
            </motion.div>

            {/* Direct Buttons - Graphic Design highlighted first */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => onNavigate('canva-hub')}
                className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-base font-semibold transition-colors flex items-center gap-2 shadow-xs group"
              >
                <Palette className="w-4 h-4 opacity-90" />
                <span>Graphic Design Projects</span>
                <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('web-projects')}
                className="px-6 py-3 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-base font-semibold border border-zinc-300 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <Globe className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                <span>Created Websites</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-base font-medium hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 opacity-70" />
                <span>Contact</span>
              </button>
            </motion.div>

            {/* Minimalist summary counts */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-heading font-bold text-2xl text-zinc-900 dark:text-white">15+</div>
                <div className="text-zinc-500 dark:text-zinc-400 text-sm mt-0.5">Graphic Design Projects</div>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl text-zinc-900 dark:text-white">2</div>
                <div className="text-zinc-500 dark:text-zinc-400 text-sm mt-0.5">Created Websites</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="font-heading font-bold text-2xl text-zinc-900 dark:text-white">6+</div>
                <div className="text-zinc-500 dark:text-zinc-400 text-sm mt-0.5">Verified Certifications</div>
              </div>
            </motion.div>

          </motion.div>

          {/* Clean Editorial Portrait Frame with smooth entrance */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 shadow-xs">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 relative">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <div className="font-heading font-bold text-zinc-900 dark:text-white text-base">
                  Tanisk Sahu
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                  Graphic Designer (PPT, Brochures, E-Magazines, Proposals)
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
