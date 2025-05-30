import React from 'react'
import '../index.css'

const Home = () => {
  document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1950&q=80')`

  return (
    <div className="page">
      <h1>Welcome to Coastal Shine</h1>
      <p>
        We specialize in solar panel, window, and billboard cleaning across the coast. 
        Boost your energy efficiency and keep your home or business looking its best.
      </p>
    </div>
  )
}

export default Home
