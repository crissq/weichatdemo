// pages/posts/post-detail/post-detail.js
var postsData = require('../../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id
    this.data.currentPostId = postId
    var postData = postsData.postList[postId]
    this.setData({...postData})
    var postsCollected = wx.getStorageSync('postsCollected')
    if(postsCollected){
      var postCollected = postsCollected[postId]
      if(postCollected){
        this.setData({
          collected:postsCollected
        })
      }
    }
    else{
      var postsCollected = {}
      postsCollected[postId] = false
      wx.setStorageSync('postsCollected', postsCollected)
    }
  },
  onCollectionTap:function(){
    //如果当前文章是收藏状态，那我们应该提示是否取消收藏
    var that = this
    var postsCollected = wx.getStorageSync('postsCollected')
    var collected = postsCollected[that.data.currentPostId]
   wx.showModal({
    //  title:"收藏",
     content:collected?"是否取消收藏":"是否收藏",
     showCancel:true,
     cancelText:"取消",
     confirmText:"确认",
     cancelColor: '#450f80',
     success:function(res){
       //点击的是收藏还是未收藏
       console.log(res)
       if(res.confirm){
          collected = !collected
          postsCollected[that.data.currentPostId] = collected
          wx.setStorageSync('postsCollected', postsCollected)
          that.setData({collected})
       }
     }
   })
  //  wx.showToast({
  //   title: collected ? '收藏成功':"取消成功",
  //   duration: 1000,
  //   icon:"success"
  // })
  //this指代的是函数调用的上下文
  },
  onShareTap:function(){
    
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