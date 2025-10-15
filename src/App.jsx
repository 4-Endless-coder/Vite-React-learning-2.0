import React, { useEffect, useState } from 'react'

const App = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(()=>{
    getUsersData();
  }, [])
  const getUsersData= async()=> {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url)
    response = await response.json()
    setUsersData(response.users)
  }
  console.log(usersData);
  
  return (
    <>
      <h1>Ftech data from API</h1>
      <ul className='user-list user-list-header'>
            <li>First Name</li>
            <li>Last Name</li>
            <li>Age</li>
          </ul>
      {
        usersData && usersData.map((user)=>(
          <ul className='user-list'>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
          </ul>
        ))
      }
    </>
  )
}

export default App
