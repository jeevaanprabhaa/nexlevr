import { motion } from 'framer-motion';

const team = [
  { name: 'Janeesh Pemmasani', role: 'founder & product lead', img: '/team/janeesh.png' },
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

        {/* Team — single founder card, centred */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              style={{ cursor: 'default', width: 320, textAlign: 'center' }}
            >
              <div style={{
                borderRadius: 24,
                overflow: 'hidden',
                aspectRatio: '3/4',
                background: '#C4B5F5',
                marginBottom: 18,
                position: 'relative',
                border: '2.5px solid #0d0d0d',
                boxShadow: '6px 8px 0 #0d0d0d',
              }}>
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                {/* founder badge */}
                <div style={{
                  position: 'absolute',
                  bottom: 16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#f5e642',
                  border: '2px solid #0d0d0d',
                  borderRadius: 50,
                  padding: '6px 16px',
                  fontSize: 11,
                  fontWeight: 800,
                  color: '#0d0d0d',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  boxShadow: '2px 2px 0 #0d0d0d',
                }}>
                  founder
                </div>
              </div>
              <div style={{ fontWeight: 900, fontSize: 22, color: '#0d0d0d', marginBottom: 6, letterSpacing: '-0.6px' }}>
                {member.name}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(13,13,13,0.45)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                {member.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
