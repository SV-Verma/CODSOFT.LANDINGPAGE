import './App.css';
import React from 'react'
import {BrowserRouter as  Router, Route, Routes} from "react-router-dom"
import Home from "./Home"
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';


const App = () => {
  return (
  <>
    <Router>
    <Navbar />
      <Routes >
      <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        </Routes>
      
        <Footer />
      </Router>
  </>
  )
}

export default App

