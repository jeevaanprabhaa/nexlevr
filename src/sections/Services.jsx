import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cards = [
  {
    title: 'web platforms',
    color: '#1B5E35',
    textColor: '#f2ede4',
    sticker: '🌐',
    stickerBg: '#f5e642',
    stickerAngle: -15,
    features: ['custom web apps', 'saas dashboards', 'full-stack builds', 'fast delivery', 'deployed & live'],
  },
  {
    title: 'brand identity',
    color: '#5B5EF4',
    textColor: '#f2ede4',
    sticker: '🎨',
    stickerBg: '#C4B5F5',
    stickerAngle: 18,
    features: ['logo systems', 'color palette', 'typography', 'brand kit pdf', 'visual language'],
  },
  {
    title: 'ui/ux design',
    color: '#E8602C',
    textColor: '#f2ede4',
    sticker: '✏️',
    stickerBg: '#f2ede4',
    stickerAngle: -12,
    features: ['user research', 'wireframes', 'pixel-perfect ui', 'figma source', 'mobile + desktop'],
  },
  {
    title: 'ai products',
    color: '#7B2842',
    textColor: '#f2ede4',
    sticker: '🤖',
    stickerBg: '#FFB7C5',
    stickerAngle: 20,
    features: ['ai-powered tools', 'automation flows', 'smart features', 'api integration', 'workflow ai'],
  },
  {
    title: 'full stack apps',
    color: '#C4B5F5',
    textColor: '#0d0d0d',
    sticker: '🚀',
    stickerBg: '#5B5EF4',
    stickerAngle: -8,
    features: ['auth & database', 'rest / graphql', 'custom dashboards', 'real-time features', 'scalable infra'],
  },
];

// ── idle fan: all 5 cards spread across, slightly overlapping ──
const IDLE_POSITIONS = [
  { x: -400, y: 30,  rotate: -14, scale: 0.92, zIndex: 1 },
  { x: -210, y: -10, rotate: -7,  scale: 0.94, zIndex: 2 },
  { x:   10, y:   0, rotate:  1,  scale: 0.97, zIndex: 5 },
  { x:  220, y:  -8, rotate:  8,  scale: 0.94, zIndex: 2 },
  { x:  415, y:  20, rotate: 15,  scale: 0.92, zIndex: 1 },
];

// ── showcase position (active card goes here) ──
const SHOWCASE_X = -310;

// ── compact fan starts here, spacing between non-active cards ──
const FAN_START_X  = 60;
const FAN_SPACING  = 75;

function getPositions(activeCard) {
  if (activeCard === null) return IDLE_POSITIONS;

  const fanCards = cards
    .map((_, i) => i)
    .filter(i => i !== activeCard);

  return cards.map((_, i) => {
    if (i === activeCard) {
      return { x: SHOWCASE_X, y: -10, rotate: 0, scale: 1, zIndex: 20 };
    }
    const fanIndex = fanCards.indexOf(i);
    const rotateDir = fanIndex < fanCards.length / 2 ? -1 : 1;
    return {
      x:       FAN_START_X + fanIndex * FAN_SPACING,
      y:       Math.abs(fanIndex - 1.5) * 14,
      rotate:  rotateDir * (6 + fanIndex * 4),
      scale:   0.72 - fanIndex * 0.015,
      zIndex:  10 - fanIndex,
    };
  });
}

// ── float bob for idle ──
const FLOAT_Y        = [9, 7, 11, 8, 10];
const FLOAT_DURATION = [3.3, 2.8, 3.6, 2.6, 3.1];

