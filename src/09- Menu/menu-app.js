import React from 'react'
import { useState } from 'react'
import { menuData } from './menu-data'
import './menu.css'
import MenuCategory from './menu-category'
import MenuSection from './menu-section'

const MenuApp = () => {
  const allCategory = ['all', ...new Set(menuData.map((val) => val.category))]
  const [data, newData] = useState(menuData)
  const [category, newCategory] = useState(allCategory)
  const filtered = (category) => {
    if (category === 'all') {
      newData(menuData)
    } else {
      const fill = menuData.filter((val) => val.category === category)
      newData(fill)
    }
  }
  return (
    <>
      <section>
        <h1 className='title'>Our Menu</h1>
        <br />
        <MenuCategory categories={category} filteredItem={filtered} />
        <br />
        <MenuSection section={data} />
      </section>
    </>
  )
}

export default MenuApp
