import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Image from './image'
import { useFetch } from './fetch'

const Display = () => {
  const { loading, data, find, setFind, handleSubmit } = useFetch()
  return (
    <main className='main-body'>
      <article className='header'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='input-text'
            placeholder='search'
            value={find}
            onChange={(e) => setFind(e.target.value)}
          />
          <button type='submit' className='btn-submit' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </article>
      <article className='img-cont'>
        {data.map((value, index) => {
          return <Image key={index} {...value} />
        })}
      </article>
      {loading && <h1 className='loading'>Loading...</h1>}
    </main>
  )
}

export default Display
