import React from 'react'
import Display from './display'
import './display.css'
import { Context } from './context'

const Mainapp = () => {
  return (
    <>
      <Context>
        <Display />
      </Context>
    </>
  )
}

export default Mainapp
