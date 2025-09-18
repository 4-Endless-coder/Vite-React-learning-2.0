import React, { useActionState } from 'react'

const App = () => {

  const handleSubmit=async (previousData, formData)=>{
    let name=formData.get('name');
    let password=formData.get('password');
    await new Promise(res=>setTimeout(res, 2000))
    // console.log('handleSubmit called', name, password);
    if(name && password){
      return {messeage: 'Data Submited', name, password}
    } else {
      return {error: 'Failed to submit, please try again', name, password}
    }
    
  }
  const [data, action, pending]=useActionState(handleSubmit, undefined)
  console.log(data);
  
  return (
    <div>
      <h1>useActionState Hook in React js</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder='enter name' name='name' />
        <br /><br />
        <input defaultValue={data?.name} type="password" placeholder='enter password' name='password'/>
        <br /><br />
        <button disabled={pending}>Submit</button>
      </form>
      {
          data?.error && <span style={{color:'red'}}>{data?.error}</span>
        }
        <br />
          {
          data?.messeage && <span style={{color:'green'}}>{data?.messeage}</span>
        }
        {/* feature test */}
        <h3>Name : {data?.name}</h3>
        <h3>Password : {data?.password}</h3>
    </div>
  )
}

export default App
