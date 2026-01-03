import { motion } from 'framer-motion'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nav-container">
        <motion.h1 
          className="logo"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          💪 NITHU GYM
        </motion.h1>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#trainers">Trainers</a></li>
          <li><a href="#join">Join Now</a></li>
        </ul>
      </div>
    </motion.nav>
  )
}
