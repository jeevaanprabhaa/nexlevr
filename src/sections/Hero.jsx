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

function Sticker({ emoji, bg, angle, top, left, right, bottom, size = 60 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: angle - 10 }}
      animate={{ opacity: 1, scale: 1, rotate: angle }}
      transition={{ duration: 0.6, delay: 1.2, type: 'spring', bounce: 0.5 }}
      style={{
        position: 'absolute',
        top, left, right, bottom,
        width: size, height: size,
        borderRadius: '50%',
        background: bg,
        border: '2.5px solid rgba(255,255,255,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.42,
        transform: `rotate(${angle}deg)`,
        pointerEvents: 'none',
        zIndex: 2,
        userSelect: 'none',
      }}
    >
      {emoji}
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const stripRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseRef.current = { x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy };
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const tick = () => {
      if (stripRef.current) {
        const tx = mouseRef.current.x * -10;
        const ty = mouseRef.current.y * -5;
        stripRef.current.style.transform = `rotate(-3deg) translateX(${tx}px) translateY(${ty}px)`;
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
        background: '#0d0d0d',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 60px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Stickers */}
      <Sticker emoji="😊" bg="#7B8FFF" angle={-12} top="22%" right="12%" size={72} />
      <Sticker emoji="✨" bg="#f5e642" angle={15} top="18%" right="22%" size={52} />
      <Sticker emoji="🫶" bg="#C4B5F5" angle={-8} top="55%" right="8%" size={64} />
      <Sticker emoji="📸" bg="#f2ede4" angle={20} top="30%" left="5%" size={56} />

      {/* Headline */}
      <motion.div style={{ y: textY, position: 'relative', zIndex: 1 }}>
        <div style={{
          fontSize: 'clamp(60px, 10vw, 130px)',
          fontWeight: 900,
          lineHeight: 0.9,
          letterSpacing: '-5px',
          color: '#f2ede4',
          margin: 0,
          marginBottom: 40,
        }}>
          {['we build.', 'we ship.'].map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#e63030',
            }}
          >
            you grow.
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}
        >
          <p style={{
            fontSize: 16,
            color: 'rgba(242,237,228,0.55)',
            lineHeight: 1.65,
            maxWidth: 420,
            margin: 0,
          }}>
            a student-led agency shipping real web platforms, brand systems, and full-stack products for businesses that refuse to stay average.
          </p>

          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05, background: '#f2ede4', color: '#0d0d0d' }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#e63030',
              color: '#fff',
              padding: '16px 32px',
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: '-0.2px',
              border: '2px solid #e63030',
            }}
          >
            start a project →
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ opacity: 1 }}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: 'rgba(242,237,228,0.45)',
              borderBottom: '1px solid rgba(242,237,228,0.25)',
              paddingBottom: 2,
              transition: 'color 0.2s',
            }}
          >
            view services
          </motion.a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{ display: 'flex', gap: 32, marginTop: 40, flexWrap: 'wrap' }}
        >
          {['75+ projects shipped', '16+ brands built', 'student-led team'].map((b) => (
            <span key={b} style={{
              fontSize: 12,
              color: 'rgba(242,237,228,0.35)',
              fontWeight: 500,
              letterSpacing: '0.5px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#e63030', display: 'inline-block' }} />
              {b}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Tilted infinite video strip (unchanged logic) ── */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        style={{ width: '110%', marginTop: 80, position: 'relative', left: '-5%' }}
      >
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
                    background: '#222',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                    cursor: 'pointer',
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
