import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './main.css'

const Display = () => {
  const [value, setValue] = useState('# MARKDOWN PREVIEW')
  return (
    <section className='section'>
      <textarea
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <div className='markdown-display'>
        <ReactMarkdown>{value}</ReactMarkdown>
      </div>
    </section>
  )
}

export default Display
