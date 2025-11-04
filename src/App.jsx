import React, { useReducer } from 'react'

const emptyData ={
    name:'',
    password:'',
    email:'',
    city: '',
    address: '',
  }

  const reducer= (data,action)=>{
    return{...data,[action.type]:action.val}
    
  }

const App = () => {
  const [state,dispatch]=useReducer(reducer,emptyData);
  
  return (
    <>
      <h1>Use Reducer</h1>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})} placeholder='enter name' />
      <br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'password'})} placeholder='password' />
      <br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'email'})} placeholder='enter email' />
      <br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'city'})} placeholder='enter city' />
      <br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'address'})} placeholder='enter address' />
      <br /><br />

      <ul>
        <li>Name:{state.name}</li>
        <li>password:{state.password}</li>
        <li>email:{state.email}</li>
        <li>city:{state.city}</li>
        <li>address:{state.address}</li>
      </ul>
      <button onClick={()=>console.log(state)}>Add deatils</button>
    </>
  )
}

export default App
