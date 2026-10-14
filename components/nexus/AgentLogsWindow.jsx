'use client';

import { useState, useEffect } from 'react';
import { Bot, Terminal, ArrowRight, Sparkles, ExternalLink, Zap } from 'lucide-react';
import { GithubIcon } from '../BrandIcons';
import FourthDimensionCanvas from './FourthDimensionCanvas';

export default function AgentLogsWindow({ onOpenContact }) {
  const [logs, setLogs] = useState([
    '[INIT] Core agent daemon spawned in isolated Docker runtime.',
    '> Task automated: B2B Directory Scraping via Playwright... [DONE]',
    '> n8n Webhook Listener: Ingested 250 enterprise leads without human touch.',
    '> LangChain Agent: Evaluated customer intent -> dispatched CRM update.',
    '> RAG Retrieval: Pinecone hybrid index returned grounded citations in 14ms.',
  ]);

  useEffect(() => {
    const liveTasks = [
      '> Task automated: PDF parsing & semantic chunking... [DONE]',
      '> n8n Cron: Automated daily lead qualification workflow executed.',
      '> LangGraph: Recursive state loop resolved with zero hallucination.',
      '> Vector Store: Upserted 1,420 new embeddings to Qdrant cluster.',
      '> Web Scraping: Rotated headless proxies, extracted 500 records.',
      '> Health Monitor: 100% deterministic workflow accuracy verified.',
    ];

    let taskIdx = 0;
    const interval = setInterval(() => {
      setLogs((prev) => [...prev.slice(-6), liveTasks[taskIdx % liveTasks.length]]);
      taskIdx++;
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const [avatarSrc, setAvatarSrc] = useState('/assets/images/profile.jpg');

  return (
    <div className="flex flex-col h-full bg-white font-mono text-xs select-text overflow-hidden">
      
      {/* Top Main Section (Hero with 4th Dimension Cosmic n8n Hyperspace Background) */}
      <div className="relative p-5 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-slate-200 overflow-hidden bg-gradient-to-br from-white/95 via-[#FAF5FF]/75 to-[#FFF7F5]/85">
        
        {/* 4th Dimension Interactive Hyperspace Canvas */}
        <FourthDimensionCanvas opacity={0.92} />

        {/* Ambient Cosmic Radial Glows */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-[#FF6D5A]/15 via-[#8B5CF6]/15 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-gradient-to-tr from-[#0284C7]/15 via-[#10B981]/10 to-transparent blur-3xl pointer-events-none" />

        {/* Left: Profile Card (Glassmorphic) */}
        <div className="relative z-10 md:col-span-5 flex flex-col items-center text-center p-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.08)] overflow-hidden group">
          
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,109,90,0.08)_0%,transparent_70%)] pointer-events-none" />

          {/* Avatar Container */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-orange-100 to-violet-100 p-2 border-2 border-[#FF6D5A]/60 shadow-[0_0_20px_rgba(255,109,90,0.25)] mb-3 overflow-hidden">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-50 to-orange-50 flex flex-col items-center justify-center relative overflow-hidden">
              <img
                src={avatarSrc}
                alt="Hassanain Abbas"
                onError={() => {
                  if (avatarSrc === '/assets/images/profile.jpg') setAvatarSrc('/assets/images/profile.png');
                  else if (avatarSrc === '/assets/images/profile.png') setAvatarSrc('/assets/images/avatar.svg');
                }}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            
            {/* Status Badge */}
            <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-white border border-emerald-400 text-[9px] text-emerald-600 font-bold shadow-sm">
              ONLINE
            </div>
          </div>

          <h3 className="font-space font-bold text-slate-800 text-base tracking-wide">
            Hassanain Abbas
          </h3>
          <p className="text-[11px] text-[#FF6D5A] font-semibold mt-0.5">
            AI Agent &amp; Automation Architect
          </p>

          <div className="mt-3 w-full pt-3 border-t border-slate-200/80 space-y-1.5 text-[10px] text-slate-500">
            <div className="flex justify-between">
              <span>AGENT STATUS:</span>
              <span className="text-emerald-600 font-bold">ONLINE &amp; READY</span>
            </div>
            <div className="flex justify-between">
              <span>LOCATION:</span>
              <span className="text-slate-700">Lahore, PK (Remote)</span>
            </div>
            <div className="flex justify-between">
              <span>LATENCY:</span>
              <span className="text-[#FF6D5A]">12ms Response</span>
            </div>
          </div>

        </div>

        {/* Right: Core Hero Pitch & Directives (Glassmorphic) */}
        <div className="relative z-10 md:col-span-7 space-y-4 p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-orange-50/90 border border-[#FF6D5A]/40 text-[10px] text-[#FF6D5A] shadow-2xs">
              <Sparkles className="w-3 h-3" />
              <span>CORE DIRECTIVE // PROTOCOL v4.2</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-violet-50/90 border border-[#8B5CF6]/30 text-[10px] text-[#8B5CF6] shadow-2xs font-semibold">
              <Zap className="w-3 h-3 text-[#8B5CF6]" />
              <span>4D n8n HYPERSPACE ENGINE</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-space font-extrabold text-slate-800 leading-tight">
            I Build Autonomous AI Agents That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6D5A] to-[#8B5CF6]">
              Don&apos;t Sleep.
            </span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
            I turn manual 10-hour operations into 10-second{' '}
            <span className="text-[#FF6D5A] font-mono font-semibold">n8n workflows</span>, self-governing{' '}
            <span className="text-[#8B5CF6] font-mono font-semibold">LangChain agents</span>, and zero-hallucination{' '}
            <span className="text-slate-800 font-mono font-semibold">RAG knowledge engines</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6D5A] to-[#8B5CF6] text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_4px_16px_rgba(255,109,90,0.3)]"
            >
              <span>[ Initialize_Project ]</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://github.com/HassanainAbbas/Work-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-[#FF6D5A]/50 text-xs flex items-center gap-2 transition-all shadow-sm"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-700" />
              <span>[ View_Source_Code ]</span>
            </a>
          </div>

          {/* Telemetry pills */}
          <div className="flex flex-wrap gap-2 pt-2 text-[10px] text-slate-500">
            <span className="px-2 py-0.5 rounded-lg bg-slate-50/90 border border-slate-200 shadow-2xs">✓ 50+ Automations Built</span>
            <span className="px-2 py-0.5 rounded-lg bg-slate-50/90 border border-slate-200 shadow-2xs">✓ 99.4% Deterministic</span>
            <span className="px-2 py-0.5 rounded-lg bg-slate-50/90 border border-slate-200 shadow-2xs">✓ Zero Overhead</span>
          </div>
        </div>

      </div>

      {/* Bottom: Real-Time Scrolling Terminal Logs */}
      <div className="p-4 bg-slate-50 flex-1 overflow-y-auto space-y-1.5 font-mono text-[11px] border-t border-slate-200">
        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-2">
          <Terminal className="w-3 h-3 text-[#FF6D5A]" />
          <span>LIVE AGENT EVENT STREAM (STDOUT):</span>
        </div>

        {logs.map((log, idx) => (
          <div key={idx} className="flex items-start gap-2 text-slate-600">
            <span className="text-[#FF6D5A] select-none">&gt;</span>
            <span className={log.includes('[DONE]') ? 'text-emerald-600 font-semibold' : 'text-slate-600'}>
              {log}
            </span>
          </div>
        ))}

        {/* Blinking cursor */}
        <div className="flex items-center gap-2">
          <span className="text-[#FF6D5A]">&gt;</span>
          <span className="inline-block w-2 h-3.5 bg-[#FF6D5A] animate-pulse rounded-sm" />
        </div>
      </div>

    </div>
  );
}
