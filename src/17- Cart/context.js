import React, { useContext, useReducer, useEffect } from 'react'
import { reducer } from './reducer'
import { cartdata } from './cart-data'

const AppContext = React.createContext()

const url = 'https://course-api.com/react-useReducer-cart-project'
const otherItem = {
  dataItem: cartdata,
  loaded: false,
  amount: 1,
  total: 0,
}

const AppProvider = ({ children }) => {
  const [item, setItem] = useReducer(reducer, otherItem)

  const removeAll = () => {
    setItem({ type: 'REMOVE ALL' })
  }

  const removeItem = (id) => {
    setItem({ type: 'REMOVE ITEM', payload: id })
  }

  const increaseNum = (id) => {
    setItem({ type: 'INCREASE', payload: id })
  }

  const decreaseNum = (id) => {
    setItem({ type: 'DECREASE', payload: id })
  }

  const fetchData = async () => {
    try {
      let resp = await fetch(url)
      let cart = await resp.json()
      setItem({ type: 'FETCH DATA', payload: cart })
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setItem({ type: 'GET TOTALS' })
  }, [item.dataItem])

  return (
    <AppContext.Provider
      value={{
        ...item,
        removeAll,
        removeItem,
        increaseNum,
        decreaseNum,
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
