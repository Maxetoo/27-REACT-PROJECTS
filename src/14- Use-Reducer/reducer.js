import React from 'react'
import { useState, useReducer, useEffect } from 'react'
import ReducerList from './reducer-list'
import './reducer.css'

const reducer = (state, action) => {
  if (action.type === 'ADD ITEM') {
    const newItems = [...state.people, action.payload]
    return {
      ...state,
      people: newItems,
      present: true,
    }
  }

  if (action.type === 'NOT FOUND') {
    alert(setItems.alertMsg)
  }

  if (action.type === 'REMOVE ITEM') {
    const filtered = state.people.filter((val) => val.id !== action.payload)
    return {
      ...state,
      people: filtered,
    }
  }

  if (action.type === 'REMOVE ALL') {
    return {
      ...state,
      people: action.payload,
    }
  }

  if (action.type === 'FALSE') {
    return {
      ...state,
      present: action.payload,
    }
  }
  return state
}
const setItems = {
  people: [],
  present: false,
  alertMsg: 'Input Text',
}

const Reducer = () => {
  const [value, setValue] = useState('')
  const [state, setPeople] = useReducer(reducer, setItems)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      const info = { id: new Date().getTime().toString(), name: value }
      setPeople({ type: 'ADD ITEM', payload: info })
      setValue('')
    } else {
      setPeople({ type: 'NOT FOUND' })
    }
  }
  const deleteBtn = (id) => {
    setPeople({ type: 'REMOVE ITEM', payload: id })
  }

  const deleteAll = () => {
    setPeople({ type: 'REMOVE ALL', payload: [] })
  }

  useEffect(() => {
    if (state.people.length < 1) {
      setPeople({ type: 'FALSE', payload: false })
    }
  }, [state.people])
  return (
    <>
      <section>
        <article className='display'>
          <form className='form' onSubmit={handleSubmit}>
            <input
              type='text'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type='button' onClick={handleSubmit}>
              submit
            </button>
          </form>
        </article>
        <article className='list'>
          {state.people.map((item) => {
            // console.log(item.name)
            return (
              <ReducerList key={item.id} value={item} deleteBtn={deleteBtn} />
            )
          })}
          {state.present && (
            <div className='btn' onClick={deleteAll}>
              Delete all
            </div>
          )}
        </article>
      </section>
    </>
  )
}

export default Reducer
