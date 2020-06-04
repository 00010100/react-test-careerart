import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import BrandSelect from './components/brandSelect'
import TermSelect from './components/termSelect'
import StylesSelect from './components/styleSelect'

import useFetch from './hooks/useFetch'
import Loader from './components/loader'
import {createUrl} from './utils'

const App = () => {
  const location = useLocation()

  const [{response}, doFetch] = useFetch(createUrl(location))

  useEffect(() => {
    doFetch()
  }, [doFetch])

  if (!response) {
    return <Loader />
  }

  return (
    <div className="container">
      <BrandSelect defaultValue={response.brand.slug} />
      <TermSelect defaultValue={response.service.slug} />
      <StylesSelect defaultValue={response.style.slug} />
    </div>
  )
}

export default App
