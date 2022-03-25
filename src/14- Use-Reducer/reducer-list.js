import React from 'react'

const ReducerList = ({ value, deleteBtn }) => {
  const { id, name } = value
  return (
    <div className='item'>
      <p className='name'>{name}</p>
      <p className='delete' onClick={() => deleteBtn(id)}>
        delete
      </p>
    </div>
  )
}

export default ReducerList
