import { useEffect, useState } from 'react'
import { Page } from './page'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const fetchData = async () => {
    setLoading(true)
    try {
      let resp = await fetch(url)
      let data = await resp.json()
      setData(Page(data))
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, data }
}
