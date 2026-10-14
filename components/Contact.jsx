'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle2, Bot, Terminal, Copy, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GuruIcon } from './BrandIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI Agent Development',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulated transmission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: 'AI Agent Development',
        message: '',
      });
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hsnabbas40@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const projectTypes = [
    'AI Agent Development',
    'n8n Workflow Automation',
    'Enterprise RAG System',
    'Web Scraping & Data Swarm',
    'LangChain Multi-Agent Loop',
    'Full-Stack AI Integration',
  ];

  return (
    <section id="contact" className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Big Bold Headline CTA */}
      <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10131A] border border-[#00D1FF]/40 text-xs font-mono text-[#00D1FF]">
          <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-ping" />
          <span>INITIALIZE COLLABORATION PROTOCOL</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-space font-extrabold text-white tracking-tight">
          Let&apos;s Build Your <span className="neon-gradient-text">AI Workforce</span>.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Ready to eliminate manual operations or deploy custom autonomous agents? Fill out the project parameters below or reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Channels & Credentials */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Card: Direct Channels */}
          <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-[#090D15]/80 space-y-6">
            <h3 className="text-lg font-space font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#00D1FF]" />
              <span>Direct Communication Nodes</span>
            </h3>

            {/* Email with copy button */}
            <div className="p-4 rounded-xl bg-[#05070A] border border-white/5 flex items-center justify-between group hover:border-[#00D1FF]/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#10131A] flex items-center justify-center text-[#00D1FF]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Email</div>
                  <a href="mailto:hsnabbas40@gmail.com" className="text-xs sm:text-sm font-mono text-white group-hover:text-[#00D1FF] transition-colors">
                    hsnabbas40@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2 rounded-lg bg-[#10131A] hover:bg-[#1A2233] text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone / WhatsApp */}
            <div className="p-4 rounded-xl bg-[#05070A] border border-white/5 flex items-center justify-between group hover:border-[#7A5CFA]/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#10131A] flex items-center justify-center text-[#7A5CFA]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Direct / WhatsApp</div>
                  <a href="tel:+923045123233" className="text-xs sm:text-sm font-mono text-white group-hover:text-[#7A5CFA] transition-colors">
                    +92 304 5123233
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/923045123233"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#10131A] hover:bg-[#1A2233] text-slate-400 hover:text-white transition-colors"
                title="Chat on WhatsApp"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Location & Timezone */}
            <div className="p-4 rounded-xl bg-[#05070A] border border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#10131A] flex items-center justify-center text-emerald-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Base &amp; Availability</div>
                <div className="text-xs sm:text-sm font-mono text-white">
                  Lahore, Pakistan • Open for Global Remote
                </div>
              </div>
            </div>

          </div>

          {/* Social / Professional Profiles (Guru, LinkedIn, GitHub) */}
          <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-[#090D15]/80 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              Verified Profiles &amp; Marketplaces
            </h3>

            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/HassanainAbbas/Work-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#05070A] border border-white/5 hover:border-[#00D1FF] transition-all group text-center"
              >
                <GithubIcon className="w-5 h-5 text-slate-300 group-hover:text-[#00D1FF] transition-colors mb-2" />
                <span className="text-xs font-space font-bold text-white">GitHub</span>
                <span className="text-[10px] font-mono text-slate-500">Repositories</span>
              </a>

              <a
                href="https://linkedin.com/in/hassanain-abbas-b1a889261"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#05070A] border border-white/5 hover:border-[#00D1FF] transition-all group text-center"
              >
                <LinkedinIcon className="w-5 h-5 text-slate-300 group-hover:text-[#00D1FF] transition-colors mb-2" />
                <span className="text-xs font-space font-bold text-white">LinkedIn</span>
                <span className="text-[10px] font-mono text-slate-500">Network</span>
              </a>

              <a
                href="https://www.guru.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#05070A] border border-white/5 hover:border-[#7A5CFA] transition-all group text-center"
              >
                <GuruIcon className="w-5 h-5 text-slate-300 group-hover:text-[#7A5CFA] transition-colors mb-2" />
                <span className="text-xs font-space font-bold text-white">Guru</span>
                <span className="text-[10px] font-mono text-slate-500">Freelance</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Robotic Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#090D15]/90 shadow-2xl relative overflow-hidden">
            
            {/* Form Title & Status Banner */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <div>
                <h3 className="text-xl font-space font-bold text-white">
                  Dispatch Project Parameters
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Guaranteed response within 12 hours with architectural roadmap.
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#05070A] border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>INBOX ACTIVE</span>
              </div>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-space font-bold text-white">
                  Transmission Received Successfully!
                </h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, your project parameters have been routed to Hassanain Abbas. You will receive an architectural proposal and calendar link shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-xl bg-[#10131A] hover:bg-[#1A2233] text-xs font-mono text-[#00D1FF] border border-[#00D1FF]/30 transition-all uppercase"
                  >
                    Send Another Transmission
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance (Novus AI)"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#05070A] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] font-inter text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#05070A] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] font-inter text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Project Type Select */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Target AI Protocol / Service *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#05070A] border border-white/10 text-white focus:outline-none focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] font-inter text-sm transition-all"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#05070A] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Workflow Challenge &amp; Project Scope *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current bottlenecks or what autonomous agents you want to build..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#05070A] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] font-inter text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00D1FF] via-[#7A5CFA] to-[#00D1FF] bg-[length:200%_auto] hover:bg-[position:right_center] text-[#05070A] font-space font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,209,255,0.35)] transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>
                      <Bot className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING PARAMETERS...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>INITIALIZE CONTRACT PROTOCOL</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
