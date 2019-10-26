//获取应用实例
const app = getApp();
Page({
    //在data中定义js和wxml中的映射变量
    data:{
        userAccount:'',
        userPwd:''
    },
    onLoad:function (options) {
        
    },
    login_btn:function () {
        //网络请求
        app.post({
            url:'user/login',
            data: {
                //username是提交POST的请求参数
                //this.data.userAccount是Page中定义的
                username : this.data.userAccount,
                password : this.data.userPwd
            }
        }).then(res=>{
            //如果登录成功，则
            app.globalData.user = res.user
            //相当于android中的Preference配置文件
            wx.setStorageSync('user', res.user);
            wx.showToast({
                title: '登录成功',
                duration: 2000
            })
            /*redirectTo：关闭当前页，跳转到指定页；
            navigateTo：保留当前页，跳转到指定页；
            switchTap：只能用于跳转到tabbar页面，并关闭其他非tabbar页面*/
            wx.navigateTo({
                url: '/pages/index/index'
            })
        }).catch(err=>{
            app.toast.fail(err.message || '请求失败')
        })
    },
    register_btn:function () {

    },
    getAccount:function (e) {
        var value = e.detail.value
        this.setData({
            userAccount: e.detail.value
        })
    },
    getPwd:function (e) {
        var value = e.detail.value
        this.setData({
            userPwd: e.detail.value
        })
    }
})
