import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We start with a call to understand your business, goals, and exactly what you need built.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We map out the solution — wireframes, tech stack, and a clear project roadmap before a single line of code is written.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Our team executes with precision. You get regular updates and stay in the loop at every milestone.',
  },
  {
    num: '04',
    title: 'Ship',
    desc: 'We launch, hand off, and support. Built to last — not just to demo.',
  },
];

const services = ['Web Platforms', 'Brand Identity', 'UI/UX Design', 'Full Stack Apps', 'AI Products'];

export default function HowItWorks() {
  return (
    <section style={{
      background: '#fff5f5',
      padding: '100px 40px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
          marginBottom: 100,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#999',
              display: 'block',
              marginBottom: 20,
            }}>
              How does it work?
            </span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              letterSpacing: '-1.5px',
              color: '#111',
              marginBottom: 24,
              lineHeight: 1.1,
            }}>
              How we work
            </h2>
            <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7 }}>
              Simple process. Real delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: '#111',
              borderRadius: 24,
              padding: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: 24,
            }}
          >
            <div>
              <div style={{
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: 900,
                color: '#e63030',
                letterSpacing: '-2px',
                lineHeight: 1,
              }}>
                75<span style={{ fontSize: '0.5em' }}>+</span>
              </div>
              <p style={{ color: '#aaa', fontSize: 14, marginTop: 8 }}>
                Projects shipped across 10+ industries
              </p>
            </div>
          </motion.div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          marginBottom: 60,
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: '32px 24px',
                border: '1px solid #ffe0e0',
              }}
            >
              <div style={{
                fontSize: 13,
                fontWeight: 700,
                color: '#e63030',
                marginBottom: 16,
                letterSpacing: '1px',
              }}>
                {step.num}
              </div>
              <h3 style={{
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: '-0.5px',
                color: '#111',
                marginBottom: 12,
              }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 13, color: '#777', lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
        >
          {services.map((svc) => (
            <span
              key={svc}
              style={{
                background: '#fff',
                border: '1px solid #ffd0d0',
                borderRadius: 50,
                padding: '10px 20px',
                fontSize: 13,
                fontWeight: 600,
                color: '#e63030',
              }}
            >
              {svc}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
