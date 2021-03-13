import { useState, useEffect } from "react"

const useFetch = input => {
  const [data, setData] = useState(false)
  const [isPending, setIsPending] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async input => {
      let data = false

      setError(null)

      setIsPending(true)

      data = await fetchData(input)

      setIsPending(false)

      setData(data)
    }

    const fetchData = async input => {
      try {
        const result = await fetch(input)
        const data = await result.json()
        return data
      } catch (error) {
        setError(error.message)
      }
    }

    getData(input)
  }, [input])

  return { data, isPending, error }
}

export default useFetch
