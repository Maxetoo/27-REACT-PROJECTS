import React from 'react'
import { useState } from 'react'
import './counter.css'

const Counter = () => {
  const [data, newData] = useState(0)
  return (
    <>
      <section>
        <h3 className='title'>COUNTER</h3>
        <br />
        <div className='value'>{data}</div>
        <br />
        <div className='btn'>
          <div className='increase' onClick={() => newData(data + 1)}>
            INCREASE
          </div>
          <div className='reset' onClick={() => newData(0)}>
            RESET
          </div>
          <div className='decrease' onClick={() => newData(data - 1)}>
            DECREASE
          </div>
        </div>
      </section>
    </>
  )
}

export default Counter
