import {useCallback, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

import {createRegExp} from '../utils'

export default () => {
  const [match, setMatch] = useState(null)
  const [value, setValue] = useState('')
  const [path, setPath] = useState('')
  const [pattern, setPattern] = useState('')

  const history = useHistory()

  const doMatch = useCallback((pathname, pattern, value) => {
    const reg = createRegExp(pattern)

    setValue(value)
    setPath(pathname)
    setPattern(pattern)
    setMatch(pathname.match(reg))
  }, [])

  useEffect(() => {
    if (!value) return

    if (!match) {
      history.replace(`${path}${pattern}${value}/`)
    } else {
      const replaced = path.replace(match[1], value)
      history.replace(replaced)
    }
  }, [history, value, path, pattern, match])

  return [doMatch]
}
