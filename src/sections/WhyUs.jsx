import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const clients = [
  {
    name: 'restaurants',
    color: '#E8602C', text: '#f2ede4',
    emoji: '🍽️', stickerBg: '#f5e642', stickerAngle: -14,
    built: ['custom booking sites', 'menu websites', 'delivery pages', 'brand identity'],
  },
  {
    name: 'gyms & fitness',
    color: '#C4B5F5', text: '#0d0d0d',
    emoji: '💪', stickerBg: '#1B5E35', stickerAngle: 18,
    built: ['membership portals', 'class scheduling', 'trainer profiles', 'promo pages'],
  },
  {
    name: 'e-commerce',
    color: '#1B5E35', text: '#f2ede4',
    emoji: '🛒', stickerBg: '#f5e642', stickerAngle: -10,
    built: ['storefront builds', 'product pages', 'brand kits', 'checkout flows'],
  },
  {
    name: 'construction',
    color: '#f5e642', text: '#0d0d0d',
    emoji: '🏗️', stickerBg: '#E8602C', stickerAngle: 20,
    built: ['company websites', 'project portfolios', 'lead gen forms', 'brand identity'],
  },
  {
    name: 'education',
    color: '#5B5EF4', text: '#f2ede4',
    emoji: '📚', stickerBg: '#FFB7C5', stickerAngle: -16,
    built: ['course platforms', 'tutor portals', 'student dashboards', 'landing pages'],
  },
  {
    name: 'interior design',
    color: '#7B2842', text: '#f2ede4',
    emoji: '🛋️', stickerBg: '#C4B5F5', stickerAngle: 12,
    built: ['portfolio sites', 'client galleries', 'brand identity', 'booking systems'],
  },
  {
    name: 'startups',
    color: '#0d0d0d', text: '#f2ede4',
    emoji: '🚀', stickerBg: '#f5e642', stickerAngle: -20,
    built: ['mvp builds', 'saas dashboards', 'pitch decks', 'brand kits'],
  },
  {
    name: 'saas products',
    color: '#FFB7C5', text: '#0d0d0d',
    emoji: '⚡', stickerBg: '#5B5EF4', stickerAngle: 16,
    built: ['dashboard ui', 'user onboarding', 'landing pages', 'product design'],
  },
  {
    name: 'crm systems',
    color: '#C4B5F5', text: '#0d0d0d',
    emoji: '📊', stickerBg: '#E8602C', stickerAngle: -8,
    built: ['custom crm builds', 'data dashboards', 'workflow automation', 'api integrations'],
  },
];

const N = clients.length; // 9

// ── idle fan: spread across full width ──
const IDLE_POSITIONS = clients.map((_, i) => ({
  x:      (i - (N - 1) / 2) * 130,
  y:      Math.abs(i - (N - 1) / 2) * 12,
  rotate: (i - (N - 1) / 2) * 5,
  scale:  1 - Math.abs(i - (N - 1) / 2) * 0.02,
  zIndex: N - Math.abs(i - (N - 1) / 2),
}));

const SHOWCASE_X  = -360;
const FAN_START_X =  50;
const FAN_SPACING =  68;

function getPositions(active) {
  if (active === null) return IDLE_POSITIONS;

  const others = clients.map((_, i) => i).filter(i => i !== active);

  return clients.map((_, i) => {
    if (i === active) {
      return { x: SHOWCASE_X, y: -10, rotate: 0, scale: 1, zIndex: 20 };
    }
    const fi = others.indexOf(i);
    const dir = fi < others.length / 2 ? -1 : 1;
    return {
      x:      FAN_START_X + fi * FAN_SPACING,
      y:      Math.abs(fi - (others.length - 1) / 2) * 12,
      rotate: dir * (5 + fi * 3.5),
      scale:  0.72 - fi * 0.01,
      zIndex: others.length - fi,
    };
  });
}

const FLOAT_Y = [9, 7, 11, 8, 10, 8, 12, 7, 10];
const FLOAT_D = [3.3, 2.9, 3.7, 2.7, 3.4, 2.8, 3.1, 3.6, 2.6];

const reasons = [
  { num: '01', title: 'real projects. real clients.', desc: 'every project in our portfolio was built for an actual client. no mock-ups, no fake work.' },
  { num: '02', title: 'students who ship',            desc: "we've shipped 75+ projects and are hungry to build more. fast, focused, no corporate lag." },
  { num: '03', title: 'fast turnaround',              desc: 'landing pages in 3–5 days. full apps in 2–6 weeks. we always give a clear timeline upfront.' },
];

