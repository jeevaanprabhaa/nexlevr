import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'discover', desc: 'a call to understand your business, goals, and exactly what needs to be built.', color: '#5B5EF4' },
  { num: '02', title: 'design', desc: 'wireframes, tech stack, and a clear roadmap before a single line of code is written.', color: '#1B5E35' },
  { num: '03', title: 'build', desc: 'our team executes with precision. regular updates at every milestone.', color: '#E8602C' },
  { num: '04', title: 'ship', desc: 'we launch, hand off, and support. built to last — not just to demo.', color: '#7B2842' },
];

export default function HowItWorks() {
  return (
    <section style={{ background: '#0d0d0d', padding: '120px 60px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
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
            color: '#f2ede4',
          }}>
            simple process.{' '}
            <em style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
            }}>
              real delivery.
            </em>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 12,
          marginBottom: 80,
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              style={{
                background: '#1a1a1a',
                borderRadius: 20,
                padding: '36px 28px',
                border: '1px solid rgba(242,237,228,0.06)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* color accent line */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 3,
                background: step.color,
              }} />

              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: step.color,
                marginBottom: 20,
                letterSpacing: '1px',
              }}>
                {step.num}
              </div>
              <h3 style={{
                fontSize: 28,
                fontWeight: 900,
                color: '#f2ede4',
                letterSpacing: '-1px',
                marginBottom: 12,
                lineHeight: 1,
              }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(242,237,228,0.45)', lineHeight: 1.65 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 40,
            borderTop: '1px solid rgba(242,237,228,0.1)',
            paddingTop: 40,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 900,
              letterSpacing: '-3px',
              color: '#e63030',
              lineHeight: 1,
            }}>
              75<span style={{ fontSize: '0.5em' }}>+</span>
            </div>
            <p style={{ color: 'rgba(242,237,228,0.4)', fontSize: 13, marginTop: 6 }}>
              projects shipped across 10+ industries
            </p>
          </div>

          <div style={{ flex: 1, borderLeft: '1px solid rgba(242,237,228,0.1)', paddingLeft: 40 }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['web platforms', 'brand identity', 'ui/ux design', 'ai products', 'full stack'].map((svc) => (
                <motion.span
                  key={svc}
                  whileHover={{ background: '#e63030', color: '#fff', borderColor: '#e63030' }}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(242,237,228,0.15)',
                    borderRadius: 50,
                    padding: '8px 18px',
                    fontSize: 12,
                    fontWeight: 600,
                    color: 'rgba(242,237,228,0.5)',
                    cursor: 'default',
                    transition: 'all 0.2s',
                  }}
                >
                  {svc}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
