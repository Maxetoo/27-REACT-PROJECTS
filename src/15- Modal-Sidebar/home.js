import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useGlobalHook } from './context'

const Home = () => {
  const { isModalOpen, openModal, closeModalbar, openSidebar } = useGlobalHook()
  return (
    <main>
      <div className='icon' onClick={openSidebar}>
        <FaBars />
      </div>
      <div className='show-modal'>
        <div className='show-btn' onClick={openModal}>
          show modal
        </div>
      </div>
      {isModalOpen && (
        <article className='showDisplay-modal'>
          <div className='display-show'>
            <span className='modal-cancel' onClick={closeModalbar}>
              <FaTimes />
            </span>
            <p className='message'>Nothing To Show</p>
          </div>
        </article>
      )}
    </main>
  )
}

export default Home
