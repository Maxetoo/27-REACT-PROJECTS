import React from 'react'
import moment from 'moment'

const List = ({ title, date, length, snippet }) => {
  return (
    <div className='list'>
      <h3 className='list-title'>{title}</h3>
      <p className='date'>{moment(date).format('YYYY MMM Do')}</p>
      <span className='length'>{length} min read</span>
      <div className='desc'>{snippet}</div>
    </div>
  )
}

export default List
