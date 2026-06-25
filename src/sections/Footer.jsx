import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: '#111',
        color: '#fff',
        padding: '80px 40px 40px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 60,
          marginBottom: 80,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <img
                src="/logo.png"
                alt="NexLevr"
                style={{ width: 28, height: 28, borderRadius: 5, objectFit: 'cover' }}
              />
              <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.5px' }}>NexLevr</span>
            </div>
            <p style={{ fontSize: 14, color: '#777', lineHeight: 1.7, maxWidth: 260 }}>
              Student-led growth agency. We build, we ship, you grow. Real projects. Real results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 20, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Navigate
            </h4>
            {['Our Work', 'Services', 'Team', 'Internship', 'FAQs'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                style={{
                  display: 'block',
                  color: '#777',
                  fontSize: 14,
                  marginBottom: 12,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#e63030'}
                onMouseLeave={e => e.target.style.color = '#777'}
              >
                {item}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 20, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Work with us
            </h4>
            <p style={{ color: '#777', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              Have a project in mind? Let's build it together.
            </p>
            <motion.a
              href="mailto:janeeshpofficial@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                background: '#e63030',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Start a Project →
            </motion.a>
          </motion.div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 32,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{ color: '#555', fontSize: 13 }}>
            © 2026 NexLevr. All rights reserved.
          </p>
          <p style={{ color: '#555', fontSize: 13 }}>
            Built by students. Trusted by businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
