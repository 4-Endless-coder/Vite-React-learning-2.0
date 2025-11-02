import React, { useActionState } from 'react'

const App = () => {
  const handleLogin =(prevData, formData)=>{
    let name = formData.get('name')
    let password = formData.get('password')
    let regex =/^[A-Z0-9]+$/i;

    if(!name || name.length > 5){
      return{error:'Name should be 5 charchters', name, password}
    }else if(!regex.test(password)){
      return{error:'Password can container only alpha or numeric', name, password}
    }else{
      return{message:'Login Success', name, password}
    }

    // console.log(name, password);
    
  }
  const [data, action,pending]= useActionState(handleLogin);
  
  
  return (
    <>
      <h1>Validation with useActionState</h1>
      {
        data?.message && <span style={{color:'green'}}>{data?.message}</span>
      }
      {
        data?.error && <span style={{color:'red'}}>{data?.error}</span>
      }
      <form action={action}>
        <input defaultValue={data?.name} type="text" name='name' placeholder='enter user name' />
        <br /><br />
        <input defaultValue={data?.password} type="text" name='password' placeholder='enter user password' />
        <br /><br />
        <button>Login</button>
      </form>
    </>
  )
}

export default App
