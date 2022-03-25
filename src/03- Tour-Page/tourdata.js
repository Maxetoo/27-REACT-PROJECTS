import React from 'react'
import { useState, useEffect } from 'react'

const Tourdata = ({ id, name, info, image, price, btnDelete }) => {
  const [readMore, showLess] = useState(true)

  return (
    <article>
      <div className='container'>
        <img src={image} alt='' className='img' />
        <div className='details'>
          <div className='header'>
            <span className='caption'>{name}</span>
            <span className='price'>{price}</span>
          </div>
          <div className='info'>
            {readMore ? info.split('').slice(0, 200).join('') + '...' : info}
            <span
              className='show'
              style={{ marginLeft: '.3rem' }}
              onClick={() => showLess(!readMore)}
            >
              {readMore ? 'READ MORE' : 'SHOW LESS'}
            </span>
          </div>
          <div className='btn' onClick={() => btnDelete(id)}>
            NOT INTERESTED
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tourdata
