
const http = require('http')
const iconv = require('iconv-lite')
const config = require('../../config/config')
const prefixImgUrl = (imgs) => {
  if (imgs instanceof Array) {
    imgs.forEach(img => {
      img.icon = img.icon ? config.base + '/' + img.icon : ''
    })
  } else {
    imgs.icon = imgs.icon ? config.base + '/' + imgs.icon : ''
  }
}

// 插入排序
const insersort = (arr) => {
  for (let i = 1; i < 10; i++) {
    let temp = arr[i]
    let j = i
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}

const replaceData = function (str) {
  let resStr = JSON.stringify(str)
  resStr = resStr.replace('"', '').replace(/[\\]/g, '')
  let indexStart = resStr.lastIndexOf('[')
  let endPos = resStr.lastIndexOf(']')
  let dataStr = resStr.substring(indexStart + 1, endPos)
  let newJsonArr = []
  let JsonStrArr = []
  let allDataStr = dataStr
  while (allDataStr.indexOf('}') > 1) {
    let startAPos = allDataStr.indexOf('{')
    let endAPos = allDataStr.indexOf('}') + 1
    JsonStrArr.push(allDataStr.substring(startAPos, endAPos))
    allDataStr = allDataStr.substring(endAPos + 1, allDataStr.length)
  }
  JsonStrArr.forEach(jsonStr => {
    let newJsonCont = '{'
    let jsonCont = jsonStr.substring(1, jsonStr.length - 1)
    let eleArr = jsonCont.split(',')
    let newEleArr = []
    eleArr.forEach(eleStr => {
      eleStr = '"' + eleStr.split(':')[0] + '"' + ':' + eleStr.split(':')[1]
      newEleArr.push(eleStr)
      newJsonCont += eleStr + ','
    })
    newJsonCont = newJsonCont.substring(0, newJsonCont.length - 1) + '}'
    newJsonArr.push(JSON.parse(newJsonCont))
  })
  return newJsonArr
}

const getPageAsync = function (url) {
  return new Promise(function (resolve, reject) {
    http.get(url, function (res) {
      let length = 0
      let arr = []
      res.on('data', function (chunk) {
        arr.push(chunk)
        length += chunk.length
      })
      res.on('end', function () {
        let data = Buffer.concat(arr, length)
        let changeData = iconv.decode(data, 'gb2312')
        resolve(changeData)
      })
    })
  })
}

module.exports = {
  prefixImgUrl,
  insersort,
  replaceData,
  getPageAsync
}
