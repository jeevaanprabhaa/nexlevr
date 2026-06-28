import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Platforms',
    desc: 'Custom web apps, SaaS dashboards, and full-stack platforms built from scratch and shipped fast.',
    icon: '🌐',
    color: '#e63030',
    stat: '40+ built',
  },
  {
    title: 'Brand Identity',
    desc: 'Logo systems, visual language, and brand kits that make your business impossible to ignore.',
    icon: '🎨',
    color: '#ff6b35',
    stat: '25+ brands',
  },
  {
    title: 'UI/UX Design',
    desc: 'User research, wireframes, and pixel-perfect interfaces designed for conversion and usability.',
    icon: '✏️',
    color: '#e63030',
    stat: '60+ screens',
  },
  {
    title: 'AI Products',
    desc: 'AI-powered tools, automations, and smart product features integrated into your workflow.',
    icon: '🤖',
    color: '#ff6b35',
    stat: '10+ shipped',
  },
];

function ServiceCard({ svc, i, inView }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -10, y: dx * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, rotate: 2 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.75, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        background: hovered
          ? 'linear-gradient(135deg, #1f1f1f 0%, #1a1a1a 100%)'
          : i % 2 === 0 ? '#1a1a1a' : '#1e1e1e',
        borderRadius: 24,
        padding: '48px 40px',
        border: hovered
          ? `1px solid rgba(230,48,48,0.5)`
          : i % 2 === 0
            ? '1px solid rgba(230,48,48,0.2)'
            : '1px solid rgba(255,255,255,0.06)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.02 : 1})`,
        transition: hovered
          ? 'transform 0.12s ease, border 0.25s ease, background 0.25s ease, box-shadow 0.25s ease'
          : 'transform 0.45s cubic-bezier(0.22,1,0.36,1), border 0.25s ease, background 0.25s ease',
        boxShadow: hovered
          ? '0 24px 60px rgba(230,48,48,0.18), 0 4px 20px rgba(0,0,0,0.4)'
          : '0 4px 20px rgba(0,0,0,0.2)',
      }}
    >
      {/* Animated glow top-left */}
      <div style={{
        position: 'absolute',
        top: -60,
        left: -60,
        width: 180,
        height: 180,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${svc.color}22 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s ease',
        pointerEvents: 'none',
      }} />

      {/* Animated corner accent */}
      <motion.div
        animate={{ rotate: hovered ? 360 : 0 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: `1.5px solid ${hovered ? 'rgba(230,48,48,0.4)' : 'rgba(255,255,255,0.06)'}`,
          transition: 'border 0.25s ease',
        }}
      />

      {/* Icon with spring pop */}
      <motion.div
        animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 8 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
        style={{ fontSize: 40, marginBottom: 20, display: 'inline-block' }}
      >
        {svc.icon}
      </motion.div>

      {/* Stat badge */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
        transition={{ duration: 0.25 }}
        style={{
          position: 'absolute',
          top: 44,
          right: 40,
          background: 'rgba(230,48,48,0.15)',
          border: '1px solid rgba(230,48,48,0.3)',
          borderRadius: 50,
          padding: '4px 12px',
          fontSize: 12,
          fontWeight: 700,
          color: '#e63030',
          letterSpacing: '0.5px',
        }}
      >
        {svc.stat}
      </motion.div>

      <h3 style={{
        fontSize: 32,
        fontWeight: 800,
        color: '#fff',
        letterSpacing: '-1px',
        marginBottom: 16,
      }}>
        {svc.title}
      </h3>

      <p style={{ fontSize: 15, color: '#888', lineHeight: 1.7, marginBottom: 28 }}>
        {svc.desc}
      </p>

      <motion.a
        href="#pricing"
        animate={{ x: hovered ? 6 : 0, color: hovered ? '#ff5555' : '#e63030' }}
        transition={{ duration: 0.2 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          fontWeight: 700,
          fontSize: 14,
        }}
      >
        Start a {svc.title} project
        <motion.span
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.div>
  );
}

export default function Services() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        background: '#111',
        padding: '120px 40px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setInView(true)}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 20 }}
        >
          <span style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#e63030',
          }}>
            Our Services
          </span>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 900,
              letterSpacing: '-1.5px',
              color: '#fff',
              maxWidth: 560,
              margin: 0,
            }}
          >
            What we actually build for you
          </motion.h2>

          <motion.a
            href="#pricing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.04, background: 'rgba(230,48,48,0.12)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: '1.5px solid rgba(230,48,48,0.4)',
              color: '#e63030',
              padding: '12px 24px',
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            See pricing →
          </motion.a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
          }}
        >
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
