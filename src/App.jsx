import React from 'react'
import NavBar from './NavBar'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
