import React from 'react'
import Tourdata from './tourdata'
import { useState, useEffect } from 'react'
import './tour.css'

const url = 'https://course-api.com/react-tours-project'

const Tour = () => {
  const [data, newData] = useState([])
  const [notLoading, isLoading] = useState(true)
  const [error, newError] = useState('Loading...')
  const getData = async () => {
    isLoading(!notLoading)
    try {
      let resp = await fetch(url)
      if (resp.status >= 200 && resp.status <= 299) {
        let data = await resp.json()
        newData(data)
        isLoading(true)
      } else {
        isLoading(!notLoading)
      }
    } catch (err) {
      isLoading(!notLoading)
      newError('There is an error')
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const btnDelete = (id) => {
    let remover = data.filter((val) => val.id !== id)
    newData(remover)
  }

  return (
    <section>
      <h1 className='title'>Our Tours</h1>
      {notLoading ? (
        data.map((val) => {
          return (
            <Tourdata key={val.id} {...val} btnDelete={btnDelete}></Tourdata>
          )
        })
      ) : (
        <p className='loading'>{error}</p>
      )}
    </section>
  )
}

export default Tour
