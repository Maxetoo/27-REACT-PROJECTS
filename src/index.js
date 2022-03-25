import React from 'react'
import ReactDOM from 'react-dom'
import Main from './29- Tik-Tac-Toe/main'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Main />
    </>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
