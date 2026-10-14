'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#00D1FF]/60 pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? 'rgba(0, 209, 255, 0.12)' : 'rgba(122, 92, 250, 0.05)',
          borderColor: isHovered ? '#00D1FF' : 'rgba(0, 209, 255, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.5 }}
        style={{
          boxShadow: isHovered
            ? '0 0 20px rgba(0, 209, 255, 0.5), inset 0 0 10px rgba(122, 92, 250, 0.4)'
            : '0 0 10px rgba(0, 209, 255, 0.2)',
        }}
      />

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#00D1FF] pointer-events-none shadow-[0_0_8px_#00D1FF]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 800 }}
      />
    </div>
  );
}
