import React, { useState, useEffect } from 'react'
import List from './list'
import { articles } from './data'
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'

const addLocalStorage = () => {
  const item = localStorage.getItem('theme')
  if (item) {
    return localStorage.getItem('theme')
  } else {
    return []
  }
}

const Display = () => {
  const [lightMode, darkMode] = useState(true)
  const [setLightMode, setDarkMode] = useState(addLocalStorage)

  const handleToggle = () => {
    if (lightMode) {
      darkMode(false)
      setDarkMode('dark-mode')
    } else {
      darkMode(true)
      setDarkMode('light-mode')
    }
  }

  useEffect(() => {
    document.documentElement.classList = setLightMode
    localStorage.setItem('theme', setLightMode)
  }, [lightMode, setLightMode])
  return (
    <section className='main-section'>
      <div className='header'>
        <h3 className='title'>Overreacted</h3>
        <div className='btn-toggle' onClick={handleToggle}>
          {lightMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>
      <main className='list-container'>
        {articles.map((value) => {
          return <List key={value.id} {...value} />
        })}
      </main>
    </section>
  )
}

export default Display
