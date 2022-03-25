import React, { useContext } from 'react'

const AppProvider = React.createContext()

const Context = ({ children }) => {
  return <AppProvider.Provider>{children}</AppProvider.Provider>
}

export const useGlobalContext = () => {
  return useContext(Context)
}

export { Context }
