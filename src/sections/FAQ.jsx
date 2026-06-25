import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What kind of projects does NexLevr take on?',
    a: 'We\'ve shipped 75+ projects across restaurants, gyms, construction, interior design, e-commerce, education, boxing, CRM systems, and more. If you need it built, we\'ve probably built something like it already.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Landing pages are done in 3–5 days. Full web apps take 2–6 weeks depending on scope. Brand identity projects typically take 1–2 weeks. We always give you a clear timeline before we start.',
  },
  {
    q: 'Are you actually students? Is the quality professional?',
    a: 'Yes, we\'re a student-led team — and that\'s our advantage. We move faster, charge less, and bring fresh energy. Our portfolio speaks for itself: 75+ real projects shipped for real clients. Quality is non-negotiable.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. While we\'re based in India, we work with clients globally. We communicate async and sync across time zones without issues.',
  },
  {
    q: 'How do I start a project with NexLevr?',
    a: 'Hit "Start a Project", tell us what you need, and we\'ll set up a free discovery call. We scope the project, agree on timeline and pricing, and get to work. Simple.',
  },
  {
    q: 'Do you offer internships?',
    a: 'Yes! NexLevr runs a hands-on internship program. You\'ll work on real client projects, learn by doing, and build a portfolio that actually matters. Scroll down to the internship section or reach out directly.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faqs"
      style={{
        background: '#fff5f5',
        padding: '100px 40px',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
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
            FAQ
          </span>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            color: '#111',
          }}>
            Everything you want to know
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                background: '#fff',
                borderRadius: 16,
                overflow: 'hidden',
                border: open === i ? '1px solid #e63030' : '1px solid #ffe0e0',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '24px 28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: 16,
                }}
              >
                <span style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#111',
                  letterSpacing: '-0.3px',
                }}>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: 24,
                    color: '#e63030',
                    flexShrink: 0,
                    lineHeight: 1,
                    fontWeight: 300,
                  }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      padding: '0 28px 24px',
                      fontSize: 15,
                      color: '#666',
                      lineHeight: 1.7,
                    }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
