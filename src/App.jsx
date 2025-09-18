import React, { useId } from 'react'

const App = () => {
  return (
    <div>
      <UserForm/>
      <hr />
      <UserForm/>
    </div>
  )
}

export default App

export const UserForm = () => {
  const user = useId()
  // const password = useId()
  // const skill = useId()
  // const terms = useId()
  return (
    <div>
      <form action="">
        <label htmlFor={user+"name"}>Enter Username</label>
        <input id={user+"name"} type="text" placeholder='enter name' />
        <br /><br />  
        <label htmlFor={user+"password"}>Enter password</label>
        <input id={user+"password"} type="password" placeholder='enter password' />
        <br /><br />
        <label htmlFor={user+"skill"}>Enter skill</label>
        <input id={user+"skill"} type="text" placeholder='enter skill' />
        <br /> <br />
        <label htmlFor={user+"terms"}>Terms and Conditions</label>
        <input id={user+"terms"} type="checkbox" placeholder='enter skill' />
      </form>
    </div>
  )
}
