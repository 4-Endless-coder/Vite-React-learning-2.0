import React, { useState } from 'react'

const App = () => {
  const [data, setData]=useState([
    'ahsesh', 'sam', 'peter','john'
  ])

  const [dataDetails, setDataDetails]=useState([
      {name: 'ashesh', age: 25},
      {name: 'sam', age: 27},
      {name: 'peter', age: 20},

  ])

  const handleUser=(name)=>{
    
    data[data.length-1]=name
    setData([...data])
    
  }
  const handleAge=(age)=>{
    
    dataDetails[dataDetails.length-1].age=age
    setDataDetails([...dataDetails])
    
  }
  return (
    <div>
      <h1>Updating Array in State</h1>
      <input type="text" placeholder='Enter lasr user name'
      onChange={(e)=>handleUser(e.target.value)}
      />

      {
        data.map((item, index)=>(
          <h2 key={index}>{item}</h2>
        ))
      }
      <hr />

      <input type="text" placeholder='Enter lasr user age'
      onChange={(e)=>handleAge(e.target.value)}
      />
      {
        dataDetails.map((item, index)=>(
          <h4 key={index}>{item.name}, {item.age}</h4>
        ))
      }
    </div>
  )
}

export default App
