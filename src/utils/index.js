export const createUrl = location => {
  const patterns = ['s-', 'b-', 'st-']
  const regexps = patterns.map(pattern => createRegExp(pattern))
  const [term, brand, style] = regexps.map(r => location.pathname.match(r))

  return `/parse_link?service_slug=${term && term[1]}&style_slug=${style && style[1]}&brand_slug=${brand && brand[1]}`
}

export const createRegExp = pattern => new RegExp(`${pattern}(.*?)(?:/|$)`)
