'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Database, Cpu, Send, FileCode, Mail, Phone, Copy, Check, ArrowRight, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../BrandIcons';

export default function CommandPalette({ isOpen, onClose, onOpenWindow, onReboot }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'open_hero',
      title: 'Open agent_logs.exe (Core Directive)',
      category: 'Applications',
      icon: Terminal,
      color: '#FF6D5A',
      run: () => {
        onOpenWindow('agent_logs');
        onClose(false);
      },
    },
    {
      id: 'open_skills',
      title: 'Open my_brain.db (Skills Database)',
      category: 'Applications',
      icon: Database,
      color: '#8B5CF6',
      run: () => {
        onOpenWindow('my_brain');
        onClose(false);
      },
    },
    {
      id: 'open_projects',
      title: 'Open n8n_canvas.app (Projects & Flow Canvas)',
      category: 'Applications',
      icon: Cpu,
      color: '#FF6D5A',
      run: () => {
        onOpenWindow('n8n_canvas');
        onClose(false);
      },
    },
    {
      id: 'open_contact',
      title: 'Open contact_protocol.sh (Hire Operator)',
      category: 'Applications',
      icon: Send,
      color: '#8B5CF6',
      run: () => {
        onOpenWindow('contact_protocol');
        onClose(false);
      },
    },
    {
      id: 'open_specs',
      title: 'Open system_specs.json (Credentials & PUCIT)',
      category: 'Applications',
      icon: FileCode,
      color: '#10B981',
      run: () => {
        onOpenWindow('system_specs');
        onClose(false);
      },
    },
    {
      id: 'copy_email',
      title: 'Copy Operator Email (hsnabbas40@gmail.com)',
      category: 'Communication',
      icon: Copy,
      color: '#FF6D5A',
      run: () => {
        navigator.clipboard.writeText('hsnabbas40@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: 'whatsapp',
      title: 'Direct WhatsApp Ping (+92 304 5123233)',
      category: 'Communication',
      icon: Phone,
      color: '#10B981',
      run: () => {
        window.open('https://wa.me/923045123233', '_blank');
        onClose(false);
      },
    },
    {
      id: 'github',
      title: 'View Work-Portfolio GitHub Repositories',
      category: 'External',
      icon: GithubIcon,
      color: '#374151',
      run: () => {
        window.open('https://github.com/HassanainAbbas/Work-portfolio', '_blank');
        onClose(false);
      },
    },
    {
      id: 'reboot',
      title: 'Restart System / Replay Boot Protocol',
      category: 'System',
      icon: Terminal,
      color: '#EF4444',
      run: () => {
        onClose(false);
        onReboot();
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  // Group by category
  const grouped = filtered.reduce((acc, act) => {
    if (!acc[act.category]) acc[act.category] = [];
    acc[act.category].push(act);
    return acc;
  }, {});

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onClose(false)}
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-md"
      />

      {/* Palette Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden z-10 font-mono text-sm"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50">
          <Search className="w-4 h-4 text-[#FF6D5A] mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to window (e.g. 'skills', 'hire', 'projects')..."
            className="w-full bg-transparent text-slate-700 placeholder-slate-400 text-xs focus:outline-none"
          />
          <button
            onClick={() => onClose(false)}
            className="p-1 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No matching system commands found.
            </div>
          ) : (
            Object.entries(grouped).map(([cat, acts]) => (
              <div key={cat} className="mb-2">
                <div className="px-2 py-1 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  {cat}
                </div>
                <div className="space-y-0.5">
                  {acts.map((act) => {
                    const Icon = act.icon;
                    return (
                      <button
                        key={act.id}
                        onClick={act.run}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-colors group text-left border border-transparent hover:border-slate-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                            <Icon className="w-3.5 h-3.5" style={{ color: act.color }} />
                          </div>
                          <div>
                            <span className="text-xs font-medium group-hover:text-[#FF6D5A] transition-colors">
                              {act.title}
                            </span>
                          </div>
                        </div>

                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#FF6D5A] group-hover:translate-x-1 transition-all" />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-[10px] text-slate-400">
          <span>Navigate with mouse or keyboard</span>
          <span className="px-1.5 py-0.5 bg-slate-200 rounded text-slate-600 font-mono">ESC</span>
        </div>
      </motion.div>
    </div>
  );
}
