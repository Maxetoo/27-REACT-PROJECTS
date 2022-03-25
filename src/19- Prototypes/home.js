import React from 'react'
import './prop.css'
import { useData } from './fetch'
import Prop from './prop'
const url = 'https://course-api.com/react-prop-types-example'
// import moduleName from 'module'
const Home = () => {
  const { person } = useData(url)
  return (
    <>
      <section>
        <h1 className='title'>Prototypes</h1>
        <br />
        <article>
          {person.map((value) => {
            return <Prop key={value.id} {...value} />
          })}
        </article>
      </section>
    </>
  )
}

export default Home
