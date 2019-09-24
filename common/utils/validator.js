module.exports = {
  isNum: (num) => {
    return (typeof parseInt(num) === 'number' && num >= 0 && !(num === ''))
  }
}
