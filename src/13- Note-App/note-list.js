import React from 'react'
import { useState, useEffect } from 'react'

const NoteList = ({ lists, deleteList, date }) => {
  const { id, details } = lists
  const [readMore, showLess] = useState(true)
  const [show, hide] = useState(false)
  // const date = new Date().toTimeString()

  useEffect(() => {
    if (details.length > 60) {
      showLess(true)
      hide(true)
    } else {
      showLess(false)
      hide(false)
    }
  }, [])

  const readLess = () => {
    if (readMore) {
      showLess(false)
    } else {
      showLess(true)
    }
  }

  return (
    <div className='item' onDoubleClick={() => deleteList(id)}>
      <p className='details'>
        {readMore ? details.split('').slice(0, 50).join('') + '...' : details}
        {show && (
          <span className='read-more' onClick={readLess}>
            {readMore ? 'READ MORE' : 'SHOW LESS'}
          </span>
        )}
      </p>
      <div className='date'>{date}</div>
    </div>
  )
}

export default NoteList
