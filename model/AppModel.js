var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
    searchInput: "",
    videos: new VideoCollection()
    }
  },

  updateCurrentVideo: function(id) { //Invoked when video is changed. Sets the current currentVideo value to false, and the new one to true,
    var allVideos = this.get("videos");

    var currentVideo = allVideos.findWhere({currentVideo: true});
    currentVideo.set('currentVideo', false);

    var newCurrentVideo = allVideos.findWhere({id: id});
    newCurrentVideo.set('currentVideo', true);
}

});