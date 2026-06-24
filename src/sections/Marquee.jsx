import { motion } from 'framer-motion';

const items = [
  'Social Media', '✦', 'Graphics', '✦', 'Sales', '✦', 'Websites', '✦',
  'Video Editing', '✦', 'Brand Strategy', '✦', 'Content Creation', '✦',
  'Lead Generation', '✦', 'Funnel Building', '✦',
];

export default function Marquee({ dark = false }) {
  const repeated = [...items, ...items, ...items];

  return (
    <div style={{
      background: dark ? '#111' : '#e63030',
      padding: '20px 0',
      overflow: 'hidden',
      borderTop: dark ? 'none' : '1px solid #c42424',
      borderBottom: dark ? 'none' : '1px solid #c42424',
    }}>
      <motion.div
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          display: 'flex',
          gap: 40,
          whiteSpace: 'nowrap',
          width: 'max-content',
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: 14,
              fontWeight: item === '✦' ? 400 : 700,
              color: item === '✦' ? 'rgba(255,255,255,0.6)' : '#fff',
              letterSpacing: item === '✦' ? '0' : '0.5px',
              textTransform: 'uppercase',
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
