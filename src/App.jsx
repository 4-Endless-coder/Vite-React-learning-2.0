import React, { useState } from 'react'

function App() {
  const [val, setVal] = useState("Ashesh Dash")
  return (
    <div>
      <h1>Get Input field Value</h1>
      <input type="text" value={val} onChange={(event)=> setVal(event.target.value)} placeholder='enter username' />
      <h1>{val}</h1>
      <button onClick={()=>setVal("")}>Clear</button>
    </div>
  )
}

export default App
