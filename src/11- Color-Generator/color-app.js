import React from 'react'
import { useState, useEffect } from 'react'
import './color.css'
import ColorSection from './color-section'
import Values from 'values.js'

const ColorApp = () => {
  const [color, newColor] = useState('')
  const [oldColor, currentColor] = useState(new Values('violet').all(10))
  const [isError, noError] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const colors = new Values(color).all(10)
      currentColor(colors)
      console.log(colors)
    } catch (error) {
      noError(false)
    }
  }

  return (
    <>
      <section>
        <article className='header'>
          <h1 className='title'>Color Generator</h1>
          <div className='underline'></div>
          <br />
          <form className='form' onSubmit={handleSubmit}>
            <p className='generate'>Generate :</p>
            <input
              type='text'
              placeholder='violet'
              value={color}
              className={`${isError ? null : 'error'}`}
              onChange={(e) => newColor(e.target.value)}
            />
            <button type='button' onClick={handleSubmit}>
              submit
            </button>
          </form>
        </article>
        <article className='body'>
          {oldColor.map((val, index) => {
            return (
              <ColorSection
                key={index}
                {...val}
                index={index}
                hex={`#${val.hex}`}
              />
            )
          })}
        </article>
      </section>
    </>
  )
}

export default ColorApp
