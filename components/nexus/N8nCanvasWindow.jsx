'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, RefreshCw, Zap, Globe, Bot, Database, Send, ExternalLink, ZoomIn, ZoomOut, Check, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../BrandIcons';

export default function N8nCanvasWindow() {
  const [activeNode, setActiveNode] = useState('agent');
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(null); // 0..4
  const [executionMessage, setExecutionMessage] = useState('Workflow ready to execute');

  const nodes = [
    {
      id: 'webhook',
      name: 'Webhook Trigger',
      subtitle: 'On POST received',
      color: '#FF6D5A', // n8n coral
      icon: Zap,
      type: 'Trigger Node',
      inputData: 'HTTP 443 /api/v1/trigger',
      outputData: '{ "event": "lead_inbound", "timestamp": 1728564000 }',
      badge: '200 OK',
    },
    {
      id: 'scraper',
      name: 'Playwright Scraper',
      subtitle: 'Headless Chromium',
      color: '#0284C7', // n8n blue
      icon: Globe,
      type: 'Extractor Node',
      inputData: '{ "targetUrl": "b2b-directory.com/search" }',
      outputData: '{ "extractedRecords": 240, "antiBotBypassed": true }',
      badge: '240 Items',
    },
    {
      id: 'agent',
      name: 'AI Agent (GPT-4o)',
      subtitle: 'ReAct Reasoning Loop',
      color: '#8B5CF6', // n8n purple
      icon: Bot,
      type: 'LLM Orchestrator',
      inputData: '{ "prompt": "Score and structure lead parameters..." }',
      outputData: '{ "intentScore": 0.94, "category": "Enterprise_AI" }',
      badge: 'Token: 840',
    },
    {
      id: 'rag',
      name: 'Pinecone Vector DB',
      subtitle: 'Hybrid RAG Retrieval',
      color: '#F59E0B', // amber
      icon: Database,
      type: 'Knowledge Node',
      inputData: '{ "query": "Find matching company profile..." }',
      outputData: '{ "matchedVectors": 3, "cosineDistance": 0.06 }',
      badge: '14ms Latency',
    },
    {
      id: 'dispatch',
      name: 'PostgreSQL & Slack',
      subtitle: 'Persist & Alert Team',
      color: '#10B981', // emerald
      icon: Send,
      type: 'Destination Node',
      inputData: '{ "dbAction": "UPSERT", "notifyChannel": "#leads" }',
      outputData: '{ "dbStatus": "COMMITTED", "slackMessageId": "msg_94" }',
      badge: 'Completed',
    },
  ];

  const executions = [
    {
      id: 'EXEC_001',
      name: 'Artify AI — Autonomous Marketplace & Generative Pipeline',
      status: 'SUCCESS (200 OK)',
      time: '180ms',
      description:
        'Full-stack digital art marketplace connecting artists with buyers. Automated vision asset tagging, image upscaling, and n8n webhook notifications.',
      tags: ['ASP.NET Core', 'React', 'n8n', 'OpenAI API', 'SQL Server'],
      impact: '85% reduction in asset upload overhead',
      github: 'https://github.com/HassanainAbbas/Work-portfolio',
    },
    {
      id: 'EXEC_002',
      name: 'OmniRAG — Enterprise Document & Legal Intelligence',
      status: 'SUCCESS (200 OK)',
      time: '410ms',
      description:
        'Hybrid dense-sparse retrieval system querying 50,000+ vector records with LangChain, Pinecone, and automated citation checking with zero hallucination.',
      tags: ['LangChain', 'OpenAI GPT-4o', 'Pinecone', 'Python', 'FastAPI'],
      impact: 'Sub-450ms query response time across 800+ page contracts',
      github: 'https://github.com/HassanainAbbas/Work-portfolio',
    },
    {
      id: 'EXEC_003',
      name: 'AutoFlow — Distributed Web Scraper & Lead Swarm',
      status: 'SUCCESS (200 OK)',
      time: '640ms',
      description:
        'High-scale scraping engine utilizing Playwright with anti-detection fingerprinting routed into an n8n workflow for B2B lead enrichment.',
      tags: ['n8n', 'Playwright', 'PostgreSQL', 'Webhooks', 'Make.com'],
      impact: '10,000+ validated leads scraped weekly with automated CRM push',
      github: 'https://github.com/HassanainAbbas/Work-portfolio',
    },
    {
      id: 'EXEC_004',
      name: 'MedixAgent — Clinical Triage & Hospital Management',
      status: 'SUCCESS (200 OK)',
      time: '290ms',
      description:
        'Autonomous clinical triage and appointment scheduling engine with complete CRUD operations, JSON serialization, and immutable audit logging.',
      tags: ['C#', 'ASP.NET Core', 'OpenAI API', 'SQL Server'],
      impact: 'Saved 18 hours/week for clinical staff with zero scheduling collisions',
      github: 'https://github.com/HassanainAbbas/Work-portfolio',
    },
  ];

  const handleTestWorkflow = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setExecutionMessage('Triggering Webhook Listener...');

    const runStep = (step) => {
      if (step < nodes.length) {
        setActiveStep(step);
        setActiveNode(nodes[step].id);
        setExecutionMessage(`Executing Node: ${nodes[step].name}...`);
        setTimeout(() => runStep(step + 1), 600);
      } else {
        setActiveStep(null);
        setIsRunning(false);
        setExecutionMessage('Execution complete: All 5 nodes returned 200 OK (840ms total)');
      }
    };

    setTimeout(() => runStep(1), 600);
  };

  const selectedNodeData = nodes.find((n) => n.id === activeNode) || nodes[2];

  return (
    <div className="flex-1 overflow-y-auto h-full bg-[#FFFFFF] font-sans text-xs select-text overscroll-contain">
      
      {/* n8n Top Navigation Bar */}
      <div className="p-3 bg-[#FFFFFF] border-b border-slate-200 flex items-center justify-between text-xs shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          {/* n8n Logo Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FF6D5A]/10 border border-[#FF6D5A]/30 text-[#FF6D5A] font-mono font-bold text-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF6D5A]" />
            <span>n8n workflow</span>
          </div>

          <span className="text-slate-300">/</span>

          <span className="font-semibold text-slate-800 text-xs">
            Autonomous_Intelligence_Pipeline.json
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold hidden sm:inline">
            Active v4.2
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleTestWorkflow}
            disabled={isRunning}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FF6D5A] hover:bg-[#E25542] text-white font-semibold text-xs transition-all shadow-md shadow-[#FF6D5A]/25 disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Executing...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Test workflow</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Beautiful n8n Canvas */}
      <div className="relative p-6 sm:p-8 bg-[#F8FAFC] border-b border-slate-200 overflow-x-auto min-h-[220px] flex items-center justify-start sm:justify-center">
        
        {/* Real n8n Light Dot Grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-75 pointer-events-none" />

        {/* Nodes Flow Container */}
        <div className="relative flex items-center gap-6 sm:gap-8 py-4 min-w-max z-10">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = activeNode === node.id;
            const isCurrentlyExecuting = activeStep === idx;

            return (
              <div key={node.id} className="relative flex items-center">
                
                {/* Node Card */}
                <button
                  onClick={() => setActiveNode(node.id)}
                  className={`w-40 p-3.5 rounded-xl bg-white border text-left transition-all duration-200 shadow-md relative ${
                    isCurrentlyExecuting
                      ? 'border-[#FF6D5A] ring-4 ring-[#FF6D5A]/20 scale-105 shadow-xl'
                      : isSelected
                      ? 'border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-lg'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
                  }`}
                >
                  {/* Left Input Pin */}
                  {idx > 0 && (
                    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-slate-400 group-hover:border-[#FF6D5A]" />
                  )}

                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: `${node.color}15`, color: node.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600"
                    >
                      {node.badge}
                    </span>
                  </div>

                  {/* Titles */}
                  <div className="font-bold text-slate-800 text-[11px] truncate">
                    {node.name}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5">
                    {node.subtitle}
                  </div>

                  {/* Status Indicator */}
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-emerald-600 font-medium">
                    <span className="flex items-center gap-1">
                      <Check className="w-2.5 h-2.5" />
                      <span>Ready</span>
                    </span>
                    <span className="text-slate-400 font-mono">OK</span>
                  </div>

                  {/* Right Output Pin */}
                  {idx < nodes.length - 1 && (
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#FF6D5A] shadow-sm" />
                  )}
                </button>

                {/* Connecting Curved Flow Line with Pulsing Particle */}
                {idx < nodes.length - 1 && (
                  <div className="relative w-8 sm:w-10 h-0.5 bg-slate-300 mx-1">
                    {/* Glowing Traveling Data Packet */}
                    <motion.div
                      className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-[#FF6D5A] shadow-[0_0_8px_#FF6D5A]"
                      animate={{ left: ['0%', '100%'] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: idx * 0.35,
                      }}
                    />
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Canvas Bottom-Left Floating Zoom Control Pill */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-sm text-[11px] text-slate-500 font-mono">
          <ZoomIn className="w-3 h-3 hover:text-slate-800 cursor-pointer" />
          <ZoomOut className="w-3 h-3 hover:text-slate-800 cursor-pointer ml-1" />
          <span className="ml-2 font-semibold">100%</span>
        </div>

      </div>

      {/* Node Inspector & Live JSON Preview Bar */}
      <div className="p-4 bg-[#FFFFFF] border-b border-slate-200 space-y-3 shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800 text-xs">
              Selected Node Inspector:
            </span>
            <span
              className="px-2 py-0.5 rounded text-xs font-bold"
              style={{
                backgroundColor: `${selectedNodeData.color}15`,
                color: selectedNodeData.color,
              }}
            >
              {selectedNodeData.name} ({selectedNodeData.type})
            </span>
          </div>

          <div className="text-[11px] text-slate-500 font-mono">
            {executionMessage}
          </div>
        </div>

        {/* JSON In / Out Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-400 block mb-1 font-bold uppercase">Input Parameters:</span>
            <code className="text-slate-700 text-[11px] break-all">{selectedNodeData.inputData}</code>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-emerald-600 block mb-1 font-bold uppercase">Output Data Stream:</span>
            <code className="text-emerald-700 text-[11px] break-all">{selectedNodeData.outputData}</code>
          </div>
        </div>
      </div>

      {/* Featured Projects Real-World Executions */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#FAFAFA]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
            Verified Production Workflows (Featured Projects):
          </span>
          <span className="text-[11px] text-slate-500 font-mono">4 Pipelines Deployed</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {executions.map((exec) => (
            <div
              key={exec.id}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#FF6D5A]/50 transition-all shadow-sm hover:shadow-md space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#FF6D5A] font-bold">{exec.id}</span>
                  <h4 className="text-xs font-bold text-slate-900 mt-0.5">{exec.name}</h4>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold shrink-0">
                  {exec.status}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {exec.description}
              </p>

              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-800">
                <strong className="text-[#FF6D5A]">IMPACT:</strong> {exec.impact}
              </div>

              <div className="flex flex-wrap gap-1">
                {exec.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-mono">LATENCY: {exec.time}</span>
                <a
                  href={exec.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-700 hover:text-[#FF6D5A] font-semibold transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
