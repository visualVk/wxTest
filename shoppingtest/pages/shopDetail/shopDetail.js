// pages/shopDetail/shopDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopDetail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    // this.getDetail(id)
    this.setData({
      shopDetail:{
        shopName:"123",
        shopDistance:111,
        shopTime:new Date().getTime()
      }
    })
  },


  getDetail:function(id){
    let that = this
    app.post({
      url:'shop/getById',
      data:{
        shopId:id
      }
    }).then(res => {
        that.setData({
          shopDetail : res.shop
        })
    })
  },

  addApprise:function(){
    wx.navigateTo({
      url: '/pages/addApprise/addApprise?id=' + this.data.shopDetail.shopId
    })
  },

  apprise:function(){
    console.error(this.data.shopDetail.shopId)
    wx.navigateTo({
      url: '/pages/appriseList/appriseList?id=' + this.data.shopDetail.shopId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
