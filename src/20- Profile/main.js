import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Display from './display'
import About from './about'
import './main.css'

const Main = () => {
  return (
    <section className='main'>
      <Routes>
        <Route path='/' element={<Display />}></Route>
        <Route path='/about/:id' element={<About />}></Route>
      </Routes>
    </section>
  )
}

export default Main
