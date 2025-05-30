import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import QuoteForm from './pages/QuoteForm';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <nav style={{ position: 'fixed', top: 10, left: 10 }}>
        <Link to="/">Home</Link> | 
        <Link to="/projects">Projects</Link> | 
        <Link to="/quote">Quote</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/quote" element={<QuoteForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
