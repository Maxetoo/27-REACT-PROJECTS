import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='head-name'>Community</div>
      <div className='nav-bar'>
        <Link to='/'>
          <p className='home'>Home</p>
        </Link>
        <Link to='/about'>
          <p className='about'>About</p>
        </Link>
      </div>
    </header>
  )
}

export default Header
