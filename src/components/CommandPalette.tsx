import React, { useState, useEffect } from 'react';
import { Search, X, Code, Palette, Award, User, Mail, FileText, Sparkles, Sun, Moon, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (sectionId: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectSection,
  darkMode,
  setDarkMode
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open command palette
          onSelectSection(''); // dummy to trigger parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectSection]);

  if (!isOpen) return null;

  const sections = [
    { id: 'hero', name: 'Home / Hero', icon: User, category: 'Navigation' },
    { id: 'about', name: 'About & Story', icon: User, category: 'Navigation' },
    { id: 'skills', name: 'Skills & Tech Stack', icon: Code, category: 'Navigation' },
    { id: 'projects', name: 'Featured Projects', icon: Code, category: 'Navigation' },
    { id: 'canva-hub', name: 'Canva Design Showcase (Brochures, Decks, Reports)', icon: Palette, category: 'Navigation' },
    { id: 'experience', name: 'Experience & Timeline', icon: Award, category: 'Navigation' },
    { id: 'certifications', name: 'Certifications', icon: Award, category: 'Navigation' },
    { id: 'resume', name: 'Resume & Stats', icon: FileText, category: 'Navigation' },
    { id: 'contact', name: 'Contact Tanisk Sahu', icon: Mail, category: 'Navigation' }
  ];

  const filteredSections = sections.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = PORTFOLIO_DATA.projects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCanva = PORTFOLIO_DATA.canvaDesigns.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#18181B] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col max-h-[80vh] transition-all"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 border-b border-gray-200 dark:border-gray-800">
          <Search className="w-5 h-5 text-[#FF5A1F] mr-3" />
          <input
            type="text"
            placeholder="Type a command, section name, project, or Canva design... (Esc to close)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full py-4 text-base bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toggle Quick Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-[#121214] text-xs text-gray-500 border-b border-gray-200 dark:border-gray-800">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F]" />
            Quick Actions
          </span>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              onClose();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#FF5A1F]"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-500" />}
            <span>Toggle Theme ({darkMode ? 'Light' : 'Dark'})</span>
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-4">
          {/* Sections */}
          {filteredSections.length > 0 && (
            <div>
              <p className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Sections & Pages
              </p>
              <div className="mt-1 space-y-1">
                {filteredSections.map(s => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        onSelectSection(s.id);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-orange-50 dark:hover:bg-orange-950/30 text-gray-800 dark:text-gray-200 hover:text-[#FF5A1F] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#FF5A1F]" />
                        <span className="text-sm font-medium">{s.name}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#FF5A1F] transition-opacity" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <p className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Projects
              </p>
              <div className="mt-1 space-y-1">
                {filteredProjects.map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onSelectSection('projects');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-orange-50 dark:hover:bg-orange-950/30 text-gray-800 dark:text-gray-200 group"
                  >
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-[#FF5A1F]">
                        {p.title}
                      </div>
                      <div className="text-xs text-gray-500">{p.category} • {p.subtitle}</div>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-[#FF5A1F] dark:bg-orange-900/40 font-medium">
                      View Project
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Canva Work */}
          {filteredCanva.length > 0 && (
            <div>
              <p className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Canva Designs & Decks
              </p>
              <div className="mt-1 space-y-1">
                {filteredCanva.map(c => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectSection('canva-hub');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-orange-50 dark:hover:bg-orange-950/30 text-gray-800 dark:text-gray-200 group"
                  >
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-[#FF5A1F]">
                        {c.title}
                      </div>
                      <div className="text-xs text-gray-500">{c.type} • {c.category}</div>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300 font-medium">
                      Open Design
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredSections.length === 0 && filteredProjects.length === 0 && filteredCanva.length === 0 && (
            <div className="text-center py-8 text-gray-500 text-sm">
              No results matching "{query}". Try searching "StudyNex", "Canva", "Power BI", or "Contact".
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-gray-50 dark:bg-[#121214] border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 flex items-center justify-between">
          <span>Press <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded font-mono text-[10px]">ESC</kbd> to close</span>
          <span>Tip: Press <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded font-mono text-[10px]">T</kbd> anywhere to toggle theme</span>
        </div>
      </div>
    </div>
  );
}
