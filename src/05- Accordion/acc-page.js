import React from 'react'
import { useState } from 'react'

const AccPage = ({ question, answer }) => {
  const [isExpanded, notExpanded] = useState(false)
  return (
    <>
      <article>
        <div className='item'>
          <div className='display'>
            <span className='caption'>{question}</span>
            <span className='icon' onClick={() => notExpanded(!isExpanded)}>
              {isExpanded ? '-' : '+'}
            </span>
          </div>
          {isExpanded ? <div className='details'>{answer}</div> : ''}
        </div>
      </article>
    </>
  )
}

export default AccPage
