'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Cpu, Send, FileCode, Minus, X, Maximize2, Minimize2 } from 'lucide-react';
import AgentLogsWindow from './AgentLogsWindow';
import MyBrainWindow from './MyBrainWindow';
import N8nCanvasWindow from './N8nCanvasWindow';
import ContactProtocolWindow from './ContactProtocolWindow';
import SystemSpecsWindow from './SystemSpecsWindow';

export default function WindowManager({
  windows,
  activeWindowId,
  onFocusWindow,
  onCloseWindow,
  onMinimizeWindow,
  onToggleMaximizeWindow,
  onOpenWindow,
}) {
  const windowConfigs = {
    agent_logs: {
      id: 'agent_logs',
      title: 'agent_logs.exe — Core Directive',
      icon: Terminal,
      color: '#FF6D5A',
      component: <AgentLogsWindow onOpenContact={() => onOpenWindow('contact_protocol')} />,
      defaultWidth: 'max-w-4xl',
      defaultHeight: 'h-[560px]',
    },
    my_brain: {
      id: 'my_brain',
      title: 'my_brain.db — Installed Skills & Architecture',
      icon: Database,
      color: '#8B5CF6',
      component: <MyBrainWindow />,
      defaultWidth: 'max-w-4xl',
      defaultHeight: 'h-[580px]',
    },
    n8n_canvas: {
      id: 'n8n_canvas',
      title: 'n8n_canvas.app — Workflow Engine & Executions',
      icon: Cpu,
      color: '#FF6D5A',
      component: <N8nCanvasWindow />,
      defaultWidth: 'max-w-5xl',
      defaultHeight: 'h-[620px]',
    },
    contact_protocol: {
      id: 'contact_protocol',
      title: 'contact_protocol.sh — Transmission Port',
      icon: Send,
      color: '#8B5CF6',
      component: <ContactProtocolWindow />,
      defaultWidth: 'max-w-4xl',
      defaultHeight: 'h-[580px]',
    },
    system_specs: {
      id: 'system_specs',
      title: 'system_specs.json — Credentials & PUCIT Manifest',
      icon: FileCode,
      color: '#10B981',
      component: <SystemSpecsWindow />,
      defaultWidth: 'max-w-3xl',
      defaultHeight: 'h-[540px]',
    },
  };

  // Keyboard shortcut: Escape key closes active window
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeWindowId && windows[activeWindowId]?.isOpen) {
        onCloseWindow(activeWindowId);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeWindowId, windows, onCloseWindow]);

  return (
    <div className="fixed inset-0 top-9 bottom-16 pointer-events-none z-30 p-2 sm:p-4 overflow-hidden">
      {Object.keys(windows).map((winId) => {
        const winState = windows[winId];
        const config = windowConfigs[winId];
        if (!winState?.isOpen || winState?.isMinimized || !config) return null;

        const isActive = activeWindowId === winId;
        const Icon = config.icon;

        return (
          <div
            key={winId}
            style={{ zIndex: winState.zIndex }}
            onMouseDown={() => onFocusWindow(winId)}
            className={`fixed pointer-events-auto transition-all duration-200 ${
              winState.isMaximized
                ? 'inset-2 sm:inset-4 top-10 sm:top-11 bottom-16 sm:bottom-20 max-w-none w-auto h-auto'
                : `inset-2 sm:inset-auto top-10 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 bottom-16 sm:bottom-auto w-auto sm:w-full ${config.defaultWidth} h-auto sm:${config.defaultHeight} sm:max-h-[84vh]`
            }`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              drag={!winState.isMaximized && typeof window !== 'undefined' && window.innerWidth >= 640}
              dragMomentum={false}
              dragElastic={0}
              className={`w-full h-full flex flex-col rounded-2xl bg-white/95 backdrop-blur-2xl border transition-shadow duration-300 overflow-hidden shadow-2xl ${
                isActive
                  ? 'border-[#FF6D5A]/60 shadow-[0_12px_45px_rgba(255,109,90,0.2),0_25px_60px_rgba(0,0,0,0.14)]'
                  : 'border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
              }`}
            >
              {/* Window Titlebar (Drag Handle) */}
              <div
                className="h-11 px-3 sm:px-4 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between select-none cursor-move shrink-0"
              >
                {/* Left: MacOS-style Traffic Dots */}
                <div className="flex items-center gap-2">
                  {/* Red: Close */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCloseWindow(winId);
                    }}
                    className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] hover:bg-[#FF3B30] flex items-center justify-center transition-all shadow-xs group"
                    title="Close Window (Esc)"
                  >
                    <X className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                  </button>

                  {/* Yellow: Minimize */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onMinimizeWindow(winId);
                    }}
                    className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] hover:bg-[#E5A820] flex items-center justify-center transition-all shadow-xs group"
                    title="Minimize to Dock"
                  >
                    <Minus className="w-2.5 h-2.5 text-amber-950 stroke-[2.5]" />
                  </button>

                  {/* Green: Maximize */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleMaximizeWindow(winId);
                    }}
                    className="w-3.5 h-3.5 rounded-full bg-[#27C93F] hover:bg-[#1EAE32] flex items-center justify-center transition-all shadow-xs group"
                    title={winState.isMaximized ? 'Restore Window' : 'Maximize Window'}
                  >
                    {winState.isMaximized ? (
                      <Minimize2 className="w-2.5 h-2.5 text-emerald-950 stroke-[2.5]" />
                    ) : (
                      <Maximize2 className="w-2.5 h-2.5 text-emerald-950 stroke-[2.5]" />
                    )}
                  </button>
                </div>

                {/* Center: Title and Icon */}
                <div className="flex items-center gap-2 font-mono text-xs text-slate-700 font-semibold truncate px-2 mx-auto">
                  <Icon className="w-4 h-4 shrink-0" style={{ color: config.color }} />
                  <span className="truncate">{config.title}</span>
                </div>

                {/* Right: Dedicated Windows Controls Bar with PROMINENT CLOSE BUTTON */}
                <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                  {/* Minimize button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onMinimizeWindow(winId);
                    }}
                    className="p-1 sm:p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/80 transition-colors"
                    title="Minimize to Dock"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>

                  {/* Maximize / Restore button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleMaximizeWindow(winId);
                    }}
                    className="p-1 sm:p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/80 transition-colors"
                    title={winState.isMaximized ? 'Restore Window' : 'Maximize Window'}
                  >
                    {winState.isMaximized ? (
                      <Minimize2 className="w-3.5 h-3.5" />
                    ) : (
                      <Maximize2 className="w-3.5 h-3.5" />
                    )}
                  </button>

                  {/* Prominent Red Close Button with Clear Icon and Label */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCloseWindow(winId);
                    }}
                    className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200 hover:border-red-600 font-sans text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95 group ml-1"
                    title="Close Window (Esc)"
                  >
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span className="hidden sm:inline text-[11px] font-semibold">Close</span>
                  </button>
                </div>
              </div>

              {/* Window Body Component */}
              <div className="flex-1 overflow-hidden relative">
                {config.component}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
