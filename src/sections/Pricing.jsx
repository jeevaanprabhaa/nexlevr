import { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    category: 'Web Platforms',
    options: [
      {
        name: 'Landing Page',
        price: '₹15,000',
        period: '',
        tag: 'Starter',
        features: ['Responsive design', 'Up to 5 sections', 'Contact form', 'Deployed & handed off'],
      },
      {
        name: 'Full Web App',
        price: '₹60,000',
        period: '',
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
        price: '₹8,000',
        period: '',
        tag: 'Essential',
        features: ['Logo design', 'Color palette', 'Typography system', 'Brand guidelines PDF'],
      },
      {
        name: 'Full Identity',
        price: '₹20,000',
        period: '',
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
        price: '₹12,000',
        period: '',
        tag: 'Design Only',
        features: ['Up to 10 screens', 'Figma source file', 'Mobile + desktop', 'Component library'],
      },
      {
        name: 'Design + Build',
        price: '₹35,000',
        period: '',
        tag: 'Full Package',
        features: ['Full UI/UX design', 'Frontend development', 'Framer or React', 'Handoff + documentation'],
        highlight: true,
      },
    ],
  },
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="pricing"
      style={{
        background: '#111',
        padding: '100px 40px',
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
            Student-powered rates. Professional-grade output. No hidden fees.
          </p>
        </motion.div>

        <div style={{
          display: 'flex',
          gap: 8,
          marginBottom: 48,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {plans.map((plan, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              style={{
                padding: '10px 24px',
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 600,
                background: activeCategory === i ? '#e63030' : 'rgba(255,255,255,0.08)',
                color: activeCategory === i ? '#fff' : '#aaa',
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: 'none',
              }}
            >
              {plan.category}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
          }}
        >
          {plans[activeCategory].options.map((option, i) => (
            <div
              key={i}
              style={{
                background: option.highlight ? '#e63030' : '#1a1a1a',
                borderRadius: 24,
                padding: '40px 36px',
                border: option.highlight ? 'none' : '1px solid rgba(255,255,255,0.06)',
              }}
            >
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
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 900,
                color: '#fff',
                letterSpacing: '-2px',
                lineHeight: 1,
                marginBottom: 8,
              }}>
                {option.price}
                <span style={{ fontSize: 16, fontWeight: 500, color: option.highlight ? 'rgba(255,255,255,0.7)' : '#888' }}>
                  {option.period}
                </span>
              </div>

              <div style={{
                borderTop: `1px solid ${option.highlight ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)'}`,
                marginTop: 28,
                paddingTop: 28,
              }}>
                {option.features.map((feat, j) => (
                  <div key={j} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 12,
                  }}>
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
                    }}>
                      ✓
                    </div>
                    <span style={{
                      fontSize: 14,
                      color: option.highlight ? 'rgba(255,255,255,0.9)' : '#ccc',
                    }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'block',
                  marginTop: 28,
                  textAlign: 'center',
                  padding: '14px',
                  borderRadius: 50,
                  background: option.highlight ? '#fff' : '#e63030',
                  color: option.highlight ? '#e63030' : '#fff',
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '-0.2px',
                }}
              >
                Get started →
              </motion.a>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: 60,
            background: '#e63030',
            borderRadius: 24,
            padding: '48px 40px',
            textAlign: 'center',
          }}
        >
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
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              background: '#fff',
              color: '#e63030',
              padding: '16px 36px',
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            Book a free discovery call →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
