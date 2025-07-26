import React, { useRef } from 'react'
import UserInput from './UserInput';

const App = () => {
  const inputRef= useRef(null)

  const updateInput=()=>{
    inputRef.current.value=200;
    inputRef.current.focus();
    inputRef.current.style.color='red'
    
  }
  return (
    <div>
      <h1>Forward Ref</h1>
        <UserInput ref={inputRef}/>
        <button onClick={updateInput}>UpdateRef</button>
    </div>
  )
}

export default App
