import React from 'react'
import { useState, useEffect } from 'react'
import './note.css'
import NoteList from './note-list'

const addToLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}
const NoteMain = () => {
  const [inputShow, notInputShow] = useState(false)
  const [value, otherValue] = useState('')
  const [searchValue, otherSearchValue] = useState('')
  const [listItems, otherListItems] = useState(addToLocalStorage())
  const date = new Date().toUTCString()

  const itemAdder = () => {
    if (inputShow) {
      return notInputShow(false)
    } else {
      return notInputShow(true)
    }
  }

  const btnAdd = (e) => {
    e.preventDefault()
    if (!value) {
    } else {
      const info = {
        id: new Date().getTime().toString(),
        details:
          value.charAt(0).toUpperCase() + value.split('').slice(1).join(''),
      }
      otherListItems((items) => {
        return [...items, info]
      })
      otherValue('')
    }
  }

  const deleteList = (id) => {
    otherListItems(listItems.filter((val) => val.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(listItems))
  })

  return (
    <>
      <section className='main'>
        <article className='section'>
          <h1 className='title'>Notepad</h1>
          <br />
          <form onSubmit={btnAdd}>
            <input
              type='text'
              className='search'
              placeholder='Search notes'
              value={searchValue}
              onChange={(e) => otherSearchValue(e.target.value)}
            />
          </form>
        </article>
        {inputShow && (
          <div className='add-items'>
            <input
              type='text'
              className='add-input'
              placeholder='Input texts'
              value={value}
              onChange={(e) => otherValue(e.target.value)}
            />
            <div className='btn-add' onClick={btnAdd}>
              Add
            </div>
          </div>
        )}
        <div className='list-items'>
          {listItems.map((item, index) => {
            return (
              <NoteList
                lists={item}
                key={item.id}
                deleteList={deleteList}
                {...item}
                date={date}
              />
            )
          })}
        </div>

        <div className='add-main' onClick={itemAdder}>
          {inputShow ? '-' : '+'}
        </div>
      </section>
    </>
  )
}

export default NoteMain
