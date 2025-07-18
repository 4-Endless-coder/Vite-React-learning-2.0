import React from 'react'
import styled from 'styled-components'

const App = () => {

  // const Heading =styled.h1`
  // color:red;
  // border: 1px solid green;
  // border-radius: 5px;
  // margin:10px;
  // padding:20px;
  // `

  const Heading=styled.h1({
  color:'red',
  border: '1px solid green',
  borderRadius: '5px',
  margin:'10px',
  padding:'20px',
  })

  const StyleBtn=styled.button`
  color:red;
  width:130px;
  height:40px;
  margin:10px;
  `
  return (
    <div>
    <h1>Styled Component with React js</h1>
    <Heading>Hello Heading</Heading>
    <Heading>Hello Heading 2</Heading>
    <Heading>Hello Heading 3</Heading>
    <Heading>Hello Heading 4</Heading>
    <StyleBtn>Login</StyleBtn>
    <StyleBtn>Sgin Up</StyleBtn>
    <StyleBtn>Back</StyleBtn>
    </div>
  )
}

export default App