export default function WhyUs() {
  const [active, setActive] = useState(null);
  const positions = getPositions(active);

  return (
    <section style={{ background: '#f2ede4', padding: '120px 0 100px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }}>

        {/* ── Headline ── */}
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
              width: 72,
              height: 72,
              background: '#5B5EF4',
              borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
              margin: '0 auto 22px',
            }}
          />
          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 900,
            letterSpacing: '-4px',
            lineHeight: 0.92,
            color: '#0d0d0d',
          }}>
            proud to have{' '}
            <em style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
            }}>
              worked with:
            </em>
          </h2>
        </motion.div>
      </div>

      {/* ── Card stage – full width ── */}
      <div style={{
        position: 'relative',
        height: 520,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {clients.map((c, i) => {
          const pos      = positions[i];
          const isActive = active === i;
          const hasActive = active !== null;

          return (
            <motion.div
              key={c.name}
              style={{ position: 'absolute', zIndex: pos.zIndex }}
              animate={{ x: pos.x, y: pos.y, rotate: pos.rotate, scale: pos.scale }}
              transition={{ type: 'spring', stiffness: 280, damping: 28, mass: 0.9 }}
            >
              {/* float bob */}
              <motion.div
                animate={hasActive ? { y: 0 } : { y: [0, -FLOAT_Y[i], 0] }}
                transition={hasActive
                  ? { duration: 0.3 }
                  : { duration: FLOAT_D[i], repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }
                }
              >
                {/* sticker */}
                <motion.div
                  animate={{ rotate: isActive ? c.stickerAngle * 0.5 : c.stickerAngle }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  style={{
                    position: 'absolute',
                    top: -34,
                    left: isActive ? 20 : '50%',
                    transform: isActive ? 'none' : 'translateX(-50%)',
                    width: 62,
                    height: 62,
                    borderRadius: '50%',
                    background: c.stickerBg,
                    border: '3px solid #0d0d0d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 26,
                    boxShadow: '2px 3px 0 #0d0d0d',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                >
                  {c.emoji}
                </motion.div>

                {/* card face */}
                <motion.div
                  onClick={() => setActive(isActive ? null : i)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActive(isActive ? null : i);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  aria-label={`${c.name} industry card`}
                  whileHover={!isActive ? { y: -8, transition: { duration: 0.22 } } : {}}
                  style={{
                    width:     isActive ? 260 : 180,
                    height:    420,
                    background: c.color,
                    borderRadius: 20,
                    padding:   isActive ? '30px 26px 28px' : '26px 18px 26px',
                    cursor:    'pointer',
                    border:    '2.5px solid rgba(0,0,0,0.13)',
                    boxShadow: isActive
                      ? '0 44px 96px rgba(0,0,0,0.3)'
                      : '0 10px 30px rgba(0,0,0,0.16)',
                    overflow:  'hidden',
                    transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1), padding 0.3s ease, box-shadow 0.3s ease',
                    userSelect: 'none',
                    display:   'flex',
                    flexDirection: 'column',
                    marginTop: 34,
                  }}
                >
                  {/* name */}
                  <h3 style={{
                    fontSize:      isActive ? 28 : 16,
                    fontWeight:    900,
                    color:         c.text,
                    letterSpacing: '-0.8px',
                    lineHeight:    1.1,
                    marginBottom:  14,
                    marginTop:     6,
                    transition:    'font-size 0.3s ease',
                    flexShrink:    0,
                  }}>
                    {c.name}
                  </h3>

                  {/* divider */}
                  <div style={{ height: 1.5, background: `${c.text}30`, marginBottom: 16, flexShrink: 0 }} />

                  {/* what we built */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
                    {c.built.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                        <span style={{ color: c.text, opacity: 0.55, fontSize: 10, marginTop: 3, flexShrink: 0 }}>✦</span>
                        <span style={{
                          fontSize:   isActive ? 13 : 11,
                          color:      c.text,
                          opacity:    0.85,
                          fontWeight: 500,
                          lineHeight: 1.4,
                          transition: 'font-size 0.25s ease',
                        }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA when active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.a
                        href="mailto:janeeshpofficial@gmail.com"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, delay: 0.1 }}
                        style={{
                          display:    'block',
                          marginTop:  20,
                          textAlign:  'center',
                          padding:    '12px',
                          borderRadius: 50,
                          background: c.text,
                          color:      c.color,
                          fontSize:   12,
                          fontWeight: 800,
                          flexShrink: 0,
                        }}
                      >
                        work with us →
                      </motion.a>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Hint ── */}
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <AnimatePresence mode="wait">
          <motion.p
            key={active === null ? 'idle' : 'open'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ fontSize: 13, color: 'rgba(13,13,13,0.35)' }}
          >
            {active === null ? 'click an industry to explore ↑' : 'click again to close  ✕'}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ── Why us reasons ── */}
      <div style={{ maxWidth: 1100, margin: '80px auto 0', padding: '0 60px' }}>
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
                display: 'grid',
                gridTemplateColumns: '52px 1fr 1fr',
                gap: 36,
                padding: '30px 0',
                borderBottom: '1px solid rgba(13,13,13,0.09)',
                alignItems: 'start',
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
    </section>
  );
}
