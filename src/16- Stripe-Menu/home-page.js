import React from 'react'
import { FaBars } from 'react-icons/fa'
import image from './underwater.jpg'
import { useGlobalContext } from './context'

const HomePage = () => {
  const { openModal, modalOpen, products, mouseOver, mouseLeave, next } =
    useGlobalContext()
  return (
    <section className={`${modalOpen ? 'home-page back' : 'home-page'}`}>
      <article className='header'>
        <p className='title'>DFamily</p>
        <div className='btn-bar' onClick={openModal}>
          <FaBars />
        </div>
      </article>
      <article className='list'>
        <ul className='list-items'>
          {products.map((value, index) => {
            return (
              <li
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                onMouseEnter={() => next(index)}
              >
                {value.page}
              </li>
            )
          })}
        </ul>
      </article>
      <article className='image'>
        <img src={image} alt='underwater' />
      </article>
      <div className='btn-add'>Join Us</div>
    </section>
  )
}

export default HomePage
