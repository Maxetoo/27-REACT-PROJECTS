import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSideOpen, setSideOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  const openSidebar = () => {
    setSideOpen(true)
  }

  const closeSidebar = () => {
    setSideOpen(false)
  }

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModalbar = () => {
    setModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        openModal,
        closeModalbar,
        isSideOpen,
        isModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalHook = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
