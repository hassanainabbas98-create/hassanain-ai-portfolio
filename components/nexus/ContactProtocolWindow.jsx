'use client';

import { useState } from 'react';
import { Send, Terminal, Mail, Phone, MapPin, CheckCircle2, Copy, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GuruIcon } from '../BrandIcons';

export default function ContactProtocolWindow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    module: 'AI_AGENT_DEVELOPMENT',
    mission: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'executing' | 'success'
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mission) return;

    setStatus('executing');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        module: 'AI_AGENT_DEVELOPMENT',
        mission: '',
      });
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hsnabbas40@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputClass = "w-full bg-transparent text-slate-700 placeholder-slate-400 text-xs focus:outline-none font-mono";
  const wrapClass = "flex items-center px-3 py-2.5 rounded-xl bg-white border border-slate-200 focus-within:border-[#FF6D5A] focus-within:shadow-[0_0_0_3px_rgba(255,109,90,0.08)] transition-all";

  return (
    <div className="flex flex-col h-full bg-white font-mono text-xs select-text overflow-hidden">
      
      {/* Title Subheader */}
      <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#8B5CF6]" />
          <span className="text-slate-800 font-bold">contact_protocol.sh</span>
          <span className="text-slate-300">|</span>
          <span className="text-emerald-600 text-[10px]">SHELL: /bin/bash // SECURE TLS-v1.3</span>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 text-[10px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>LISTENER ONLINE</span>
        </div>
      </div>

      <div className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 overflow-y-auto flex-1">
        
        {/* Left: Terminal Styled Input Form */}
        <div className="md:col-span-7 space-y-4">
          <div className="text-[11px] text-slate-400 mb-2 font-sans">
            # Execute automated contact script to dispatch your mission parameters directly into Hassanain Abbas&apos;s neural inbox.
          </div>

          {status === 'success' ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
              <h4 className="text-sm font-bold text-slate-800">
                TRANSMISSION EXECUTED SUCCESSFULLY!
              </h4>
              <p className="text-[11px] text-slate-600 font-sans">
                Payload verified and logged. Hassanain Abbas will respond within 12 hours with an architectural roadmap.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-4 py-2 rounded-xl bg-white text-[#FF6D5A] border border-[#FF6D5A]/30 text-[10px] uppercase font-bold hover:bg-orange-50 transition-colors"
              >
                $ execute_new_transmission
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[11px] text-[#FF6D5A] font-bold mb-1">
                  $ enter_operator_name: <span className="text-slate-400">*</span>
                </label>
                <div className={wrapClass}>
                  <span className="text-slate-400 mr-2">&gt;</span>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Chen (Novus Labs)"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] text-[#FF6D5A] font-bold mb-1">
                  $ enter_corporate_email: <span className="text-slate-400">*</span>
                </label>
                <div className={wrapClass}>
                  <span className="text-slate-400 mr-2">&gt;</span>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="david@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Module Selector */}
              <div>
                <label className="block text-[11px] text-[#8B5CF6] font-bold mb-1">
                  $ select_target_module:
                </label>
                <div className="flex items-center px-3 py-2 rounded-xl bg-white border border-slate-200 focus-within:border-[#8B5CF6] focus-within:shadow-[0_0_0_3px_rgba(139,92,246,0.08)] transition-all">
                  <span className="text-slate-400 mr-2">&gt;</span>
                  <select
                    value={formData.module}
                    onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                    className="w-full bg-transparent text-slate-700 text-xs focus:outline-none font-mono"
                  >
                    <option value="AI_AGENT_DEVELOPMENT">AI_AGENT_DEVELOPMENT (ReAct Swarms)</option>
                    <option value="N8N_WORKFLOW_AUTOMATION">N8N_WORKFLOW_AUTOMATION (Enterprise Pipelines)</option>
                    <option value="RAG_SYSTEM_INTELLIGENCE">RAG_SYSTEM_INTELLIGENCE (Zero-Hallucination)</option>
                    <option value="WEB_SCRAPING_SWARM">WEB_SCRAPING_SWARM (Playwright / Anti-Bot)</option>
                  </select>
                </div>
              </div>

              {/* Mission */}
              <div>
                <label className="block text-[11px] text-[#FF6D5A] font-bold mb-1">
                  $ describe_mission: <span className="text-slate-400">*</span>
                </label>
                <div className="p-3 rounded-xl bg-white border border-slate-200 focus-within:border-[#FF6D5A] focus-within:shadow-[0_0_0_3px_rgba(255,109,90,0.08)] transition-all">
                  <textarea
                    required
                    rows={3}
                    value={formData.mission}
                    onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                    placeholder="Describe your workflows, manual bottlenecks, or what autonomous agents you want to build..."
                    className="w-full bg-transparent text-slate-700 placeholder-slate-400 text-xs focus:outline-none font-mono resize-none"
                  />
                </div>
              </div>

              {/* Submit Execution Button */}
              <button
                type="submit"
                disabled={status === 'executing'}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF6D5A] via-[#8B5CF6] to-[#FF6D5A] text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(255,109,90,0.3)] disabled:opacity-50"
              >
                {status === 'executing' ? (
                  <span>[ EXECUTING TRANSMISSION... ]</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>[ EXECUTE CONTACT PROTOCOL ]</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right: Availability Telemetry & Direct Nodes */}
        <div className="md:col-span-5 space-y-4">
          
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="text-[10px] text-[#FF6D5A] uppercase tracking-wider font-bold">
              SYSTEM AVAILABILITY STATUS:
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-700 text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>SYSTEM READY TO TAKE NEW PROJECTS</span>
            </div>

            <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
              Accepting contract roles, AI agent development, n8n automations, and enterprise consulting worldwide.
            </p>
          </div>

          {/* Direct Nodes */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              DIRECT ACCESS NODES:
            </div>

            {/* Email */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 text-[11px] shadow-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-3.5 h-3.5 text-[#FF6D5A]" />
                <span className="truncate max-w-[150px]">hsnabbas40@gmail.com</span>
              </div>
              <button
                onClick={copyEmail}
                className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-700"
                title="Copy Email"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923045123233"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 text-[11px] hover:border-emerald-400 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>+92 304 5123233</span>
              </div>
              <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Lahore, Pakistan • Global Remote</span>
            </div>
          </div>

          {/* External Marketplaces */}
          <div className="grid grid-cols-3 gap-2">
            <a
              href="https://github.com/HassanainAbbas/Work-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 hover:shadow-md flex flex-col items-center justify-center text-center group transition-all"
            >
              <GithubIcon className="w-4 h-4 text-slate-600 group-hover:text-slate-900 mb-1" />
              <span className="text-[10px] text-slate-600">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/hassanain-abbas-b1a889261"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0A66C2] hover:shadow-md flex flex-col items-center justify-center text-center group transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0A66C2] mb-1" />
              <span className="text-[10px] text-slate-600">LinkedIn</span>
            </a>

            <a
              href="https://www.guru.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#8B5CF6] hover:shadow-md flex flex-col items-center justify-center text-center group transition-all"
            >
              <GuruIcon className="w-4 h-4 text-[#8B5CF6] mb-1" />
              <span className="text-[10px] text-slate-600">Guru</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
