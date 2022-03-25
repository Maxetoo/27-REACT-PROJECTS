import React from 'react'
import './birthday.css'
import { useState } from 'react'
import { Data } from './birthday-data'

const Birthday = () => {
  const [person, newPerson] = useState(Data)
  const num = Data.length + 1
  const [cleared, notCleared] = useState(false)
  const btnClick = () => {
    newPerson([])
    notCleared(true)
  }
  return (
    <>
      <section>
        <h3 className='title'>BIRTHDAY REMINDER</h3>
        <article>
          <p className='alert'>{!cleared ? num : 0} of 5 Birthdays Today</p>
          {person.map((value) => {
            const { name, age, img, id } = value
            return (
              <div className='display-person' key={id}>
                <img src={img} alt='' className='img' />
                <div className='details'>
                  <span className='name'>{name}</span>
                  <span className='age'>{age}</span>
                </div>
              </div>
            )
          })}
          <div className='btn' onClick={btnClick}>
            {cleared ? 'ALL REMOVED' : 'CLEAR'}
          </div>
        </article>
      </section>
    </>
  )
}

export default Birthday
