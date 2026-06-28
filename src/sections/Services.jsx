import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cards = [
  {
    title: 'web platforms',
    color: '#1B5E35',
    textColor: '#f2ede4',
    rotate: -10,
    translateY: 50,
    sticker: '🌐',
    stickerBg: '#f5e642',
    features: ['custom web apps', 'saas dashboards', 'full-stack builds', 'fast delivery', 'deployed & live'],
  },
  {
    title: 'brand identity',
    color: '#5B5EF4',
    textColor: '#f2ede4',
    rotate: -5,
    translateY: 20,
    sticker: '🎨',
    stickerBg: '#C4B5F5',
    features: ['logo systems', 'color palette', 'typography', 'brand kit pdf', 'visual language'],
  },
  {
    title: 'ui/ux design',
    color: '#E8602C',
    textColor: '#f2ede4',
    rotate: 0,
    translateY: 0,
    sticker: '✏️',
    stickerBg: '#f2ede4',
    features: ['user research', 'wireframes', 'pixel-perfect ui', 'figma source', 'mobile + desktop'],
  },
  {
    title: 'ai products',
    color: '#7B2842',
    textColor: '#f2ede4',
    rotate: 5,
    translateY: 20,
    sticker: '🤖',
    stickerBg: '#FFB7C5',
    features: ['ai-powered tools', 'automation flows', 'smart features', 'api integration', 'workflow ai'],
  },
  {
    title: 'full stack apps',
    color: '#C4B5F5',
    textColor: '#0d0d0d',
    rotate: 10,
    translateY: 50,
    sticker: '🚀',
    stickerBg: '#5B5EF4',
    features: ['auth & database', 'rest / graphql', 'custom dashboards', 'real-time features', 'scalable infra'],
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState(2);

  return (
    <section
      id="services"
      style={{ background: '#f2ede4', padding: '120px 60px', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 80 }}
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

        {/* Fanned cards */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: 0,
            paddingBottom: 60,
            paddingTop: 20,
            position: 'relative',
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveCard(activeCard === i ? null : i); } }}
              role="button"
              tabIndex={0}
              aria-expanded={activeCard === i}
              aria-label={`${card.title} service card`}
              style={{
                width: 200,
                minHeight: 460,
                background: card.color,
                borderRadius: '20px 20px 12px 12px',
                padding: '24px 20px 28px',
                transform: `rotate(${card.rotate}deg) translateY(${activeCard === i ? 0 : card.translateY}px)`,
                marginLeft: i > 0 ? -24 : 0,
                zIndex: activeCard === i ? 10 : 5 - Math.abs(i - 2),
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, z-index 0s',
                boxShadow: activeCard === i
                  ? '0 32px 80px rgba(0,0,0,0.3)'
                  : '0 8px 24px rgba(0,0,0,0.15)',
                border: '2px solid rgba(0,0,0,0.12)',
                flexShrink: 0,
              }}
            >
              {/* Sticker */}
              <div style={{
                position: 'absolute',
                top: -18,
                right: 16,
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
                transform: `rotate(${-card.rotate * 1.5}deg)`,
              }}>
                {card.sticker}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 26,
                fontWeight: 900,
                color: card.textColor,
                letterSpacing: '-0.8px',
                lineHeight: 1.1,
                marginBottom: 14,
                marginTop: 8,
              }}>
                {card.title}
              </h3>

              {/* Divider */}
              <div style={{
                height: 1.5,
                background: `${card.textColor}33`,
                marginBottom: 18,
              }} />

              {/* Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {card.features.map((feat) => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: card.textColor, opacity: 0.7, fontSize: 13 }}>✦</span>
                    <span style={{
                      fontSize: 13,
                      color: card.textColor,
                      opacity: 0.85,
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <AnimatePresence>
                {activeCard === i && (
                  <motion.a
                    href="#pricing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      display: 'block',
                      marginTop: 24,
                      textAlign: 'center',
                      padding: '10px',
                      borderRadius: 50,
                      background: card.textColor,
                      color: card.color,
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    get started →
                  </motion.a>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          fontSize: 13,
          color: 'rgba(13,13,13,0.4)',
          marginTop: 8,
        }}>
          tap a card to explore ↑
        </p>
      </div>
    </section>
  );
}
