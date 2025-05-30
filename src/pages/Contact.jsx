import React, { useState } from 'react'
import '../index.css'

const Contact = () => {
  document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&w=1950&q=80')`

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent! We'll reply shortly.")
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} /><br /><br />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} /><br /><br />
        <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea><br /><br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
