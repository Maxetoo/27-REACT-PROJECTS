import React from 'react'
import { useState } from 'react'

const GroceryList = ({ value, handleDelete, handleEdit }) => {
  const { id, item } = value
  return (
    <div className='list' key={id}>
      <p className='item-name'>{item}</p>
      <div className='icons'>
        <span className='edit' onClick={() => handleEdit(id)}>
          +
        </span>
        <span className='delete' onClick={() => handleDelete(id)}>
          -
        </span>
      </div>
    </div>
  )
}

export default GroceryList
