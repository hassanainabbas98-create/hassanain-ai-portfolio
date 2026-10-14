'use client';

import { motion } from 'framer-motion';
import { Bot, Zap, Network, Database, Globe, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'agent-dev',
      title: 'AI Agent Development',
      badge: 'AUTONOMOUS REASONING',
      icon: Bot,
      color: '#00D1FF',
      description:
        'Architecting self-directed AI agents equipped with planning, tool-calling execution loops, dynamic short/long-term memory, and self-correction guardrails.',
      features: [
        'Multi-Agent Collaboration Swarms',
        'Stateful Memory & Context Compression',
        'Custom Tool Execution & API Calling',
      ],
      telemetry: 'PROTOCOL: ReAct / Plan-and-Solve',
    },
    {
      id: 'automation',
      title: 'AI Automation & Pipelines',
      badge: 'ENTERPRISE OPS',
      icon: Zap,
      color: '#7A5CFA',
      description:
        'Replacing repetitive manual corporate workflows with end-to-end intelligent automation engines that trigger via webhooks, process raw data, and sync across CRMs.',
      features: [
        'Zero-Touch Business Pipelines',
        'Intelligent Document & Email Parsers',
        'Automated Lead Routing & Verification',
      ],
      telemetry: 'LATENCY REDUCTION: ~80%',
    },
    {
      id: 'langchain',
      title: 'LangChain & LangGraph',
      badge: 'STATEFUL ORCHESTRATION',
      icon: Network,
      color: '#00D1FF',
      description:
        'Building cyclic graph architectures with LangGraph and LCEL for non-linear decision trees, persistent state checkpoints, and complex multi-step reasoning.',
      features: [
        'LangGraph Cyclic Agent Workflows',
        'Human-in-the-Loop Approval Nodes',
        'Dynamic Model Fallbacks & Routing',
      ],
      telemetry: 'FRAMEWORK: LangChain / LCEL / Graph',
    },
    {
      id: 'n8n',
      title: 'n8n Workflow Automation',
      badge: 'HIGH-THROUGHPUT GRAPH',
      icon: Cpu,
      color: '#7A5CFA',
      description:
        'Deploying high-performance self-hosted or cloud n8n orchestrations. Designing complex visual node flows, custom community nodes, and failure-tolerant routing.',
      features: [
        'Self-Hosted Docker Node Clustering',
        'Sub-Workflow Modular Architecture',
        'Webhook Ingestion & Asynchronous Queues',
      ],
      telemetry: 'ORCHESTRATION: n8n Core v1.x',
    },
    {
      id: 'rag',
      title: 'Enterprise RAG Systems',
      badge: 'ZERO-HALLUCINATION',
      icon: Database,
      color: '#00D1FF',
      description:
        'Constructing production-grade Retrieval-Augmented Generation systems with semantic chunking, dense-sparse hybrid vector search, and reranking algorithms.',
      features: [
        'Pinecone, Qdrant & ChromaDB Vectors',
        'Citation & Grounded Answer Verification',
        'Multi-Modal PDF & Unstructured Parsing',
      ],
      telemetry: 'RETRIEVAL: Hybrid BM25 + Dense Vectors',
    },
    {
      id: 'scraping',
      title: 'Intelligent Web Scraping',
      badge: 'DISTRIBUTED INGESTION',
      icon: Globe,
      color: '#7A5CFA',
      description:
        'Building resilient, high-speed automated scrapers using Playwright and Python. Circumventing anti-bot protections, captchas, and dynamic JavaScript rendering.',
      features: [
        'Headless Browser Automation (Playwright)',
        'Anti-Bot & Dynamic Fingerprint Rotation',
        'Automated Vector DB Ingestion Pipelines',
      ],
      telemetry: 'EXTRACTION: Headless Playwright / Scrapy',
    },
  ];

  return (
    <section id="services" className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10131A] border border-[#00D1FF]/30 text-xs font-mono text-[#00D1FF] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
          <span>CAPABILITIES &amp; AGENT PROTOCOLS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-extrabold text-white tracking-tight">
          Engineered for <span className="neon-gradient-text">Autonomous Scale</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed font-normal">
          From multi-agent reasoning loops to bulletproof n8n pipelines — delivering software architectures that function without human bottlenecks.
        </p>
      </div>

      {/* 6 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-panel glass-panel-glow rounded-2xl p-7 flex flex-col justify-between group border border-white/5 relative overflow-hidden"
            >
              {/* Corner Cyber Cut Decorator */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-white/[0.04] rotate-45 transform origin-top-right group-hover:bg-[#00D1FF]/20 transition-colors" />
              </div>

              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#05070A] border border-white/10 group-hover:border-[#00D1FF] transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  >
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" style={{ color: service.color }} />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#05070A] text-slate-400 border border-white/5 tracking-wider uppercase group-hover:border-[#00D1FF]/40 group-hover:text-white transition-colors">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-space font-bold text-white group-hover:text-[#00D1FF] transition-colors flex items-center gap-2">
                  <span>{service.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-[#00D1FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: service.color }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Telemetry Footer */}
              <div className="mt-7 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{service.telemetry}</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
