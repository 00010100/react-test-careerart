import {useEffect, useState, useCallback} from 'react'
import axios from 'axios'

export default url => {
  const baseUrl = 'https://beta.autobooking.com/api/test/v1/search'
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})

  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (!isLoading) return

    axios(`${baseUrl}${url}`, options)
      .then(result => {
        setIsLoading(false)
        setResponse(result.data)
      })
      .catch(error => {
        setIsLoading(false)
        setError(error.response.data)
      })
  }, [url, options, isLoading])

  return [{isLoading, response, error}, doFetch]
}
