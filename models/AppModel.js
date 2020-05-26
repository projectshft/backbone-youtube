var AppModel = Backbone.Model.extend({

  defaults: function() {
    return {
      videos: new VideosCollection({query: "number three they might be giants"}),
      current_video_index: 0,
    }
  },


  setCurrentVideoIndex: function(videoId) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.indexOf(allVideos.findWhere({ videoId: videoId }));
    this.set('current_video_index', currentVideo);

  },

  resetQueryOnCollection: function(query) {
    alert(query + 'is the query')
    this.set('videos', new VideosCollection({query: query}));
    this.get('videos').fetch({reset: true });
    this.set('current_video_index', 0);
  },


});
