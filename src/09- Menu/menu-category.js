import React from 'react'

const MenuCategory = ({ categories, filteredItem }) => {
  return (
    <div className='btn-all'>
      {categories.map((category) => {
        return (
          <div className='btn' onClick={() => filteredItem(category)}>
            {category}
          </div>
        )
      })}
    </div>
  )
}

export default MenuCategory
