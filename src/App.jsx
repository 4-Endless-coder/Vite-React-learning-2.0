import React, { startTransition, useState, useTransition } from 'react'

const App = () => {
  // const [pending, setPending] = useState(false)

  // const handleButton =async ()=>{
  //   setPending(true)
  // await new Promise(res=>setTimeout(res, 2000))  
  //   setPending
  // }
const [pending, startTransition] = useTransition();

const handleButton=()=>{
  startTransition(async ()=>{
    await new Promise(res=>setTimeout(res, 5000))
  })
}
  return (
    <div>
      <h1>useTransition Hook</h1>
      {/* <button disabled={pending} onClick={handleButton}>Click</button> */}

      {
        pending ?
        <img style={{width:'100px'}}src="https://media.tenor.com/joLYNfFQGDgAAAAi/loading.gif" alt="" />
        :null
      }
      <button disabled={pending} onClick={handleButton}>Click</button>
    </div>
  )
}

export default App
