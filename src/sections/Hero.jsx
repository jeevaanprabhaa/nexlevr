import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CDN = 'https://framerusercontent.com/assets';
const VIDEOS = [
  `${CDN}/4YtNt00St7B1UaDXcTUAIryKfJU.mp4`,
  `${CDN}/CEbr5RaBSAqEp1b1c5R1sbqe0A.mp4`,
  `${CDN}/KMnVXcqVj7ii01fxHySuRYCuw2s.mp4`,
  `${CDN}/l88G3TlXlHx8q2uaZEGxf45lFfs.mp4`,
  `${CDN}/N05TRbevbwo7r1Z4nciijGhKmM.mp4`,
  `${CDN}/NuVnwXG8mkMplUpYnt1k0ANTa2Y.mp4`,
  `${CDN}/u5EiP1O7LeCR5CU5uChapC0XeWY.mp4`,
];

const CARD_HEIGHTS = [340, 370, 345, 385, 330, 365, 340];
const CARD_WIDTHS  = [180, 190, 180, 200, 175, 190, 180];

export default function Hero() {
  const ref = useRef(null);
  const stripRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Scroll-based parallax on the text block
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  // Mouse parallax on video strip — RAF-based, no React state re-renders
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseRef.current = {
        x: (e.clientX - cx) / cx,
        y: (e.clientY - cy) / cy,
      };
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const tick = () => {
      if (stripRef.current) {
        const tx = mouseRef.current.x * -10;
        const ty = mouseRef.current.y * -5;
        stripRef.current.style.transform =
          `rotate(-3deg) translateX(${tx}px) translateY(${ty}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        background: '#fdf6f6',
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 40px 60px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Headline with scroll parallax */}
      <motion.div style={{ y: textY, maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        {/* Word-by-word stagger */}
        <div style={{
          fontSize: 'clamp(52px, 9vw, 120px)',
          fontWeight: 900,
          lineHeight: 0.92,
          letterSpacing: '-4px',
          color: '#111',
          margin: 0,
          marginBottom: 36,
        }}>
          {['Build.', 'Ship.'].map((word, wi) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: wi * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              We {word}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <em style={{ color: '#e63030', fontStyle: 'italic', fontWeight: 900 }}>
              You Grow.
            </em>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 16 }}
        >
          <p style={{
            fontSize: 17,
            color: '#555',
            lineHeight: 1.65,
            maxWidth: 480,
            margin: 0,
          }}>
            NexLevr is a student-led growth agency — shipping real web platforms, brand systems, and full-stack products for businesses that refuse to stay average.
          </p>

          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05, background: '#c42020' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#e63030',
              color: '#fff',
              padding: '18px 36px',
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: '-0.2px',
              boxShadow: '0 8px 32px rgba(230,48,48,0.35)',
            }}
          >
            Start a Project
            <span style={{ fontSize: 20, lineHeight: 1 }}>→</span>
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: '#111',
              padding: '18px 32px',
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 600,
              border: '1.5px solid rgba(0,0,0,0.15)',
            }}
          >
            View Services
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}
        >
          {['75+ Projects Shipped', '16+ Brands Built', 'Student-Led Team'].map((badge) => (
            <div key={badge} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 13, color: '#888', fontWeight: 500,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#e63030' }} />
              {badge}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Video strip — slightly bent (-3deg), slightly left, mouse parallax via ref */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        style={{ width: '110%', marginTop: 72, position: 'relative', left: '-5%' }}
      >
        {/* Inner div receives the RAF-driven transform */}
        <div
          ref={stripRef}
          style={{
            transform: 'rotate(-3deg)',
            transformOrigin: 'center center',
            willChange: 'transform',
          }}
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: 14, width: 'max-content' }}
          >
            {[...VIDEOS, ...VIDEOS].map((src, i) => {
              const idx = i % VIDEOS.length;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, zIndex: 2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  style={{
                    width: CARD_WIDTHS[idx],
                    height: CARD_HEIGHTS[idx],
                    borderRadius: 18,
                    overflow: 'hidden',
                    flexShrink: 0,
                    background: '#ddd',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.14)',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                >
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
