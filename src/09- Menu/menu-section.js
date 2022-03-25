import React from 'react'

const MenuSection = ({ section }) => {
  return (
    <article>
      {section.map((category) => {
        const { id, title, price, img, desc } = category
        return (
          <div className='container' key={id}>
            <div className='img'>
              <img src={img} alt={title} className='image' />
            </div>
            <div className='details'>
              <div className='name'>{title}</div>
              <div className='underline'></div>
              <div className='desc'>{desc}</div>
              <div className='price'>{price}</div>
            </div>
          </div>
        )
      })}
    </article>
  )
}

export default MenuSection
