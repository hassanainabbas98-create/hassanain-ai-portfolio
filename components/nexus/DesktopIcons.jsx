'use client';

import { Terminal, Database, Cpu, Send, FileCode } from 'lucide-react';

export default function DesktopIcons({ windows, onOpenWindow }) {
  const icons = [
    {
      id: 'agent_logs',
      name: 'agent_logs.exe',
      label: 'Core_Directive',
      icon: Terminal,
      color: '#FF6D5A',
      bg: 'from-orange-50 to-red-50',
    },
    {
      id: 'my_brain',
      name: 'my_brain.db',
      label: 'Installed_Modules',
      icon: Database,
      color: '#8B5CF6',
      bg: 'from-violet-50 to-purple-50',
    },
    {
      id: 'n8n_canvas',
      name: 'n8n_canvas.app',
      label: 'Pipeline_Executions',
      icon: Cpu,
      color: '#FF6D5A',
      bg: 'from-orange-50 to-amber-50',
    },
    {
      id: 'contact_protocol',
      name: 'contact_protocol.sh',
      label: 'Transmission_Port',
      icon: Send,
      color: '#8B5CF6',
      bg: 'from-violet-50 to-indigo-50',
    },
    {
      id: 'system_specs',
      name: 'system_specs.json',
      label: 'Credentials_&_PUCIT',
      icon: FileCode,
      color: '#10B981',
      bg: 'from-emerald-50 to-teal-50',
    },
  ];

  return (
    <div className="fixed top-14 left-4 sm:left-6 z-20 flex flex-col gap-4 select-none pointer-events-auto">
      {icons.map((item) => {
        const Icon = item.icon;
        const isOpen = windows[item.id]?.isOpen && !windows[item.id]?.isMinimized;

        return (
          <button
            key={item.id}
            onClick={() => onOpenWindow(item.id)}
            className="flex flex-col items-center gap-1.5 p-1.5 rounded-xl group hover:bg-white/80 focus:bg-white/90 transition-all text-center w-[72px] focus:outline-none"
          >
            {/* Desktop Icon Box */}
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.bg} border transition-all duration-300 shadow-sm ${
                isOpen
                  ? 'border-[#FF6D5A]/60 shadow-[0_4px_16px_rgba(255,109,90,0.25)]'
                  : 'border-slate-200 group-hover:border-slate-300 group-hover:scale-105 group-hover:shadow-md'
              }`}
            >
              <Icon className="w-5 h-5 transition-transform group-hover:scale-110" style={{ color: item.color }} />
            </div>

            {/* Label */}
            <div className="flex flex-col items-center">
              <span className="font-mono text-[10px] font-semibold text-slate-700 group-hover:text-[#FF6D5A] leading-tight px-1 py-0.5 rounded bg-white/80 backdrop-blur-sm truncate max-w-[68px] shadow-sm border border-slate-100">
                {item.name}
              </span>
              <span className="text-[9px] font-mono text-slate-400 hidden sm:inline mt-0.5">
                {item.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
