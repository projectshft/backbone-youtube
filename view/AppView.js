var AppView = Backbone.View.extend({
el: $('body'),

 events: {
  'click .btn' : 'createVideoRequest'
 },

initialize: function() {
  this.$videoList = this.$('.videoList');
  this.$sideVideoList = this.$('.sideVideoList');
  this.listenTo(this.model.get("videos"), 'add', this.renderVideo);
},

createVideoRequest: function() {
  appModel.get("videos").url(this.$('#videoSearch-input').val());
  appModel.get("videos").fetch();
},

renderVideo: function(video) {
  if (video.get("currentVideo"))
  {
    var videoView = new VideoView({model: video});
    this.$videoList.append(videoView.render().el); 
  } else {
    var sideBarView = new SideBarView({model: video});
    this.$sideVideoList.append(sideBarView.render().el); 
  }
},

// renderSideBar: function(video) {
//   var sideBarView = new SideBarView({model: video});
//   this.$sideVideoList.append(sideBarView.render().el);
// },

toggleVideoSelection: function() {
  //placeholder for function to handle clicking sidebar videos
},

testFunc: function() {
  console.log("this test: ",this.model);
}

});