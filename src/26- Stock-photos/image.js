import React, { useRef } from 'react'

const Image = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  const image = useRef('')
  const handleOver = () => {
    image.current.classList.add('desc-cont-dis')
  }

  const handleLeave = () => {
    image.current.classList.remove('desc-cont-dis')
  }
  return (
    <div
      className='image-item'
      onMouseOver={handleOver}
      onMouseLeave={handleLeave}
    >
      <img src={regular} alt={alt_description} className='main-img' />
      <div className='desc-cont' ref={image}>
        <div className='desc'>
          <h3 className='name'>{name}</h3>
          <p className='likes'>{likes}</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={alt_description} className='desc-img' />
        </a>
      </div>
    </div>
  )
}

export default Image
