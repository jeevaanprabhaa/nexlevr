import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';

const plans = [
  {
    category: 'web platforms',
    options: [
      { name: 'landing page',  price: '$150', tag: 'starter', color: '#5B5EF4', features: ['responsive design', 'up to 5 sections', 'contact form', 'deployed & handed off'] },
      { name: 'full stack app', price: '$450', tag: 'custom',  color: '#1B5E35', highlight: true, features: ['full stack development', 'auth & database', 'custom dashboard', 'ongoing support available'] },
    ],
  },
  {
    category: 'brand identity',
    options: [
      { name: 'brand kit',     price: '$100', tag: 'essential', color: '#E8602C', features: ['logo design', 'color palette', 'typography system', 'brand guidelines pdf'] },
      { name: 'full identity', price: '$250', tag: 'complete',  color: '#7B2842', highlight: true, features: ['everything in brand kit', 'social media templates', 'business collateral', 'source files included'] },
    ],
  },
  {
    category: 'ui/ux design',
    options: [
      { name: 'ui design',     price: '$150', tag: 'design only', color: '#5B5EF4', features: ['up to 10 screens', 'figma source file', 'mobile + desktop', 'component library'] },
      { name: 'design + build',price: '$450', tag: 'full package',color: '#0d0d0d', highlight: true, features: ['full ui/ux design', 'frontend development', 'framer or react', 'handoff + documentation'] },
    ],
  },
];

function PriceCard({ option, isMobile }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      style={{
        background: option.highlight ? option.color : '#f2ede4',
        borderRadius: 24,
        padding: isMobile ? '32px 24px' : '44px 40px',
        border: `2px solid ${option.highlight ? option.color : '#0d0d0d'}`,
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease',
        boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.15)' : '4px 4px 0 #0d0d0d',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {option.highlight && (
        <div style={{
          position: 'absolute', top: 20, right: 20,
          background: 'rgba(242,237,228,0.2)', borderRadius: 50,
          padding: '4px 12px', fontSize: 11, fontWeight: 700,
          color: '#f2ede4', border: '1px solid rgba(242,237,228,0.3)',
        }}>
          ✦ popular
        </div>
      )}

      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: option.highlight ? 'rgba(242,237,228,0.6)' : 'rgba(13,13,13,0.4)', display: 'block', marginBottom: 10 }}>
        {option.tag}
      </span>
      <h3 style={{ fontSize: 22, fontWeight: 900, color: option.highlight ? '#f2ede4' : '#0d0d0d', letterSpacing: '-0.5px', marginBottom: 20 }}>
        {option.name}
      </h3>
      <div style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 900, color: option.highlight ? '#f2ede4' : '#0d0d0d', letterSpacing: '-4px', lineHeight: 1, marginBottom: 4, fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic' }}>
        {option.price}
      </div>
      <p style={{ fontSize: 12, color: option.highlight ? 'rgba(242,237,228,0.5)' : 'rgba(13,13,13,0.4)', marginBottom: 24, fontWeight: 500 }}>
        one-time · no hidden fees
      </p>
      <div style={{ borderTop: `1.5px solid ${option.highlight ? 'rgba(242,237,228,0.2)' : 'rgba(13,13,13,0.1)'}`, paddingTop: 20, marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {option.features.map((feat) => (
          <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: option.highlight ? '#f2ede4' : '#e63030', fontSize: 13, fontWeight: 700 }}>✦</span>
            <span style={{ fontSize: 13, color: option.highlight ? 'rgba(242,237,228,0.85)' : 'rgba(13,13,13,0.7)', fontWeight: 500 }}>{feat}</span>
          </div>
        ))}
      </div>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: 50, background: option.highlight ? '#f2ede4' : '#0d0d0d', color: option.highlight ? option.color : '#f2ede4', fontSize: 13, fontWeight: 800, letterSpacing: '-0.2px', border: option.highlight ? 'none' : '2px solid #0d0d0d' }}
      >
        get started →
      </motion.a>
    </motion.div>
  );
}

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState(0);
  const isMobile = useIsMobile();

  return (
    <section id="pricing" style={{ background: '#f2ede4', padding: isMobile ? '80px 20px' : '120px 60px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 48 }}
        >
          <h2 style={{ fontSize: 'clamp(40px, 7vw, 96px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-4px', color: '#0d0d0d' }}>
            simple,{' '}
            <em style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic', fontWeight: 400 }}>
              honest pricing.
            </em>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(13,13,13,0.45)', marginTop: 20, fontWeight: 400 }}>
            student-powered rates. professional-grade output. prices in usd.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {plans.map((plan, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveCategory(i)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: isMobile ? '10px 16px' : '10px 24px',
                borderRadius: 50, fontSize: 13, fontWeight: 700,
                background: activeCategory === i ? '#0d0d0d' : 'transparent',
                color: activeCategory === i ? '#f2ede4' : 'rgba(13,13,13,0.55)',
                cursor: 'pointer', transition: 'all 0.2s',
                border: `2px solid ${activeCategory === i ? '#0d0d0d' : 'rgba(13,13,13,0.2)'}`,
              }}
            >
              {plan.category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 16 }}
          >
            {plans[activeCategory].options.map((option) => (
              <PriceCard key={option.name} option={option} isMobile={isMobile} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Custom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: 40,
            background: '#5566EE', borderRadius: 24,
            padding: isMobile ? '32px 24px' : '48px 44px',
            display: 'flex', flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? 20 : 32, flexWrap: 'wrap',
            border: '2px solid #0d0d0d', boxShadow: '4px 4px 0 #0d0d0d',
          }}
        >
          <div>
            <h3 style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 900, color: '#f2ede4', letterSpacing: '-1px', marginBottom: 8 }}>
              need something custom?
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(242,237,228,0.65)' }}>
              tell us what you're building and we'll scope it together. no pressure.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, background: '#0d0d0d' }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex', background: '#f2ede4', color: '#0d0d0d',
              padding: '16px 32px', borderRadius: 50,
              fontSize: 14, fontWeight: 800, whiteSpace: 'nowrap',
              border: '2px solid #0d0d0d', transition: 'background 0.2s, color 0.2s',
              alignSelf: isMobile ? 'stretch' : 'auto',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
          >
            book a free call →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
