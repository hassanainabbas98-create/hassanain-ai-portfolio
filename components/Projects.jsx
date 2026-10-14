'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ArrowUpRight, ExternalLink, CheckCircle2, AlertCircle, X, Sparkles, Database, Zap, Cpu } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: 'artify-ai',
      title: 'Artify AI — Autonomous Marketplace & Generative Pipeline',
      tagline: 'FULL-STACK + GENERATIVE ASSET WORKFLOW',
      icon: Sparkles,
      color: '#00D1FF',
      image: '/assets/images/project1.svg',
      tags: ['ASP.NET Core', 'React', 'n8n Webhooks', 'OpenAI API', 'SQL Server', 'Tailwind CSS'],
      problem:
        'Digital creators faced multi-hour manual metadata tagging, image compression, and delayed buyer notifications across global timezones.',
      solution:
        'Engineered an autonomous ingestion pipeline connecting React frontend with ASP.NET Core and n8n webhooks. Vision models automatically generate accessibility tags, category vectors, and buyer email alerts.',
      result:
        'Reduced creator onboarding time by 85% and achieved automated, real-time catalog indexing with zero manual admin intervention.',
      githubUrl: 'https://github.com/HassanainAbbas/Work-portfolio',
      demoUrl: '#contact',
      architecture: [
        'React 18 + Tailwind CSS client with instant optimistic UI',
        'ASP.NET Core backend with Clean Architecture & Entity Framework Core',
        'n8n event-driven webhook dispatch for buyer alerts & transaction tracking',
        'OpenAI Vision API automated image categorization and tagging',
      ],
    },
    {
      id: 'omnirag-enterprise',
      title: 'OmniRAG — Enterprise Document & Knowledge Intelligence',
      tagline: 'HYBRID DENSE-SPARSE RAG SYSTEM',
      icon: Database,
      color: '#7A5CFA',
      image: '/assets/images/project4.svg',
      tags: ['LangChain', 'OpenAI GPT-4o', 'Pinecone', 'Python', 'FastAPI', 'Docker'],
      problem:
        'Corporate analysts wasted 14+ hours weekly manually querying thousands of unstructured legal contracts and technical PDF manuals with regular keyword search.',
      solution:
        'Constructed an enterprise-grade RAG pipeline using LangChain, hybrid BM25 + dense vector embeddings in Pinecone, and cross-encoder rerankers with strict citation verification.',
      result:
        'Sub-450ms query response time across 50,000+ vector records with 99.2% citation precision and verifiable page-level references.',
      githubUrl: 'https://github.com/HassanainAbbas/Work-portfolio',
      demoUrl: '#contact',
      architecture: [
        'Semantic chunking with boundary-aware paragraph sliding windows',
        'Pinecone serverless vector index with metadata filtering by client tenant',
        'LangChain agent loops with automated citation verification & confidence checks',
        'FastAPI asynchronous REST endpoints containerized in Docker',
      ],
    },
    {
      id: 'autoflow-scraping',
      title: 'AutoFlow — Distributed Web Scraper & Lead Swarm',
      tagline: 'HIGH-SCALE n8n DATA AUTOMATION',
      icon: Zap,
      image: '/assets/images/project2.svg',
      color: '#00D1FF',
      tags: ['n8n', 'Python Playwright', 'PostgreSQL', 'Webhooks', 'Make.com'],
      problem:
        'B2B sales teams were burdened with slow manual lead research, outdated directory contact information, and high bounce rates.',
      solution:
        'Built an autonomous web scraping swarm utilizing Python Playwright with anti-detection fingerprinting, routed directly into an n8n workflow for data enrichment, email validation, and CRM ingestion.',
      result:
        'Extracted and validated 10,000+ high-intent leads weekly, saving 25+ manual research hours per team member every month.',
      githubUrl: 'https://github.com/HassanainAbbas/Work-portfolio',
      demoUrl: '#contact',
      architecture: [
        'Headless Playwright cluster with dynamic proxy rotation',
        'n8n orchestration for multi-stage deduplication & validation',
        'Automated scoring algorithm categorizing lead intent before CRM push',
        'PostgreSQL persistent storage with partitioned audit tables',
      ],
    },
    {
      id: 'medixagent-clinical',
      title: 'MedixAgent — Clinical Triage & Hospital Management Engine',
      tagline: 'AUTONOMOUS PATIENT TRIAGE & SCHEDULING',
      icon: Cpu,
      color: '#7A5CFA',
      image: '/assets/images/project3.svg',
      tags: ['C#', 'ASP.NET Core', 'OpenAI API', 'SQL Server', 'JSON Serialization'],
      problem:
        'Medical staff struggled with appointment scheduling overloads, patient intake delays, and fragmented record auditing across emergency and outpatient wards.',
      solution:
        'Developed a high-reliability clinical management engine equipped with AI patient symptom classification, appointment routing, and complete immutable record audit trails.',
      result:
        'Saved 18 hours per week in frontline administration, eliminating appointment scheduling conflicts and logging 100% of state changes.',
      githubUrl: 'https://github.com/HassanainAbbas/Work-portfolio',
      demoUrl: '#contact',
      architecture: [
        'Layered C# architecture with JSON serialization and relational SQL schema',
        'OpenAI Function Calling assistant parsing patient intent into structured schedules',
        'Timestamped record history archiving modified and cancelled appointments',
        'Deterministic validation rules preventing double-booking or clinical collision',
      ],
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10131A] border border-[#00D1FF]/30 text-xs font-mono text-[#00D1FF] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
          <span>PRODUCTION DEPLOYMENTS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-extrabold text-white tracking-tight">
          Featured <span className="neon-gradient-text">AI Systems &amp; Automations</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-4 font-normal">
          Architected with precision. Real-world autonomous agents, high-throughput n8n pipelines, and enterprise RAG solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-panel glass-panel-glow rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/5 bg-[#090D15]/80"
            >
              <div>
                {/* Visual Header / Mockup Banner */}
                <div
                  className="relative aspect-[16/9] overflow-hidden bg-[#0A0E17] border-b border-white/5 cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  {/* Subtle Grid & Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D15] via-transparent to-transparent opacity-70" />

                  {/* Tagline Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#05070A]/90 text-[#00D1FF] border border-[#00D1FF]/40 backdrop-blur-md">
                      {project.tagline}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-[#05070A]/80 border border-white/10 flex items-center justify-center text-white backdrop-blur-md group-hover:border-[#00D1FF] transition-all">
                    <Icon className="w-4 h-4 text-[#00D1FF]" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-7 space-y-5">
                  <h3
                    className="text-2xl font-space font-bold text-white group-hover:text-[#00D1FF] transition-colors cursor-pointer flex items-center justify-between"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-[#00D1FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-2" />
                  </h3>

                  {/* Problem & Solution Strip */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <div className="p-3 rounded-xl bg-[#05070A]/60 border border-white/5">
                      <span className="text-[#7A5CFA] font-mono font-bold uppercase tracking-wider block mb-1">
                        Challenge:
                      </span>
                      <p className="text-slate-400 text-xs leading-relaxed">{project.problem}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#05070A]/60 border border-white/5">
                      <span className="text-[#00D1FF] font-mono font-bold uppercase tracking-wider block mb-1">
                        AI Solution:
                      </span>
                      <p className="text-slate-300 text-xs leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Result Metric */}
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 px-3.5 py-2 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>{project.result}</span>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#10131A] text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="px-7 pb-7 pt-2 flex items-center justify-between border-t border-white/5">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono font-bold text-[#00D1FF] hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>Case Study / Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#10131A] hover:bg-[#1A202C] text-slate-300 hover:text-white border border-white/10 transition-all"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00D1FF]/10 hover:bg-[#00D1FF]/20 text-[#00D1FF] border border-[#00D1FF]/30 text-xs font-mono font-bold uppercase tracking-wider transition-all"
                  >
                    <span>Request Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-[#05070A]/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#0A0E17] border border-[#00D1FF]/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 z-10 shadow-[0_0_50px_rgba(0,209,255,0.2)] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#10131A] text-slate-400 hover:text-white border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#00D1FF]">
                <span>CASE STUDY SPECIFICATION</span>
                <span>//</span>
                <span>{activeModalProject.tagline}</span>
              </div>

              <h3 className="text-2xl font-space font-bold text-white mb-4">
                {activeModalProject.title}
              </h3>

              <div className="space-y-5 text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-[#05070A] border border-white/5 space-y-2">
                  <span className="text-xs font-mono text-[#7A5CFA] font-bold uppercase">
                    Challenge &amp; Context
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#05070A] border border-white/5 space-y-2">
                  <span className="text-xs font-mono text-[#00D1FF] font-bold uppercase">
                    Architectural Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Technical Architecture Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.architecture?.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#00D1FF] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Technology Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-[#10131A] text-[#00D1FF] border border-[#00D1FF]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#10131A] hover:bg-[#1A202C] text-white text-xs font-mono flex items-center gap-2 border border-white/10"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Code Repository</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00D1FF] to-[#7A5CFA] text-[#05070A] font-bold text-xs font-mono uppercase tracking-wider"
                >
                  Deploy Similar Agent
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
