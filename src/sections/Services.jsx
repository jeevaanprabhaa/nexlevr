import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Platforms',
    desc: 'Custom web apps, SaaS dashboards, and full-stack platforms built from scratch and shipped fast.',
    link: '#contact',
    icon: '🌐',
  },
  {
    title: 'Brand Identity',
    desc: 'Logo systems, visual language, and brand kits that make your business impossible to ignore.',
    link: '#contact',
    icon: '🎨',
  },
  {
    title: 'UI/UX Design',
    desc: 'User research, wireframes, and pixel-perfect interfaces designed for conversion and usability.',
    link: '#contact',
    icon: '✏️',
  },
  {
    title: 'AI Products',
    desc: 'AI-powered tools, automations, and smart product features integrated into your workflow.',
    link: '#contact',
    icon: '🤖',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotate: 1.5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

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
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            color: '#fff',
            marginBottom: 80,
            maxWidth: 600,
          }}
        >
          What we actually build for you
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
          }}
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.25 } }}
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
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4, type: 'spring', bounce: 0.4 }}
                style={{ fontSize: 36, marginBottom: 20, display: 'inline-block' }}
              >
                {svc.icon}
              </motion.div>
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
                whileHover={{ x: 6, color: '#ff5555' }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#e63030',
                  fontWeight: 600,
                  fontSize: 14,
                  transition: 'color 0.2s',
                }}
              >
                Start a {svc.title} project →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
