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
            bottom: 32,
            right: 32,
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
                  background: '#fff',
                  borderRadius: 20,
                  padding: '24px',
                  width: 280,
                  boxShadow: '0 24px 80px rgba(0,0,0,0.18)',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <p style={{
                  fontSize: 15,
                  fontWeight: 800,
                  color: '#111',
                  letterSpacing: '-0.4px',
                  marginBottom: 6,
                }}>
                  Ready to build something?
                </p>
                <p style={{ fontSize: 13, color: '#777', lineHeight: 1.6, marginBottom: 18 }}>
                  Drop us a message and we'll get back within 24 hours.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <motion.a
                    href="mailto:janeeshpofficial@gmail.com"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: '#e63030',
                      color: '#fff',
                      padding: '12px',
                      borderRadius: 12,
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    Email Us →
                  </motion.a>
                  <motion.a
                    href="#pricing"
                    onClick={() => setOpen(false)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: '#f5f5f5',
                      color: '#111',
                      padding: '12px',
                      borderRadius: 12,
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    See Pricing
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
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: '#e63030',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(230,48,48,0.45)',
              color: '#fff',
              fontSize: open ? 22 : 20,
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

          {/* Pulse ring */}
          {!open && (
            <motion.div
              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 60,
                height: 60,
                borderRadius: '50%',
                border: '2px solid #e63030',
                pointerEvents: 'none',
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
