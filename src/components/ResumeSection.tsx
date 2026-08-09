import React from 'react';
import { FileText, Download, Mail, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeSectionProps {
  onContactClick: () => void;
  onDownloadResume: () => void;
}

export default function ResumeSection({ onContactClick, onDownloadResume }: ResumeSectionProps) {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="resume" className="py-24 lg:py-32 relative bg-[#FAFAFC] dark:bg-[#0A0B0E] text-gray-900 dark:text-white transition-colors duration-300 border-t border-gray-200/80 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-orange-200 dark:border-orange-500/30">
            <FileText className="w-3.5 h-3.5" />
            <span>EXECUTIVE RESUME BRIEF</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight text-gray-950 dark:text-white">
            CURRICULUM VITAE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-300">QUALIFICATIONS.</span>
          </h2>
        </div>

        {/* Resume Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-white dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-none space-y-8">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-200/80 dark:border-gray-800">
            <div>
              <h3 className="font-heading font-black text-2xl text-gray-950 dark:text-white">{personal.name}</h3>
              <p className="text-xs text-orange-600 dark:text-orange-400 font-mono font-bold mt-1">{personal.tagline}</p>
            </div>

            <button
              onClick={onDownloadResume}
              className="px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs shadow-lg flex items-center gap-2 hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-700 dark:text-gray-300">
            <div className="space-y-3">
              <h4 className="font-bold uppercase font-mono text-[11px] text-orange-600 dark:text-orange-400">ACADEMICS & DEGREE</h4>
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-800 space-y-1">
                <div className="font-bold text-gray-900 dark:text-white text-sm">BBA (Hons.) Business Analytics</div>
                <div className="text-orange-600 dark:text-orange-400 font-mono font-bold">Chandigarh University (2025–2029)</div>
                <div className="text-gray-500 dark:text-gray-400 text-[11px]">Class XII CBSE: 79.00% | Class X CBSE: 68.00%</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold uppercase font-mono text-[11px] text-amber-600 dark:text-amber-400">CORE SPECIALIZATIONS</h4>
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-800 space-y-2">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> Power BI DAX & Advanced Excel Financial Analytics</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> 15+ Canva Investor Presentations & Pitch Decks</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Python Machine Learning & SQL Queries</div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-gray-200/80 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-500">Available for Analytics, Product & Brand Internships.</span>
            <button
              onClick={onContactClick}
              className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Tanisk Sahu</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
