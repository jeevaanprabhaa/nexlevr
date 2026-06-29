import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const clients = [
  { name: 'restaurants',     emoji: '🍽️', color: '#E8602C', text: '#f2ede4', tag: '#f5e642', built: ['custom booking sites', 'menu websites', 'delivery pages', 'brand identity'] },
  { name: 'gyms & fitness',  emoji: '💪', color: '#C4B5F5', text: '#0d0d0d', tag: '#1B5E35', built: ['membership portals', 'class scheduling', 'trainer profiles', 'promo pages'] },
  { name: 'e-commerce',      emoji: '🛒', color: '#1B5E35', text: '#f2ede4', tag: '#f5e642', built: ['storefront builds', 'product pages', 'brand kits', 'checkout flows'] },
  { name: 'construction',    emoji: '🏗️', color: '#f5e642', text: '#0d0d0d', tag: '#E8602C', built: ['company websites', 'project portfolios', 'lead gen forms', 'brand identity'] },
  { name: 'education',       emoji: '📚', color: '#5B5EF4', text: '#f2ede4', tag: '#FFB7C5', built: ['course platforms', 'tutor portals', 'student dashboards', 'landing pages'] },
  { name: 'interior design', emoji: '🛋️', color: '#7B2842', text: '#f2ede4', tag: '#C4B5F5', built: ['portfolio sites', 'client galleries', 'brand identity', 'booking systems'] },
  { name: 'startups',        emoji: '🚀', color: '#0d0d0d', text: '#f2ede4', tag: '#f5e642', built: ['mvp builds', 'saas dashboards', 'pitch decks', 'brand kits'] },
  { name: 'saas products',   emoji: '⚡', color: '#FFB7C5', text: '#0d0d0d', tag: '#5B5EF4', built: ['dashboard ui', 'user onboarding', 'landing pages', 'product design'] },
  { name: 'crm systems',     emoji: '📊', color: '#C4B5F5', text: '#0d0d0d', tag: '#E8602C', built: ['custom crm builds', 'data dashboards', 'workflow automation', 'api integrations'] },
];

const reasons = [
  { num: '01', title: 'real projects. real clients.', desc: 'every project in our portfolio was built for an actual client. no mock-ups, no fake work.' },
  { num: '02', title: 'students who ship',            desc: "we've shipped 75+ projects and are hungry to build more. fast, focused, no corporate lag." },
  { num: '03', title: 'fast turnaround',              desc: 'landing pages in 3–5 days. full apps in 2–6 weeks. we always give a clear timeline upfront.' },
];

