//contains the single fetched video collection of 5 videos plus one selected video for the main view
var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideoCollection(),
      selectedVideo: null
    }
  },
  //clears the previously selected main video and assigns the new one
  updateSelected: function(id) {
    var allVideos = this.get('videos');
    var selectedVideo = allVideos.findWhere({
      id: id
    });
    this.set('selectedVideo', selectedVideo);
  }
});
