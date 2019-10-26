Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inputPlaceHolder: {
      type: String,
      value: ''
    },
    inputType: {
      type: String,
      value: 'text'
    },
    isPassword: {
      type: Boolean,
      value: false
    },
    holderClass:{
      type: String,
      value:'input_text_class'
    },
    maxLen : String,
    inputValue: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    ec: {
      isClearShow:false
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputClick:function (e) {
      let value = e.detail.value
      if(value==null || value==undefined || value.length==0){
        this.setData({
          isClearShow:false
        })
      }else{
        this.setData({
          isClearShow:true
        })
      }
      let detail = {
        value: value,
      };
      this.triggerEvent('inputClick', detail);
    },
    blurClick:function(e){
      let value = e.detail.value
      this.setData({
        isClearShow:false
      })
      console.log(this.data.isClearShow)
    },
    focusClick:function(e){
      let value = e.detail.value
      if(value==null || value==undefined || value.length==0) {
        this.setData({
          isClearShow: false
        })
      }else{
        this.setData({
          isClearShow: true
        })
      }
      console.log(this.data.isClearShow)
    },
    clearTap:function(){
      console.log('清楚')
      this.setData({
        inputValue: '',
        isClearShow: false,
      })
    },
  }
})
