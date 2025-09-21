import React from 'react'
import useToggle from './useToggle'

const App = () => {
  const [value, toggleValue] = useToggle(true) 

  const [data, setData] = useToggle(true) 
  // console.log('val---', value);
  
  return (
    <div>
      <button onClick={toggleValue}>Toggle Head</button>
      <button onClick={()=>toggleValue(false)}>Hide Heading</button>
      <button onClick={()=>toggleValue(true)}>Show Heading</button>
      {
        value? <h1>Custom Hooks</h1>: null
      }
      <hr />
      <button onClick={setData}>Toggle Head</button>
      <button onClick={()=>setData(false)}>Hide Heading</button>
      <button onClick={()=>setData(true)}>Show Heading</button>

      {
        data? <h1>Second head</h1> : null
      }
      
    </div>
  )
}

export default App
