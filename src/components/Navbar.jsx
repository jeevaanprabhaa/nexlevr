import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '16px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img
          src="/logo.png"
          alt="NexLevr logo"
          style={{ width: 32, height: 32, borderRadius: 6, objectFit: 'cover' }}
        />
        <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.5px', color: '#111' }}>NexLevr</span>
      </a>

      <div style={{
        display: 'flex',
        gap: 4,
        background: 'rgba(255,255,255,0.85)',
        borderRadius: 50,
        padding: '8px 16px',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(0,0,0,0.08)',
      }}>
        {['About Us', 'Pricing', 'Team', 'FAQs'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            style={{
              padding: '6px 16px',
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 500,
              color: '#111',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = 'rgba(0,0,0,0.06)'}
            onMouseLeave={e => e.target.style.background = 'transparent'}
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        style={{
          background: '#e63030',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: 50,
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '-0.2px',
          transition: 'transform 0.2s, background 0.2s',
          display: 'inline-block',
        }}
        onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; e.target.style.background = '#c42424'; }}
        onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.background = '#e63030'; }}
      >
        Contact Us
      </a>
    </motion.nav>
  );
}
