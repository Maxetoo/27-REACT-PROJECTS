import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './nav.css'
import { navData } from './nav-data'

const Nav = () => {
  const [show, hide] = useState(true)
  const divContainer = useRef(null)
  const icon = useRef(null)
  const btn = () => {
    hide(!show)
  }
  useEffect(() => {
    if (show) {
      divContainer.current.style.height = '0px'
      icon.current.style.transform = 'rotateZ(0deg)'
    } else {
      divContainer.current.style.height = '180px'
      icon.current.style.transform = 'rotateZ(30deg)'
    }
  })
  return (
    <>
      <section>
        <header>
          <div className='name'>Coding Addict</div>
          <div className='icon' onClick={btn} ref={icon}>
            #
          </div>
        </header>
        <div className='menu' ref={divContainer}>
          {navData.map((val) => {
            const { id, link, text } = val
            return (
              <ul>
                <a href={link}>
                  <li key={id}>{text}</li>
                </a>
              </ul>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Nav
