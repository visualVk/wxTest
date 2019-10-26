//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		item: 0,
		tab: 0,
		motto: 'Hello World',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		audioCtx: null,
		playList: [{
			id: 1,
			title: '1xxx',
			musicUrl: 'aaa',
			coverUrl: 'bbb'
		}],
		play: {},
		index: 0
	},
	changeTab: function(e) {
		// console.log(e.detail.current)
		this.setData({
			tab: e.detail.current
		})
	},
	changeItem: function(e) {
		let cur = e.target.dataset.item;
		this.setData({
			item: cur
		})
	},
	//事件处理函数
	bindViewTap: function() {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	onLoad: function() {
		wx.request({
			url: 'http://localhost:3000/nodejs_server/getPlayList',
			method: 'get',
			success: (res) => {
				this.setData({
					playList: res.data
				})
				console.log(this.data.playList)
			}
		})
	},
	getUserInfo: function(e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	},
	onReady: function() {
		let music = wx.createInnerAudioContext()
		music.onPlay(function() {
			console.log('start')
		})
		music.onError(function(res) {
			console.log('error')
		})
		music.src = this.data.playList[0].musicUrl
		this.setData({
			audioCtx: music
		})
	},
	changeValue: function(e) {
		console.log(e.detail.value)
	},
	changePage: function(e) {
		let pageId = e.target.dataset.page
		this.setData({
			item: pageId
		})
	},
	pause: function(e) {
		this.data.audioCtx.play()
		console.log('pause')
	},
	play: function(e) {
		this.data.audioCtx.pause()
		console.log('play')
	},
	next: function(e) {
		setMusic(index + 1)
	},
	setMusic: function(index) {
		if (index < 0 || index >= playList.size()) {
			this.setData({
				audioCtx: playList[index].musicUrl
			})
		}
	}
})
