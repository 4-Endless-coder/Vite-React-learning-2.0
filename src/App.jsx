import React, { useRef } from 'react'

const App = () => {
  const inputRef= useRef(null);
  const h1Ref= useRef(null);
  const inputHandler=()=>{
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color='red'
    inputRef.current.placeholder="enter password"
    inputRef.current.value='123'
  }
  const toggleHandler=()=>{
    
    if(inputRef.current.style.display!='none') {
      inputRef.current.style.display='none'
    } else {
      inputRef.current.style.display='inline'
    }
  }
  const h1Handler=()=>{
    h1Ref.current.style.color='green'
  }
  return (
    <div>
      <h1>useRef</h1>
      <button onClick={toggleHandler}>Toggler</button>
      <input ref={inputRef} type="text" placeholder='enter username' />
      <button onClick={inputHandler}>Focus on input</button>

      <h1 ref={h1Ref}>Click on the mode</h1>
      <button onClick={h1Handler}>Mode</button>
    </div>
  )
}

export default App
