function convertSizeToCSS(str='') {
  if (str == null) {
    return null
  } else if (typeof str == 'number') {
    if (str == 0) return '0'
    else return str + 'px'
  } else if (/^[\d\.]+%$/.test(str)) {
    return str
  } else if (str.includes('px')) {
    return str
  }
  return str.trim().split(/ +/g).map(x => x + 'px').join(' ')
}

export {
  convertSizeToCSS,
}
