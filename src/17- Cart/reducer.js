import { cartdata } from './cart-data'
import CartItems from './cart-items'

export const reducer = (state, action) => {
  if (action.type === 'REMOVE ALL') {
    return {
      ...state,
      dataItem: [],
    }
  }

  if (action.type === 'REMOVE ITEM') {
    return {
      ...state,
      dataItem: state.dataItem.filter((value) => value.id !== action.payload),
    }
  }

  if (action.type === 'INCREASE') {
    let item = state.dataItem.map((value) => {
      if (value.id === action.payload) {
        return { ...value, amount: value.amount + 1 }
      }
      return value
    })
    return { ...state, dataItem: item }
  }

  if (action.type === 'DECREASE') {
    let decrease = state.dataItem
      .map((value) => {
        if (value.id === action.payload) {
          return { ...value, amount: value.amount - 1 }
        }
        return value
      })
      .filter((value) => value.amount !== 0)
    return { ...state, dataItem: decrease }
  }

  if (action.type === 'GET TOTALS') {
    let { total, amount } = state.dataItem.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount
        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      },
      { total: 0, amount: 0 }
    )
    total = parseFloat(total.toFixed(3))
    return { ...state, total, amount }
  }

  if (action.type === 'FETCH DATA') {
    return { ...state, dataItem: action.payload }
  }

  return state
}
