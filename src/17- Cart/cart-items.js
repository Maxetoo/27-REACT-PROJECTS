import React from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { useGlobalContext } from './context'

const CartItems = ({ value }) => {
  const { removeItem, increaseNum, decreaseNum } = useGlobalContext()
  const { id, title, price, img, amount } = value
  return (
    <div className='item-container'>
      <img src={img} alt={title} className='img' />
      <div className='items'>
        <span className='item-name'>{title}</span>
        <span className='item-price'>{price}</span>
        <span className='remove-item' onClick={() => removeItem(id)}>
          remove
        </span>
      </div>
      <div className='count-cart'>
        <span className='icon-increase' onClick={() => increaseNum(id)}>
          <FaAngleUp />
        </span>
        <span className='number-order'>{amount}</span>
        <span className='icon-decrease' onClick={() => decreaseNum(id)}>
          <FaAngleDown />
        </span>
      </div>
    </div>
  )
}

export default CartItems
