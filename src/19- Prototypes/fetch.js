import { useState, useEffect } from 'react'

export const useData = (url) => {
  const [person, setPerson] = useState([])

  const fetchData = async () => {
    let resp = await fetch(url)
    let data = await resp.json()
    setPerson(data)
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [url])
  return { person }
}

// export default useFetch
