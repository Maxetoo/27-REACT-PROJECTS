import React from 'react'
import List from './list'
import { useFetch } from './fetch-data'

const url = 'https://course-api.com/react-useReducer-cart-project'

const Display = () => {
  const { data, isLoading } = useFetch(url)
  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    )
  } else {
    return (
      <section>
        <h1>Names Of Phones</h1>
        <br />
        {data.map((val) => {
          return <List value={val} key={val.id} />
        })}
      </section>
    )
  }
}

export default Display
