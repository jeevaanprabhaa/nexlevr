import { motion } from 'framer-motion';

const team = [
  { name: 'Janeesh Pemmasani', role: 'founder & product lead', img: '/iXFRkht7LqgNyHSfRn6jJZcBc.png' },
  { name: 'Maandar Devaneson', role: 'operations & quality', img: '/oqyqVRxNZSuMkf7oxhvVMym05o.png' },
  { name: 'Raghav Tiwari', role: 'frontend developer', img: '/QNpgGWq5wUYr3AnWIyPOI7B0Wxs.png' },
  { name: 'Yuvam Shah', role: 'ui/ux designer', img: '/AycIlVaE3kLT5njrZT36T00A.png' },
  { name: 'Dheer Mehta', role: 'strategy & research', img: '/lfe8jbDKwE4YHNrkDO6yynPdgs.png' },
  { name: 'Bhushan Chavan', role: 'brand designer', img: '/kabXk0ldzBWHLOiQNXEVyfIlvU.png' },
  { name: 'Raj Mehta', role: 'full stack developer', img: '/team/raj.png' },
  { name: 'Shlok Parikh', role: 'backend developer', img: '/GZ3GcOsYBatBwVpcm2VUiymi6Zs.png' },
  { name: 'Rajvansh Minglani', role: 'growth & outreach', img: '/9zilj3QVFrNjXA7UeeFgHXgrQ.png' },
  { name: 'Sagar Saxena', role: 'mobile developer', img: '/team/sagar.png' },
  { name: 'Jeet Mane', role: 'graphic designer', img: '/bojY1eSnAQ9HiE85STCwfudg0.png' },
  { name: 'Harsh', role: 'ai & automation', img: '/FVVY15WOUGC9ISfEfKAeUNGUmo.png' },
];

const CARD_COLORS = [
  '#C4B5F5', '#f5e642', '#5B5EF4', '#E8602C',
  '#C4B5F5', '#1B5E35', '#f5e642', '#5B5EF4',
  '#7B2842', '#E8602C', '#C4B5F5', '#f5e642',
];

export default function Team() {
  return (
    <section id="team" style={{ background: '#f2ede4', padding: '120px 60px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 72,
          flexWrap: 'wrap',
          gap: 24,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 style={{
              fontSize: 'clamp(44px, 7vw, 96px)',
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: '-4px',
              color: '#0d0d0d',
            }}>
              the team{' '}
              <em style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
              }}>
                behind it.
              </em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ maxWidth: 340 }}
          >
            <p style={{ fontSize: 14, color: 'rgba(13,13,13,0.55)', lineHeight: 1.7, marginBottom: 20 }}>
              student builders, designers, and strategists — learning in public, shipping in production.
            </p>
            <motion.a
              href="mailto:janeeshpofficial@gmail.com"
              whileHover={{ scale: 1.04, background: '#0d0d0d', color: '#f2ede4' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                background: '#f5e642',
                color: '#0d0d0d',
                padding: '12px 24px',
                borderRadius: 50,
                fontSize: 13,
                fontWeight: 800,
                border: '2px solid #0d0d0d',
                transition: 'all 0.2s',
              }}
            >
              join the team →
            </motion.a>
          </motion.div>
        </div>

        {/* Team grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 12,
        }}>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              style={{ cursor: 'default' }}
            >
              <div style={{
                borderRadius: 18,
                overflow: 'hidden',
                aspectRatio: '3/4',
                background: CARD_COLORS[i],
                marginBottom: 12,
                position: 'relative',
                border: '2px solid rgba(0,0,0,0.08)',
              }}>
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.07)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  onError={e => { e.target.style.opacity = '0'; }}
                />
              </div>
              <div style={{ fontWeight: 800, fontSize: 14, color: '#0d0d0d', marginBottom: 3, letterSpacing: '-0.3px' }}>
                {member.name}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(13,13,13,0.45)', fontWeight: 500 }}>
                {member.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
