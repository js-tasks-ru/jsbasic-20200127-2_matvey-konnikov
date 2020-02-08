/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    let newStr = str
    .split('-')
    .map((item,index) => index === 0 ? item: item[0].toUpperCase() + item.slice(1))
    .join('')
    return newStr
  }
