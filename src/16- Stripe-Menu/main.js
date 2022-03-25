import React from 'react'
import HomePage from './home-page'
import Modal from './modal'
import './stripe.css'
import Icons from './icons'
import { AppProvider } from './context'

const Main = () => {
  return (
    <>
      <AppProvider>
        <HomePage />
        <Modal />
        <Icons />
      </AppProvider>
    </>
  )
}

export default Main
