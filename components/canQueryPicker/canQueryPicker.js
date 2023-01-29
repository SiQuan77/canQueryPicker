import Toast from '@vant/weapp/toast/toast';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //这个选择器的名称，也就是cell的title
    pickerTitle:{
      type:String,
      value:"默认选项"
    },
    //假设传入的都是处理好的数组
    pickerColumns:{
      type:Array,
      value:[]
    },
    keyValue:{
      type:"String",
      value:"defaultKeyValue"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    valueInSearch:"",
    show: false,
    columnsForSelect:[],//被过滤之后用于展示的
    seletedValueForShowing:"未选中"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPopClose(){
      this.setData({show:false})
    },
    showPopup() {
      this.setData({ 
        valueInSearch:"",
        show: true,
        columnsForSelect:this.data["pickerColumns"]
      });
    },
    onSearchChange(event){
      let searchValue = event["detail"];
      if(searchValue!=""){
        let newColumns = this.data["pickerColumns"].filter(item=>{
          return item.indexOf(searchValue)>=0;
        })
        this.setData({columnsForSelect:newColumns})
      }else{
        this.setData({columnsForSelect:this.data["pickerColumns"]})
      }
    },
    onCancel(){
      this.setData({show:false})
    },
    onConfirm(event) {
      const { picker, value, index } = event.detail;
      if(value==""){
        Toast("请选择一项后再点击确定");
        return;
      }
      this.setData({
        seletedValueForShowing:value,
        show:false
      })
      this.triggerEvent("getSelectedValue",{key:this.data["keyValue"],valueOfKey:value})
    }
  }
})
