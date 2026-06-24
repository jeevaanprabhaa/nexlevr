import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Do we have to buy all 4 arms or can we pick just one?',
    a: 'You can absolutely pick just what you need — but social media is the one non-negotiable. It\'s the foundation everything else is built on. From there, every client makes 4 decisions: how many reels per month (15 or 30), whether you need us to shoot or just edit, whether you want sales and strategy bundled in, and whether you need a website. Simple. Modular. Built around you.',
  },
  {
    q: 'How long before we see real results?',
    a: 'Most brands see measurable traction within 30–45 days. Meaningful revenue impact typically shows within 60 days. We track everything from day one so you always know what\'s working.',
  },
  {
    q: 'What does onboarding look like?',
    a: 'After your discovery call, we run a 72-hour brand deep-dive — understanding your voice, audience, competitors, and goals. Then we build the full content and strategy plan. You approve it, we execute.',
  },
  {
    q: 'Do you work with brands outside India?',
    a: 'Yes. While we\'re India-headquartered, we work with brands globally. Time zones haven\'t stopped us yet.',
  },
  {
    q: 'How is NexLevr different from a freelancer or in-house team?',
    a: 'Freelancers are siloed. In-house teams are expensive. NexLevr is a full media engine — strategy, content, sales, web — all under one roof, coordinated and accountable to your results, not just deliverables.',
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
            We've got the answers
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
