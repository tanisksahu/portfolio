import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, ExternalLink, Github, ChevronRight, X } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  return (
    <section id="web-projects" className="py-20 lg:py-24 bg-white dark:bg-[#0A0C10] text-zinc-900 dark:text-zinc-100 border-t border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12"
        >
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Globe className="w-3.5 h-3.5" />
            <span>WEB APPLICATIONS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Created Websites
          </h2>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Full-stack web applications built with React, Firebase, Gemini AI, Power BI, and Python.
          </p>
        </motion.div>

        {/* Projects List/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between h-full space-y-6"
            >
              {/* Preview Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-zinc-900/90 text-white text-xs font-medium backdrop-blur-xs">
                  {project.category}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {project.subtitle}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
                >
                  <span>Project Overview</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-colors flex items-center gap-1.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-zinc-900 dark:text-zinc-100 space-y-6 shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-semibold text-zinc-500 uppercase">{activeProjectModal.category}</div>
                <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-white mt-1">{activeProjectModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-300">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800">
                <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-1">Problem Statement</h4>
                <p className="leading-relaxed">{activeProjectModal.problem}</p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800">
                <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-1">Solution & Architecture</h4>
                <p className="leading-relaxed">{activeProjectModal.solution}</p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800">
                <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-1">Measurable Impact</h4>
                <p className="leading-relaxed">{activeProjectModal.outcome}</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              {activeProjectModal.liveDemoUrl && (
                <a
                  href={activeProjectModal.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-sm flex items-center gap-2 hover:bg-zinc-800 transition-colors"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}
