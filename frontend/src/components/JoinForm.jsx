import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/joinform.css'

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: 'Cardio Blast'
  })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('http://localhost:8080/api/members/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('✅ Welcome to NITHU GYM! Your membership is confirmed.')
        setFormData({ name: '', email: '', plan: 'Cardio Blast' })
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage(`❌ ${data.error || 'Something went wrong'}`)
      }
    } catch (error) {
      setMessage('❌ Failed to connect to server. Make sure backend is running!')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="join" className="join-section">
      <motion.div
        className="join-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Join NITHU GYM Today
        </motion.h2>

        <form onSubmit={handleSubmit} className="join-form">
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label htmlFor="plan">Select Plan</label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
            >
              <option value="Cardio Blast">Cardio Blast</option>
              <option value="Strength Training">Strength Training</option>
              <option value="Weight Loss">Weight Loss</option>
            </select>
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            disabled={loading}
          >
            {loading ? 'Joining...' : 'Join Now'}
          </motion.button>
        </form>

        {message && (
          <motion.p
            className={`form-message ${message.includes('✅') ? 'success' : 'error'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
