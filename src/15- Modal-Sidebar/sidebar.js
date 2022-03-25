import React, { useState } from 'react'
import { links } from './data'
import { FaTimes } from 'react-icons/fa'
import { useGlobalHook } from './context'

const Sidebar = () => {
  const [itemData, setItemData] = useState(links)
  const { isSideOpen, closeSidebar } = useGlobalHook()

  return (
    <article className={` ${isSideOpen ? 'display' : 'display close-display'}`}>
      <div className='header'>
        <span className='title'>Coding Addict</span>
        <span className='icon-cancle' onClick={closeSidebar}>
          <FaTimes />
        </span>
      </div>
      <div className='items'>
        {itemData.map((link) => {
          const { id, url, text, icons } = link

          return (
            <ul className='list-items' key={id}>
              <li>
                <span className='list-icon'>{icons}</span>
                <a href={url}>{text}</a>
              </li>
            </ul>
          )
        })}
      </div>
    </article>
  )
}

export default Sidebar
