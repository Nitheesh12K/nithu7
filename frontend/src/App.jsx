import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Trainers from './components/Trainers'
import JoinForm from './components/JoinForm'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <JoinForm />
    </div>
  )
}
