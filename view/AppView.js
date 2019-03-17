var AppView = Backbone.View.extend({
el: $('body'),

 events: {
  'click .btn' : 'createVideoRequest',
  'click .videoBarItem' : 'toggleVideoSelection'
 },

initialize: function() {
  this.$videoList = this.$('.videoList');
  this.$sideVideoList = this.$('.sideVideoList');
  this.listenTo(this.model.get("videos"), 'add', this.renderVideo);
  this.listenTo(this.model.get("videos"), 'change:currentVideo', this.renderVideo);
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

toggleVideoSelection: function(e) {
  console.log($(e.currentTarget).data().id);
  console.log();
  //find current .video, delete element, set currentVideo = false
  //select clicked module, set currentVideo = true, delete 
  //invoke renderVideo
  }

});