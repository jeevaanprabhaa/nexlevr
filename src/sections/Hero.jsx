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
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #fff5f5 0%, #ffe8e8 40%, #fff8f8 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '140px 0 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(230,48,48,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(230,48,48,0.07) 1px, transparent 1px)
        `,
        backgroundSize: '55px 55px',
        pointerEvents: 'none',
      }} />

      {/* Hero text */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 800, padding: '0 24px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(38px, 6vw, 76px)',
            fontWeight: 900,
            lineHeight: 1.04,
            letterSpacing: '-2.5px',
            color: '#0a0a0a',
            marginBottom: 22,
          }}
        >
          The Only Media Engine<br />
          Built To Make You{' '}
          <em style={{
            fontStyle: 'italic',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 400,
            letterSpacing: '-1px',
            color: '#e63030',
          }}>
            Filthy Rich
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          style={{
            fontSize: 15,
            color: '#666',
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          NexLevr is a full stack media studio including social media, graphics, sales and websites.<br />
          Built for brands that refuse to be ignored.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.38 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#e63030',
              color: '#fff',
              padding: '15px 30px',
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: '-0.3px',
            }}
          >
            Book a discovery call
            <span style={{
              background: '#fff',
              color: '#e63030',
              borderRadius: '50%',
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 15,
              fontWeight: 700,
            }}>→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Tilted infinite-scrolling video strip */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          marginTop: 52,
          transform: 'rotate(-4deg)',
          transformOrigin: 'center center',
        }}
      >
        <InfiniteVideoStrip />
      </motion.div>
    </section>
  );
}

function InfiniteVideoStrip() {
  const all = [...VIDEOS, ...VIDEOS];

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          display: 'flex',
          gap: 14,
          width: 'max-content',
          alignItems: 'flex-end',
          paddingBottom: 60,
        }}
      >
        {all.map((src, i) => {
          const idx = i % VIDEOS.length;
          return (
            <VideoCard
              key={i}
              src={src}
              height={CARD_HEIGHTS[idx]}
              width={CARD_WIDTHS[idx]}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

function VideoCard({ src, height, width }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 18,
        overflow: 'hidden',
        flexShrink: 0,
        boxShadow: '0 20px 50px rgba(230,48,48,0.18), 0 8px 20px rgba(0,0,0,0.12)',
        background: '#111',
        position: 'relative',
      }}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
}
