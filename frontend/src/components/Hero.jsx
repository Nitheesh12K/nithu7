import { motion } from 'framer-motion'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Transform Your Body
        </motion.h2>
        
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join NITHU GYM and achieve your fitness goals
        </motion.p>

        <motion.button
          className="hero-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}
        >
          Start Your Journey
        </motion.button>
      </div>

      <motion.div
        className="hero-animation"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="dumbbell">🏋️</div>
      </motion.div>
    </section>
  )
}
