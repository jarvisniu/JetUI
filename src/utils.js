function convertSizeToCSS(str='') {
  if (typeof str == 'number') {
    return str + 'px'
  } else if (str.includes('px')) {
    console.error('[jet-ui] Please omit the "px" unit in prop "margin".')
    return ''
  }
  return str.trim().split(/ +/g).map(x => x + 'px').join(' ')
}

export { convertSizeToCSS }
