import React, { lazy, Suspense, useState } from 'react'
// import User from './User'
const User = lazy(()=>import('./User'));

const App = () => {
  const [load, setLoad]= useState(false)
  return (
    <>
      <h1>Lazy Loading</h1>
      {
        load? <Suspense fallback={<h3>Loading...</h3>}> <User /></Suspense>:null
      }
      <button onClick={()=>setLoad(true)}>Laod User</button>
    </>
  )
}

export default App
