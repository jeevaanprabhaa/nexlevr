import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0); // 0=building bar, 1=text reveal, 2=exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1800);
    const t3 = setTimeout(() => setVisible(false), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const letters = 'NexLevr'.split('');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#111',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          {/* Logo letters */}
          <div style={{ display: 'flex', gap: 2 }}>
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontSize: 'clamp(48px, 8vw, 96px)',
                  fontWeight: 900,
                  letterSpacing: '-3px',
                  color: i >= 3 ? '#e63030' : '#fff',
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
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            We Build. We Ship. You Grow.
          </motion.p>

          {/* Progress bar */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'rgba(255,255,255,0.1)',
          }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: phase >= 2 ? '100%' : '70%' }}
              transition={{
                duration: phase >= 2 ? 0.4 : 1,
                ease: phase >= 2 ? 'easeIn' : 'easeOut',
              }}
              style={{
                height: '100%',
                background: '#e63030',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
