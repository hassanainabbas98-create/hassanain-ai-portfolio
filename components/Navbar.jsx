'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Terminal, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Featured Agents', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Deploy', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070A]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#10131A] to-[#161B26] border border-[#00D1FF]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,209,255,0.25)] group-hover:border-[#00D1FF] transition-all">
            <Bot className="w-5 h-5 text-[#00D1FF] group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00D1FF] animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00D1FF]" />
          </div>

          <div className="flex flex-col">
            <span className="font-space font-bold text-lg text-white tracking-tight flex items-center gap-2 group-hover:text-[#00D1FF] transition-colors">
              Hassanain Abbas
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#10131A] text-[#00D1FF] border border-[#00D1FF]/30">
                AI.OS
              </span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                System Online // Agent Ready
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-[#00D1FF] transition-colors relative py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00D1FF] to-[#7A5CFA] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#10131A] border border-white/5 font-mono text-[11px] text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-[#00D1FF]" />
            <span>LATENCY: 12ms</span>
          </div>

          <a
            href="#contact"
            className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#00D1FF] via-[#7A5CFA] to-[#00D1FF] rounded-xl opacity-80 group-hover:opacity-100 blur-[2px] transition-all" />
            <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#05070A] text-white text-xs font-mono font-bold uppercase tracking-wider group-hover:bg-[#05070A]/80 transition-colors">
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00D1FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-[#10131A] text-slate-300 hover:text-white border border-white/10"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0D14]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-mono text-slate-300 hover:text-[#00D1FF] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#00D1FF] to-[#7A5CFA] text-[#05070A] font-bold text-xs uppercase tracking-wider font-mono shadow-[0_0_20px_rgba(0,209,255,0.4)]"
              >
                <span>Deploy AI Agent</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
