import React from 'react'
import User2 from './User2'
import Wrapper from './Wrapper'

function App() {
  return (
    <div>
      <h1>Props in React</h1>
      {/* <User2 name="Ashesh Dash"/>
      <User2 name='sam'/>
      <User2/> */}
      <Wrapper color="red">
        <h1>Hi, everyone</h1>
      </Wrapper>
      <Wrapper color="orange">
        <h1>Hi, Ashesh</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hi, Admin</h1>
        <h2 style={{color:"blue"}}>Please login</h2>
      </Wrapper>

    </div>
  )
}

export default App
