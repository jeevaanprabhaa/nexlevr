import { motion } from 'framer-motion';

const services = [
  {
    title: 'Social Media',
    desc: 'Scroll-stopping content that builds communities and drives engagement at scale.',
    link: '#pricing',
    icon: '📱',
  },
  {
    title: 'Graphics',
    desc: 'Visual identity and design systems that make your brand unmissable.',
    link: '#pricing',
    icon: '🎨',
  },
  {
    title: 'Sales',
    desc: 'Funnels, scripts, and strategies engineered to close clients consistently.',
    link: '#pricing',
    icon: '💰',
  },
  {
    title: 'Websites',
    desc: 'High-converting websites built to turn visitors into paying customers.',
    link: '#pricing',
    icon: '🌐',
  },
];

export default function Services() {
  return (
    <section
      style={{
        background: '#111',
        padding: '100px 40px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 20 }}
        >
          <span style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#e63030',
          }}>
            Our Services
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            color: '#fff',
            marginBottom: 80,
            maxWidth: 600,
          }}
        >
          What actually creates the results?
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              style={{
                background: i % 2 === 0 ? '#1a1a1a' : '#1e1e1e',
                borderRadius: 24,
                padding: '48px 40px',
                border: i % 2 === 0
                  ? '1px solid rgba(230,48,48,0.2)'
                  : '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 20 }}>{svc.icon}</div>
              <h3 style={{
                fontSize: 32,
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-1px',
                marginBottom: 16,
              }}>
                {svc.title}
              </h3>
              <p style={{ fontSize: 15, color: '#888', lineHeight: 1.7, marginBottom: 28 }}>
                {svc.desc}
              </p>
              <motion.a
                href={svc.link}
                whileHover={{ x: 4 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#e63030',
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Explore {svc.title} →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
