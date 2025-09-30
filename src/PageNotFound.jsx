import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Page Not Found</h1>
      <Link to="/">Go to Home Page</Link>
      <img style={{width:'100rem'}} src="/src/assets/404-error-background.webp" alt="" />
    </div>
  )
}

export default PageNotFound
