var AppModel = Backbone.Model.extend({

  defaults: function() {
    return {
      videos: new VideosCollection({query: "number three they might be giants"}),
      current_video_index: 0,
    }
  },

  // initialize: function() {
  //   this.listenTo(this.videos, 'change:query', this.renderViews)
  // },

  setCurrentVideoIndex: function(videoId) {
    var allVideos = this.get('videos');

    var currentVideo = allVideos.indexOf(allVideos.findWhere({ videoId: videoId }));
    this.set('current_video_index', currentVideo);

  },

  resetQueryOnCollection: function(query) {
    alert(query)
    this.set('videos', new VideosCollection({query: query}));
  }

});
