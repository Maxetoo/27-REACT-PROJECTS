import { useState, useEffect } from 'react'
export const useFetch = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [find, setFind] = useState('')
  const key = `xNRafNQqYKIeo-YxtjRAkg5jkbgYvyWyrULGUHSsGxM`
  const accessUrl = `https://api.unsplash.com/photos/?client_id=`
  const searchUrl = `https://api.unsplash.com/search/photos/?client_id=`

  const fetchData = async () => {
    setLoading(true)
    const getPage = `&page=${page}`
    const searchPage = `&query=${find}`
    try {
      let url
      if (!find) {
        url = `${accessUrl}${key}${getPage}`
      } else {
        url = `${searchUrl}${key}${getPage}${searchPage}`
      }
      const resp = await fetch(url)
      const data = await resp.json()
      setLoading(false)
      setData((value) => {
        if (find && page === 1) {
          return data.results
        } else if (find) {
          return [...value, ...data.results]
        } else {
          return [...value, ...data]
        }
      })
      console.log(data)
    } catch (error) {
      console.log(error)
      setLoading(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [page])

  useEffect(() => {
    const events = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 20
      ) {
        setLoading(true)
        setPage((page) => {
          return page + 1
        })
      }
    })
    return () => window.addEventListener('scroll', events)
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault()
    setPage(1)
    fetchData()
  }

  return { loading, data, find, setFind, handleSubmit }
}

export default useFetch
