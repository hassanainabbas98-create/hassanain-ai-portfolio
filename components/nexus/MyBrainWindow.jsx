'use client';

import { useState } from 'react';
import { Database, Search, Bot, Zap, Network, Layers, Cpu, Globe } from 'lucide-react';

export default function MyBrainWindow() {
  const [filterQuery, setFilterQuery] = useState('');

  const modules = [
    {
      id: 'MOD_01_AI_AGENT_DEV',
      name: 'AI_AGENT_DEVELOPMENT',
      category: 'Autonomous Reasoning',
      icon: Bot,
      color: '#FF6D5A',
      bgColor: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      proficiency: '99%',
      deployments: '50+ Swarms',
      stack: ['Python 3.12', 'ReAct Protocol', 'OpenAI Function Calling', 'LangGraph'],
      directive:
        'Architecting self-directed multi-agent swarms equipped with task breakdown, tool-calling loops, short/long-term memory, and self-correction guardrails.',
    },
    {
      id: 'MOD_02_N8N_WORKFLOW',
      name: 'N8N_INTEGRATION_&_WORKFLOWS',
      category: 'High-Throughput Pipelines',
      icon: Zap,
      color: '#8B5CF6',
      bgColor: 'from-violet-50 to-purple-50',
      borderColor: 'border-violet-200',
      proficiency: '98%',
      deployments: '85+ Workflows',
      stack: ['Self-Hosted Docker', 'Sub-Workflows', 'Webhooks', 'Async Queues'],
      directive:
        'Constructing resilient visual workflow orchestrations connecting CRMs, databases, and LLM nodes with error fallback branches and webhook triggers.',
    },
    {
      id: 'MOD_03_LANGCHAIN_GRAPH',
      name: 'LANGCHAIN_&_LANGGRAPH',
      category: 'Stateful Orchestration',
      icon: Network,
      color: '#0284C7',
      bgColor: 'from-sky-50 to-blue-50',
      borderColor: 'border-sky-200',
      proficiency: '96%',
      deployments: '40+ Pipelines',
      stack: ['LCEL', 'LangGraph Checkpoints', 'Multi-Agent Loops', 'Custom Tools'],
      directive:
        'Building stateful cyclic graph workflows with human-in-the-loop checkpoints, persistent message history, and multi-model routing.',
    },
    {
      id: 'MOD_04_RAG_SYSTEMS',
      name: 'RAG_SYSTEM_&_VECTORS',
      category: 'Context Retrieval',
      icon: Layers,
      color: '#8B5CF6',
      bgColor: 'from-violet-50 to-indigo-50',
      borderColor: 'border-violet-200',
      proficiency: '97%',
      deployments: '35+ Knowledge DBs',
      stack: ['Pinecone', 'Qdrant', 'Hybrid Dense-Sparse', 'Semantic Chunking'],
      directive:
        'Engineering zero-hallucination document intelligence pipelines with paragraph boundary chunking, cross-encoder rerankers, and citation attribution.',
    },
    {
      id: 'MOD_05_OPENAI_API',
      name: 'OPENAI_API_&_LLM_OPS',
      category: 'Foundation Models',
      icon: Cpu,
      color: '#FF6D5A',
      bgColor: 'from-orange-50 to-amber-50',
      borderColor: 'border-orange-200',
      proficiency: '99%',
      deployments: '120k+ Calls/Mo',
      stack: ['GPT-4o', 'Structured Outputs', 'Prompt Engineering', 'Token Optimization'],
      directive:
        'Fine-tuning prompt topologies, enforcing deterministic JSON schema outputs, and optimizing context windows to minimize latency and API cost.',
    },
    {
      id: 'MOD_06_WEB_SCRAPING',
      name: 'WEB_SCRAPING_&_INGESTION',
      category: 'Distributed Swarms',
      icon: Globe,
      color: '#10B981',
      bgColor: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200',
      proficiency: '98%',
      deployments: '10k+ Daily Records',
      stack: ['Playwright', 'Scrapy', 'Anti-Bot Bypass', 'Dynamic Proxies'],
      directive:
        'Deploying headless browser swarms that bypass Cloudflare and dynamic JavaScript walls to continuously feed raw data into automated vector pipelines.',
    },
  ];

  const filtered = modules.filter(
    (m) =>
      m.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      m.directive.toLowerCase().includes(filterQuery.toLowerCase()) ||
      m.id.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-white font-mono text-xs select-text overflow-hidden">
      
      {/* Database Query Bar */}
      <div className="p-3 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px]">
        <div className="flex items-center gap-2 text-slate-500">
          <Database className="w-4 h-4 text-[#8B5CF6]" />
          <span className="text-slate-800 font-semibold">my_brain.db</span>
          <span className="text-slate-300">|</span>
          <span className="text-emerald-600 text-[10px]">TABLE: installed_modules (6 RECORDS)</span>
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-slate-200 max-w-sm w-full shadow-sm">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="SELECT * FROM skills WHERE module LIKE '%...'"
            className="w-full bg-transparent text-slate-700 placeholder-slate-400 text-[11px] focus:outline-none"
          />
        </div>
      </div>

      {/* Database Rows / Cards Grid */}
      <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((mod) => {
          const Icon = mod.icon;
          return (
            <div
              key={mod.id}
              className={`p-4 rounded-2xl bg-gradient-to-br ${mod.bgColor} border ${mod.borderColor} hover:shadow-md transition-all group flex flex-col justify-between`}
            >
              <div>
                {/* Record Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      <Icon className="w-4 h-4" style={{ color: mod.color }} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">{mod.id}</span>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                        {mod.name}
                      </h4>
                    </div>
                  </div>

                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200 font-bold shadow-sm">
                    {mod.proficiency}
                  </span>
                </div>

                {/* Directive Description */}
                <p className="text-[11px] text-slate-600 font-sans leading-relaxed mb-3">
                  {mod.directive}
                </p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {mod.stack.map((item) => (
                    <span
                      key={item}
                      className="text-[9px] px-2 py-0.5 rounded-full bg-white text-slate-500 border border-slate-200 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Record Footer */}
              <div className="pt-2.5 border-t border-white/60 flex items-center justify-between text-[10px] text-slate-400">
                <span>DEPLOYMENTS: <strong className="text-emerald-600">{mod.deployments}</strong></span>
                <span className="text-slate-400">STATUS: <span className="text-emerald-600 font-bold">ACTIVE</span></span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Database Footer Status */}
      <div className="p-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
        <span>QUERY LATENCY: 0.04ms</span>
        <span>INDEX: PRIMARY_KEY(skill_id)</span>
      </div>

    </div>
  );
}
