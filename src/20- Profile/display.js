import React, { useState } from 'react'
import { FaReddit } from 'react-icons/fa'
import { dataInfo } from './data'
import List from './list'

const Display = () => {
  return (
    <article className='display-page'>
      <header>
        <p className='header-name'>Community</p>
        <p className='icon'>
          <FaReddit />
        </p>
      </header>
      <article className='list-container'>
        {dataInfo.map((value) => {
          return <List {...value} key={value.id} />
        })}
      </article>
    </article>
  )
}

export default Display
