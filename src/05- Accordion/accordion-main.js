import React from 'react'
import './accordion.css'
import AccPage from './acc-page'
import { accodata } from './acc-data'

const Accordion = () => {
  return (
    <>
      <section>
        <h1 className='title'>ACCORDION</h1>
        {accodata.map((val) => {
          const { id, question, answer } = val
          return (
            <AccPage key={id} question={question} answer={answer}></AccPage>
          )
        })}
      </section>
    </>
  )
}

export default Accordion
