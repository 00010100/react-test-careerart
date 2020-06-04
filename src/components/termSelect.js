import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

import DefaultSelect from './defaultSelect'
import useFetch from '../hooks/useFetch'
import useHistoryReplace from '../hooks/useHistoryReplace'
import Loader from './loader'

const TermSelect = ({defaultValue}) => {
  const [value, setValue] = useState(defaultValue || '')

  const {
    location: {pathname}
  } = useHistory()
  const [doMatch] = useHistoryReplace()

  const [{response}, doFetch] = useFetch('/terms')

  useEffect(() => {
    doFetch()
  }, [doFetch])

  useEffect(() => {
    doMatch(pathname, 's-', value)
  }, [pathname, doMatch, value])

  const handleChange = e => {
    setValue(e.target.value)
  }

  if (!response) return <Loader />

  return <DefaultSelect data={response.data} value={value} onChange={handleChange} id="term-select" title="Term" />
}

export default TermSelect
