import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import UserList from './UserList'
import UserAdd from './UserAdd'
import UserEdit from './UserEdit'

const App = () => {
  return (
    <>
    <ul className='nav-list'>
      <li>
        <NavLink to="/">List</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add User</NavLink>
      </li>
    </ul>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>
    </>
  )
}

export default App
