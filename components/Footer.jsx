'use client';

import { Bot, Terminal, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#05070A] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-[#10131A] border border-[#00D1FF]/40 flex items-center justify-center text-[#00D1FF]">
            <Bot className="w-5 h-5" />
          </div>

          <div>
            <div className="font-space font-bold text-white text-base">
              Hassanain Abbas
              <span className="text-xs font-mono text-[#00D1FF] ml-2 font-normal">
                // Autonomous AI Architect
              </span>
            </div>
            <p className="text-xs font-mono text-slate-500 mt-0.5">
              BS Software Engineering, PUCIT Punjab University • AI &amp; Automation Systems
            </p>
          </div>
        </div>

        {/* System Telemetry & Back to top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#10131A] border border-white/5 text-[11px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CORE CLUSTER ONLINE</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#10131A] hover:bg-[#1A2233] text-slate-400 hover:text-[#00D1FF] border border-white/10 transition-colors"
            title="Return to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-600 gap-4">
        <div>
          &copy; {new Date().getFullYear()} Hassanain Abbas. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a href="#services" className="hover:text-slate-400 transition-colors">Services</a>
          <a href="#process" className="hover:text-slate-400 transition-colors">Process</a>
          <a href="#projects" className="hover:text-slate-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-slate-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
