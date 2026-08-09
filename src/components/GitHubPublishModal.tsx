import React, { useState } from 'react';
import { Github, X, Copy, Check, ExternalLink, Terminal, Download, Sparkles } from 'lucide-react';

interface GitHubPublishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GitHubPublishModal({ isOpen, onClose }: GitHubPublishModalProps) {
  const [copiedCmd, setCopiedCmd] = useState(false);

  if (!isOpen) return null;

  const gitCommands = `git init
git add .
git commit -m "Initial commit of Tanisk Sahu Analytics & Canva Portfolio"
git branch -M main
git remote add origin https://github.com/tanisksahu/analytics-portfolio.git
git push -u origin main`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gitCommands);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 text-gray-900 dark:text-white shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gray-900 dark:bg-black text-white">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-black text-2xl text-gray-950 dark:text-white">
                Publish Portfolio to GitHub
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2 options to push your project to <code className="text-orange-600 dark:text-orange-400 font-bold">github.com/tanisksahu</code>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Option 1: AI Studio UI Export */}
        <div className="p-5 rounded-2xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-500/30 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-700 dark:text-orange-400">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span>OPTION 1: 1-CLICK EXPORT FROM AI STUDIO TOP MENU (RECOMMENDED)</span>
          </div>
          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            In the top header of this AI Studio environment:
          </p>
          <ol className="list-decimal list-inside text-xs text-gray-800 dark:text-gray-200 space-y-1 font-medium pl-1">
            <li>Click the <strong>Settings ⚙️</strong> or <strong>Share / Export</strong> button in the top right bar.</li>
            <li>Select <strong>"Export to GitHub"</strong> or <strong>"Download ZIP"</strong>.</li>
            <li>Connect your GitHub account (<code className="font-mono text-orange-600 dark:text-orange-400">tanisksahu</code>) and AI Studio will push the codebase automatically!</li>
          </ol>
        </div>

        {/* Option 2: Terminal Git Commands */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-700 dark:text-gray-300">
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span>OPTION 2: MANUAL GIT COMMANDS</span>
            </div>
            <button
              onClick={copyToClipboard}
              className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-orange-50 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-all flex items-center gap-1.5 border border-gray-200 dark:border-gray-700"
            >
              {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCmd ? 'Copied!' : 'Copy Commands'}</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-gray-950 text-gray-200 font-mono text-xs overflow-x-auto border border-gray-800 leading-relaxed">
            <pre>{gitCommands}</pre>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs">
          <a
            href="https://github.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 dark:text-orange-400 font-bold hover:underline flex items-center gap-1"
          >
            <span>Create New Repo on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-black font-extrabold"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
