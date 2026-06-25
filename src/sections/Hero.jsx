import { useRef } from 'react';
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

const CARD_HEIGHTS = [360, 395, 370, 410, 355, 390, 365];
const CARD_WIDTHS  = [190, 200, 190, 210, 185, 200, 190];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const stripX = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

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
      {/* Headline */}
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(52px, 9vw, 120px)',
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: '-4px',
            color: '#111',
            margin: 0,
            marginBottom: 36,
          }}
        >
          We Build.<br />
          We Ship.<br />
          <em style={{
            color: '#e63030',
            fontStyle: 'italic',
            fontWeight: 900,
          }}>You Grow.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
            href="#our-work"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
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
            }}
          >
            View Our Work
            <span style={{ fontSize: 20, lineHeight: 1 }}>→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Tilted infinite video strip */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          width: '100%',
          marginTop: 64,
          transform: 'rotate(-6deg)',
          transformOrigin: 'center center',
          position: 'relative',
          left: '-5%',
          width: '110%',
        }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          style={{
            display: 'flex',
            gap: 16,
            width: 'max-content',
          }}
        >
          {[...VIDEOS, ...VIDEOS].map((src, i) => {
            const idx = i % VIDEOS.length;
            return (
              <div
                key={i}
                style={{
                  width: CARD_WIDTHS[idx],
                  height: CARD_HEIGHTS[idx],
                  borderRadius: 20,
                  overflow: 'hidden',
                  flexShrink: 0,
                  background: '#ddd',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
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
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
