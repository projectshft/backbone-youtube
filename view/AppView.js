var AppView = Backbone.View.extend({
el: $('body'),

 events: {
  'click .btn' : 'createVideoRequest', //Search button.
  'click .videoBarItem' : 'toggleVideoSelection' //Clicking sidebar video thumbnails.
 },

initialize: function() {
  this.$videoList = this.$('.videoList'); //Dom element to attach main video to.
  this.$sideVideoList = this.$('.sideVideoList'); //Dom element to attach thumbnails to.
  this.listenTo(this.model.get("videos"), 'add', this.renderVideo); //Triggers rendering of videos on search.
  this.listenTo(this.model.get("videos"), 'change:currentVideo', this.updateViews); //Triggers sequence of rendering functions when model data is changed for currentVideo.
  this.listenTo(this.model.get("videos"), 'remove', this.clearViews);  
  this.$('#videoSearch-input').attr("value", "Backbone.js") //This is for the initial load search input.
  this.createVideoRequest();
},

createVideoRequest: function() { //Invokes fetch w/ user input
  var searchInput = this.$('#videoSearch-input').val();
  appModel.set("searchInput",searchInput);
  appModel.get("videos").fetch();
},

renderVideo: function(video) { //Handles creation of views based on currentVideo value.
  if (video.get("currentVideo"))
  {
    var videoView = new VideoView({model: video});
    this.$videoList.append(videoView.render().el); 
  } else {
    var sideBarView = new SideBarView({model: video});
    this.$sideVideoList.append(sideBarView.render().el); 
  }
},

toggleVideoSelection: function(e) { //Starts the process of updating the model after a thumbnail is clicked.
  var clickedVideoId = $(e.currentTarget).data().id;
  this.model.updateCurrentVideo(clickedVideoId);
},

clearViews: function() { //Clears html elements when a new search is performed resulting in models being cleared out.
  this.$videoList.empty();
  this.$sideVideoList.empty();
},

updateViews: function() { //Clears html elements 
this.$videoList.empty();
this.$sideVideoList.empty();
this.model.get('videos').each(function (m) {
  this.renderVideo(m);
}, this);
}
});