import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STRIPES = [
  { color: '#0d0d0d', h: 18 },
  { color: '#E8602C', h: 17 },
  { color: '#f5e642', h: 17 },
  { color: '#5B5EF4', h: 17 },
  { color: '#1B5E35', h: 17 },
  { color: '#0d0d0d', h: 18 },
];

const N = STRIPES.length;

const EASE_IN  = [0.76, 0, 0.24, 1];
const EASE_OUT = [0.76, 0, 0.24, 1];

export default function PageLoader() {
  const [phase, setPhase] = useState('in'); // 'in' | 'hold' | 'out' | 'done'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 950);
    const t2 = setTimeout(() => setPhase('out'),  1700);
    const t3 = setTimeout(() => setPhase('done'), 2700);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  if (phase === 'done') return null;

  /* accumulate top offsets so stripes tile exactly */
  let topPct = 0;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        overflow: 'hidden',
        pointerEvents: phase === 'out' ? 'none' : 'all',
      }}
    >
      {STRIPES.map((s, i) => {
        const top = topPct;
        topPct += s.h;

        const isOut = phase === 'out';
        const inDelay  = i * 0.07;
        /* reverse sweep on exit — bottom stripe leaves first */
        const outDelay = (N - 1 - i) * 0.065;

        return (
          <motion.div
            key={i}
            initial={{ x: '-105%' }}
            animate={{ x: isOut ? '105%' : '0%' }}
            transition={{
              duration: 0.65,
              delay:    isOut ? outDelay : inDelay,
              ease:     isOut ? EASE_OUT  : EASE_IN,
            }}
            style={{
              position: 'absolute',
              left: 0,
              top:  `${top}%`,
              width: '100%',
              height: `${s.h + 0.5}%`,   /* tiny overlap to kill sub-pixel gaps */
              background: s.color,
              /* jagged leading edge — paint brush feel */
              clipPath: i % 2 === 0
                ? 'polygon(0 0, 100% 0, 100% 85%, 99% 100%, 98% 88%, 97% 100%, 0 100%)'
                : 'polygon(0 0, 100% 0, 100% 100%, 98% 88%, 97% 100%, 96% 85%, 0 100%)',
            }}
          />
        );
      })}

      {/* Brand name — visible only while fully covered */}
      <AnimatePresence>
        {phase === 'hold' && (
          <motion.div
            key="brand"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.06, transition: { duration: 0.22 } }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              pointerEvents: 'none',
            }}
          >
            {/* Logo letters */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
              {'nex'.split('').map((l, i) => (
                <motion.span
                  key={`n${i}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontSize: 'clamp(52px, 10vw, 108px)',
                    fontWeight: 900,
                    letterSpacing: '-4px',
                    lineHeight: 1,
                    color: '#f2ede4',
                  }}
                >
                  {l}
                </motion.span>
              ))}
              {'levr'.split('').map((l, i) => (
                <motion.span
                  key={`l${i}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontSize: 'clamp(52px, 10vw, 108px)',
                    fontWeight: 400,
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontStyle: 'italic',
                    letterSpacing: '-4px',
                    lineHeight: 1,
                    color: '#f5e642',
                  }}
                >
                  {l}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.35 }}
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: 'rgba(242,237,228,0.45)',
              }}
            >
              we build. we ship. you grow.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
