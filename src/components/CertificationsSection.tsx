import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function CertificationsSection() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-20 lg:py-24 bg-white dark:bg-[#0A0C10] text-zinc-900 dark:text-zinc-100 border-t border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            CREDENTIALS
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Certifications & Verified Skills
          </h2>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Certifications from Google, SAS, Deloitte, Tata Group, HP LIFE, and NISM.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between h-full space-y-4"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-2">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>

                <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  ID: {cert.credentialId}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {cert.skillsLearned.map((skill, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200 dark:border-zinc-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700"
                  title="Verify Credential"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
