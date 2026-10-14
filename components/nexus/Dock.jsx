'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Cpu, Send, FileCode, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GuruIcon } from '../BrandIcons';

export default function Dock({ windows, onToggleWindow }) {
  const [hoveredApp, setHoveredApp] = useState(null);

  const apps = [
    {
      id: 'agent_logs',
      name: 'agent_logs.exe',
      tooltip: 'Core Directive (Hero)',
      icon: Terminal,
      color: '#FF6D5A',
      isApp: true,
    },
    {
      id: 'my_brain',
      name: 'my_brain.db',
      tooltip: 'Installed Skills DB',
      icon: Database,
      color: '#8B5CF6',
      isApp: true,
    },
    {
      id: 'n8n_canvas',
      name: 'n8n_canvas.app',
      tooltip: 'n8n Workflow & Projects',
      icon: Cpu,
      color: '#0284C7',
      isApp: true,
    },
    {
      id: 'contact_protocol',
      name: 'contact_protocol.sh',
      tooltip: 'Transmission Port (Contact)',
      icon: Send,
      color: '#10B981',
      isApp: true,
    },
    {
      id: 'system_specs',
      name: 'system_specs.json',
      tooltip: 'Credentials & PUCIT Specs',
      icon: FileCode,
      color: '#F59E0B',
      isApp: true,
    },
    {
      id: 'divider',
      isDivider: true,
    },
    {
      id: 'github',
      name: 'GitHub',
      tooltip: 'Work-Portfolio Repos',
      icon: GithubIcon,
      href: 'https://github.com/HassanainAbbas/Work-portfolio',
      color: '#1E293B',
      isExternal: true,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      tooltip: 'Professional Profile',
      icon: LinkedinIcon,
      href: 'https://linkedin.com/in/hassanain-abbas-b1a889261',
      color: '#0A66C2',
      isExternal: true,
    },
    {
      id: 'guru',
      name: 'Guru',
      tooltip: 'Freelance Verified',
      icon: GuruIcon,
      href: 'https://www.guru.com',
      color: '#7A5CFA',
      isExternal: true,
    },
    {
      id: 'email',
      name: 'Mail Client',
      tooltip: 'hsnabbas40@gmail.com',
      icon: Mail,
      href: 'mailto:hsnabbas40@gmail.com',
      color: '#059669',
      isExternal: true,
    },
  ];

  return (
    <div className="fixed bottom-2 sm:bottom-3 left-0 right-0 z-40 flex justify-center pointer-events-none px-2 sm:px-4">
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-2.5 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_15px_40px_rgba(15,23,42,0.12)] max-w-[98vw] overflow-x-auto">
        {apps.map((item, idx) => {
          if (item.isDivider) {
            return (
              <div
                key={`divider-${idx}`}
                className="w-[1px] h-6 sm:h-8 bg-slate-200 mx-0.5 sm:mx-1 hidden sm:block shrink-0"
              />
            );
          }

          const Icon = item.icon;
          const isWindowOpen = windows[item.id]?.isOpen;
          const isWindowMinimized = windows[item.id]?.isMinimized;

          return (
            <div
              key={item.id}
              className="relative flex flex-col items-center shrink-0"
              onMouseEnter={() => setHoveredApp(item.id)}
              onMouseLeave={() => setHoveredApp(null)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {hoveredApp === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    className="absolute -top-10 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-sans font-medium shadow-xl z-50 pointer-events-none whitespace-nowrap hidden sm:block"
                  >
                    {item.tooltip}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* App Icon Button / Link */}
              {item.isExternal ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/80 transition-all hover:scale-110 active:scale-95 shadow-sm shrink-0"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: item.color }} />
                </a>
              ) : (
                <button
                  onClick={() => onToggleWindow(item.id)}
                  className={`w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 shrink-0 ${
                    isWindowOpen && !isWindowMinimized
                      ? 'bg-slate-100 border-2 border-[#FF6D5A] shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 border border-slate-200/80 shadow-sm'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: item.color }} />
                </button>
              )}

              {/* Dot indicator under open window */}
              {item.isApp && (
                <div className="h-1 mt-1 flex items-center justify-center">
                  {isWindowOpen && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isWindowMinimized ? 'bg-slate-400' : 'bg-[#FF6D5A]'
                      }`}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
