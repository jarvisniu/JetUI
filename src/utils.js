function convertSizeToCSS(str='') {
  if (typeof str == 'number') {
    if (str == 0) return '0'
    else return str + 'px'
  } else if (/^[\d\.]+%$/.test(str)) {
    return str
  } else if (str.includes('px')) {
    console.error('[jet-ui] Please omit the "px" unit in prop.')
    return ''
  }
  return str.trim().split(/ +/g).map(x => x + 'px').join(' ')
}

export {
  convertSizeToCSS,
}
