const events = require('events')
const roomGenerator = require('./room')

let roomList = []

const roomChangeEventEmitter = new events.EventEmitter()

module.exports.roomChangeEventEmitter = roomChangeEventEmitter

module.exports.init = function () {
  roomList = []
  roomChangeEventEmitter.removeAllListeners()
  return roomList
}

module.exports.getRoomList = function () {
  return roomList
}

module.exports.getRoomById = function (roomId) {
  return roomList[roomId]
}

module.exports.createRoom = function () {
  const newRome = roomGenerator()
  roomList.unshift(newRome)
  roomChangeEventEmitter.emit('create-room', newRome);
  return newRome
}

module.exports.deleteRoom = function (roomId) {
  const theRoom = roomList.find(room => room.roomId === roomId)
  roomList = roomList.filter(room => room.roomId !== roomId)
  roomChangeEventEmitter.emit('delete-room', theRoom);
  return theRoom
}
