import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './slider.css'
import { reviews } from './slider-data'

const Slider = () => {
  const [data, newData] = useState(reviews)
  const [current, nxtCurrent] = useState(0)
  const nextDisplay = useRef(null)
  const nextSlide = () => {
    // nextDisplay.current.style.transform = 'translateX(1000px)'
    nxtCurrent(current + 1)
  }

  useEffect(() => {
    if (current === data.length) {
      nxtCurrent(0)
    } else if (current < 0) {
      nxtCurrent(data.length - 1)
    }
  }, [current])

  useEffect(() => {
    let slider = setInterval(() => {
      nxtCurrent(current + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [current])
  return (
    <>
      <section>
        <h1 className='title'>
          <span className='slash'>/</span>
          <span className='title-name'>Reviews</span>
        </h1>
        <br />
        <article>
          <div className='btn left' onClick={() => nxtCurrent(current - 1)}>
            &#60;
          </div>

          <div className='display-all'>
            {data.map((val, index) => {
              let position = 'display'
              if (index === current) {
                position = 'active'
              } else {
                position = 'not-active'
              }
              const { id, name, job, image, text } = val
              return (
                <div className={position} key={id} ref={nextDisplay}>
                  <div className='img'>
                    <img src={image} alt={name} />
                  </div>
                  <div className='name'>{name}</div>
                  <div className='bio'>{job}</div>
                  <br />
                  <div className='desc'>{text}</div>
                  <div className='icon'>&copy;</div>
                </div>
              )
            })}
          </div>

          <div className='btn right' onClick={nextSlide}>
            &#62;
          </div>
        </article>
      </section>
    </>
  )
}

export default Slider
