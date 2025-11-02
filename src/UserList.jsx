import React, { useEffect, useState } from 'react'

const UserList = () => {
  const [userData, setUserData]= useState([])
  const [loading, setLoading]= useState(false)
  const url = "http://localhost:3000/users"
  useEffect(()=>{
    setLoading(true);
    getUserData();
  }, [])

  const getUserData =async()=> {
    let response = await fetch(url);
    response =await response.json();
    console.log(response);
    setUserData(response)
    setLoading(false);
  }

  const deleteUser=async(id)=>{
    let response = await fetch(url+"/"+id,{
      method:'delete',
    })
    response =await response.json();
    if(response){
      alert('user deleted')
      getUserData();
    }
  };
  return (
    <>
        <ul className='user-list user-list-header'>
            <li>Name</li>
            <li>Age</li>
            <li>Email</li>
            <li>Action</li>
          </ul>
      
      {
        !loading?
        userData.map((user)=>(
          <ul key={user.name} className='user-list'>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
            <li><button onClick={()=>deleteUser(user.id)}>Delete</button></li>
          </ul>
        ))
        :<h2>Data Loading...</h2>
      }
    </>
  )
}

export default UserList
