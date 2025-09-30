import React from 'react'
import NavBar from './NavBar'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path='/*' element={<PageNotFound/>}/> */}
        <Route path='*' element={<Navigate to='/login' />}/>
      </Routes>
    </>
  )
}

export default App
