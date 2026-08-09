import React from 'react';
import { User, Award, BookOpen, BarChart2, Sparkles, CheckCircle2, ShieldCheck, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function AboutSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-[#FAFAFC] dark:bg-[#0A0B0E] text-gray-900 dark:text-white transition-colors duration-300 border-t border-gray-200/80 dark:border-gray-800">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider mb-4 border border-orange-200 dark:border-orange-500/30">
            <User className="w-4 h-4" />
            <span>EXECUTIVE PROFILE — TANISK SAHU</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-gray-950 dark:text-white">
            DATA RIGOR MEETS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-300">CANVA DESIGN ARTISTRY.</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
            Bridging analytical data modeling with executive visual storytelling for high-impact business decisions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Story Card */}
          <div className="md:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-none h-full flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-orange-600 dark:text-orange-400 mb-3 font-bold">
                  <BookOpen className="w-4.5 h-4.5" />
                  <span>PHILOSOPHY & VISION</span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-gray-950 dark:text-white mb-4 leading-snug">
                  Data Without Clear Storytelling is Lost Potential.
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-normal space-y-3">
                  Tanisk Sahu is a <strong className="text-gray-950 dark:text-white font-bold">Business Analytics</strong> student at <strong className="text-gray-950 dark:text-white font-bold">Chandigarh University</strong> specializing in turning raw datasets into actionable executive insights. By combining SQL, Power BI, Python, and 15+ Canva public case studies, he creates compelling visual narratives that align stakeholders and drive strategic growth.
                </p>
                <p className="mt-3 text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-normal">
                  As <strong className="text-gray-950 dark:text-white font-bold">PR Team Head & Head of Marketing</strong> for the Entrepreneurship Club, Tanisk leads promotional campaigns, sponsor outreach presentations, and campus event visual identity kits.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-2xl bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 shrink-0">
                    <BarChart2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-gray-950 dark:text-white">Deloitte & SAS Analytics</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Power BI, SAS Viya, SQL queries, Advanced Excel</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-gray-950 dark:text-white">Canva Pro Storytelling</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">15+ case study decks, brand kits & reports</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Academic & Leadership Right Card */}
          <div className="md:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-none h-full flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-400 text-xs sm:text-sm font-mono font-bold border border-orange-200 dark:border-orange-500/30">
                    ACADEMICS & LEADERSHIP
                  </span>
                  <GraduationCap className="w-6 h-6 text-orange-500" />
                </div>

                <div className="mt-6">
                  <div className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white font-mono tracking-tight">
                    BBA (Hons.) <span className="text-xl text-orange-600 dark:text-orange-400 font-bold block mt-1">Business Analytics</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-bold mt-1.5">
                    Chandigarh University, Mohali, Punjab (2025–2029)
                  </p>
                </div>

                <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-gray-800 dark:text-gray-200 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong className="text-gray-950 dark:text-white">Head of PR & Marketing</strong> — Entrepreneurship Club, Chandigarh University</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong className="text-gray-950 dark:text-white">Silver Tier Winner</strong> — District Business Competition (IPER Bhopal)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong className="text-gray-950 dark:text-white">Class XII (CBSE)</strong> — 79.00% | Class X (CBSE) — 68.00% (St Paul School)</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 dark:bg-orange-950/40 border border-orange-200/80 dark:border-orange-500/30 text-sm sm:text-base text-gray-900 dark:text-gray-100">
                <span className="font-extrabold text-orange-600 dark:text-orange-400">Target Role:</span> Business Analyst, Product Manager, Strategy & AI Consultant (Deloitte, PwC, EY, Tech Ventures).
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
