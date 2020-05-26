var AppModel = Backbone.Model.extend({

  defaults: function() {
    return {
      videos: new VideosCollection({query: "number three they might be giants"}),
      current_video_index: 0,
      finished_reset: true
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
  // fetches data from the API. When the promise resolves,
  // set finished_reset to false, signalling to appView to re-render.
  // Then, reset current_video_index to 0, and give finished_reset
  // a value of true once again.

  // It's pretty hacky. Also, catch is here, but not doing much -
  // I've tried typing up nonsense and inputting, but no error
  // is logging to the console.
  fetchNewVideoCollection: function(query) {

    this.set('videos', new VideosCollection({query: query}));
    const promise = this.get('videos').fetch({reset: true});

    promise.then(
      () => {
      this.set('finished_reset', false);
      this.set('current_video_index', 0);
      this.set('finished_reset', true);
    }).catch(
      () => console.log('We couldn\'t find that.')
    );
  }




});
