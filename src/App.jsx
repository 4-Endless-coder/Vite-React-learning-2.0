import React, { useState } from 'react'

function App() {
  const [gender, setGender] = useState('female');
  const [city, setCity] = useState('delhi');
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h2>Select Gender</h2>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} value="male" name="gender" checked={gender=='male'} id="male" />
      <label htmlFor="male">Male</label>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} value="female" name="gender" checked={gender=='female'} id="female" />
      <label htmlFor="female">Female</label>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} value="transgender" name="gender" checked={gender=='transgender'} id="transgender" />
      <label htmlFor="transgender">Transgender</label>

      <h3>Selected Gender: {gender}</h3>
      <br />
      <br />

      <h4>Select City!</h4>
      <select onChange={(event) =>setCity(event.target.value)} defaultValue={"delhi"} name="" id="">
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="delhi">Delhi</option>
      </select>

      <h2>Selected City:{city}</h2>
    </div>
  )
}

export default App
