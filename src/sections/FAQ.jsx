import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'what kind of projects does nexlevr take on?', a: 'we\'ve shipped 75+ projects across restaurants, gyms, construction, interior design, e-commerce, education, boxing, crm systems, and more. if you need it built, we\'ve probably built something like it already.' },
  { q: 'how long does a typical project take?', a: 'landing pages are done in 3–5 days. full web apps take 2–6 weeks depending on scope. brand identity projects typically take 1–2 weeks. we always give you a clear timeline before we start.' },
  { q: 'are you actually students? is the quality professional?', a: 'yes, we\'re a student-led team — and that\'s our advantage. we move faster, charge less, and bring fresh energy. our portfolio speaks for itself: 75+ real projects shipped for real clients. quality is non-negotiable.' },
  { q: 'do you work with clients outside india?', a: 'yes. while we\'re based in india, we work with clients globally. we communicate async and sync across time zones without issues.' },
  { q: 'how do i start a project with nexlevr?', a: 'hit "start a project", tell us what you need, and we\'ll set up a free discovery call. we scope the project, agree on timeline and pricing, and get to work. simple.' },
  { q: 'do you offer internships?', a: 'yes! nexlevr runs a hands-on internship program. you\'ll work on real client projects, learn by doing, and build a portfolio that actually matters.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faqs" style={{ background: '#f2ede4', padding: '120px 60px', borderTop: '2px solid rgba(13,13,13,0.08)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 72 }}
        >
          <h2 style={{
            fontSize: 'clamp(44px, 7vw, 80px)',
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: '-4px',
            color: '#0d0d0d',
          }}>
            got questions?{' '}
            <em style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
            }}>
              we do too.
            </em>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              style={{
                borderTop: '2px solid rgba(13,13,13,0.1)',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                style={{
                  width: '100%',
                  padding: '28px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: 20,
                }}
              >
                <span style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#0d0d0d',
                  letterSpacing: '-0.4px',
                  lineHeight: 1.3,
                }}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: open === i ? '#0d0d0d' : 'transparent',
                    border: '2px solid #0d0d0d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: open === i ? '#f2ede4' : '#0d0d0d',
                    fontSize: 20,
                    fontWeight: 300,
                    lineHeight: 1,
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  +
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      paddingBottom: 28,
                      fontSize: 15,
                      color: 'rgba(13,13,13,0.6)',
                      lineHeight: 1.75,
                      maxWidth: 720,
                    }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* last border */}
          <div style={{ borderTop: '2px solid rgba(13,13,13,0.1)' }} />
        </div>
      </div>
    </section>
  );
}
