import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, ExternalLink, Eye, X, Copy, Check, MonitorPlay, Layers, FileText, Presentation, BookOpen, Image, Layout } from 'lucide-react';
import { PORTFOLIO_DATA, CanvaDesign } from '../data/portfolioData';
import CanvaEmbedViewer from './CanvaEmbedViewer';
import { cleanCanvaViewUrl } from '../utils/canvaUtils';

interface CanvaShowcaseProps {
  onContactClick: () => void;
}

export default function CanvaShowcase({ onContactClick }: CanvaShowcaseProps) {
  const { canvaDesigns } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CanvaDesign | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'case-study' | 'canva-embed'>('case-study');

  const displayTabs = [
    { label: 'All Projects', id: 'All', icon: Palette },
    { label: 'PPTs & Pitch Decks', id: 'PPTs & Decks', icon: Presentation },
    { label: 'Brochures & Catalogs', id: 'Brochures', icon: Layout },
    { label: 'E-Magazines & Books', id: 'E-Magazines', icon: BookOpen },
    { label: 'Proposals & Docs', id: 'Proposals & Docs', icon: FileText },
    { label: 'Posters & Campaigns', id: 'Posters & Marketing', icon: Image },
  ];

  const filteredDesigns = canvaDesigns.filter(d => {
    if (activeTab === 'All') return true;
    
    const cat = d.category.toLowerCase();
    const type = d.type.toLowerCase();
    const title = d.title.toLowerCase();
    const tags = d.tags.map(t => t.toLowerCase());

    if (activeTab === 'PPTs & Decks') {
      return cat.includes('ppt') || cat.includes('presentation') || type.includes('ppt') || type.includes('presentation') || type.includes('deck') || tags.includes('ppt') || tags.includes('pitch deck');
    }
    if (activeTab === 'Brochures') {
      return cat.includes('brochure') || type.includes('brochure') || type.includes('catalog') || tags.includes('brochure') || tags.includes('tri-fold');
    }
    if (activeTab === 'E-Magazines') {
      return cat.includes('magazine') || type.includes('magazine') || type.includes('editorial') || tags.includes('magazine') || tags.includes('e-magazine');
    }
    if (activeTab === 'Proposals & Docs') {
      return cat.includes('proposal') || cat.includes('docs') || type.includes('proposal') || type.includes('resume') || type.includes('certificate') || type.includes('cv') || tags.includes('proposal') || tags.includes('document design');
    }
    if (activeTab === 'Posters & Marketing') {
      return cat.includes('poster') || cat.includes('branding') || type.includes('poster') || type.includes('campaign') || tags.includes('poster') || tags.includes('branding');
    }
    
    return cat.includes(activeTab.toLowerCase()) || type.includes(activeTab.toLowerCase()) || title.includes(activeTab.toLowerCase());
  });

  const handleCopyLink = (design: CanvaDesign, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const urlToCopy = cleanCanvaViewUrl(design.canvaUrl);
    navigator.clipboard.writeText(urlToCopy);
    setCopiedId(design.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="canva-hub" className="py-20 lg:py-24 bg-[#FAFAFA] dark:bg-[#0A0C10] text-zinc-900 dark:text-zinc-100 border-t border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-10"
        >
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Palette className="w-3.5 h-3.5" />
            <span>GRAPHIC & DOCUMENT DESIGN WORKS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            PPTs, Brochures, E-Magazines, Proposals & Posters
          </h2>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            All-format graphic design solutions built in Canva Pro — investor pitch decks, tri-fold brochures, multi-page e-magazines, client proposals, reports, and brand identity kits.
          </p>
        </motion.div>

        {/* Filter Tabs with Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar"
        >
          {displayTabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xs'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Design Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigns.map((design, idx) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.55, 
                delay: (idx % 3) * 0.08, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-xs transition-all duration-200 flex flex-col justify-between h-full space-y-4 group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/60">
                <img
                  src={design.previewImage}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-900/90 text-white text-xs font-semibold backdrop-blur-xs">
                  {design.category}
                </div>

                <div className="absolute top-3 right-3">
                  <button
                    onClick={(e) => handleCopyLink(design, e)}
                    className="p-2 rounded-md bg-black/70 hover:bg-black text-white border border-white/20 transition-colors"
                    title="Copy Canva View Link"
                  >
                    {copiedId === design.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-zinc-300" />
                    )}
                  </button>
                </div>
              </div>

              {/* Information */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-zinc-500 uppercase">
                  {design.type}
                </div>
                <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white leading-snug">
                  {design.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                  {design.description}
                </p>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setViewMode('case-study');
                    setSelectedCaseStudy(design);
                  }}
                  className="px-3.5 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>

                <a
                  href={cleanCanvaViewUrl(design.canvaUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-1"
                >
                  <span>Open Canva</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 max-h-[88vh] overflow-y-auto text-zinc-900 dark:text-zinc-100 space-y-6 shadow-2xl"
          >
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <span className="text-xs font-semibold text-zinc-500 uppercase">
                  {selectedCaseStudy.category} • {selectedCaseStudy.type}
                </span>
                <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-white mt-1">
                  {selectedCaseStudy.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-xl max-w-xs">
              <button
                onClick={() => setViewMode('case-study')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                  viewMode === 'case-study'
                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setViewMode('canva-embed')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                  viewMode === 'canva-embed'
                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <MonitorPlay className="w-3.5 h-3.5" />
                <span>Embed</span>
              </button>
            </div>

            {/* Modal Content */}
            {viewMode === 'case-study' ? (
              <div className="space-y-6">
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950">
                  <img
                    src={selectedCaseStudy.previewImage}
                    alt={selectedCaseStudy.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-600 dark:text-zinc-300">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800">
                    <h4 className="font-bold text-zinc-900 dark:text-white text-xs uppercase mb-1">Objective</h4>
                    <p className="leading-relaxed">{selectedCaseStudy.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800">
                    <h4 className="font-bold text-zinc-900 dark:text-white text-xs uppercase mb-1">Design Solution</h4>
                    <p className="leading-relaxed">{selectedCaseStudy.solution}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-300">
                  <h4 className="font-bold text-zinc-900 dark:text-white text-xs uppercase mb-1">Impact & Takeaways</h4>
                  <p className="leading-relaxed">{selectedCaseStudy.learnings}</p>
                </div>
              </div>
            ) : (
              <div className="py-2">
                <CanvaEmbedViewer 
                  canvaUrl={selectedCaseStudy.canvaUrl} 
                  title={selectedCaseStudy.title}
                  description={selectedCaseStudy.description}
                  category={selectedCaseStudy.category}
                  thumbnail={selectedCaseStudy.previewImage}
                  type={selectedCaseStudy.type}
                />
              </div>
            )}

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <button
                onClick={(e) => handleCopyLink(selectedCaseStudy, e)}
                className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold flex items-center gap-1.5 hover:bg-zinc-200 transition-colors"
              >
                {copiedId === selectedCaseStudy.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === selectedCaseStudy.id ? 'Copied Link!' : 'Copy Canva Link'}</span>
              </button>

              <a
                href={cleanCanvaViewUrl(selectedCaseStudy.canvaUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-xs flex items-center gap-2 hover:bg-zinc-800 transition-colors"
              >
                <span>View Full Screen on Canva</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </motion.div>
        </div>
      )}

    </section>
  );
}
