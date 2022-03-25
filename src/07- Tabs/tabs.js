import React from 'react'
import './tabs.css'
import { useState, useEffect } from 'react'
// import TabsData from './tabs-data'

const Tabs = () => {
  const [data, newData] = useState([])
  const [isLoading, notLoading] = useState(true)
  const [current, next] = useState(1)

  const url = 'https://course-api.com/react-tabs-project'
  const getData = async () => {
    try {
      let resp = await fetch(url)
      let datas = await resp.json()
      newData(datas)
      notLoading(false)
    } catch (error) {
      notLoading(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (isLoading) {
    return (
      <section className='section'>
        <h1>Loading...</h1>
      </section>
    )
  }
  const { id, title, company, dates, duties } = data[current]
  return (
    <>
      <section>
        <h1 className='title'>EXPERIENCE</h1>
        <br />
        <div className='options'>
          {data.map((val, index) => {
            return (
              <span
                className={`${current === index ? 'active' : 'notactive'}`}
                key={index}
                onClick={() => next(index)}
              >
                {val.company}
              </span>
            )
          })}
        </div>
        <article>
          <div className='description' key={id}>
            <div className='job'>{title}</div>
            <div className='name'>{company}</div>
            <div className='date'>{dates}</div>
          </div>
          <br />
          <div className='details'>
            {duties.map((man, index) => {
              return (
                <ul>
                  <li key={index}>{man}</li>
                </ul>
              )
            })}
          </div>
          <br />
          <div className='btn'>MORE INFO</div>
        </article>
      </section>
    </>
  )
}
export default Tabs
