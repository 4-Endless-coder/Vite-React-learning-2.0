import React, { use, useEffect } from 'react'

const Counter = ({count,data}) => {
    
  useEffect(() => {
    console.log('mounting');
  },[])

  useEffect(() => {
    console.log('Update Phase');
  },[count])

  useEffect(() => {
    return()=> {
      console.log('Unmounting');
      
    }
  },[])

  return (
    <div>
      <h1>Counter value {count}</h1>
      <h1>DATA value {data}</h1>
    </div>
  )
}

export default Counter
