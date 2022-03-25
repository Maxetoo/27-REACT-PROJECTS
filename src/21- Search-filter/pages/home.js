import React, { useState, useEffect } from 'react'
import { dataInfo } from '../components/data'
import { FaSearch } from 'react-icons/fa'
import People from '../components/people'
const Home = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState(dataInfo)
  const [noResult, setNoResult] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (value === '') {
      setIsSearching(false)
      setNoResult(false)
      setData(dataInfo)
    } else {
      setIsSearching(true)
    }
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = data.find((val) => val.id === +value)
    if (isSearching) {
      if (newData) {
        setNoResult(false)
      } else {
        try {
          setNoResult(true)
        } catch (error) {}
      }
      setData(() => [newData])
    } else {
      return setData(dataInfo)
    }
  }
  return (
    <section className='section-home'>
      <div className='search-form'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Search'
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <span className='icon'>
            <FaSearch />
          </span>
        </form>
      </div>
      {noResult ? (
        <article className='no-result'>No Result Found!</article>
      ) : (
        <article className='list-container'>
          {data.map((value) => {
            return <People {...value} key={value.id} />
          })}
        </article>
      )}
    </section>
  )
}

export default Home
