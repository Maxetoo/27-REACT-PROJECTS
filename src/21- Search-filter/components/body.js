import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/home'
import About from '../pages/about'
import Error from '../pages/error'

const Body = () => {
  return (
    <section className='section-body'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </section>
  )
}

export default Body
