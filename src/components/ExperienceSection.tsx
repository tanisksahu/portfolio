import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  const { timeline } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 lg:py-32 relative bg-[#FAFAFC] dark:bg-[#0A0B0E] text-gray-900 dark:text-white transition-colors duration-300 border-t border-gray-200/80 dark:border-gray-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider mb-4 border border-orange-200 dark:border-orange-500/30">
            <Briefcase className="w-4 h-4" />
            <span>LEADERSHIP & ACADEMIC TIMELINE</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-gray-950 dark:text-white">
            CAREER & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-300">LEADERSHIP JOURNEY.</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
            Head of PR & Marketing for Entrepreneurship Club, Chandigarh University BBA Analytics, and district competition awards.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-orange-200 dark:border-orange-500/30 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {timeline.map((event, idx) => (
            <div key={idx} className="relative group">
              
              {/* Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-orange-500 flex items-center justify-center shadow-md group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
              </div>

              {/* Event Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-none space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-400 text-xs sm:text-sm font-mono font-bold border border-orange-200 dark:border-orange-500/30">
                    {event.year} • {event.type}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-300">{event.organization}</span>
                </div>

                <div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-gray-950 dark:text-white">{event.title}</h3>
                  <p className="text-sm font-mono font-extrabold text-orange-600 dark:text-orange-400 mt-1">{event.role}</p>
                </div>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed font-normal">
                  {event.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {event.highlights.map((item, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs sm:text-sm font-semibold border border-gray-200/80 dark:border-gray-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
