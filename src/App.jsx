import React,{useState, useEffect} from 'react'

function App() {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

    useEffect(()=> {
    // callOnce();
     counterFunc();
  },[counter]);
  

  function callOnce() {
    console.log('This function should only be called once');
    
  }

 
  function counterFunc() {
    console.log("TEST",counter);
    
  }


  return (
    <div>
      <h1>Hooks</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter{counter}</button>
      <button onClick={()=>setData(data+1)}>Data{data}</button>
    </div>
  )
}

export default App
