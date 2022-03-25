import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <article className='error-page'>
      <div className='error-container'>
        <h2 className='error--name'>404 Error</h2>
        <p className='error--info'>Hello!, you seem to be lost</p>
        <Link to='/'>
          <button className='back-btn'>Back Home</button>
        </Link>
      </div>
    </article>
  )
}

export default Error
