import { motion } from 'framer-motion';

const clients = [
  { name: 'restaurants',    color: '#E8602C', text: '#f2ede4' },
  { name: 'gyms & fitness', color: '#C4B5F5', text: '#0d0d0d' },
  { name: 'e-commerce',     color: '#1B5E35', text: '#f2ede4' },
  { name: 'construction',   color: '#f5e642', text: '#0d0d0d' },
  { name: 'education',      color: '#5B5EF4', text: '#f2ede4' },
  { name: 'interior design',color: '#7B2842', text: '#f2ede4' },
  { name: 'startups',       color: '#0d0d0d', text: '#f2ede4' },
  { name: 'saas products',  color: '#FFB7C5', text: '#0d0d0d' },
  { name: 'crm systems',    color: '#C4B5F5', text: '#0d0d0d' },
];

const reasons = [
  { num: '01', title: 'real projects. real clients.', desc: 'every project in our portfolio was built for an actual client. no mock-ups, no fake work.' },
  { num: '02', title: 'students who ship',            desc: "we've shipped 75+ projects and are hungry to build more. fast, focused, no corporate lag." },
  { num: '03', title: 'fast turnaround',              desc: 'landing pages in 3–5 days. full apps in 2–6 weeks. we always give a clear timeline upfront.' },
];

// stagger container for the grid
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cellVariants = {
  hidden:  { opacity: 0, scale: 0.75, y: 20 },
  visible: { opacity: 1, scale: 1,    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyUs() {
  return (
    <section style={{ background: '#f2ede4', padding: '120px 60px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>

        {/* ── Headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 60 }}
        >
          {/* blob decoration */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: 80,
              height: 80,
              background: '#5B5EF4',
              borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
              margin: '0 auto 24px',
            }}
          />

          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 900,
            letterSpacing: '-4px',
            lineHeight: 0.92,
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

        {/* ── Client grid (centered, 3-col, staggered) ── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10,
            maxWidth: 640,
            margin: '0 auto 80px',
          }}
        >
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              variants={cellVariants}
              whileHover={{ scale: 1.06, zIndex: 2 }}
              style={{
                background: c.color,
                borderRadius: 18,
                padding: '24px 16px',
                aspectRatio: i === 1 || i === 5 ? '1 / 1.25' : '1 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(0,0,0,0.07)',
                cursor: 'default',
              }}
            >
              <span style={{
                fontSize: 13,
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

        {/* ── Why us reasons ── */}
        <div style={{
          borderTop: '2px solid #0d0d0d',
          paddingTop: 60,
          textAlign: 'left',
        }}>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'rgba(13,13,13,0.35)',
              marginBottom: 40,
              textAlign: 'center',
            }}
          >
            why clients choose nexlevr
          </motion.h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '52px 1fr 1fr',
                  gap: 36,
                  padding: '30px 0',
                  borderBottom: '1px solid rgba(13,13,13,0.09)',
                  alignItems: 'start',
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 700, color: '#e63030', paddingTop: 3 }}>
                  {r.num}
                </span>
                <h4 style={{
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: '-0.4px',
                  color: '#0d0d0d',
                  lineHeight: 1.3,
                }}>
                  {r.title}
                </h4>
                <p style={{ fontSize: 14, color: 'rgba(13,13,13,0.5)', lineHeight: 1.75 }}>
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
