'use client';

import { useState, useEffect } from 'react';
import { Wifi, BatteryCharging, Search, Clock, RotateCcw } from 'lucide-react';

export default function TopBar({ activeWindow, onOpenCommandPalette, onReboot }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-9 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200/90 px-3 sm:px-4 flex items-center justify-between text-xs font-mono text-slate-700 select-none shadow-sm">
      
      {/* Left: System Badge & Active Window Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onReboot}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors group"
          title="Click to Restart Boot Sequence"
        >
          <span className="font-bold text-[#FF6D5A]">&lt;HA/&gt;</span>
          <span className="font-semibold text-slate-800 hidden sm:inline">Hassanain Abbas</span>
        </button>

        <span className="text-slate-300 hidden sm:inline">/</span>

        <span className="text-slate-700 text-[11px] font-semibold truncate max-w-[140px] sm:max-w-none">
          {activeWindow || 'agent_logs.exe'}
        </span>
      </div>

      {/* Center: Live Clock & Availability Status */}
      <div className="hidden md:flex items-center gap-3 text-[11px]">
        <div className="flex items-center gap-1.5 text-slate-600">
          <Clock className="w-3.5 h-3.5 text-[#FF6D5A]" />
          <span className="text-slate-900 font-bold">{currentTime || '12:00:00'}</span>
        </div>
        <span className="text-slate-300">•</span>
        <span className="text-slate-700">
          Lahore, PK / Global Remote — <span className="text-emerald-600 font-bold">Available for Work</span>
        </span>
      </div>

      {/* Right: Command Palette trigger & System Telemetry */}
      <div className="flex items-center gap-3 text-[11px]">
        
        {/* Command Palette Button */}
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
          title="Open Command Palette (Ctrl+K or Cmd+K)"
        >
          <Search className="w-3 h-3 text-[#FF6D5A]" />
          <span className="hidden sm:inline">Search</span>
          <kbd className="px-1 py-0.2 rounded bg-white text-[10px] text-slate-500 border border-slate-200 shadow-2xs">⌘K</kbd>
        </button>

        {/* WiFi */}
        <div className="hidden sm:flex items-center text-slate-600" title="Network: 10Gbps High Speed">
          <Wifi className="w-3.5 h-3.5" />
        </div>

        {/* Battery */}
        <div className="hidden sm:flex items-center gap-1 text-slate-600" title="Power: 100% Charged">
          <BatteryCharging className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-[10px]">100%</span>
        </div>

        {/* 100% Uptime Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-700 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>100% UPTIME</span>
        </div>

      </div>

    </header>
  );
}
