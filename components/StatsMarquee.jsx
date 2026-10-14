'use client';

import { motion } from 'framer-motion';
import { Zap, Bot, Database, Sparkles, Terminal, Cpu, Globe, Layers, ShieldCheck, Repeat } from 'lucide-react';

export default function StatsMarquee() {
  const tools = [
    { name: 'n8n Workflow Engine', icon: Zap, color: '#00D1FF' },
    { name: 'LangChain & LangGraph', icon: Bot, color: '#7A5CFA' },
    { name: 'OpenAI GPT-4o & Function Calling', icon: Sparkles, color: '#00D1FF' },
    { name: 'RAG Knowledge Retrieval', icon: Database, color: '#7A5CFA' },
    { name: 'Pinecone & Qdrant Vectors', icon: Layers, color: '#00D1FF' },
    { name: 'Playwright & Anti-Bot Scraping', icon: Globe, color: '#7A5CFA' },
    { name: 'Python Autonomous Daemons', icon: Terminal, color: '#00D1FF' },
    { name: 'Make.com & Zapier Bridges', icon: Repeat, color: '#7A5CFA' },
    { name: 'FastAPI & Microservices', icon: Cpu, color: '#00D1FF' },
    { name: 'Self-Hosted Docker Clusters', icon: ShieldCheck, color: '#7A5CFA' },
  ];

  const stats = [
    { value: '50+', label: 'Automations Built', detail: 'Across SaaS & enterprise ops' },
    { value: '15k+', label: 'Daily Tasks Executed', detail: 'Zero-touch autonomous runs' },
    { value: '99.4%', label: 'Workflow Precision', detail: 'Guardrail-checked reasoning' },
    { value: '100%', label: 'Client Satisfaction', detail: 'Verified delivery record' },
  ];

  return (
    <section className="relative z-10 py-16 bg-[#07090F] border-y border-white/5 overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      {/* Stats Counter Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative p-6 rounded-2xl glass-panel border border-white/5 hover:border-[#00D1FF]/40 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00D1FF]/5 rounded-full blur-2xl group-hover:bg-[#00D1FF]/15 transition-all" />
              
              <div className="text-3xl sm:text-4xl lg:text-5xl font-space font-extrabold text-white tracking-tight flex items-baseline gap-1">
                <span className="neon-gradient-text">{stat.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-space font-bold text-white uppercase tracking-wider mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-1">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Tech Marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#07090F] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#07090F] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-6 sm:space-x-8">
          {[...tools, ...tools].map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={`${tool.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#10131A]/80 border border-white/5 backdrop-blur-md shadow-lg shrink-0 group hover:border-[#00D1FF]/40 transition-all"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#05070A] border border-white/10 group-hover:border-[#00D1FF]/50 transition-colors"
                >
                  <Icon className="w-4 h-4" style={{ color: tool.color }} />
                </div>
                <span className="text-xs sm:text-sm font-space font-semibold text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
