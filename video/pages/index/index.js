//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    multiArray: [['万花', '七秀', '纯阳', '天策','少林','江湖'], ['万花弟子','谷之岚', '裴元', '东方宇轩']],
    multiIndex: [0,0],
    profile:'wanhuadizi',
    pinyin:{'万花弟子':'wanhuadizi','谷之岚':'guzhilan','裴元':'peiyuan','东方宇轩':'dongfangyuxuan','七秀弟子':'qixiudizi','小气':'xiaoqi','高绛婷':'gaojiangting','叶芷青':'yezhiqing','纯阳弟子':'chunyangdizi','洛风':'luofeng','祁进':'qijin','李忘生':'liwangsheng','于睿':'yurui','天策弟子':'tiancedizi','朱剑秋':'zhujianqiu','杨宁':'yangning','曹雪阳':'caoxueyang','李承恩':'lichengen','少林弟子':'shaolindizi','木师傅':'mushifu','渡会':'duhui','玄正':'xuanzheng','李复':'lifu','秋叶青':'qiuyeqing','陈月':'chenyue','莫雨':'moyu','穆玄英':'muxuanying','唐简':'tangjian'}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value,
      profile: this.data.pinyin[this.data.multiArray[1][e.detail.value[1]]]
    });
  },
  bindMultiPickerColumnChange: function (e) {
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;   
    switch (e.detail.column) {
      case 0:
        switch(data.multiIndex[0]){
          case 0:
            data.multiArray[1] = ['万花弟子', '谷之岚', '裴元', '东方宇轩'];
            break;
          case 1:
            data.multiArray[1]=['七秀弟子','小七','高绛婷','叶芷青'];
            break;
          case 2:
            data.multiArray[1] = ['纯阳弟子', '祁进', '洛风', '李忘生','于睿'];
            break;
          case 3:
            data.multiArray[1] = ['天策弟子', '朱剑秋', '曹雪阳', '李承恩'];
            break;
          case 4:
            data.multiArray[1] = ['少林弟子', '木师傅', '渡会', '玄正'];
            break;
          case 5:
            data.multiArray[1] = ['李复', '秋叶青', '陈月', '莫雨','穆玄英'];
            break;
        }
        data.multiIndex[1]=0;
    }
    this.setData(data);
  }
})
