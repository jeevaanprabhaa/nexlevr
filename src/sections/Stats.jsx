import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUp({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label: 'Brands we\'ve scaled', value: 21, suffix: '+' },
  { label: 'Reels produced & deployed', value: 250, suffix: '+' },
  { label: 'Revenue generated for clients', value: 70, suffix: 'L+' },
];

export default function Stats() {
  return (
    <section
      id="about-us"
      style={{
        background: '#fff',
        padding: '100px 40px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 80 }}
        >
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            marginBottom: 20,
            color: '#111',
          }}>
            About NexLevr
          </h2>
          <p style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: '#555',
            maxWidth: 700,
          }}>
            NexLevr builds media ecosystems that turn brands into revenue machines. From scroll-stopping content to closing-ready sales funnels. We don't just show up online — we dominate. Strategy. Execution. Results. That's the only order we know.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 40,
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: '#fff5f5',
                borderRadius: 20,
                padding: '40px 32px',
                borderLeft: '4px solid #e63030',
              }}
            >
              <div style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 900,
                letterSpacing: '-2px',
                color: '#e63030',
                lineHeight: 1,
                marginBottom: 12,
              }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p style={{ fontSize: 15, color: '#777', fontWeight: 500 }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
