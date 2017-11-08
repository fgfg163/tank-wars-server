const uuid = require('uuid')
const moment = require('moment')

module.exports.newRoom = function (roomId) {
  return {
    roomId: roomId || uuid.v4(),  // 房间id
    roomName: '',             // 房间名称
    createTime: moment(),   // 创建时间
    totalGameNum: 1,         // 游戏总局数
    redInterface: '',        // 红方接口
    blueInterface: '',       // 蓝方接口
    gameRounds: 500,         // 回合数
    mapOption: {
      width: 40,             // 地图宽度
      height: 40,            // 地图高度
      generateMode: 'random',// 生成类型，centrosymmetry=中心对称，random=随机
    },                       // 地图设置
    games: [],               // 游戏局列表
  }
}
