import React from 'react'
import { useState, useEffect } from 'react'

const ColorSection = ({ rgb, weight, index, hex }) => {
  const [copied, notCopied] = useState(false)
  const bcg = rgb.join(',')
  const textCopied = () => {
    notCopied(true)
    navigator.clipboard.writeText(hex)
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      notCopied(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [copied])
  return (
    <div
      className='box'
      style={{ backgroundColor: `rgb(${bcg})` }}
      key={index}
      onClick={textCopied}
    >
      <p className={`${index > 10 ? 'weight-white' : 'weight-black'}`}>
        {weight}%
      </p>
      <p className={`${index > 10 ? 'hex-white' : 'hex-black'}`}>{hex}</p>
      {copied ? (
        <p className={`${index > 10 ? 'copied-white' : 'copied-black'}`}>
          copied!
        </p>
      ) : null}
    </div>
  )
}

export default ColorSection
