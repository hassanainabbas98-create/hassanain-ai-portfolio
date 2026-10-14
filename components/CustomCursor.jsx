'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable completely on touch devices / mobile
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        if (!isHovered) {
          isHovered = true;
          ring.style.width = '42px';
          ring.style.height = '42px';
          ring.style.borderColor = '#FF6D5A';
          ring.style.backgroundColor = 'rgba(255, 109, 90, 0.08)';
        }
      } else if (isHovered) {
        isHovered = false;
        ring.style.width = '28px';
        ring.style.height = '28px';
        ring.style.borderColor = 'rgba(255, 109, 90, 0.4)';
        ring.style.backgroundColor = 'transparent';
      }
    };

    // Smooth lerp on ring using requestAnimationFrame
    const loop = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;
      const offset = isHovered ? 21 : 14;
      ring.style.transform = `translate3d(${ringX - offset}px, ${ringY - offset}px, 0)`;
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Smooth Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border border-[#FF6D5A]/40 pointer-events-none transition-[width,height,border-color,background-color] duration-150 will-change-transform"
        style={{ width: '28px', height: '28px', transform: 'translate3d(-100px, -100px, 0)' }}
      />
      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF6D5A] pointer-events-none shadow-[0_0_8px_#FF6D5A] will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </div>
  );
}
