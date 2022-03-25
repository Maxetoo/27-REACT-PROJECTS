import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { sublinks } from './data'
import { useGlobalContext } from './context'

const Modal = () => {
  const { modalOpen, closeModal } = useGlobalContext()
  const [setItem, setNewItem] = useState(sublinks)
  return (
    <>
      {modalOpen && (
        <article className='modal'>
          <div className='btn-close' onClick={closeModal}>
            <FaTimes />
          </div>
          <div className='modal-items'>
            {setItem.map((value, index) => {
              const { page, links } = value
              return (
                <div className='modal-name' key={index}>
                  <p className='product-name'>{page}</p>
                  <div className='display-items'>
                    {links.map((link, index) => {
                      const { label, icon, url } = link
                      return (
                        <span className='modal-icons' key={index}>
                          <span className='icon'>{icon}</span>
                          <span className='link'>
                            <a href={url}>{label}</a>
                          </span>
                        </span>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </article>
      )}
    </>
  )
}

export default Modal
