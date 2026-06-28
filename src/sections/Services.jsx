import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cards = [
  {
    title: 'web platforms',
    color: '#1B5E35',
    textColor: '#f2ede4',
    sticker: '🌐',
    stickerBg: '#f5e642',
    features: ['custom web apps', 'saas dashboards', 'full-stack builds', 'fast delivery', 'deployed & live'],
  },
  {
    title: 'brand identity',
    color: '#5B5EF4',
    textColor: '#f2ede4',
    sticker: '🎨',
    stickerBg: '#C4B5F5',
    features: ['logo systems', 'color palette', 'typography', 'brand kit pdf', 'visual language'],
  },
  {
    title: 'ui/ux design',
    color: '#E8602C',
    textColor: '#f2ede4',
    sticker: '✏️',
    stickerBg: '#f2ede4',
    features: ['user research', 'wireframes', 'pixel-perfect ui', 'figma source', 'mobile + desktop'],
  },
  {
    title: 'ai products',
    color: '#7B2842',
    textColor: '#f2ede4',
    sticker: '🤖',
    stickerBg: '#FFB7C5',
    features: ['ai-powered tools', 'automation flows', 'smart features', 'api integration', 'workflow ai'],
  },
  {
    title: 'full stack apps',
    color: '#C4B5F5',
    textColor: '#0d0d0d',
    sticker: '🚀',
    stickerBg: '#5B5EF4',
    features: ['auth & database', 'rest / graphql', 'custom dashboards', 'real-time features', 'scalable infra'],
  },
];

// idle spread positions (x offset from center, y, rotation)
const IDLE = [
  { x: -380, y: 30,  rotate: -13 },
  { x: -195, y: -20, rotate: -6  },
  { x: 0,    y: 15,  rotate: 2   },
  { x: 195,  y: -15, rotate: 7   },
  { x: 380,  y: 25,  rotate: 14  },
];

// where cards fly when a DIFFERENT card is active
const SCATTER = [
  { x: -440, y: 110, rotate: -28, scale: 0.68 },
  { x: -260, y: 80,  rotate: -16, scale: 0.72 },
  { x: 30,   y: 130, rotate: 12,  scale: 0.68 },
  { x: 270,  y: 75,  rotate: 20,  scale: 0.72 },
  { x: 450,  y: 100, rotate: 28,  scale: 0.68 },
];

// individual float durations + amounts so cards bob out of sync
const FLOAT_DURATION = [3.4, 2.9, 3.7, 2.7, 3.2];
const FLOAT_Y        = [10,  8,  13,  9,   9  ];

function ServiceCard({ card, i, activeCard, setActiveCard }) {
  const isActive  = activeCard === i;
  const hasActive = activeCard !== null;

  const posAnimate = isActive
    ? { x: 0, y: -30, rotate: 0, scale: 1.06 }
    : hasActive
    ? { x: SCATTER[i].x, y: SCATTER[i].y, rotate: SCATTER[i].rotate, scale: SCATTER[i].scale }
    : { x: IDLE[i].x,    y: IDLE[i].y,    rotate: IDLE[i].rotate,    scale: 1 };

  const floatAnimate = (isActive || hasActive)
    ? { y: 0 }
    : { y: [0, -FLOAT_Y[i], 0] };

  const floatTransition = (isActive || hasActive)
    ? { duration: 0.3 }
    : { duration: FLOAT_DURATION[i], repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 };

  return (
    <motion.div
      style={{ position: 'absolute', zIndex: isActive ? 20 : hasActive ? 1 : 5 }}
      animate={posAnimate}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
    >
      {/* float wrapper – y oscillation is independent of position */}
      <motion.div
        animate={floatAnimate}
        transition={floatTransition}
      >
        <motion.div
          onClick={() => setActiveCard(isActive ? null : i)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveCard(isActive ? null : i); }}}
          role="button"
          tabIndex={0}
          aria-expanded={isActive}
          aria-label={`${card.title} service card`}
          whileHover={!isActive ? { y: -6 } : {}}
          style={{
            width: 210,
            minHeight: isActive ? 420 : 370,
            background: card.color,
            borderRadius: 22,
            padding: '28px 22px 30px',
            cursor: 'pointer',
            border: '2px solid rgba(0,0,0,0.14)',
            boxShadow: isActive
              ? '0 40px 90px rgba(0,0,0,0.35)'
              : '0 10px 32px rgba(0,0,0,0.18)',
            transition: 'min-height 0.4s ease, box-shadow 0.3s ease',
            position: 'relative',
            userSelect: 'none',
          }}
        >
          {/* sticker badge */}
          <div style={{
            position: 'absolute',
            top: -18,
            right: 14,
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: card.stickerBg,
            border: '2.5px solid #0d0d0d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
            boxShadow: '1px 2px 0 #0d0d0d',
          }}>
            {card.sticker}
          </div>

          {/* title */}
          <h3 style={{
            fontSize: 24,
            fontWeight: 900,
            color: card.textColor,
            letterSpacing: '-0.6px',
            lineHeight: 1.1,
            marginBottom: 14,
            marginTop: 10,
          }}>
            {card.title}
          </h3>

          {/* divider */}
          <div style={{ height: 1.5, background: `${card.textColor}30`, marginBottom: 16 }} />

          {/* features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {card.features.map(feat => (
              <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: card.textColor, opacity: 0.65, fontSize: 11 }}>✦</span>
                <span style={{ fontSize: 13, color: card.textColor, opacity: 0.85, fontWeight: 500, lineHeight: 1.4 }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* CTA – only when active */}
          <AnimatePresence>
            {isActive && (
              <motion.a
                href="#pricing"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                style={{
                  display: 'block',
                  marginTop: 22,
                  textAlign: 'center',
                  padding: '11px',
                  borderRadius: 50,
                  background: card.textColor,
                  color: card.color,
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                get started →
              </motion.a>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="services"
      style={{ background: '#f2ede4', padding: '120px 60px', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 60 }}
        >
          <h2 style={{
            fontSize: 'clamp(44px, 7vw, 96px)',
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: '-4px',
            color: '#0d0d0d',
          }}>
            call us if you{' '}
            <em style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              letterSpacing: '-2px',
            }}>
              need:
            </em>
          </h2>
        </motion.div>

        {/* floating cards stage */}
        <div style={{
          position: 'relative',
          height: 560,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {cards.map((card, i) => (
            <ServiceCard
              key={card.title}
              card={card}
              i={i}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </div>

        {/* hint text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCard === null ? 'idle' : 'active'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            style={{
              textAlign: 'center',
              fontSize: 13,
              color: 'rgba(13,13,13,0.35)',
              marginTop: -20,
            }}
          >
            {activeCard === null ? 'click a card to explore ↑' : 'click the card again to close ✕'}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
