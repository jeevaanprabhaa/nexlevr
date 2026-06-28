import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1700);
    const t3 = setTimeout(() => setVisible(false), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const letters = 'nexlevr'.split('');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#f2ede4',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
          }}
        >
          {/* Letters */}
          <div style={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 'clamp(52px, 10vw, 108px)',
                  fontWeight: i < 3 ? 900 : 400,
                  fontFamily: i >= 3
                    ? "'DM Serif Display', Georgia, serif"
                    : "'Inter', system-ui, sans-serif",
                  fontStyle: i >= 3 ? 'italic' : 'normal',
                  letterSpacing: '-4px',
                  color: i >= 3 ? '#e63030' : '#0d0d0d',
                  lineHeight: 1,
                }}
              >
                {l}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={phase >= 1 ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.65 }}
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(13,13,13,0.35)',
            }}
          >
            we build. we ship. you grow.
          </motion.p>

          {/* Progress bar */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'rgba(13,13,13,0.08)',
          }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: phase >= 2 ? '100%' : '65%' }}
              transition={{ duration: phase >= 2 ? 0.4 : 1.2, ease: phase >= 2 ? 'easeIn' : 'easeOut' }}
              style={{ height: '100%', background: '#e63030' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
