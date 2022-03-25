import React from 'react'

const List = ({ value }) => {
  const { title } = value
  return (
    <div className='list'>
      <ul>
        <li>{title}</li>
      </ul>
    </div>
  )
}

export default List
