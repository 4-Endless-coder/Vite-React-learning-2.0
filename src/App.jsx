import React, { use, useState } from 'react'
import Counter from './Counter'

const App = () => {
  const [count,setCount] = useState(0);
  const [data,setData] = useState(0);
  const [display,setDispaly] = useState(true);

  return (
    <div>
    {
      display? <Counter count={count} data={data}/> : null
    }   
      

      <button onClick={()=>setCount(count+1)}>Counter</button>
      <button onClick={()=>setData(data+1)}>Data</button>
      <button onClick={()=>setDispaly(!display)}>Toggle</button>
    </div>
  )
}

export default App
