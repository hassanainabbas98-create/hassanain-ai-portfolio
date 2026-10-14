'use client';

import { useEffect, useRef } from 'react';

export default function FourthDimensionCanvas({ className = '', opacity = 0.85 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let isMobile = false;

    // Handle high DPI safely (cap at 1.5 to prevent GPU strain)
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width === 0 || height === 0) return;
      isMobile = width < 640;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // ─── 4D TESSERACT (HYPERCUBE) GEOMETRY ─────────────────────────────────────
    const vertices4D = [];
    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        for (let z = -1; z <= 1; z += 2) {
          for (let w = -1; w <= 1; w += 2) {
            vertices4D.push([x, y, z, w]);
          }
        }
      }
    }

    const edges = [];
    for (let i = 0; i < 16; i++) {
      for (let j = i + 1; j < 16; j++) {
        let diff = 0;
        for (let k = 0; k < 4; k++) {
          if (vertices4D[i][k] !== vertices4D[j][k]) diff++;
        }
        if (diff === 1) edges.push([i, j]);
      }
    }

    const nodeMeta = [
      { label: 'Webhook', color: '#FF6D5A' },
      { label: 'OpenAI 4o', color: '#0284C7' },
      { label: 'LangChain', color: '#8B5CF6' },
      { label: 'RAG Pinecone', color: '#10B981' },
      { label: 'Router', color: '#F59E0B' },
      { label: 'Playwright', color: '#FF6D5A' },
      { label: 'Qdrant Vector', color: '#8B5CF6' },
      { label: 'CRM Push', color: '#0284C7' },
      { label: 'Slack Alert', color: '#10B981' },
      { label: 'Cron Worker', color: '#F59E0B' },
      { label: 'FastAPI', color: '#FF6D5A' },
      { label: 'LangGraph', color: '#8B5CF6' },
      { label: 'HTTP Stream', color: '#0284C7' },
      { label: 'Guardrail', color: '#10B981' },
      { label: 'State Memory', color: '#F59E0B' },
      { label: 'Auto Deploy', color: '#FF6D5A' },
    ];

    // Data packets (reduced count for smooth 60fps)
    const packets = edges.slice(0, 16).map((edge, idx) => ({
      edgeIdx: idx,
      progress: (idx * 0.08) % 1,
      speed: 0.003 + (idx % 3) * 0.001,
      color: idx % 2 === 0 ? '#FF6D5A' : '#8B5CF6',
    }));

    // Cosmic stars (capped at 25 for zero CPU overhead)
    const stars = Array.from({ length: 25 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.2,
      speed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    let angleXW = 0;
    let angleYW = 0;
    let angleXZ = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    let lastMouseMove = 0;
    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastMouseMove < 30) return; // Throttle to 30ms
      lastMouseMove = now;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 1.5;
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    function rotateXW(p, theta) {
      const [x, y, z, w] = p;
      const cos = Math.cos(theta);
      const sin = Math.sin(theta);
      return [x * cos - w * sin, y, z, x * sin + w * cos];
    }

    function rotateYW(p, phi) {
      const [x, y, z, w] = p;
      const cos = Math.cos(phi);
      const sin = Math.sin(phi);
      return [x, y * cos - w * sin, z, y * sin + w * cos];
    }

    function rotateXZ(p, psi) {
      const [x, y, z, w] = p;
      const cos = Math.cos(psi);
      const sin = Math.sin(psi);
      return [x * cos - z * sin, y, x * sin + z * cos, w];
    }

    function project4Dto2D(point, cx, cy, scale) {
      const [x, y, z, w] = point;
      const wFactor = 1 / (2.4 - w);
      const x3 = x * wFactor;
      const y3 = y * wFactor;
      const z3 = z * wFactor;

      const zFactor = 1 / (2.8 - z3);
      return {
        x: cx + x3 * zFactor * scale,
        y: cy + y3 * zFactor * scale,
        depth: z3,
      };
    }

    let frame = 0;
    let lastTime = performance.now();

    const render = (currentTime) => {
      animationFrameId = requestAnimationFrame(render);

      // Skip frames if tab is hidden
      if (document.hidden) return;

      // Cap at ~60fps to prevent battery drain
      const elapsed = currentTime - lastTime;
      if (elapsed < 16) return;
      lastTime = currentTime - (elapsed % 16);

      ctx.clearRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      angleXW += 0.006 + mouseX * 0.002;
      angleYW += 0.005 + mouseY * 0.002;
      angleXZ += 0.003;
      frame++;

      const cx = width > 768 ? width * 0.72 : width * 0.5;
      const cy = height * 0.5;
      const scale = Math.min(width, height) * (isMobile ? 0.42 : 0.52);

      // 1. Stars (Simple solid fills, zero gradients)
      ctx.fillStyle = 'rgba(139, 92, 246, 0.4)';
      stars.forEach((star) => {
        const starX = star.x * width;
        const starY = star.y * height;
        ctx.beginPath();
        ctx.arc(starX, starY, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Project vertices
      const projected = vertices4D.map((v) => {
        let p = rotateXW(v, angleXW);
        p = rotateYW(p, angleYW);
        p = rotateXZ(p, angleXZ);
        return project4Dto2D(p, cx, cy, scale);
      });

      // 3. Draw Edges with efficient solid strokes
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(203, 213, 225, 0.4)';
      ctx.beginPath();
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
      });
      ctx.stroke();

      // Colored overlay on subset of edges for n8n look
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = 'rgba(255, 109, 90, 0.25)';
      ctx.beginPath();
      for (let k = 0; k < edges.length; k += 2) {
        const [i, j] = edges[k];
        ctx.moveTo(projected[i].x, projected[i].y);
        ctx.lineTo(projected[j].x, projected[j].y);
      }
      ctx.stroke();

      // 4. Data Packets (Simple circles)
      packets.forEach((packet) => {
        packet.progress = (packet.progress + packet.speed) % 1;
        const [i, j] = edges[packet.edgeIdx];
        const p1 = projected[i];
        const p2 = projected[j];

        const x = p1.x + (p2.x - p1.x) * packet.progress;
        const y = p1.y + (p2.y - p1.y) * packet.progress;

        ctx.fillStyle = packet.color;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // 5. Draw 16 Vertices (n8n Nodes)
      projected.forEach((p, idx) => {
        const meta = nodeMeta[idx];
        const nodeRadius = isMobile ? 6 : 8 + (p.depth + 1) * 2;

        // Node circle
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();

        // Node border
        ctx.strokeStyle = meta.color;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner dot
        ctx.fillStyle = meta.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeRadius * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Text labels only on non-mobile devices
        if (!isMobile && p.depth > 0.2 && width > 768) {
          ctx.font = '600 8.5px "Space Grotesk", sans-serif';
          ctx.fillStyle = '#475569';
          ctx.textAlign = 'center';
          ctx.fillText(meta.label, p.x, p.y + nodeRadius + 10);
        }
      });
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      style={{ opacity }}
    />
  );
}
