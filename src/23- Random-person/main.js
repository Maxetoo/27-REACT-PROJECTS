import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

const Main = () => {
  const [image, setImage] = useState(defaultImage)
  const [loading, setLoading] = useState(true)
  const [detail, setDetail] = useState('name')
  const [name, setName] = useState('Loading...')
  const [value, setValue] = useState([])
  const fetchData = async () => {
    setLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      const setData = data.results[0]
      const {
        name: { first, last },
      } = setData
      const { email } = setData
      const {
        dob: { age },
      } = setData
      const {
        location: { country },
      } = setData
      const { phone } = setData
      const {
        login: { password },
      } = setData
      const {
        picture: { medium },
      } = setData

      const setNewData = {
        name: `${first} ${last}`,
        email: email,
        age: age,
        location: country,
        phone: phone,
        login: password,
      }
      setValue(setNewData)
      setImage(medium)
      setName(setNewData.name)
      setLoading(false)
      setDetail('name')
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleRandom = () => {
    fetchData()
  }

  const handleOver = (e) => {
    if (e.target.classList.contains('button')) {
      const dataSet = e.target.dataset.id
      setDetail(dataSet)
      setName(value[dataSet])
    }
  }

  return (
    <section className='section-app'>
      <article className='bg-back'></article>
      <article className='person-container'>
        <div className='container--header'></div>
        <img
          src={(loading && defaultImage) || image}
          alt='Random Person'
          className='img'
        />
        <div className='container--body'>
          <p className='name_intro'>My {detail} is </p>
          <h3 className='result'>{loading ? 'Loading...' : name}</h3>
          <div className='icons'>
            <div
              className='button btn-1'
              data-id='name'
              onMouseEnter={handleOver}
            >
              <FaUser />
            </div>
            <div
              className='button btn-2'
              data-id='email'
              onMouseEnter={handleOver}
            >
              <FaEnvelopeOpen />
            </div>
            <div
              className='button btn-3'
              data-id='age'
              onMouseEnter={handleOver}
            >
              <FaCalendarTimes />
            </div>
            <div
              className='button btn-4'
              data-id='location'
              onMouseOver={handleOver}
            >
              <FaMap />
            </div>
            <div
              className='button btn-5'
              data-id='phone'
              onMouseOver={handleOver}
            >
              <FaPhone />
            </div>
            <div
              className='button btn-6'
              data-id='login'
              onMouseOver={handleOver}
            >
              <FaLock />
            </div>
          </div>
          <div className='btn' onClick={handleRandom}>
            {loading ? 'Loading...' : 'RANDOM USER'}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Main