export default function Services() {
  const [activeCard, setActiveCard] = useState(null);
  const positions = getPositions(activeCard);

  return (
    <section
      id="services"
      style={{ background: '#f2ede4', padding: '120px 0px 100px', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 60px' }}>
        {/* ── Headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
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
      </div>

      {/* ── Card stage – full width so fans don't clip ── */}
      <div style={{
        position: 'relative',
        height: 580,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        /* let cards breathe outside the container */
      }}>
        {cards.map((card, i) => {
          const pos      = positions[i];
          const isActive = activeCard === i;
          const hasActive = activeCard !== null;

          return (
            <motion.div
              key={card.title}
              /* position controller */
              style={{ position: 'absolute', zIndex: pos.zIndex }}
              animate={{ x: pos.x, y: pos.y, rotate: pos.rotate, scale: pos.scale }}
              transition={{ type: 'spring', stiffness: 280, damping: 28, mass: 0.9 }}
            >
              {/* float wrapper (only bobs when idle + no active) */}
              <motion.div
                animate={hasActive ? { y: 0 } : { y: [0, -FLOAT_Y[i], 0] }}
                transition={hasActive
                  ? { duration: 0.3 }
                  : { duration: FLOAT_DURATION[i], repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }
                }
              >
                {/* ── Sticker floats above card ── */}
                <motion.div
                  animate={{ rotate: isActive ? card.stickerAngle * 0.6 : card.stickerAngle }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  style={{
                    position: 'absolute',
                    top: -38,
                    left: isActive ? 24 : '50%',
                    transform: isActive ? 'none' : 'translateX(-50%)',
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: card.stickerBg,
                    border: '3px solid #0d0d0d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 30,
                    boxShadow: '2px 3px 0 #0d0d0d',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                >
                  {card.sticker}
                </motion.div>

                {/* ── Card face ── */}
                <motion.div
                  onClick={() => setActiveCard(isActive ? null : i)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCard(isActive ? null : i);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  aria-label={`${card.title} service card`}
                  whileHover={!isActive ? { y: -8, transition: { duration: 0.25 } } : {}}
                  style={{
                    width: isActive ? 280 : 220,
                    height: 460,
                    background: card.color,
                    borderRadius: 22,
                    padding: isActive ? '32px 28px 32px' : '28px 22px 28px',
                    cursor: 'pointer',
                    border: '2.5px solid rgba(0,0,0,0.15)',
                    boxShadow: isActive
                      ? '0 48px 100px rgba(0,0,0,0.32)'
                      : '0 12px 36px rgba(0,0,0,0.18)',
                    overflow: 'hidden',
                    transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1), padding 0.3s ease, box-shadow 0.3s ease',
                    userSelect: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 38, /* room for sticker */
                  }}
                >
                  {/* title */}
                  <h3 style={{
                    fontSize: isActive ? 32 : 22,
                    fontWeight: 900,
                    color: card.textColor,
                    letterSpacing: '-1px',
                    lineHeight: 1.05,
                    marginBottom: 16,
                    marginTop: 6,
                    transition: 'font-size 0.3s ease',
                    flexShrink: 0,
                  }}>
                    {card.title}
                  </h3>

                  {/* divider */}
                  <div style={{
                    height: 1.5,
                    background: `${card.textColor}35`,
                    marginBottom: 18,
                    flexShrink: 0,
                  }} />

                  {/* features – always visible */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                    {card.features.map(feat => (
                      <div key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <span style={{ color: card.textColor, opacity: 0.6, fontSize: 12, marginTop: 2 }}>✦</span>
                        <span style={{
                          fontSize: isActive ? 14 : 12,
                          color: card.textColor,
                          opacity: 0.88,
                          fontWeight: 500,
                          lineHeight: 1.45,
                          transition: 'font-size 0.25s ease',
                        }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA appears when active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.a
                        href="#pricing"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.28, delay: 0.1 }}
                        style={{
                          display: 'block',
                          marginTop: 24,
                          textAlign: 'center',
                          padding: '13px',
                          borderRadius: 50,
                          background: card.textColor,
                          color: card.color,
                          fontSize: 13,
                          fontWeight: 800,
                          flexShrink: 0,
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
        })}
      </div>

      {/* ── Hint ── */}
      <div style={{ padding: '0 60px', maxWidth: 1200, margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCard === null ? 'idle' : 'active'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              textAlign: 'center',
              fontSize: 13,
              color: 'rgba(13,13,13,0.35)',
              marginTop: 12,
            }}
          >
            {activeCard === null ? 'click a card to explore ↑' : 'click again to close  ✕'}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
