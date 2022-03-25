import React from 'react'
import { Link } from 'react-router-dom'

const People = ({ image, name, id }) => {
  return (
    <div className='list'>
      <img src={image} alt={name} className='img' />
      <Link to={`/about/${id}`}>
        <div className='btn'>Learn More</div>
      </Link>
    </div>
  )
}

export default People
