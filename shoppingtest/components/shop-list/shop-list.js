Component({
    /**
     * 组件的属性列表
     */
    properties: {
        shopList: {
            type: Array,
            value: []
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
      shopList: [
        {
          shopId:1,
          shopName:'111',
          shopSpend:123,
          shopDesc:11
        }
      ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        toDetail:function(e){
            let id = e.currentTarget.dataset.id
            wx.navigateTo({
                url: '/pages/shopDetail/shopDetail?id=' + id
            })
        },
    }
})
