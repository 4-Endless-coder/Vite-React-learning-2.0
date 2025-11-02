import React from 'react'

const UserEdit = () => {
  return (
    <>
        <div style={{textAlign:'center'}}>
            <h1>Edit User Details</h1>
            <input type="text" placeholder='User Name' /> 
            <br /><br />
            <input type="text" placeholder='User Age' /> 
            <br /><br />
            <input type="text" placeholder='User Email' /> 
            <br /><br />
            <button>Update User</button>
        </div>
    </>
  )
}

export default UserEdit
