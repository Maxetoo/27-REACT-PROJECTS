import React, { useState } from 'react'
import './lorem.css'
import { loremData } from './lorem-data'

const Lorem = () => {
  const [data, newData] = useState([])
  const [sliceData, newSliceData] = useState(0)
  const random = Math.floor(Math.random() * loremData.length + 1)
  const btnClick = () => {
    if (sliceData > loremData.length || sliceData < 0) {
      newData(loremData.slice(0, random))
    } else {
      newData(loremData.slice(0, sliceData))
    }
  }

  return (
    <>
      <section>
        <h1 className='title'>TIRED OF BORING LOREM IPSUM</h1>
        <br />
        <article>
          <div className='input-menu'>
            <span className='paragraph'>PARAGRAPHS :</span>
            <input
              type='number'
              value={sliceData}
              onChange={(e) => newSliceData(e.target.value)}
            />
            <div className='btn' onClick={btnClick}>
              GENERATE
            </div>
          </div>
          <div className='container'>
            {data.map((val, index) => {
              return <p key={index}>{val}</p>
            })}
            <p></p>
          </div>
        </article>
      </section>
    </>
  )
}

export default Lorem