function TiltCard({ c, i, isHovered, onEnter }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [12, -12]);
  const rotateY = useTransform(x, [-60, 60], [-12, 12]);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 25 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={onEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 800, cursor: 'default', outline: 'none' }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? 0 : springX,
          rotateY: isHovered ? 0 : springY,
          transformStyle: 'preserve-3d',
          position: 'relative',
          borderRadius: 20,
          background: c.color,
          border: isHovered ? '3px solid #0d0d0d' : '2.5px solid transparent',
          boxShadow: isHovered
            ? '0 0 0 4px #0d0d0d, 0 24px 60px rgba(0,0,0,0.28)'
            : '0 6px 24px rgba(0,0,0,0.13)',
          padding: '28px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          userSelect: 'none',
          transition: 'border 0.15s, box-shadow 0.15s',
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          opacity: isHovered === false ? 1 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        <motion.div
          animate={{ rotate: isHovered ? [0, -12, 12, -8, 0] : 0 }}
          transition={{ duration: 0.45 }}
          style={{
            width: 52, height: 52, borderRadius: '50%',
            background: c.tag, border: '2.5px solid #0d0d0d',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24, boxShadow: '2px 3px 0 #0d0d0d', marginBottom: 4,
          }}
        >
          {c.emoji}
        </motion.div>

        <h3 style={{ fontSize: 17, fontWeight: 900, color: c.text, letterSpacing: '-0.5px', lineHeight: 1.2 }}>
          {c.name}
        </h3>
        <p style={{ fontSize: 12, color: c.text, opacity: 0.5, fontWeight: 600 }}>
          {c.built.length} deliverables →
        </p>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{
                position: 'absolute', top: 14, right: 14,
                width: 10, height: 10, borderRadius: '50%', background: c.text,
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function WhyUs() {
  const [hovered, setHovered] = useState(null);
  const c = hovered !== null ? clients[hovered] : null;

  return (
    <section style={{ background: '#f2ede4', padding: '120px 0 100px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }}>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64, textAlign: 'center' }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: 72, height: 72, background: '#5B5EF4',
              borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
              margin: '0 auto 22px',
            }}
          />
          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900,
            letterSpacing: '-4px', lineHeight: 0.92, color: '#0d0d0d',
          }}>
            proud to have{' '}
            <em style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>
              worked with:
            </em>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ marginTop: 18, fontSize: 14, color: 'rgba(13,13,13,0.4)', fontWeight: 500 }}
          >
            hover over an industry to explore what we built
          </motion.p>
        </motion.div>

        {/* Hover zone: grid + panel together so moving into panel keeps it open */}
        <div onMouseLeave={() => setHovered(null)}>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {clients.map((client, i) => (
              <TiltCard
                key={client.name}
                c={client}
                i={i}
                isHovered={hovered === i}
                onEnter={() => setHovered(i)}
              />
            ))}
          </div>

          {/* Detail panel — appears below on hover */}
          <AnimatePresence mode="wait">
            {hovered !== null && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, y: -16, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto', marginTop: 20 }}
                exit={{ opacity: 0, y: -10, height: 0, marginTop: 0 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div
                  style={{
                    background: c.color,
                    borderRadius: 24,
                    border: '2.5px solid #0d0d0d',
                    boxShadow: '4px 6px 0 #0d0d0d',
                    padding: '36px 40px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 40,
                  }}
                >
                  {/* Left: emoji + name */}
                  <div style={{ flexShrink: 0 }}>
                    <motion.div
                      initial={{ scale: 0.5, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                      style={{
                        width: 80, height: 80, borderRadius: '50%',
                        background: c.tag, border: '2.5px solid #0d0d0d',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 38, boxShadow: '3px 4px 0 #0d0d0d', marginBottom: 16,
                      }}
                    >
                      {c.emoji}
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 }}
                      style={{
                        fontSize: 22, fontWeight: 900, color: c.text,
                        letterSpacing: '-0.6px', maxWidth: 130, lineHeight: 1.2,
                      }}
                    >
                      {c.name}
                    </motion.h3>
                  </div>

                  {/* Divider */}
                  <div style={{ width: 1.5, alignSelf: 'stretch', background: `${c.text}25`, flexShrink: 0 }} />

                  {/* Right: deliverables */}
                  <div style={{ flex: 1 }}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.45 }}
                      transition={{ delay: 0.06 }}
                      style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: '2px',
                        textTransform: 'uppercase', color: c.text, marginBottom: 20,
                      }}
                    >
                      what we built
                    </motion.p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
                      {c.built.map((item, idx) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                        >
                          <span style={{
                            width: 28, height: 28, borderRadius: '50%',
                            background: c.tag, border: '2px solid #0d0d0d',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 11, fontWeight: 800, color: '#0d0d0d', flexShrink: 0,
                          }}>
                            {idx + 1}
                          </span>
                          <span style={{ fontSize: 15, fontWeight: 700, color: c.text, letterSpacing: '-0.2px' }}>
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.a
                      href="mailto:janeeshpofficial@gmail.com"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        marginTop: 28, padding: '12px 24px', borderRadius: 50,
                        background: c.text, color: c.color,
                        fontSize: 13, fontWeight: 800, textDecoration: 'none',
                        boxShadow: `3px 3px 0 ${c.tag}`, border: `2px solid ${c.text}`,
                      }}
                    >
                      start a project with us →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>{/* end hover zone */}

        {/* Why us reasons */}
        <div style={{ marginTop: 100 }}>
          <div style={{ borderTop: '2px solid #0d0d0d', paddingTop: 60 }}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '2.5px',
                textTransform: 'uppercase', color: 'rgba(13,13,13,0.35)',
                marginBottom: 40, textAlign: 'center',
              }}
            >
              why clients choose nexlevr
            </motion.p>

            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'grid', gridTemplateColumns: '52px 1fr 1fr',
                  gap: 36, padding: '30px 0',
                  borderBottom: '1px solid rgba(13,13,13,0.09)', alignItems: 'start',
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 700, color: '#e63030', paddingTop: 3 }}>{r.num}</span>
                <h4 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.4px', color: '#0d0d0d', lineHeight: 1.3 }}>
                  {r.title}
                </h4>
                <p style={{ fontSize: 14, color: 'rgba(13,13,13,0.5)', lineHeight: 1.75 }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
