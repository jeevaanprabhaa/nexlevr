import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(242,237,228,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
      }}
    >
      {/* Left — logo */}
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          background: '#e63030',
          width: 36,
          height: 36,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          fontWeight: 900,
          color: '#fff',
          letterSpacing: '-1px',
          border: '2px solid #0d0d0d',
        }}>
          N
        </div>
        <span style={{
          fontWeight: 800,
          fontSize: 15,
          letterSpacing: '-0.3px',
          color: '#0d0d0d',
        }}>
          nexlevr
        </span>
      </a>

      {/* Center — brand name */}
      <span style={{
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontStyle: 'italic',
        fontSize: 22,
        color: '#0d0d0d',
        letterSpacing: '-0.5px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        nexlevr
      </span>

      {/* Right — nav links + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {['services', 'team', 'pricing'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#0d0d0d',
              opacity: 0.6,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.6}
          >
            {item}
          </a>
        ))}

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, background: '#0d0d0d' }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: '#0d0d0d',
            color: '#f2ede4',
            padding: '10px 20px',
            borderRadius: 50,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '-0.2px',
            transition: 'background 0.2s',
          }}
        >
          start a project →
        </motion.a>
      </div>
    </motion.nav>
  );
}
