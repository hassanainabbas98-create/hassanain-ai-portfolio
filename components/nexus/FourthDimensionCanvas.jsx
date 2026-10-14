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

    // Handle high DPI
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // ─── 4D TESSERACT (HYPERCUBE) GEOMETRY ─────────────────────────────────────
    // 16 vertices of a 4D hypercube in [-1, 1]^4
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

    // 32 edges of 4D hypercube (connect vertices that differ in exactly 1 coordinate)
    const edges = [];
    for (let i = 0; i < 16; i++) {
      for (let j = i + 1; j < 16; j++) {
        let diff = 0;
        for (let k = 0; k < 4; k++) {
          if (vertices4D[i][k] !== vertices4D[j][k]) diff++;
        }
        if (diff === 1) {
          edges.push([i, j]);
        }
      }
    }

    // Node metadata for the 16 vertices (n8n-themed nodes)
    const nodeMeta = [
      { label: 'Webhook', icon: '⚡', color: '#FF6D5A' },
      { label: 'OpenAI 4o', icon: '🤖', color: '#0284C7' },
      { label: 'LangChain', icon: '🔗', color: '#8B5CF6' },
      { label: 'RAG Pinecone', icon: '📚', color: '#10B981' },
      { label: 'Router', icon: '🔀', color: '#F59E0B' },
      { label: 'Playwright', icon: '🕸️', color: '#FF6D5A' },
      { label: 'Qdrant Vector', icon: '📌', color: '#8B5CF6' },
      { label: 'CRM Push', icon: '💼', color: '#0284C7' },
      { label: 'Slack Alert', icon: '🔔', color: '#10B981' },
      { label: 'Cron Worker', icon: '⏱️', color: '#F59E0B' },
      { label: 'FastAPI', icon: '⚡', color: '#FF6D5A' },
      { label: 'LangGraph', icon: '🧠', color: '#8B5CF6' },
      { label: 'HTTP Stream', icon: '📡', color: '#0284C7' },
      { label: 'Guardrail', icon: '🛡️', color: '#10B981' },
      { label: 'State Memory', icon: '💾', color: '#F59E0B' },
      { label: 'Auto Deploy', icon: '🚀', color: '#FF6D5A' },
    ];

    // Data packets traveling through 4D edges
    const packets = edges.map((edge, idx) => ({
      edgeIdx: idx,
      progress: (idx * 0.13) % 1,
      speed: 0.004 + (idx % 5) * 0.0015,
      color: idx % 2 === 0 ? '#FF6D5A' : '#8B5CF6',
    }));

    // Cosmic stars in 4D space
    const stars = Array.from({ length: 45 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.8 + 0.6,
      opacity: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.03 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    // Hyperspace coordinate angles
    let angleXW = 0;
    let angleYW = 0;
    let angleXZ = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetMouseX = nx;
      targetMouseY = ny;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // ─── 4D ROTATION FUNCTIONS ────────────────────────────────────────────────
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

    // 4D -> 3D -> 2D Projection
    function project4Dto2D(point, cx, cy, scale) {
      const [x, y, z, w] = point;
      // 4D to 3D perspective projection
      const distance4D = 2.4;
      const wFactor = 1 / (distance4D - w);
      const x3 = x * wFactor;
      const y3 = y * wFactor;
      const z3 = z * wFactor;

      // 3D to 2D perspective projection
      const distance3D = 2.8;
      const zFactor = 1 / (distance3D - z3);
      const x2 = cx + x3 * zFactor * scale;
      const y2 = cy + y3 * zFactor * scale;

      return { x: x2, y: y2, depth: z3, wDepth: w };
    }

    // ─── RENDER LOOP ──────────────────────────────────────────────────────────
    let frame = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Increment 4D rotation angles
      angleXW += 0.008 + mouseX * 0.003;
      angleYW += 0.006 + mouseY * 0.003;
      angleXZ += 0.004;
      frame++;

      const cx = width > 768 ? width * 0.72 : width * 0.5;
      const cy = height * 0.5;
      const scale = Math.min(width, height) * 0.55;

      // 1. Cosmic Stars & Space Dust
      stars.forEach((star) => {
        const starX = star.x * width;
        const starY = star.y * height;
        const currentOpacity =
          star.opacity * (0.6 + 0.4 * Math.sin(frame * star.twinkleSpeed + star.twinklePhase));

        ctx.fillStyle = `rgba(139, 92, 246, ${currentOpacity * 0.4})`;
        ctx.beginPath();
        ctx.arc(starX, starY, star.size + 1.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 109, 90, ${currentOpacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(starX, starY, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Cosmic 4D Dimensional Rings (Hyperspace Axis Orbits)
      ctx.save();
      ctx.translate(cx, cy);

      // Outer dimensional ring
      ctx.strokeStyle = 'rgba(255, 109, 90, 0.12)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.ellipse(0, 0, scale * 0.75, scale * 0.28, angleXW * 0.5, 0, Math.PI * 2);
      ctx.stroke();

      // Middle violet ring
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 12]);
      ctx.beginPath();
      ctx.ellipse(0, 0, scale * 0.62, scale * 0.22, -angleYW * 0.7, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
      ctx.setLineDash([]);

      // 3. Project all 16 vertices from 4D to 2D
      const projected = vertices4D.map((v) => {
        let p = rotateXW(v, angleXW);
        p = rotateYW(p, angleYW);
        p = rotateXZ(p, angleXZ);
        return project4Dto2D(p, cx, cy, scale);
      });

      // 4. Draw 4D Hypercube Edges (n8n Workflow Conduits)
      edges.forEach(([i, j], edgeIdx) => {
        const p1 = projected[i];
        const p2 = projected[j];

        // Gradient edge between the two nodes
        const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        const color1 = nodeMeta[i].color;
        const color2 = nodeMeta[j].color;
        grad.addColorStop(0, `${color1}33`);
        grad.addColorStop(0.5, `${color2}55`);
        grad.addColorStop(1, `${color1}33`);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Subtle glow pass
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 0.6;
        ctx.stroke();
      });

      // 5. Draw Traveling Data Packets (n8n Live Pipeline Executions)
      packets.forEach((packet) => {
        packet.progress = (packet.progress + packet.speed) % 1;
        const [i, j] = edges[packet.edgeIdx];
        const p1 = projected[i];
        const p2 = projected[j];

        const x = p1.x + (p2.x - p1.x) * packet.progress;
        const y = p1.y + (p2.y - p1.y) * packet.progress;

        // Packet outer halo
        const radGlow = ctx.createRadialGradient(x, y, 0, x, y, 9);
        radGlow.addColorStop(0, `${packet.color}88`);
        radGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = radGlow;
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fill();

        // Packet core
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Draw 4D Hypercube Vertices (n8n Nodes)
      // Sort nodes back-to-front by depth for proper layering
      const sortedIndices = Array.from({ length: 16 }, (_, i) => i).sort(
        (a, b) => projected[a].depth - projected[b].depth
      );

      sortedIndices.forEach((idx) => {
        const p = projected[idx];
        const meta = nodeMeta[idx];
        const nodeRadius = 8 + (p.depth + 1) * 3;

        // Outer pulse glow
        const pulse = Math.sin(frame * 0.05 + idx) * 0.5 + 0.5;
        const glowRad = ctx.createRadialGradient(
          p.x,
          p.y,
          nodeRadius * 0.5,
          p.x,
          p.y,
          nodeRadius * (1.6 + pulse * 0.4)
        );
        glowRad.addColorStop(0, `${meta.color}44`);
        glowRad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowRad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeRadius * (1.6 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fill();

        // Node card circle
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();

        // Node border
        ctx.strokeStyle = meta.color;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Small inner icon indicator
        ctx.fillStyle = meta.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeRadius * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Node micro-label for frontal nodes
        if (p.depth > 0.1 && width > 640) {
          ctx.font = '600 8.5px "Space Grotesk", monospace';
          ctx.fillStyle = '#334155';
          ctx.textAlign = 'center';
          ctx.fillText(meta.label, p.x, p.y + nodeRadius + 11);
        }
      });

      // 7. Hyperspace Coordinate Telemetry (Aesthetic 4D Stamp)
      if (width > 600) {
        ctx.font = '500 8.5px monospace';
        ctx.fillStyle = 'rgba(100, 116, 139, 0.45)';
        ctx.textAlign = 'right';
        ctx.fillText(
          `4D TESSERACT · θ_xw: ${(angleXW % (Math.PI * 2)).toFixed(2)} rad · n8n NODES: 16`,
          width - 16,
          height - 12
        );
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

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
