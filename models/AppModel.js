var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),

      current_video: null,
    };
  },
  showMainVideo: function(id) {

    var allVideos = this.get('videos');

    var currentVideo = allVideos.findWhere({
      id: id
    });

    //when the current beer changes update the url to the new url with the id
    this.set('current_video', currentVideo);
    this.get('current_video', currentVideo).get('videos').updateVideoId(id);
  }

});
