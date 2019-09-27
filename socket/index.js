const WS = require('ws')
const schedule = require('node-schedule')
const pageService = require('../services/admin/page-service')
const spiderService = require('../services/admin/spider-service')
let timer = 0
// 创建了一个客户端的socket,然后让这个客户端去连接服务器的socket
var sock = new WS('ws://127.0.0.1:3000')
sock.on('open', async function () {
  console.log('connect success !!!!')
  await sendDatas(sock)
})

sock.on('error', function (err) {
  console.log('error: ', err)
})

sock.on('close', function () {
  console.log('close')
})

sock.on('message', function (data) {
  console.log(data)
})

async function sendDatas(socket) {
  try {
    let dataList = await pageService.getPageNewListAllByStatus({ status: 1 })
    console.log('@@@@@dataList.length: ', dataList.length)
    for (let data of dataList) {
      ++timer
      let spiderstr = await spiderService.getSpiderInfo(data)
      let spider = JSON.parse(spiderstr)
      let sdata = { spider: spider.data, name: data.pagetitle, channel: data.channel }
      let rule = new schedule.RecurrenceRule()
      rule.second = 10 * timer
      scheduleJobFunc(socket, rule, sdata)
    }
  } catch (error) {
    console.log('#@@@error: ', error)
  }
}

function scheduleJobFunc(socket, rule, data) {
  schedule.scheduleJob(rule, () => {
    console.log('scheduleCronstyle:', data)
    socket.send(JSON.stringify({ type: 1, data: data }))
  })
}
