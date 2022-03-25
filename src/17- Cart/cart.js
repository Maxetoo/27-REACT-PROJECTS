import React, { useState } from 'react'
// import { cartdata } from './cart-data'
import CartItems from './cart-items'
import { useGlobalContext } from './context'

const Cart = () => {
  const { dataItem, removeAll, total } = useGlobalContext()
  if (dataItem.length === 0) {
    return (
      <div className='message'>
        <h2> All items has been cleared! </h2>
        <p className='under-msg'> Cart is now empty </p>
      </div>
    )
  } else {
    return (
      <main>
        <div className='title-name'> YOUR BAG</div>
        <div className='cart-container'>
          {dataItem.map((value) => {
            return <CartItems value={value} key={value.id} />
          })}
          <div className='calculate-total'>
            <p className='total-tag'>Total</p>
            <p className='total-amount'>${total}</p>
          </div>
          <div className='clear-all-cont'>
            <div className='clear-all' onClick={removeAll}>
              clear cart
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Cart
