import React, { use, useEffect } from 'react'

const Counter = ({count,data}) => {
    const handleCounter=()=>{
        console.log("handlecounter called");
        
    }

    const handleData=()=>{
        console.log("handleData called");
    }

    useEffect(()=>{
        handleCounter();
        
    },[])
    
    useEffect(()=>{
        handleData();
    },[data,count])
  return (
    <div>
      <h1>Counter value {count}</h1>
      <h1>DATA value {data}</h1>
    </div>
  )
}

export default Counter
