import React, { useState } from 'react';
import { Cpu, TrendingUp, Layers, Award, BarChart2, Database, Code, Table, Activity, Sparkles, Bot, Binary, Target, Palette, Layout, Compass, FileCode, Presentation, Megaphone, CheckCircle2, Users } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function SkillsSection() {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const techBadges = [
    { name: 'Power BI DAX' },
    { name: 'SQL & Database Queries' },
    { name: 'Python Data Science & ML' },
    { name: 'Canva Pro Visual Branding' },
    { name: 'Advanced Excel & Modeling' },
    { name: 'SAS Visual Statistics & Viya' },
    { name: 'Firebase Firestore & Auth' },
    { name: 'Google Gemini AI Prompting' },
    { name: 'React & Tailwind CSS' }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Award': return <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'BarChart': return <BarChart2 className="w-4 h-4 text-orange-500" />;
      case 'Database': return <Database className="w-4 h-4 text-orange-500" />;
      case 'Code': return <Code className="w-4 h-4 text-emerald-500" />;
      case 'Table': return <Table className="w-4 h-4 text-emerald-500" />;
      case 'Activity': return <Activity className="w-4 h-4 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'Bot': return <Bot className="w-4 h-4 text-orange-500" />;
      case 'Binary': return <Binary className="w-4 h-4 text-emerald-500" />;
      case 'Target': return <Target className="w-4 h-4 text-purple-500" />;
      case 'Palette': return <Palette className="w-4 h-4 text-amber-500" />;
      case 'Layout': return <Layout className="w-4 h-4 text-orange-500" />;
      case 'Compass': return <Compass className="w-4 h-4 text-blue-500" />;
      case 'FileCode': return <FileCode className="w-4 h-4 text-emerald-500" />;
      case 'Presentation': return <Presentation className="w-4 h-4 text-amber-500" />;
      case 'Megaphone': return <Megaphone className="w-4 h-4 text-red-500" />;
      case 'CheckCircle': return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      case 'Users': return <Users className="w-4 h-4 text-blue-500" />;
      default: return <Cpu className="w-4 h-4 text-orange-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-[#FAFAFC] dark:bg-[#0A0B0E] text-gray-900 dark:text-white transition-colors duration-300 border-t border-gray-200/80 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider mb-4 border border-orange-200 dark:border-orange-500/30">
            <Cpu className="w-4 h-4" />
            <span>SKILLS & TOOLKIT MATRIX</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-gray-950 dark:text-white">
            COMPREHENSIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-300">ANALYTICS & DESIGN SKILLS.</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
            Spanning Power BI data modeling, SQL queries, Python machine learning, Canva Pro visual branding, and executive PR leadership.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar mb-8">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2.5 transition-all whitespace-nowrap shrink-0 ${
                activeCategoryIndex === idx
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/20 scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-800 hover:border-orange-400'
              }`}
            >
              {getIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories[activeCategoryIndex].skills.map((skill, i) => (
            <div key={i} className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-none space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-orange-50 dark:bg-gray-800 border border-orange-100 dark:border-gray-700">
                    {getIcon(skill.icon)}
                  </div>
                  <span className="font-heading font-black text-lg sm:text-xl text-gray-950 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm font-mono font-black text-orange-600 dark:text-orange-400">
                  {skill.level}%
                </span>
              </div>

              {/* Meter Bar */}
              <div className="w-full h-3 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden p-0.5 border border-gray-200/80 dark:border-gray-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges Grid */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-sm">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 font-extrabold block mb-4">
            CORE PLATFORMS & TOOLS:
          </span>
          <div className="flex flex-wrap gap-3">
            {techBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs sm:text-sm font-bold border border-gray-200/80 dark:border-gray-700 hover:border-orange-400 transition-all flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                {badge.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
