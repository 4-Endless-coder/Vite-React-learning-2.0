import React from 'react'

// let count =0
const App = () => {
  return (
    <div>
      <h1>Kepping Components Pure</h1>
      <Cup guest={1}/>
      <Cup guest={2}/>
      <Cup guest={5}/>
    </div>
  )
}

const Cup=({guest}) => {
let count = guest
  return (<h1>We have {count} guest and we have to make {count} cup of tea</h1>)
}

export default App
