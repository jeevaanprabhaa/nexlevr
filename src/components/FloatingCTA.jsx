import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          style={{
            position: 'fixed',
            bottom: 28,
            right: 28,
            zIndex: 9000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 12,
          }}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.92 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: '#f2ede4',
                  borderRadius: 20,
                  padding: '24px',
                  width: 280,
                  boxShadow: '4px 4px 0 #0d0d0d',
                  border: '2px solid #0d0d0d',
                }}
              >
                <p style={{
                  fontSize: 16,
                  fontWeight: 900,
                  color: '#0d0d0d',
                  letterSpacing: '-0.5px',
                  marginBottom: 6,
                }}>
                  ready to build something?
                </p>
                <p style={{ fontSize: 13, color: 'rgba(13,13,13,0.55)', lineHeight: 1.6, marginBottom: 18 }}>
                  we reply within 24 hours. no spam, no pressure.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <motion.a
                    href="mailto:janeeshpofficial@gmail.com"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: '#0d0d0d',
                      color: '#f2ede4',
                      padding: '12px',
                      borderRadius: 50,
                      fontSize: 13,
                      fontWeight: 700,
                      border: '2px solid #0d0d0d',
                    }}
                  >
                    email us →
                  </motion.a>
                  <motion.a
                    href="#pricing"
                    onClick={() => setOpen(false)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: 'transparent',
                      color: '#0d0d0d',
                      padding: '12px',
                      borderRadius: 50,
                      fontSize: 13,
                      fontWeight: 600,
                      border: '2px solid rgba(13,13,13,0.2)',
                    }}
                  >
                    see pricing
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: '#0d0d0d',
              border: '2px solid #0d0d0d',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '3px 3px 0 rgba(0,0,0,0.3)',
              color: '#f2ede4',
              fontSize: 18,
            }}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'inline-block', lineHeight: 1 }}
            >
              {open ? '✕' : '💬'}
            </motion.span>
          </motion.button>

          {!open && (
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                bottom: 0, right: 0,
                width: 56, height: 56,
                borderRadius: '50%',
                border: '2px solid #0d0d0d',
                pointerEvents: 'none',
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
