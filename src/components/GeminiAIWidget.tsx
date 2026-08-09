import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, X, Loader2, RefreshCw, Zap, Lightbulb } from 'lucide-react';

interface GeminiAIWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GeminiAIWidget({ isOpen, onClose }: GeminiAIWidgetProps) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'gemini'; text: string }>>([
    {
      sender: 'gemini',
      text: "👋 Hi! I'm **Tanisk AI**, powered by Gemini. Ask me anything about Tanisk Sahu's Business Analytics background, 9.2 CGPA, 40+ Canva decks, Python ML projects, or why he's a top fit for your company!"
    }
  ]);

  const presetChips = [
    '⚡ Why hire Tanisk for Deloitte / PwC?',
    '📊 Summarize 9.2 CGPA & Tech Stack',
    '🎨 Tell me about his Canva Pitch Decks',
    '🚀 Show top AI & Python Projects'
  ];

  const handleSend = async (textToSend?: string) => {
    const promptText = textToSend || query;
    if (!promptText.trim() || isLoading) return;

    // Add user message
    const updatedMessages = [...messages, { sender: 'user' as const, text: promptText }];
    setMessages(updatedMessages);
    setQuery('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptText })
      });

      const data = await res.json();
      setMessages([
        ...updatedMessages,
        { sender: 'gemini', text: data.answer || 'Tanisk Sahu is an exceptional candidate in Business Analytics and AI!' }
      ]);
    } catch (err) {
      setMessages([
        ...updatedMessages,
        {
          sender: 'gemini',
          text: 'Tanisk Sahu holds a 9.2 CGPA in Business Analytics, specializes in Power BI, SQL, Python ML, and has authored 40+ Canva pitch decks. Reach out to him at tanisk.sahu@example.com!'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0F1016] border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden flex flex-col h-[600px] text-white">
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-gray-900 via-gray-900 to-cyan-950/60 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-extrabold text-base text-white">
                  Tanisk AI Assistant
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-mono border border-cyan-500/30">
                  GEMINI 2.5
                </span>
              </div>
              <p className="text-xs text-gray-400">Ask anything about Tanisk Sahu's resume, skills & work</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'gemini' && (
                <div className="w-8 h-8 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-[#FF5A1F] to-[#FF8A00] text-white font-medium rounded-tr-none'
                    : 'bg-gray-900/90 border border-gray-800 text-gray-200 rounded-tl-none whitespace-pre-line'
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-orange-950 text-orange-400 border border-orange-500/40 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-3 text-cyan-400 text-xs font-mono p-3 bg-cyan-950/30 rounded-2xl border border-cyan-500/20 max-w-xs">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Gemini is analyzing Tanisk's portfolio data...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-5 py-2 border-t border-gray-800/60 bg-gray-950/50 flex gap-2 overflow-x-auto no-scrollbar">
          {presetChips.map((chip, i) => (
            <button
              key={i}
              onClick={() => handleSend(chip)}
              className="shrink-0 px-3 py-1.5 rounded-full bg-gray-900 hover:bg-cyan-950/80 text-gray-300 hover:text-cyan-300 text-xs border border-gray-800 hover:border-cyan-500/40 transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3 h-3 text-amber-400" />
              <span>{chip}</span>
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-gray-950 border-t border-gray-800 flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask Gemini anything about Tanisk (e.g. 'What is his CGPA?')..."
            className="flex-1 px-4 py-3 rounded-2xl bg-gray-900 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !query.trim()}
            className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-black font-bold hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
