import React from 'react'
import UserProfile from './UserProfile'

const App = () => {
  return (
    <div>
      <h1 className='heading'>Style with CSS Module</h1>
      <div style={{display:'flex', flexWrap:'wrap'}}>
      <UserProfile/>
      <UserProfile/>
      <UserProfile/>
      <UserProfile/>
      <UserProfile/>
      <UserProfile/>
      <UserProfile/>
      <UserProfile/>
      <UserProfile/>
      </div>
    </div>
  )
}

export default App
