import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import QuoteForm from './pages/QuoteForm'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import './index.css'

const App = () => (
  <BrowserRouter>
    <nav className="navbar">
      <NavLink to="/" className="navlink">Home</NavLink>
      <NavLink to="/projects" className="navlink">Recent Projects</NavLink>
      <NavLink to="/quote" className="navlink">Get a Quote</NavLink>
      <NavLink to="/contact" className="navlink">Contact</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/quote" element={<QuoteForm />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

