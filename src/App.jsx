import React from 'react'
import User from './User'

const App = () => {
  const displayName=(name)=>{
        alert(name)
    }
    const getUser=()=>{
      alert("Get user function called")
    }
  return (
    <div>
      <h1>call Parent component Function from child component</h1>
      <User displayName={displayName} name="Ashesh" getUser={getUser}/>
      <User displayName={displayName} name="Peter" getUser={getUser}/>
      <User displayName={displayName} name="Bruce" getUser={getUser}/>
      <User displayName={displayName} name="Sam" getUser={getUser}/>
    </div>
  )
}

export default App
