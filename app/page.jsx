'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootSequence from '@/components/nexus/BootSequence';
import DesktopBackground from '@/components/nexus/DesktopBackground';
import TopBar from '@/components/nexus/TopBar';
import DesktopIcons from '@/components/nexus/DesktopIcons';
import WindowManager from '@/components/nexus/WindowManager';
import Dock from '@/components/nexus/Dock';
import CommandPalette from '@/components/nexus/CommandPalette';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [topZIndex, setTopZIndex] = useState(20);

  const [windows, setWindows] = useState({
    agent_logs: {
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      zIndex: 15,
    },
    my_brain: {
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 5,
    },
    n8n_canvas: {
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 5,
    },
    contact_protocol: {
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 5,
    },
    system_specs: {
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 5,
    },
  });

  const [activeWindowId, setActiveWindowId] = useState('agent_logs');

  const focusWindow = (id) => {
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setActiveWindowId(id);

    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
        zIndex: nextZ,
      },
    }));
  };

  const openWindow = (id) => {
    focusWindow(id);
  };

  const closeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const minimizeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const toggleMaximizeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMaximized: !prev[id]?.isMaximized,
      },
    }));
    focusWindow(id);
  };

  const toggleWindow = (id) => {
    const win = windows[id];
    if (!win?.isOpen) {
      focusWindow(id);
    } else if (win?.isMinimized) {
      focusWindow(id);
    } else if (activeWindowId === id) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  };

  const handleReboot = () => {
    setIsBooting(true);
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#F8FAFC] text-slate-800 font-mono select-none">
      {/* High-Precision Glowing Cursor */}
      <CustomCursor />

      {/* Boot Sequence Modal */}
      <AnimatePresence>
        {isBooting && (
          <BootSequence onComplete={() => setIsBooting(false)} />
        )}
      </AnimatePresence>

      {/* Desktop Starfield & Grid Background */}
      <DesktopBackground />

      {/* Top Menu Bar */}
      <TopBar
        activeWindow={
          activeWindowId
            ? `${activeWindowId}${activeWindowId.includes('.exe') ? '' : '.exe'}`
            : 'Hassanain Abbas'
        }
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onReboot={handleReboot}
      />

      {/* Desktop Folder / File Shortcuts on Left */}
      <DesktopIcons
        windows={windows}
        onOpenWindow={openWindow}
      />

      {/* Draggable Desktop Windows */}
      <WindowManager
        windows={windows}
        activeWindowId={activeWindowId}
        onFocusWindow={focusWindow}
        onCloseWindow={closeWindow}
        onMinimizeWindow={minimizeWindow}
        onToggleMaximizeWindow={toggleMaximizeWindow}
        onOpenWindow={openWindow}
      />

      {/* Bottom Floating App Dock */}
      <Dock
        windows={windows}
        onToggleWindow={toggleWindow}
      />

      {/* Command Palette (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={setCommandPaletteOpen}
        onOpenWindow={openWindow}
        onReboot={handleReboot}
      />
    </main>
  );
}
