import React from 'react'
import { useState, useEffect } from 'react'
import GroceryList from './grocery-list'
import GroceryAlert from './grocery-alert'
import './grocery.css'

const addToLocalStorage = () => {
  let item = localStorage.getItem('list')
  if (item) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}
const GroceryApp = () => {
  const [value, otherValue] = useState('')
  const [listItem, otherListItem] = useState(addToLocalStorage())
  const [isAlert, noAlert] = useState({
    active: false,
    msg: '',
    type: '',
  })
  const [edit, isEdit] = useState(false)
  const [editId, otherEditId] = useState(null)

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const info = {
      id: new Date().getTime().toString(),
      item: value.charAt(0).toUpperCase() + value.split('').slice(1).join(''),
    }
    if (!value) {
      //value is empty
      alertItems(true, 'Please Input Text', 'danger')
    } else if (value && edit) {
      otherListItem(
        listItem.map((items) => {
          if (items.id === editId) {
            return {
              ...items,
              item:
                value.charAt(0).toUpperCase() +
                value.split('').slice(1).join(''),
            }
          }
          return items
        })
      )
      isEdit(false)
      otherEditId(null)
      otherValue('')
      alertItems(true, 'Item Edited', 'pass')
    } else {
      //on add items
      otherListItem((items) => {
        return [...items, info]
      })
      otherValue('')
      alertItems(true, 'Item Added', 'pass')
    }
  }

  //hadnle clear-all-items
  const clearItems = () => {
    otherListItem([])
    alertItems(true, 'Items Cleared', 'danger')
  }

  //handle delete
  const handleDelete = (id) => {
    otherListItem(listItem.filter((item) => item.id !== id))
    alertItems(true, 'Item Removed', 'danger')
  }

  //handle edit
  const handleEdit = (id) => {
    const selectedItem = listItem.find((val) => val.id === id)
    otherValue(selectedItem.item)
    otherEditId(id)
    isEdit(true)
  }

  //handle alert
  const alertItems = (active = false, msg = '', type = '') => {
    return noAlert({ active, msg, type })
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(listItem))
  }, [listItem])

  return (
    <>
      <section>
        <h1 className='title'>Grocery Bud</h1>
        <div className='underline'></div>
        <br />
        {isAlert.active && (
          <GroceryAlert
            msg={isAlert.msg}
            type={isAlert.type}
            removeAlert={alertItems}
          />
        )}
        <article className='structure'>
          <form onSubmit={handleSubmit}>
            <div className='display'>
              <input
                type='text'
                placeholder='Eggs'
                value={value}
                onChange={(e) => otherValue(e.target.value)}
              />
              <button type='button' onClick={handleSubmit}>
                {edit ? 'Edit' : 'Add'}
              </button>
            </div>
          </form>
          {listItem.length < 1 ? (
            ''
          ) : (
            <article className='items'>
              {listItem.map((val) => {
                return (
                  <GroceryList
                    value={val}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                )
              })}
              <div className='btn-clear' onClick={clearItems}>
                Clear Items
              </div>
            </article>
          )}
        </article>
      </section>
    </>
  )
}

export default GroceryApp
