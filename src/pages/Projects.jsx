import React from 'react'
import '../index.css'

const Projects = () => {
  document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80')`

  return (
    <div className="page">
      <h1>Recent Projects</h1>
      <ul>
        <li>Solar Panel Cleaning – Simon's Town</li>
        <li>High-rise Window Wash – Cape Town CBD</li>
        <li>Billboard Shine – Muizenberg Junction</li>
      </ul>
      <p>Want to feature here? Book your clean with us today!</p>
    </div>
  )
}

export default Projects
