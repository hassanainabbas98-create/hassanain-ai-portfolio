'use client';

import { motion } from 'framer-motion';
import { Search, Cog, Rocket, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Analyze & Roadmap',
      tagline: 'DECONSTRUCTION & ARCHITECTURE',
      icon: Search,
      color: '#00D1FF',
      description:
        'Audit existing human workflows, identify manual bottlenecks, evaluate API boundaries, and engineer a deterministic architecture with exact prompt schemas and failover paths.',
      deliverables: [
        'Workflow Topology & Dependency Map',
        'Data Ingestion & Vector Schema Specification',
        'Risk & Error Boundary Guardrails',
      ],
      runtime: 'PHASE 1 // 48-72h',
    },
    {
      number: '02',
      title: 'Build & Integrate',
      tagline: 'AGENT DEVELOPMENT & ORCHESTRATION',
      icon: Cog,
      color: '#7A5CFA',
      description:
        'Construct the AI agent loops using LangChain/LangGraph and n8n. Integrate vector databases, train RAG retrieval pipelines, and write automated test cases for zero hallucination.',
      deliverables: [
        'n8n Sub-Workflows & Webhook Triggers',
        'LangChain Multi-Agent Logic Loops',
        'Pinecone / Qdrant Hybrid Indexing',
      ],
      runtime: 'PHASE 2 // SPRINT 1-2',
    },
    {
      number: '03',
      title: 'Deploy & Support',
      tagline: 'PRODUCTION ROLLOUT & SELF-HEALING',
      icon: Rocket,
      color: '#00D1FF',
      description:
        'Deploy the autonomous workforce to secure self-hosted Docker clusters or managed cloud. Configure continuous telemetry logs, automated retries, and proactive health alerts.',
      deliverables: [
        'Docker Containerized Orchestration',
        'Real-Time Telemetry & Alert Webhooks',
        'Ongoing Fine-Tuning & Model Optimization',
      ],
      runtime: 'PHASE 3 // CONTINUOUS',
    },
  ];

  return (
    <section id="process" className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10131A] border border-[#7A5CFA]/30 text-xs font-mono text-[#7A5CFA] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7A5CFA] animate-pulse" />
          <span>EXECUTION PROTOCOL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-extrabold text-white tracking-tight">
          How I Work: <span className="violet-cyan-gradient">The 3-Step Agent Pipeline</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-4 font-normal">
          A disciplined, production-tested methodology engineered to ship stable AI automation without downtime or hallucinated drift.
        </p>
      </div>

      {/* Process Cards with Connecting Line */}
      <div className="relative">
        
        {/* Desktop Connecting Line with Pulsing Light */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-[#00D1FF]/20 via-[#7A5CFA]/40 to-[#00D1FF]/20 -translate-y-12 z-0 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="glass-panel glass-panel-glow rounded-2xl p-8 flex flex-col justify-between group border border-white/5 relative overflow-hidden bg-[#0A0D14]/80"
              >
                {/* Step Number Watermark */}
                <span className="absolute -top-4 -right-2 text-7xl font-space font-extrabold text-white/[0.03] select-none pointer-events-none group-hover:text-[#00D1FF]/[0.08] transition-colors">
                  {step.number}
                </span>

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#05070A] border-2 shadow-lg transition-all group-hover:scale-110"
                      style={{ borderColor: step.color }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#10131A] text-slate-300 border border-white/10">
                      {step.runtime}
                    </span>
                  </div>

                  <p className="text-[11px] font-mono tracking-widest text-[#00D1FF] uppercase mb-1">
                    {step.tagline}
                  </p>
                  <h3 className="text-2xl font-space font-bold text-white group-hover:text-[#00D1FF] transition-colors">
                    {step.number}. {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
                    <p className="text-[11px] font-mono uppercase text-slate-500 font-semibold mb-2">
                      Key Deliverables:
                    </p>
                    {step.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STEP STATUS: VERIFIED</span>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-[#00D1FF] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
