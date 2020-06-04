import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

import DefaultSelect from './defaultSelect'
import useFetch from '../hooks/useFetch'
import useHistoryReplace from '../hooks/useHistoryReplace'
import Loader from './loader'

const StyleSelet = ({defaultValue}) => {
  const [value, setValue] = useState(defaultValue || '')

  const {
    location: {pathname}
  } = useHistory()
  const [doMatch] = useHistoryReplace()

  const [{response}, doFetch] = useFetch('/styles')

  useEffect(() => {
    doFetch()
  }, [doFetch])

  useEffect(() => {
    doMatch(pathname, 'st-', value)
  }, [pathname, doMatch, value])

  const handleChange = e => {
    setValue(e.target.value)
  }

  if (!response) return <Loader />

  return <DefaultSelect data={response.data} value={value} onChange={handleChange} id="style-select" title="Style" />
}

export default StyleSelet
