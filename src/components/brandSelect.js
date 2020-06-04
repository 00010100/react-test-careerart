import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import DefaultSelect from '../components/defaultSelect'
import useHistoryReplace from '../hooks/useHistoryReplace'
import Loader from './loader'

const BrandSelect = ({defaultValue}) => {
  const [value, setValue] = useState(defaultValue || '')

  const {
    location: {pathname}
  } = useHistory()
  const [doMatch] = useHistoryReplace()

  const [{response}, doFetch] = useFetch('/brands_terms')

  useEffect(() => {
    doFetch()
  }, [doFetch])

  useEffect(() => {
    doMatch(pathname, 'b-', value)
  }, [pathname, doMatch, value])

  const handleChange = e => {
    setValue(e.target.value)
  }

  if (!response) return <Loader />

  return <DefaultSelect data={response.data} value={value} onChange={handleChange} id="brand-select" title="Brands Term" />
}

export default BrandSelect
