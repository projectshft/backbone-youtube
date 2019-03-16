// Create default values for an App Model and default query string for when App first loads

const AppModel = Backbone.Model.extend({

  defaults: function() {
    return {
      videos: new VideoCollection(),
      current_video: null, 
      query: 'Baby Shark Remix'
    };
  }
});