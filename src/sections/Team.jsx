import { motion } from 'framer-motion';

const team = [
  { name: 'Janeesh Pemmasani', role: 'Founder & Product Lead', img: '/iXFRkht7LqgNyHSfRn6jJZcBc.png' },
  { name: 'Maandar Devaneson', role: 'Operations & Quality', img: '/oqyqVRxNZSuMkf7oxhvVMym05o.png' },
  { name: 'Raghav Tiwari', role: 'Frontend Developer', img: '/QNpgGWq5wUYr3AnWIyPOI7B0Wxs.png' },
  { name: 'Yuvam Shah', role: 'UI/UX Designer', img: '/AycIlVaE3kLT5njrZT36T00A.png' },
  { name: 'Dheer Mehta', role: 'Strategy & Research', img: '/lfe8jbDKwE4YHNrkDO6yynPdgs.png' },
  { name: 'Bhushan Chavan', role: 'Brand Designer', img: '/kabXk0ldzBWHLOiQNXEVyfIlvU.png' },
  { name: 'Raj Mehta', role: 'Full Stack Developer', img: '/team/raj.png' },
  { name: 'Shlok Parikh', role: 'Backend Developer', img: '/GZ3GcOsYBatBwVpcm2VUiymi6Zs.png' },
  { name: 'Rajvansh Minglani', role: 'Growth & Outreach', img: '/9zilj3QVFrNjXA7UeeFgHXgrQ.png' },
  { name: 'Sagar Saxena', role: 'Mobile Developer', img: '/team/sagar.png' },
  { name: 'Jeet Mane', role: 'Graphic Designer', img: '/bojY1eSnAQ9HiE85STCwfudg0.png' },
  { name: 'Harsh', role: 'AI & Automation', img: '/FVVY15WOUGC9ISfEfKAeUNGUmo.png' },
];

export default function Team() {
  return (
    <section
      id="team"
      style={{
        background: '#fff',
        padding: '100px 40px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 64,
          flexWrap: 'wrap',
          gap: 24,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#999',
              display: 'block',
              marginBottom: 12,
            }}>
              Our Team
            </span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              letterSpacing: '-1.5px',
              color: '#111',
            }}>
              The builders behind the work
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: 400 }}
          >
            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 20 }}>
              A team of student builders, designers, and strategists — learning in public, shipping in production, and growing with every project.
            </p>
            <motion.a
              href="https://calendly.com/buzzinga"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                background: '#f5e642',
                color: '#111',
                padding: '12px 24px',
                borderRadius: 50,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Join the Team →
            </motion.a>
          </motion.div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))',
          gap: 20,
        }}>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              style={{ cursor: 'pointer' }}
            >
              <div style={{
                borderRadius: 16,
                overflow: 'hidden',
                aspectRatio: '3/4',
                background: '#f0ede6',
                marginBottom: 12,
              }}>
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  onError={e => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#111', marginBottom: 4 }}>
                {member.name}
              </div>
              <div style={{ fontSize: 12, color: '#888' }}>{member.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
