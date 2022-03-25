import React from 'react'
import './modal.css'
import Home from './home'
import Sidebar from './sidebar'
import { AppProvider } from './context'

const App = () => {
  return (
    <>
      <AppProvider>
        <Home />
        <Sidebar />
      </AppProvider>
    </>
  )
}

export default App
