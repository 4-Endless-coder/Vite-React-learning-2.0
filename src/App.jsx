import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

const App = () => {
  return (
    <>
    <Link to="/" >Home</Link>
    <br />
    <Link to="about" >About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
