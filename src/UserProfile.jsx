import React from 'react'
import style from './CSS/UserProfile.module.css'

const UserProfile = () => {
  return (
    <div className={style.userCard}>
      <div>
        <img className={style.img} src="src\assets\avatar.svg" alt="uPic" />
      </div>
      <div className={style.textWrap}>
        <h4>Ashesh Dash</h4>
        <p>Software developer</p>
      </div>
    </div>
  )
}

export default UserProfile;
