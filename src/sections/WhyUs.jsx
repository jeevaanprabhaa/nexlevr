import { motion } from 'framer-motion';

const clients = [
  { name: 'restaurants', color: '#E8602C', text: '#f2ede4' },
  { name: 'gyms & fitness', color: '#C4B5F5', text: '#0d0d0d' },
  { name: 'e-commerce', color: '#1B5E35', text: '#f2ede4' },
  { name: 'construction', color: '#f5e642', text: '#0d0d0d' },
  { name: 'education', color: '#5B5EF4', text: '#f2ede4' },
  { name: 'interior design', color: '#7B2842', text: '#f2ede4' },
  { name: 'startups', color: '#0d0d0d', text: '#f2ede4' },
  { name: 'saas products', color: '#FFB7C5', text: '#0d0d0d' },
  { name: 'crm systems', color: '#C4B5F5', text: '#0d0d0d' },
];

const reasons = [
  { num: '01', title: 'real projects. real clients.', desc: 'every project in our portfolio was built for an actual client. no mock-ups, no fake work.' },
  { num: '02', title: 'students who ship', desc: 'we\'ve shipped 75+ projects and are hungry to build more. fast, focused, no corporate lag.' },
  { num: '03', title: 'fast turnaround', desc: 'landing pages in 3–5 days. full apps in 2–6 weeks. we always give a clear timeline upfront.' },
];

export default function WhyUs() {
  return (
    <section style={{ background: '#f2ede4', padding: '120px 60px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Headline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
          marginBottom: 80,
        }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Blue blob decoration */}
            <div style={{
              width: 120,
              height: 120,
              background: '#5B5EF4',
              borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
              marginBottom: 28,
              opacity: 0.9,
            }} />
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 900,
              letterSpacing: '-3px',
              lineHeight: 0.95,
              color: '#0d0d0d',
            }}>
              proud to have{' '}
              <em style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
              }}>
                worked with:
              </em>
            </h2>
          </motion.div>

          {/* Client grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 8,
            }}
          >
            {clients.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.06, zIndex: 2 }}
                style={{
                  background: c.color,
                  borderRadius: 16,
                  padding: '20px 16px',
                  aspectRatio: i === 1 || i === 5 ? '1/1.3' : '1/1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'default',
                  border: '2px solid rgba(0,0,0,0.08)',
                }}
              >
                <span style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: c.text,
                  textAlign: 'center',
                  letterSpacing: '-0.2px',
                  lineHeight: 1.3,
                }}>
                  {c.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Why us reasons */}
        <div style={{
          borderTop: '2px solid #0d0d0d',
          paddingTop: 60,
        }}>
          <h3 style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(13,13,13,0.4)',
            marginBottom: 40,
          }}>
            why clients choose nexlevr
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr 1fr',
                  gap: 40,
                  padding: '32px 0',
                  borderBottom: '1px solid rgba(13,13,13,0.1)',
                  alignItems: 'start',
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, color: '#e63030' }}>
                  {r.num}
                </span>
                <h4 style={{
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                  color: '#0d0d0d',
                  lineHeight: 1.3,
                }}>
                  {r.title}
                </h4>
                <p style={{ fontSize: 14, color: 'rgba(13,13,13,0.55)', lineHeight: 1.7 }}>
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
