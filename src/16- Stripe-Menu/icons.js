import React, { useState, useEffect } from 'react'
import { sublinks } from './data'
import { useGlobalContext } from './context'

const Icons = () => {
  const { isOnMouseOver, mouseOver, current } = useGlobalContext()
  const [setItems, newSetItems] = useState(sublinks)
  const getPosition = () => {}
  const { page, links } = setItems[current]
  return (
    <article className={`${isOnMouseOver ? 'other-icons' : 'none'}`}>
      <div className='local-items' style={{ marginLeft: `${6 * current}em` }}>
        <p className='name-items'>{page}</p>
        <span className='list-name-item'>
          {links.map((link, index) => {
            const { label, icon, url } = link
            return (
              <span className='icon-product'>
                <span className='icon-name'>{icon}</span>
                <span className='icon-tag'>
                  <a href={url}>{label}</a>
                </span>
              </span>
            )
          })}
        </span>
      </div>
    </article>
  )
}

export default Icons
