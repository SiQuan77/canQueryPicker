import Toast from '@vant/weapp/toast/toast';
Page({
  data: {
    columns:['杭州', '宁波', '温州', '嘉兴', '湖州'],
    columns2:['USA','JP','CHINA','AUS','UK'],
    resultOfColumns:"",
    resultOfColumns2:"",
  },
  handleColumns(e){
    let value = e["detail"]["value"];
    return value;//不作任何处理
  },
  getSelectedValue(e){
    let key=e["detail"]["key"];
    let valueOfKey=e["detail"]["valueOfKey"];
    if(key!=""){
      this.setData({[key]:valueOfKey})
    }
  },
});
