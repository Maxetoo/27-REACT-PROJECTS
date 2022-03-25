import React, { useState, useContext } from 'react'
import { sublinks } from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [products, newProducts] = useState(sublinks)
  const [isOnMouseOver, notMouseOver] = useState(false)
  const [current, next] = useState(0)

  const closeModal = () => {
    if (modalOpen) {
      setModalOpen(false)
    }
  }

  const openModal = () => {
    if (!modalOpen) {
      setModalOpen(true)
    }
  }
  // let position;
  const mouseOver = (e) => {
    if (!isOnMouseOver) {
      notMouseOver(true)
    }
    // const position = e.target.getBoundingClientRect()
    // console.log(position)
  }

  const mouseLeave = () => {
    if (isOnMouseOver) {
      notMouseOver(false)
    }
  }

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        closeModal,
        openModal,
        products,
        mouseOver,
        isOnMouseOver,
        mouseLeave,
        current,
        next,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
