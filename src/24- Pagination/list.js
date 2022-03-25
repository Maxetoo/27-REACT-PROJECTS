import React from 'react'

const List = ({ avatar_url, login, html_url }) => {
  return (
    <div className='list-cont'>
      <img src={avatar_url} alt={login} />
      <p className='name'>{login}</p>
      <a href={html_url}>
        <div className='btn'>VIEW PROFILE</div>
      </a>
    </div>
  )
}

export default List
