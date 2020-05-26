var AppModel = Backbone.Model.extend({

  defaults: function() {
    return {
      videos: new VideosCollection({query: "number three they might be giants"}),
      current_video_index: 0,
      new_fetch: 0
    }
  },

  // Used in renderViewsOnInitial (and company).
  // Takes the videoId of the clicked div and uses it to get the
  // index of the associated model in the videoCollection. It then
  // sets current_video_index equal to that model's index.
  setCurrentVideoIndex: function(videoId) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.indexOf(allVideos.findWhere({videoId: videoId }));
    this.set('current_video_index', currentVideo);

  },

  // Creates new VideosCollection based on user input,
  // fetches data from the API, and resets the current_video_index to 0.
  resetQueryOnCollection: function(query) {

    this.set('videos', new VideosCollection({query: query}));
    const promise = this.get('videos').fetch({reset: true});
    promise.done(() => this.resetCurrentVideoIndex());
  },

  resetCurrentVideoIndex: function() {
    alert ("reset was called ")
    this.set('new_fetch', this.get('new_fetch') + 1);
    this.set('current_video_index', 0);
  }




});
