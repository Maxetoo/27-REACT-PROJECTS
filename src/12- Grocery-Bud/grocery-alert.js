import React from 'react'
import { useEffect } from 'react'

const GroceryAlert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 1500)
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <div className='alert-msg'>
      <p className={`alert-${type}`}>{msg}</p>
    </div>
  )
}

export default GroceryAlert
