import React, { useContext } from 'react'

const AppProvider = React.createContext()

const AppContext = ({ children }) => {
  return <AppProvider.Provider>{children}</AppProvider.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppProvider)
}

export { AppProvider, AppContext }
