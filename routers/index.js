const roomList = require('../tank_core/room_list')

module.exports = function (app) {
  const createGame = (req, res) => {

  }
  app.get('/create-game', createGame)
  app.post('/create-game', createGame)

  app.get('/get-room-list', (req, res) => {
    console.log(req.url)

    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    })

    res.write('retry: 0\n\n')

    res.write('event: reset\n')
    res.write('data: reset\n\n')

    roomList.getRoomList().forEach(room => {
      res.write('event: room\n')
      res.write(`data: ${JSON.stringify(room)}\n\n`)
    })

    res.write('retry: 10000\n\n')

    const interval = setInterval(function () {
      console.log(req.url)
      res.write('event: keepalive\n')
      res.write('data: ' + Date.now().toString() + '\n\n')
    }, 5000)

    req.connection.addListener('close', function () {
      clearInterval(interval)
    }, false)
  })
}