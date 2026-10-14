'use client';

import { FileCode, GraduationCap, Download } from 'lucide-react';

export default function SystemSpecsWindow() {
  const specs = {
    operator: {
      full_name: 'Hassanain Abbas',
      role: 'Autonomous AI Agent & Automation Architect',
      status: 'AVAILABLE_FOR_CONTRACTS',
      base: 'Lahore, Pakistan (Global Remote)',
    },
    education: {
      degree: 'BS Software Engineering',
      institution: 'Punjab University College of Information Technology (PUCIT)',
      location: 'Lahore, Pakistan',
      timeline: '2022 - 2026',
    },
    core_architecture: {
      languages: ['Python', 'C#', 'C++', 'SQL', 'JavaScript / TypeScript'],
      automation_engines: ['n8n', 'Make.com', 'Zapier', 'LangChain', 'LangGraph'],
      frameworks: ['ASP.NET Core MVC', 'FastAPI', 'React', 'Next.js 14', 'Tailwind CSS'],
      databases_vector: ['Pinecone', 'Qdrant', 'PostgreSQL', 'SQL Server', 'ChromaDB'],
      data_ingestion: ['Playwright Headless', 'Scrapy', 'Selenium', 'Async Http'],
    },
    certifications_learning: [
      'Machine Learning Systems Architecture',
      'Neural Networks & Deep Learning Fundamentals',
      'Software Quality Engineering (SQE) & Clean Architecture',
    ],
    quality_standards: {
      workflow_precision: '99.4%',
      error_handling: 'Deterministic Fallback Routing',
      hallucination_rate: '0.00% (Strict Citation Guardrails)',
    },
  };

  // Pretty JSON with syntax coloring via string replacement
  const jsonStr = JSON.stringify(specs, null, 2);

  return (
    <div className="flex flex-col h-full bg-white font-mono text-xs select-text overflow-hidden">
      
      {/* Header Bar */}
      <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-emerald-500" />
          <span className="text-slate-800 font-bold">system_specs.json</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-400 text-[10px]">READ_ONLY // SIGNATURE: VERIFIED</span>
        </div>

        <a
          href="mailto:hsnabbas40@gmail.com?subject=Request%20CV%20-%20Hassanain%20Abbas"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-50 text-emerald-600 border border-emerald-200 text-[10px] font-bold transition-colors shadow-sm"
        >
          <Download className="w-3 h-3" />
          <span>REQUEST FULL CV (PDF)</span>
        </a>
      </div>

      <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
        
        {/* Education & Academic Credentials */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 space-y-3">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
            <GraduationCap className="w-4 h-4 text-[#0284C7]" />
            <span>ACADEMIC FOUNDATION &amp; DEGREE</span>
          </div>

          <div className="pl-4 border-l-2 border-[#0284C7]/40 space-y-1">
            <h4 className="text-slate-800 font-bold text-sm">
              BS Software Engineering
            </h4>
            <p className="text-[#0284C7] text-[11px] font-semibold">
              Punjab University College of Information Technology (PUCIT)
            </p>
            <p className="text-slate-500 text-[10px]">
              Lahore, Pakistan • 2022 - 2026
            </p>
            <p className="text-slate-600 text-xs font-sans mt-2 leading-relaxed">
              Rigorous foundation in backend systems, distributed architectures, algorithms (DSA), database normalization, and AI systems.
            </p>
          </div>
        </div>

        {/* Formatted JSON Tree View */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs overflow-x-auto leading-relaxed">
          <div className="text-slate-400 mb-2 text-[10px]">// Machine-readable operator manifest:</div>
          <pre className="text-slate-600 whitespace-pre-wrap break-words">
            {jsonStr
              .split('\n')
              .map((line, i) => {
                // Colorize keys
                const keyMatch = line.match(/^(\s*)"([^"]+)":/);
                if (keyMatch) {
                  const indent = keyMatch[1];
                  const key = keyMatch[2];
                  const rest = line.slice(keyMatch[0].length);
                  return (
                    <span key={i}>
                      {indent}
                      <span className="text-[#8B5CF6] font-semibold">&quot;{key}&quot;</span>
                      :{rest}
                      {'\n'}
                    </span>
                  );
                }
                // Colorize string values
                if (line.includes('"') && !line.match(/^\s*"[^"]+"\s*:/)) {
                  return (
                    <span key={i} className="text-[#FF6D5A]">
                      {line}
                      {'\n'}
                    </span>
                  );
                }
                return (
                  <span key={i} className="text-emerald-700">
                    {line}
                    {'\n'}
                  </span>
                );
              })}
          </pre>
        </div>

      </div>

    </div>
  );
}
