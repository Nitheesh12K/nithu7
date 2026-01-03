import { motion } from 'framer-motion'
import '../styles/trainers.css'

export default function Trainers() {
  const trainers = [
    {
      id: 1,
      name: 'Alex Johnson',
      specialty: 'Strength Coach',
      image: '👨‍🏫'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      specialty: 'Cardio Expert',
      image: '👩‍🏫'
    },
    {
      id: 3,
      name: 'Mike Chen',
      specialty: 'Nutrition Specialist',
      image: '👨‍⚕️'
    },
    {
      id: 4,
      name: 'Emma Davis',
      specialty: 'Yoga Instructor',
      image: '🧘‍♀️'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="trainers" className="trainers">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Meet Our Trainers
      </motion.h2>

      <motion.div
        className="trainers-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {trainers.map((trainer) => (
          <motion.div
            key={trainer.id}
            className="trainer-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="trainer-image">{trainer.image}</div>
            <h3>{trainer.name}</h3>
            <p className="trainer-specialty">{trainer.specialty}</p>
            <motion.button
              className="trainer-btn"
              whileHover={{ backgroundColor: '#ff6b35' }}
              whileTap={{ scale: 0.9 }}
            >
              Book Session
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
