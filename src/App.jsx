import React from 'react'
import { useFormStatus } from 'react-dom';

const App = () => {
  const handleSubmit=async()=>{
    await new Promise(res=>setTimeout(res,5000))
    console.log('submit');
    
  }

  const CustomerForm=()=>{
    const {pending} = useFormStatus();
    console.log(pending);
    
    return (
      <div>
        <input type="text" placeholder='Enter Name' style={{margin:'3px'}}/>
        <input type="password" placeholder='Enter Paswword' style={{margin:'3px'}}/>
        <br /> <br />
        <button disabled={pending}>{pending? 'Submiting...':'Submit'}</button>
      </div>
    )
  }
  return (
    <div>
      <h1>useFormStaus hook</h1>
      <form action={handleSubmit}>
        <CustomerForm/>
      </form>
    </div>
  )
}

export default App
