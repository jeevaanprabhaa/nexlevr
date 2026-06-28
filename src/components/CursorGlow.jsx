import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const glow = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices / reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const animate = () => {
      glow.current.x += (pos.current.x - glow.current.x) * 0.08;
      glow.current.y += (pos.current.y - glow.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glow.current.x - 200}px, ${glow.current.y - 200}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Soft glow blob — below nav/modals/CTA */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,48,48,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 500,
          willChange: 'transform',
        }}
      />
      {/* Sharp dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#e63030',
          pointerEvents: 'none',
          zIndex: 501,
          willChange: 'transform',
          mixBlendMode: 'multiply',
        }}
      />
    </>
  );
}
