import React from 'react'
import PropTypes from 'prop-types'
import { defaultImage } from '../assets/freedom.jpg'

const Prop = ({ name, price, image }) => {
  const url = image.url && image
  return (
    <>
      <div className='item-container'>
        <img src={url || defaultImage} alt={name || 'default-name'} />
        <div className='details'>
          <div className='name'>
            Name: <p className='main-name'>{name || 'default-name'}</p>
          </div>
          <div className='price'>
            Price: <p className='main-price'>${price || 3.99}.00</p>
          </div>
        </div>
      </div>
    </>
  )
}

Prop.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

Prop.defaultProps = {
  name: 'default-name',
  price: 3.99,
  image: defaultImage,
}

export default Prop
