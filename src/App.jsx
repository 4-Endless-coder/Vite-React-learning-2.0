import { useState } from 'react'
import User from './User';

function Aap() {
  // const [display, setDispaly] =useState(true);
  const [display, setDisplay] =useState(0);
  let content;
  if (display === 0) {
    content = <h1>Welcome</h1>
  } else if (display === 1) {
    content = <h2>Ashesh Dash</h2>
  } else if (display === 2) {
    content = <User/>
  } else {
    content = <h3>invalid option</h3>
  }
  return (
    <div>
      <h1>Toggle in React</h1>
      {/* <button onClick={()=>setDispaly(!display)}>Toggle</button> */}
      
      {/* {
        display ? <h1>Ashesh Dash</h1> : null
      }
       */}
      {/* {
        display ? <User/> : null
      } */}

      <button onClick={() => setDisplay(0)}>Show Welcome</button>
      <button onClick={() => setDisplay(1)}>Show Name</button>
      <button onClick={() => setDisplay(2)}>Show User</button>
      <button onClick={() => setDisplay(3)}>Show Invalid</button>
        
        {content}
    </div>
  )
}

export default Aap;