import React from 'react'
import NavBar from './NavBar'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import College from "./College"
import Student from "./Student"
import Department from "./Department"
import Details from "./Details"
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/college" element={<College/>}>
        <Route path='student' element={<Student />} />
        <Route path='department' element={<Department />} />
        <Route path='details' element={<Details />} />
        </Route>
        {/* <Route path='/*' element={<PageNotFound/>}/> */}
        <Route path='*' element={<Navigate to='/login' />}/>
      </Routes>
    </>
  )
}

export default App
