import React, { use, useRef } from 'react'

const App = () => {
  const userRef=useRef();
  const passwordRef=useRef();

  const handleForm=(event)=>{
    event.preventDefault();
    const user= document.querySelector('#user').value
    const password= document.querySelector('#password').value
    console.log(user);
    console.log(password);
    
  }
  const handleForRef=(event)=>{
    event.preventDefault();
    const user= userRef.current.value
    const password= passwordRef.current.value
    console.log('handleForRef', user, password);
    
  }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form action="post" onSubmit={handleForm}>
        <input type="text" placeholder='enter user name' id='user' />
        <br /><br />
        <input type="password" placeholder='enter user password' id='password' />
        <button>Submit</button>
      </form>

      <hr />
       <h1>Uncontrolled Component with useRef</h1>
      <form action="post" onSubmit={handleForRef}>
        <input type="text" ref={userRef} placeholder='enter user name' id='userRef' />
        <br /><br />
        <input type="password" ref={passwordRef} placeholder='enter user password' id='passwordRef' />
        <button>SubmitRef</button>
      </form>

    </div>
  )
}

export default App
