// Create default values for an App Model and default search string to being App

const AppModel = Backbone.Model.extend({

  defaults: function() {
    return {
      videos: new VideoCollection(),
      current_video: null, 
      query: 'Marshmello'
    };
  },

  // On start will immediately search for default search string so page doesn't start empty

  // initialize() {
  //   this.get('videos').fetchVideos(this.get('query'));
  // }
});