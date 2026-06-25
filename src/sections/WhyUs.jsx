import { motion } from 'framer-motion';

const reasons = [
  {
    num: '01',
    title: 'Real Projects. Real Clients.',
    desc: 'Every project in our portfolio was built for an actual client — restaurants, gyms, construction firms, e-commerce, and more. No mock-ups.',
  },
  {
    num: '02',
    title: 'Students Who Ship',
    desc: 'We don\'t just learn — we execute. NexLevr is run by students who have shipped 75+ projects and are hungry to build more.',
  },
  {
    num: '03',
    title: 'Fast Turnaround',
    desc: 'No corporate lag, no layers of approval. We move fast, communicate clearly, and deliver on time — every time.',
  },
];

export default function WhyUs() {
  return (
    <section style={{
      background: '#fff',
      padding: '100px 40px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              Smart Steps
            </span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              letterSpacing: '-1.5px',
              color: '#111',
              marginBottom: 24,
              lineHeight: 1.1,
            }}>
              Why clients choose NexLevr
            </h2>
            <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7, marginBottom: 36 }}>
              A student-led agency that builds, learns, and grows — bringing fresh thinking and real execution to every project we take on.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                background: '#e63030',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              View Our Work →
            </motion.a>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  padding: '36px 0',
                  borderTop: i === 0 ? 'none' : '1px solid #eee',
                  display: 'flex',
                  gap: 24,
                }}
              >
                <span style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#e63030',
                  minWidth: 32,
                  paddingTop: 4,
                }}>
                  {r.num}
                </span>
                <div>
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: '#111',
                    letterSpacing: '-0.5px',
                    marginBottom: 10,
                  }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
