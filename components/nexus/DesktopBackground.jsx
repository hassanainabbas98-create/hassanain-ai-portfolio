'use client';

import { motion, useAnimationFrame } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import FourthDimensionCanvas from './FourthDimensionCanvas';

/* ─── Automation Workflow Nodes ─────────────────────────────────────────── */
const NODES = [
  { id: 'trigger',   x: 120,  y: 300, label: 'Webhook Trigger',   icon: '⚡', color: '#FF6D5A', border: '#FF6D5A' },
  { id: 'filter',    x: 320,  y: 200, label: 'Filter / Router',   icon: '🔀', color: '#8B5CF6', border: '#8B5CF6' },
  { id: 'openai',    x: 320,  y: 400, label: 'OpenAI GPT-4o',     icon: '🤖', color: '#0284C7', border: '#0284C7' },
  { id: 'langchain', x: 530,  y: 150, label: 'LangChain Agent',   icon: '🔗', color: '#10B981', border: '#10B981' },
  { id: 'rag',       x: 530,  y: 320, label: 'RAG Retrieval',     icon: '📚', color: '#F59E0B', border: '#F59E0B' },
  { id: 'scraper',   x: 530,  y: 470, label: 'Web Scraper',       icon: '🕸️', color: '#EF4444', border: '#EF4444' },
  { id: 'pinecone',  x: 750,  y: 200, label: 'Pinecone DB',       icon: '📌', color: '#0284C7', border: '#0284C7' },
  { id: 'crm',       x: 750,  y: 370, label: 'CRM Update',        icon: '💼', color: '#8B5CF6', border: '#8B5CF6' },
  { id: 'notify',    x: 970,  y: 270, label: 'Slack Notify',      icon: '🔔', color: '#10B981', border: '#10B981' },
  { id: 'done',      x: 1160, y: 270, label: 'DONE  ✅',           icon: '✅', color: '#FF6D5A', border: '#FF6D5A' },
];

const EDGES = [
  { from: 'trigger',   to: 'filter',    },
  { from: 'filter',    to: 'langchain', },
  { from: 'filter',    to: 'openai',    },
  { from: 'openai',    to: 'rag',       },
  { from: 'openai',    to: 'scraper',   },
  { from: 'langchain', to: 'pinecone',  },
  { from: 'rag',       to: 'crm',       },
  { from: 'scraper',   to: 'crm',       },
  { from: 'pinecone',  to: 'notify',    },
  { from: 'crm',       to: 'notify',    },
  { from: 'notify',    to: 'done',      },
];

/* ─── Bezier path helper ─────────────────────────────────────────────────── */
function bezier(from, to) {
  const mx = (from.x + to.x) / 2;
  return `M ${from.x + 54} ${from.y + 22} C ${mx} ${from.y + 22}, ${mx} ${to.y + 22}, ${to.x} ${to.y + 22}`;
}

/* ─── Animated packet that travels along a path ─────────────────────────── */
function Packet({ pathId, color, delay = 0 }) {
  return (
    <circle r="5" fill={color} opacity="0.9">
      <animateMotion
        dur="2.6s"
        repeatCount="indefinite"
        begin={`${delay}s`}
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" dur="2.6s" repeatCount="indefinite" begin={`${delay}s`} />
    </circle>
  );
}

/* ─── Airplane SVG ───────────────────────────────────────────────────────── */
function Airplane({ size = 52, color = '#FF6D5A', shadow = '#E25542' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className="drop-shadow-lg">
      <polygon points="8,52 56,26 36,56" fill={color} />
      <polygon points="8,52 56,26 26,42" fill={shadow} opacity="0.85" />
      <polygon points="26,42 56,26 36,56" fill={color} opacity="0.6" />
      <polygon points="26,42 56,26 18,50" fill="white" opacity="0.18" />
    </svg>
  );
}

