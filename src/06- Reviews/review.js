import React from 'react'
import { useState } from 'react'
import { reviews } from './review-data.js'
import './review.css'

const Review = () => {
  const [data, newData] = useState(0)
  const { name, job, image, text } = reviews[data]

  const btnClick = (e) => {
    const btn = e.target.classList
    if (btn.contains('left')) {
      newData((val) => {
        if (val === 0) {
          return reviews.length - 1
        } else {
          return val - 1
        }
      })
    } else {
      newData((val) => {
        if (val === reviews.length - 1) {
          return 0
        } else {
          return val + 1
        }
      })
    }
  }

  const random = () => {
    let ranNum = Math.floor(Math.random() * reviews.length)
    newData(ranNum)
  }

  return (
    <>
      <section>
        <h1 className='title'>Our Reviews</h1>
        <br />
        <div className='container'>
          <div className='image-cont'>
            <img src={image} alt='' className='image' />
          </div>
          <div className='name'>{name}</div>
          <div className='career'>{job}</div>
          <div className='info'>{text}</div>
          <div className='btn-all' onClick={btnClick}>
            <div className='left'>&#60;</div>
            <div className='right'>&#62;</div>
          </div>
          <div className='btn-ran' onClick={random}>
            Surprise Me
          </div>
        </div>
      </section>
    </>
  )
}

export default Review
