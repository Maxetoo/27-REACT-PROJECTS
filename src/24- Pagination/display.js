import React, { useEffect, useState } from 'react'
import { useFetch } from './fetch'
import List from './list'

const Display = () => {
  const { loading, data } = useFetch()
  const [newData, setData] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (loading) return
    setData(data[index])
    console.log(newData)
  }, [loading, index])

  const handleClick = (index) => {
    setIndex(index)
  }

  const handleNext = (nameClass) => {
    if (nameClass.contains('prev')) {
      if (index === 0) {
        setIndex(data.length - 1)
      } else {
        setIndex(index - 1)
      }
    } else {
      if (index === data.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
  }

  if (loading) {
    return (
      <section className='main-section'>
        <h2 className='header'>Loading...</h2>
        <div className='underline'></div>
      </section>
    )
  } else {
    return (
      <section className='main-section'>
        <h2 className='header'>Pagination</h2>
        <div className='underline'></div>
        <article className='profile-container'>
          {newData.map((value) => {
            return <List key={value.id} {...value} />
          })}
        </article>
        <div className='navi'>
          <p
            className='move prev'
            onClick={(e) => handleNext(e.target.classList)}
          >
            Prev
          </p>
          {!loading &&
            data.map((value, ind) => {
              return (
                <div
                  className={`btn-num ${index === ind ? 'active' : null}`}
                  onClick={() => handleClick(ind)}
                >
                  {ind + 1}
                </div>
              )
            })}
          <p
            className='move next'
            onClick={(e) => handleNext(e.target.classList)}
          >
            Next
          </p>
        </div>
      </section>
    )
  }
}

export default Display
