var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      //set the default parameters of the query to allow for automatic search at load
      query: 'asmr',
      videos: new VideosCollection(),
    }
  },

  setCurrentVideo: function(id) {

    var allVideos = this.get('videos');

    allVideos.forEach(function(index) {
      index.set('current_video', false);
    });

    var currentVideo = allVideos.findWhere({ videoId: id });

    currentVideo.set('current_video', true);

    console.log(currentVideo);

  }

});
