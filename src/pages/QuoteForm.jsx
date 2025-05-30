import React, { useState } from 'react'
import '../index.css'

const QuoteForm = () => {
  document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')`

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Quote submitted! We'll get back to you shortly.")
    setFormData({ name: '', email: '', service: '', message: '' })
  }

  return (
    <div className="page">
      <h1>Get a Quote</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} /><br /><br />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} /><br /><br />
        <select name="service" required value={formData.service} onChange={handleChange}>
          <option value="">Select Service</option>
          <option value="solar">Solar Panel Cleaning</option>
          <option value="windows">Window Cleaning</option>
          <option value="billboard">Billboard Cleaning</option>
        </select><br /><br />
        <textarea name="message" placeholder="Additional Details" value={formData.message} onChange={handleChange}></textarea><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default QuoteForm
