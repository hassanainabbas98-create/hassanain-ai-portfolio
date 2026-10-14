'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

export default function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef(null);

  const bootLogs = [
    'BIOS: HASSANAIN_AI_KERNEL v4.2.0 (x86_64)',
    '[ OK ] Initializing CPU registers & neural coprocessor...',
    '[ OK ] Mounting memory buffers: LangChain StateCheckpoints',
    '[ OK ] Loading agent_core runtime (Python 3.12 / OpenAI API v1.x)...',
    '[ OK ] Connecting n8n workflow cluster & webhook daemons...',
    '[ OK ] Initializing RAG vector indices: Pinecone & Qdrant...',
    '[ OK ] Spawning headless Playwright browser swarm for web scraping...',
    '[ OK ] Safety protocols verified: Zero-Hallucination Guardrails ACTIVE',
    '[ OK ] Operator Profile: Hassanain Abbas (Autonomous Systems Architect)',
    '>>> BOOT COMPLETE // STARTING DESKTOP ENVIRONMENT...',
  ];

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < bootLogs.length) {
        const nextLog = bootLogs[currentIdx];
        if (nextLog) {
          setLines((prev) => [...prev, nextLog]);
        }
        setProgress(Math.round(((currentIdx + 1) / bootLogs.length) * 100));
        currentIdx++;
      } else {
        clearInterval(interval);
        timeoutRef.current = setTimeout(() => {
          onComplete();
        }, 400);
      }
    }, 200);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        clearInterval(interval);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-white text-slate-700 font-mono p-6 sm:p-12 flex flex-col justify-between select-none cursor-pointer"
      onClick={onComplete}
    >
      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF6D5A] to-[#8B5CF6] flex items-center justify-center shadow-sm">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold tracking-wider text-[#FF6D5A]">HASSANAIN ABBAS // SYSTEM PROTOCOL</span>
          </div>
          <div className="text-slate-400 text-[10px]">
            [ CLICK ANYWHERE OR PRESS ESC TO SKIP ]
          </div>
        </div>

        <div className="space-y-2 text-xs sm:text-sm max-w-3xl">
          {lines.filter(Boolean).map((line, idx) => {
            const isOk = typeof line === 'string' && line.includes('[ OK ]');
            const isComplete = typeof line === 'string' && line.includes('>>>');
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                {isOk ? (
                  <>
                    <span className="text-emerald-500 font-bold">[ OK ]</span>
                    <span className="text-slate-600">{line.replace('[ OK ]', '')}</span>
                  </>
                ) : isComplete ? (
                  <span className="text-[#FF6D5A] font-bold">{line}</span>
                ) : (
                  <span className="text-slate-500 font-semibold">{line}</span>
                )}
              </motion.div>
            );
          })}
          <div className="inline-block w-2.5 h-4 bg-[#FF6D5A] animate-pulse align-middle ml-1 rounded-sm" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 space-y-2 max-w-xl">
        <div className="flex justify-between text-xs text-slate-400">
          <span>SYSTEM_LOADING...</span>
          <span className="font-bold text-slate-700">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FF6D5A] via-[#8B5CF6] to-[#FF6D5A] rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>
        <p className="text-[10px] text-slate-400">Hassanain Abbas · Autonomous AI Agent &amp; Automation Architect</p>
      </div>
    </motion.div>
  );
}
