import * as network from './network'
let baseUrl = 'http://localhost:40400/auth/'
export const login = (username,password) => {
  let requestHandler = {
    data:{
      username:username,
      password:password
    },
    url:baseUrl + 'userlogin'
  }
  return new Promise((resolve, reject) => {
    network.postFormData(requestHandler)
      .then(res => {
        wx.setStorageSync('token',res.token)
        wx.navigateTo({
          url: '/pages/index/index',
          events: {
            // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
            acceptDataFromOpenedPage: function(data) {
              console.log(data)
            },
            someEvent: function(data) {
              console.log(data)
            }
          },
          success: function(res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
          }
        })
      })
  })
}
export const userJwt = () => {

  let requestHandler = {
    header: {
      Cookie : searilizeJson( wx.getStorageSync('token') )
    }
  }
}
