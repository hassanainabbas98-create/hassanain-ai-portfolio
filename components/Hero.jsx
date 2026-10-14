'use client';

import { motion } from 'framer-motion';
import { Bot, ArrowRight, Calendar, Sparkles, Cpu, Zap, Activity, CheckCircle2, ShieldCheck, Database } from 'lucide-react';
import FourthDimensionCanvas from './nexus/FourthDimensionCanvas';

export default function Hero() {
  const nodeBadges = [
    { label: 'n8n Automations', icon: Zap, color: '#00D1FF', angle: 0 },
    { label: 'LangChain & LangGraph', icon: Bot, color: '#7A5CFA', angle: 60 },
    { label: 'OpenAI GPT-4o', icon: Sparkles, color: '#00D1FF', angle: 120 },
    { label: 'RAG Architecture', icon: Database, color: '#7A5CFA', angle: 180 },
    { label: 'Web Scraping Swarm', icon: Cpu, color: '#00D1FF', angle: 240 },
    { label: 'Autonomous Loops', icon: Activity, color: '#7A5CFA', angle: 300 },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 md:pt-44 md:pb-32 flex items-center justify-center overflow-hidden z-10">
      
      {/* 4th Dimension Interactive Hyperspace Canvas */}
      <FourthDimensionCanvas opacity={0.65} />

      {/* Background Floating Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#FF6D5A]/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/10 w-[450px] h-[450px] bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Status Protocol Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#10131A]/90 border border-[#00D1FF]/30 text-xs font-mono backdrop-blur-xl shadow-[0_0_20px_rgba(0,209,255,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D1FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D1FF]"></span>
              </span>
              <span className="text-[#00D1FF] font-semibold tracking-wider uppercase">
                AI AGENT ARCHITECT // PROTOCOL v4.2
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">READY TO DEPLOY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-space font-extrabold tracking-tight leading-[1.08] text-white">
              I Build <span className="neon-gradient-text">Autonomous AI Agents</span> That Work For You.
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hi, I&apos;m <span className="text-white font-semibold">Hassanain Abbas</span>. I architect self-governing multi-agent systems, high-scale <span className="text-[#00D1FF] font-medium">n8n workflows</span>, <span className="text-[#7A5CFA] font-medium">LangChain loops</span>, and intelligent <span className="text-white font-medium">RAG knowledge engines</span> that replace hundreds of hours of manual operations.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="group relative px-7 py-4 rounded-xl bg-gradient-to-r from-[#00D1FF] via-[#7A5CFA] to-[#00D1FF] bg-[length:200%_auto] hover:bg-[position:right_center] text-[#05070A] font-space font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,209,255,0.4)] transition-all duration-500 flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="group px-7 py-4 rounded-xl bg-[#10131A] hover:bg-[#161B26] border border-white/10 hover:border-[#00D1FF]/50 text-white font-space font-semibold text-sm uppercase tracking-wider backdrop-blur-xl transition-all duration-300 flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <Calendar className="w-4 h-4 text-[#00D1FF]" />
                <span>Book a Strategy Call</span>
              </a>
            </div>

            {/* Telemetry Status Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-white/5 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00D1FF]" />
                <span>Zero-Hallucination Guardrails</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Self-Hosted &amp; Cloud Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>100% Deterministic Workflows</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Column: Robotic AI Core Node & Photo Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer Cybernetic Rotating Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#00D1FF]/30 animate-[spin_25s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-[#7A5CFA]/20 animate-[spin_35s_linear_infinite_reverse]" />
              <div className="absolute -inset-8 rounded-full border border-white/5" />

              {/* Glowing Outer Conic Ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#00D1FF] via-[#7A5CFA] to-[#00D1FF] blur-md opacity-70 animate-pulse-slow" />

              {/* Central Core Glass Container */}
              <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-80 md:h-80 rounded-full bg-[#0A0D14] p-3 border-2 border-[#00D1FF]/60 shadow-[0_0_50px_rgba(0,209,255,0.35)] overflow-hidden flex items-center justify-center group">
                
                {/* AI HUD / Core Visual Mockup */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#10131A] to-[#05070A] relative flex flex-col items-center justify-center overflow-hidden border border-white/10">
                  
                  {/* Subtle Radar Sweep effect */}
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(0,209,255,0.15)_0deg,transparent_60deg)] animate-[spin_6s_linear_infinite]" />

                  {/* Cyber Grid Lines */}
                  <div className="absolute inset-0 bg-tech-grid opacity-30" />

                  {/* Core Avatar Graphic & Node Badge */}
                  <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-3">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#161B26] to-[#202738] border-2 border-[#00D1FF] flex items-center justify-center shadow-[0_0_25px_rgba(0,209,255,0.4)] relative">
                      <Bot className="w-12 h-12 text-[#00D1FF] animate-pulse" />
                      <div className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-[#05070A] border border-[#7A5CFA] text-[10px] font-mono text-[#7A5CFA] font-bold">
                        AI CORE
                      </div>
                    </div>

                    <div>
                      <h3 className="font-space font-bold text-white text-base sm:text-lg tracking-wide">
                        HASSANAIN ABBAS
                      </h3>
                      <p className="text-xs font-mono text-[#00D1FF] tracking-wider uppercase">
                        AI Automation Architect
                      </p>
                    </div>

                    {/* Active Telemetry Chip */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10131A]/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>AUTONOMOUS SWARM ONLINE</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Orbit Node Badges */}
              {/* Node 1: n8n */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 px-3 py-1.5 rounded-xl bg-[#10131A]/90 border border-[#00D1FF]/50 text-white font-mono text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(0,209,255,0.3)] backdrop-blur-xl z-20"
              >
                <Zap className="w-3.5 h-3.5 text-[#00D1FF]" />
                <span className="font-bold">n8n Workflow</span>
              </motion.div>

              {/* Node 2: LangChain */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -left-8 px-3 py-1.5 rounded-xl bg-[#10131A]/90 border border-[#7A5CFA]/50 text-white font-mono text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(122,92,250,0.3)] backdrop-blur-xl z-20"
              >
                <Bot className="w-3.5 h-3.5 text-[#7A5CFA]" />
                <span className="font-bold">LangChain</span>
              </motion.div>

              {/* Node 3: RAG System */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-4 right-6 px-3 py-1.5 rounded-xl bg-[#10131A]/90 border border-[#00D1FF]/50 text-white font-mono text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(0,209,255,0.3)] backdrop-blur-xl z-20"
              >
                <Database className="w-3.5 h-3.5 text-[#00D1FF]" />
                <span className="font-bold">RAG Engine</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
