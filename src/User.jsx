import React from 'react'

const User = ({displayName, name,getUser}) => {
    
  return (
    <div>
      <button onClick={()=>displayName(name)}>Display Name</button>
      <button onClick={()=>getUser()}>getUser</button>
    </div>
  )
}

export default User