/* ─── Node card ──────────────────────────────────────────────────────────── */
function WorkflowNode({ node }) {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, Math.random() * 3000 + 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.05 * NODES.indexOf(node), duration: 0.5, ease: 'backOut' }}
    >
      {/* Glow ring on pulse */}
      {pulse && (
        <circle
          cx={node.x + 54}
          cy={node.y + 22}
          r="34"
          fill={node.color}
          opacity="0.12"
        />
      )}

      {/* Card background */}
      <rect
        x={node.x}
        y={node.y}
        width="108"
        height="44"
        rx="10"
        fill="white"
        stroke={node.border}
        strokeWidth="1.8"
        strokeOpacity={pulse ? 1 : 0.5}
        filter="url(#nodeBlur)"
      />

      {/* Icon circle */}
      <circle cx={node.x + 22} cy={node.y + 22} r="14" fill={node.color} fillOpacity="0.12" />
      <text x={node.x + 22} y={node.y + 27} textAnchor="middle" fontSize="13">{node.icon}</text>

      {/* Label */}
      <text
        x={node.x + 62}
        y={node.y + 19}
        fontSize="9.5"
        fontFamily="'Space Grotesk', system-ui"
        fontWeight="700"
        fill="#1E293B"
        textAnchor="middle"
      >
        {node.label.split(' ')[0]}
      </text>
      <text
        x={node.x + 62}
        y={node.y + 31}
        fontSize="8.5"
        fontFamily="system-ui"
        fill="#64748B"
        textAnchor="middle"
      >
        {node.label.split(' ').slice(1).join(' ')}
      </text>

      {/* Status dot */}
      <circle cx={node.x + 100} cy={node.y + 10} r="4" fill="#10B981" opacity={pulse ? 1 : 0.6}>
        {pulse && (
          <animate attributeName="r" values="4;7;4" dur="0.6s" />
        )}
      </circle>
    </motion.g>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function DesktopBackground() {
  const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));
  const [avatarSrc, setAvatarSrc] = useState('/assets/images/profile.jpg');

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F0F4FF 0%, #FAF5FF 35%, #FFF7F5 65%, #F0FFF4 100%)' }}
    >
      {/* ── Subtle dot grid ── */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(circle, #CBD5E1 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── 4th Dimension Cosmic n8n Hyperspace Canvas ── */}
      <FourthDimensionCanvas opacity={0.4} />

      {/* ── Large ambient glows ── */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#FF6D5A]/12 via-[#8B5CF6]/8 to-transparent blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-[#0284C7]/12 via-[#10B981]/6 to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-r from-[#8B5CF6]/5 to-[#FF6D5A]/5 blur-3xl" />

      {/* ══════════════════════════════════════════════════════════
          WORKFLOW CANVAS SVG
      ══════════════════════════════════════════════════════════ */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 700"
        preserveAspectRatio="xMidYMid meet"
        style={{ opacity: 0.88 }}
      >
        <defs>
          {/* Soft card shadow */}
          <filter id="nodeBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#94A3B8" floodOpacity="0.2" />
          </filter>

          {/* Arrow marker */}
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#CBD5E1" />
          </marker>

          {/* Edge paths (referenced by animateMotion) */}
          {EDGES.map((e, i) => {
            const from = nodeMap[e.from];
            const to   = nodeMap[e.to];
            return (
              <path
                key={i}
                id={`edge-${i}`}
                d={bezier(from, to)}
                fill="none"
              />
            );
          })}
        </defs>

        {/* ── Edge lines ── */}
        {EDGES.map((e, i) => {
          const from = nodeMap[e.from];
          const to   = nodeMap[e.to];
          return (
            <g key={i}>
              {/* Solid faint track */}
              <use
                href={`#edge-${i}`}
                stroke="#E2E8F0"
                strokeWidth="2"
                fill="none"
              />
              {/* Animated dashed overlay */}
              <use
                href={`#edge-${i}`}
                stroke={from.color}
                strokeOpacity="0.3"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="24;0"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </use>
              {/* Arrowhead */}
              <use
                href={`#edge-${i}`}
                stroke="#CBD5E1"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
            </g>
          );
        })}

        {/* ── Traveling data packets ── */}
        {EDGES.map((e, i) => (
          <Packet
            key={i}
            pathId={`edge-${i}`}
            color={nodeMap[e.from].color}
            delay={i * 0.28}
          />
        ))}

        {/* ── Workflow nodes ── */}
        {NODES.map((node) => (
          <WorkflowNode key={node.id} node={node} />
        ))}

        {/* ── Section label ── */}
        <text x="120" y="255" fontSize="11" fontFamily="'Space Grotesk', monospace" fill="#94A3B8" fontWeight="600" letterSpacing="2">
          n8n AUTOMATION PIPELINE · LIVE EXECUTION
        </text>

        {/* ── Tiny status bar ── */}
        <rect x="120" y="560" width="300" height="26" rx="6" fill="white" stroke="#E2E8F0" strokeWidth="1.2" opacity="0.8" />
        <circle cx="136" cy="573" r="5" fill="#10B981">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <text x="147" y="577" fontSize="9" fontFamily="monospace" fill="#64748B">
          WORKFLOW RUNNING · 11 NODES · 0 ERRORS
        </text>
      </svg>

      {/* ══════════════════════════════════════════════════════════
          PAPER AIRPLANES
      ══════════════════════════════════════════════════════════ */}

      {/* Primary coral airplane — top path */}
      <motion.div
        className="absolute z-10"
        style={{ top: 0, left: 0 }}
        animate={{
          x: ['-8vw', '108vw'],
          y: [80, 140, 60, 120, 80],
          rotate: [8, -6, 12, -4, 8],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="relative">
          <Airplane size={56} color="#FF6D5A" shadow="#E25542" />
          {/* Wind trail puffs */}
          {[0, 1, 2].map((j) => (
            <motion.div
              key={j}
              className="absolute rounded-full"
              style={{
                width: 8 - j * 2,
                height: 8 - j * 2,
                background: '#FF6D5A',
                top: 22 + j * 2,
                left: -14 - j * 10,
              }}
              animate={{ opacity: [0.5, 0], scaleX: [1, 2], x: [0, -12] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: j * 0.15 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Violet airplane — bottom path (flies right-to-left) */}
      <motion.div
        className="absolute z-10 opacity-80"
        style={{ top: 0, left: 0 }}
        animate={{
          x: ['108vw', '-8vw'],
          y: [480, 540, 460, 520, 480],
          rotate: [-172, -188, -165, -180, -172],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear', delay: 5 }}
      >
        <Airplane size={44} color="#8B5CF6" shadow="#7C3AED" />
      </motion.div>

      {/* Sky-blue tiny airplane — mid path */}
      <motion.div
        className="absolute z-10 opacity-65"
        style={{ top: 0, left: 0 }}
        animate={{
          x: ['-8vw', '108vw'],
          y: [340, 380, 310, 360, 340],
          rotate: [4, -8, 14, -2, 4],
        }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear', delay: 12 }}
      >
        <Airplane size={36} color="#0284C7" shadow="#0369A1" />
      </motion.div>

      {/* ══════════════════════════════════════════════════════════
          FLOATING CLOUDS
      ══════════════════════════════════════════════════════════ */}
      {[
        { top: '8%',  left: '60%', w: 180, delay: 0,  dur: 18 },
        { top: '55%', left: '80%', w: 140, delay: 3,  dur: 22 },
        { top: '70%', left: '5%',  w: 160, delay: 8,  dur: 20 },
      ].map((c, i) => (
        <motion.div
          key={i}
          className="absolute opacity-30"
          style={{ top: c.top, left: c.left }}
          animate={{ x: [-15, 15, -15], y: [0, -8, 0] }}
          transition={{ duration: c.dur, repeat: Infinity, ease: 'easeInOut', delay: c.delay }}
        >
          <svg width={c.w} height={c.w * 0.5} viewBox="0 0 180 90" fill="none">
            <ellipse cx="90" cy="60" rx="70" ry="28" fill="#CBD5E1" />
            <ellipse cx="70" cy="52" rx="40" ry="32" fill="#E2E8F0" />
            <ellipse cx="110" cy="50" rx="35" ry="28" fill="#E2E8F0" />
            <ellipse cx="90" cy="45" rx="28" ry="22" fill="white" />
          </svg>
        </motion.div>
      ))}

      {/* ══════════════════════════════════════════════════════════
          PROFILE CARD (right side, pinned)
      ══════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: 'backOut' }}
        className="absolute bottom-24 right-6 z-10 pointer-events-none"
        style={{ width: 210 }}
      >
        <div
          className="rounded-2xl border border-slate-200 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 40px rgba(139,92,246,0.12), 0 2px 12px rgba(0,0,0,0.07)',
          }}
        >
          {/* Top gradient banner */}
          <div
            className="h-14 relative"
            style={{ background: 'linear-gradient(135deg, #FF6D5A 0%, #8B5CF6 100%)' }}
          >
            {/* Floating nodes decoration */}
            {[
              { cx: 20,  cy: 8,  r: 4,  op: 0.4 },
              { cx: 170, cy: 10, r: 3,  op: 0.3 },
              { cx: 100, cy: 4,  r: 5,  op: 0.25 },
            ].map((dot, i) => (
              <svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 210 56">
                <circle cx={dot.cx} cy={dot.cy} r={dot.r} fill="white" opacity={dot.op} />
              </svg>
            ))}

            {/* Avatar */}
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2">
              <div
                className="w-[72px] h-[72px] rounded-2xl overflow-hidden border-[3px] border-white"
                style={{ boxShadow: '0 4px 16px rgba(139,92,246,0.3)' }}
              >
                <img
                  src={avatarSrc}
                  alt="Hassanain Abbas"
                  onError={() => {
                    if (avatarSrc === '/assets/images/profile.jpg') setAvatarSrc('/assets/images/profile.png');
                    else if (avatarSrc === '/assets/images/profile.png') setAvatarSrc('/assets/images/avatar.svg');
                  }}
                  className="w-full h-full object-cover bg-gradient-to-br from-orange-50 to-violet-100"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="pt-12 px-4 pb-4 text-center">
            <h3
              className="text-sm font-extrabold text-slate-800 tracking-tight leading-tight"
              style={{ fontFamily: "'Space Grotesk', system-ui" }}
            >
              Hassanain Abbas
            </h3>
            <p className="text-[10px] font-semibold mt-0.5" style={{ color: '#FF6D5A' }}>
              AI Agent & Automation Architect
            </p>
            <p className="text-[9px] text-slate-400 mt-0.5">📍 Lahore, Pakistan · Remote</p>

            {/* Status pill */}
            <div className="mt-2 flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 mx-auto w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold text-emerald-700">AVAILABLE FOR HIRE</span>
            </div>

            {/* Skill chips */}
            <div className="mt-3 flex flex-wrap gap-1 justify-center">
              {['n8n', 'LangChain', 'OpenAI', 'RAG'].map((s) => (
                <span
                  key={s}
                  className="text-[8px] px-1.5 py-0.5 rounded-full border text-slate-600 font-mono"
                  style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating animated badge */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-2 flex justify-center"
        >
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold text-white"
            style={{ background: 'linear-gradient(90deg, #FF6D5A, #8B5CF6)', boxShadow: '0 4px 14px rgba(139,92,246,0.3)' }}
          >
            <span>⚡</span>
            <span>HASSANAIN ABBAS · LIVE</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Watermark ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none opacity-[0.025] pointer-events-none">
        <div className="text-6xl sm:text-8xl md:text-[9rem] font-extrabold text-slate-900 tracking-widest text-center px-4"
          style={{ fontFamily: "'Space Grotesk', system-ui" }}>
          HASSANAIN
        </div>
        <div className="font-mono text-xs tracking-widest text-[#FF6D5A] mt-2 uppercase">
          AI AGENT &amp; AUTOMATION ARCHITECT · HASSANAIN ABBAS
        </div>
      </div>
    </div>
  );
}
