import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { useGlobalContext } from './context'

const HomePage = () => {
  const { amount } = useGlobalContext()
  return (
    <section className='home-page'>
      <header>
        <span className='title'>Shopping-Cart</span>
        <div className='cart-icon'>
          <span className='icon'>
            <FaShoppingBag />
          </span>
          <div className='orders'>{amount}</div>
        </div>
      </header>
    </section>
  )
}

export default HomePage
