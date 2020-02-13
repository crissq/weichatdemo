// pages/welcome/welcome.js
Page({
  onTap:function(){
    console.log(1)
    // wx.navigateTo({
    //   url: '../posts/post',
    // })
    // wx.redirectTo({
    //   url: '../posts/post',
    // })
    wx.switchTab({
      url: '../posts/post',
    })
  },
  
  onUnload:function(){
    console.log("onUnload")
  },
  onHide:function(){
    console.log('onHide')
  }
})