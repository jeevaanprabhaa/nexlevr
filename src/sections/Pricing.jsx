import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    category: 'Web Platforms',
    options: [
      {
        name: 'Landing Page',
        price: '$150',
        tag: 'Starter',
        features: ['Responsive design', 'Up to 5 sections', 'Contact form', 'Deployed & handed off'],
      },
      {
        name: 'Full Stack App',
        price: '$450',
        tag: 'Custom',
        features: ['Full stack development', 'Auth & database', 'Custom dashboard', 'Ongoing support available'],
        highlight: true,
      },
    ],
  },
  {
    category: 'Brand Identity',
    options: [
      {
        name: 'Brand Kit',
        price: '$100',
        tag: 'Essential',
        features: ['Logo design', 'Color palette', 'Typography system', 'Brand guidelines PDF'],
      },
      {
        name: 'Full Identity',
        price: '$250',
        tag: 'Complete',
        features: ['Everything in Brand Kit', 'Social media templates', 'Business collateral', 'Source files included'],
        highlight: true,
      },
    ],
  },
  {
    category: 'UI/UX Design',
    options: [
      {
        name: 'UI Design',
        price: '$150',
        tag: 'Design Only',
        features: ['Up to 10 screens', 'Figma source file', 'Mobile + desktop', 'Component library'],
      },
      {
        name: 'Design + Build',
        price: '$450',
        tag: 'Full Package',
        features: ['Full UI/UX design', 'Frontend development', 'Framer or React', 'Handoff + documentation'],
        highlight: true,
      },
    ],
  },
];

function PriceCard({ option, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: option.highlight ? '#e63030' : '#1a1a1a',
        borderRadius: 24,
        padding: '40px 36px',
        border: option.highlight
          ? 'none'
          : hovered
            ? '1px solid rgba(230,48,48,0.4)'
            : '1px solid rgba(255,255,255,0.06)',
        transform: hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
        transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), border 0.25s ease, box-shadow 0.3s ease',
        boxShadow: option.highlight
          ? hovered ? '0 32px 80px rgba(230,48,48,0.5)' : '0 16px 48px rgba(230,48,48,0.3)'
          : hovered ? '0 20px 60px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Shine sweep on hover */}
      {hovered && !option.highlight && (
        <motion.div
          initial={{ x: '-100%', opacity: 0.6 }}
          animate={{ x: '200%', opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)',
            pointerEvents: 'none',
          }}
        />
      )}

      {option.highlight && (
        <div style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'rgba(255,255,255,0.2)',
          borderRadius: 50,
          padding: '4px 12px',
          fontSize: 11,
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}>
          ✦ Popular
        </div>
      )}

      <span style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: option.highlight ? 'rgba(255,255,255,0.7)' : '#666',
        display: 'block',
        marginBottom: 12,
      }}>
        {option.tag}
      </span>

      <h3 style={{
        fontSize: 24,
        fontWeight: 800,
        color: '#fff',
        letterSpacing: '-0.5px',
        marginBottom: 20,
      }}>
        {option.name}
      </h3>

      <div style={{
        fontSize: 'clamp(44px, 5vw, 60px)',
        fontWeight: 900,
        color: '#fff',
        letterSpacing: '-3px',
        lineHeight: 1,
        marginBottom: 4,
      }}>
        {option.price}
      </div>
      <p style={{ fontSize: 13, color: option.highlight ? 'rgba(255,255,255,0.6)' : '#555', marginBottom: 28 }}>
        one-time · no hidden fees
      </p>

      <div style={{
        borderTop: `1px solid ${option.highlight ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)'}`,
        paddingTop: 24,
        marginBottom: 28,
      }}>
        {option.features.map((feat, j) => (
          <motion.div
            key={j}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + j * 0.06, duration: 0.3 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 12,
            }}
          >
            <div style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: option.highlight ? 'rgba(255,255,255,0.25)' : '#e63030',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 10,
              color: '#fff',
              flexShrink: 0,
              fontWeight: 700,
            }}>
              ✓
            </div>
            <span style={{
              fontSize: 14,
              color: option.highlight ? 'rgba(255,255,255,0.9)' : '#ccc',
            }}>
              {feat}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '15px',
          borderRadius: 50,
          background: option.highlight ? '#fff' : '#e63030',
          color: option.highlight ? '#e63030' : '#fff',
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: '-0.2px',
          boxShadow: option.highlight
            ? '0 4px 20px rgba(255,255,255,0.2)'
            : '0 4px 20px rgba(230,48,48,0.3)',
        }}
      >
        Get started →
      </motion.a>
    </motion.div>
  );
}

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="pricing"
      style={{
        background: '#111',
        padding: '120px 40px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60, textAlign: 'center' }}
        >
          <span style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#e63030',
            display: 'block',
            marginBottom: 16,
          }}>
            Our Pricing
          </span>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            color: '#fff',
            marginBottom: 16,
          }}>
            Simple, honest pricing
          </h2>
          <p style={{ color: '#888', fontSize: 15 }}>
            Student-powered rates. Professional-grade output. Prices in USD.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div style={{
          display: 'flex',
          gap: 8,
          marginBottom: 48,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {plans.map((plan, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveCategory(i)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '10px 28px',
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 600,
                background: activeCategory === i ? '#e63030' : 'rgba(255,255,255,0.08)',
                color: activeCategory === i ? '#fff' : '#aaa',
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: 'none',
                boxShadow: activeCategory === i ? '0 4px 20px rgba(230,48,48,0.3)' : 'none',
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
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 20,
            }}
          >
            {plans[activeCategory].options.map((option, i) => (
              <PriceCard key={option.name} option={option} delay={i * 0.08} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Custom quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: 60,
            background: 'linear-gradient(135deg, #e63030 0%, #c42020 100%)',
            borderRadius: 24,
            padding: '48px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative circles */}
          <div style={{
            position: 'absolute', top: -40, right: -40,
            width: 200, height: 200, borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: -60, left: -20,
            width: 160, height: 160, borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
            pointerEvents: 'none',
          }} />

          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
            Web + Brand + Design + Apps
          </p>
          <h3 style={{
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 900,
            letterSpacing: '-1px',
            color: '#fff',
            marginBottom: 12,
          }}>
            Need something custom?
          </h3>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', marginBottom: 32 }}>
            Tell us what you're building and we'll scope it together. No pressure.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              background: '#fff',
              color: '#e63030',
              padding: '16px 40px',
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: '-0.2px',
            }}
          >
            Book a free discovery call →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
