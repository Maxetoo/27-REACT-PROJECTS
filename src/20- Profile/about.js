import React, { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { dataInfo } from './data'

const About = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [prof, setProf] = useState('')
  const [img, setImg] = useState('')
  const location = useLocation()
  console.log(location.pathname)

  useEffect(() => {
    const data = dataInfo.find((value) => value.id === +id)
    setName(data.name)
    setAge(data.age)
    setProf(data.profession)
    setImg(data.image)
  }, [])

  return (
    <article className='about'>
      <div className='location'>{location.pathname}</div>
      <div className='about-person'>
        <img src={img} alt={name} className='about-img' />
        <div className='details'>
          <span className='name-details'>
            <p className='cont'>Name:</p>
            <p className='main-name'>{name}</p>
          </span>
          <span className='age-details'>
            <p className='cont'>Age:</p>
            <p className='age-num'>{age}</p>
          </span>
          <span className='name-details'>
            <p className='cont'>Profession:</p>
            <p className='prof-name'>{prof}</p>
          </span>
        </div>
      </div>
      <Link to='/'>
        <div className='btn-back'>Back Home</div>
      </Link>
    </article>
  )
}

export default About
