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
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section id="about-us" style={{ background: '#f2ede4', padding: '120px 60px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Big headline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 80 }}
        >
          <h2 style={{
            fontSize: 'clamp(44px, 7vw, 96px)',
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: '-4px',
            color: '#0d0d0d',
          }}>
            a student agency{' '}
            <em style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              letterSpacing: '-2px',
            }}>
              built for
            </em>
            <br />the future.
          </h2>
          <p style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: '#0d0d0d',
            opacity: 0.55,
            maxWidth: 560,
            marginTop: 28,
            fontWeight: 400,
          }}>
            nexlevr is a student-led growth agency — built to ship real products, serve real clients, and grow real businesses. we build it all under one roof.
          </p>
        </motion.div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}>
          {[
            { value: 75, suffix: '+', label: 'projects shipped' },
            { value: 16, suffix: '+', label: 'brands built' },
            { value: 12, suffix: '+', label: 'student builders' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: i === 1 ? '#0d0d0d' : '#f2ede4',
                border: '2px solid #0d0d0d',
                padding: '48px 40px',
                borderRadius: i === 0 ? '20px 0 0 20px' : i === 2 ? '0 20px 20px 0' : 0,
              }}
            >
              <div style={{
                fontSize: 'clamp(52px, 6vw, 80px)',
                fontWeight: 900,
                letterSpacing: '-4px',
                lineHeight: 1,
                color: i === 1 ? '#f2ede4' : '#0d0d0d',
                marginBottom: 8,
              }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p style={{
                fontSize: 14,
                color: i === 1 ? 'rgba(242,237,228,0.55)' : 'rgba(13,13,13,0.5)',
                fontWeight: 500,
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: 48, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.04, background: '#0d0d0d', color: '#f2ede4' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#0d0d0d',
              color: '#f2ede4',
              padding: '14px 28px',
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 700,
              transition: 'all 0.2s',
            }}
          >
            see what we build →
          </motion.a>
          <span style={{ fontSize: 13, color: 'rgba(13,13,13,0.4)' }}>
            real projects · real clients · real results
          </span>
        </motion.div>
      </div>
    </section>
  );
}
