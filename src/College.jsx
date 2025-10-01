import React from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'

const College = () => {
  return (
    <div className='college' style={{textAlign:'center'}}>
      <h1>College Page</h1>
      <h3><Link to="/" >Go Back to Home</Link></h3>
      <NavLink className='link' to=''>Student</NavLink>
      <NavLink className='link' to='department'>Departments</NavLink>
      <NavLink className='link' to='details'>College Details</NavLink>
      <Outlet/>
    </div>
  )
}

export default College
