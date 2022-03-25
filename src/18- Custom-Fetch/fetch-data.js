import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isLoading, notLoading] = useState(true)

  let fetchData = async () => {
    notLoading(true)
    try {
      notLoading(false)
      let resp = await fetch(url)
      let data = await resp.json()
      setData(data)
    } catch (error) {
      notLoading(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return { data, isLoading }
}
