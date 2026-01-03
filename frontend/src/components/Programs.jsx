import { motion } from 'framer-motion'
import '../styles/programs.css'

export default function Programs() {
  const programs = [
    {
      id: 1,
      name: 'Cardio Blast',
      icon: '🏃',
      description: 'High-intensity cardio training for stamina and endurance',
      color: '#ff6b35'
    },
    {
      id: 2,
      name: 'Strength Training',
      icon: '💪',
      description: 'Build muscle and power with weight training programs',
      color: '#f7931e'
    },
    {
      id: 3,
      name: 'Weight Loss',
      icon: '⚡',
      description: 'Effective weight loss programs with nutrition guidance',
      color: '#fdb913'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="programs" className="programs">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Programs
      </motion.h2>

      <motion.div
        className="programs-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {programs.map((program) => (
          <motion.div
            key={program.id}
            className="program-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{ borderTopColor: program.color }}
          >
            <div className="program-icon">{program.icon}</div>
            <h3>{program.name}</h3>
            <p>{program.description}</p>
            <motion.button
              className="program-btn"
              whileHover={{ backgroundColor: program.color }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
