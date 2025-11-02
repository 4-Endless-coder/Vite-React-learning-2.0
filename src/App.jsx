import React, { useState } from 'react'

const App = () => {
  const [name, setName]= useState("");
  const [nameErr, setNameErr]= useState();
  const [password, setPassword]= useState("");
  const [passErr, setPassErr]= useState();

  const handleName=(e)=>{
    console.log(e.target.value);
    if(e.target.value.length > 5){
      setNameErr("Please Enter Name less than 5 characters");
    }else{
      setNameErr();
    }
  }

    const handlePassword=(e)=>{
    let regex= /^[A-Z0-9]+$/i;
    if(regex.test(e.target.value)){
      setPassErr();
      
    }else{
      setPassErr("Password must be alphanumeric");
    }
  }

  return (
    <>
      <input className={nameErr?'error':''} type="text" onChange={handleName} placeholder='Enter Name' />
      <span className='red-color'>{nameErr && nameErr}</span>
      <br /><br />
      <input className={passErr?'error':''} type="text" onChange={handlePassword} placeholder='Enter Password' />
      <span className='red-color'>{passErr && passErr}</span>
      <br /><br />
      <button disabled={passErr || nameErr}>Login</button>
    </>
  )
 }

export default App;
