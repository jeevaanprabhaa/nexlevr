import { motion } from 'framer-motion';

const stickers = [
  { emoji: '😊', bg: '#7B8FFF', angle: -15, style: { bottom: 160, left: '8%' } },
  { emoji: '💜', bg: '#C4B5F5', angle: 12, style: { bottom: 200, left: '22%' } },
  { emoji: '🔥', bg: '#E8602C', angle: -8, style: { bottom: 140, left: '38%' } },
  { emoji: '💯', bg: '#f5e642', angle: 18, style: { bottom: 190, left: '53%' } },
  { emoji: '🫶', bg: '#1B5E35', angle: -12, style: { bottom: 155, left: '67%' } },
  { emoji: '📸', bg: '#f2ede4', angle: 20, style: { bottom: 170, right: '8%' } },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: '#5566EE',
        color: '#f2ede4',
        padding: '80px 60px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Top 3-col layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 60,
          marginBottom: 80,
        }}>
          {/* Col 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              display: 'inline-block',
              background: 'rgba(242,237,228,0.15)',
              borderRadius: 50,
              padding: '6px 16px',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'rgba(242,237,228,0.7)',
              marginBottom: 20,
              border: '1px solid rgba(242,237,228,0.2)',
            }}>
              looking for a job?
            </span>
            <h3 style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 900,
              color: '#f2ede4',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
            }}>
              join the team :)
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(242,237,228,0.55)', marginTop: 12, lineHeight: 1.65 }}>
              student builders wanted. we ship real work, not homework.
            </p>
            <motion.a
              href="mailto:janeeshpofficial@gmail.com"
              whileHover={{ scale: 1.04, background: '#f2ede4', color: '#5566EE' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                marginTop: 20,
                background: 'rgba(242,237,228,0.15)',
                color: '#f2ede4',
                padding: '10px 20px',
                borderRadius: 50,
                fontSize: 13,
                fontWeight: 700,
                border: '1.5px solid rgba(242,237,228,0.3)',
                transition: 'all 0.2s',
              }}
            >
              apply →
            </motion.a>
          </motion.div>

          {/* Col 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span style={{
              display: 'inline-block',
              background: 'rgba(242,237,228,0.15)',
              borderRadius: 50,
              padding: '6px 16px',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'rgba(242,237,228,0.7)',
              marginBottom: 20,
              border: '1px solid rgba(242,237,228,0.2)',
            }}>
              navigate
            </span>
            {['services', 'team', 'pricing', 'faqs', 'internship'].map(item => (
              <a
                key={item}
                href={`#${item}`}
                style={{
                  display: 'block',
                  color: 'rgba(242,237,228,0.55)',
                  fontSize: 15,
                  marginBottom: 10,
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#f2ede4'}
                onMouseLeave={e => e.target.style.color = 'rgba(242,237,228,0.55)'}
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Col 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span style={{
              display: 'inline-block',
              background: 'rgba(242,237,228,0.15)',
              borderRadius: 50,
              padding: '6px 16px',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'rgba(242,237,228,0.7)',
              marginBottom: 20,
              border: '1px solid rgba(242,237,228,0.2)',
            }}>
              contact
            </span>
            <h3 style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 900,
              color: '#f2ede4',
              letterSpacing: '-1px',
              lineHeight: 1.15,
              marginBottom: 8,
            }}>
              janeeshpofficial<br />@gmail.com
            </h3>
            <p style={{ fontSize: 13, color: 'rgba(242,237,228,0.45)', marginBottom: 20, lineHeight: 1.6 }}>
              *we're students and gen-z: please just email us.
            </p>
            <motion.a
              href="mailto:janeeshpofficial@gmail.com"
              whileHover={{ scale: 1.04, background: '#0d0d0d' }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                background: '#f2ede4',
                color: '#5566EE',
                padding: '14px 28px',
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 800,
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              start a project →
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Stickers above wordmark */}
      {stickers.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5, rotate: s.angle - 15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: s.angle }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, type: 'spring', bounce: 0.4 }}
          style={{
            position: 'absolute',
            ...s.style,
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: s.bg,
            border: '2.5px solid rgba(242,237,228,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          {s.emoji}
        </motion.div>
      ))}

      {/* Giant wordmark */}
      <div style={{
        borderTop: '1px solid rgba(242,237,228,0.15)',
        paddingTop: 20,
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          fontSize: 'clamp(80px, 18vw, 220px)',
          fontWeight: 900,
          letterSpacing: '-8px',
          lineHeight: 0.85,
          color: 'rgba(242,237,228,0.12)',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontStyle: 'italic',
        }}>
          nexlevr
        </div>

        {/* Bottom fine print */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 0 32px',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ color: 'rgba(242,237,228,0.35)', fontSize: 12 }}>
            © 2026 nexlevr. all rights reserved.
          </p>
          <p style={{ color: 'rgba(242,237,228,0.35)', fontSize: 12 }}>
            built by students. trusted by businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
