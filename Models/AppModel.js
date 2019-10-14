var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideoCollection(),
      //incase of a search with no results, videosFound will be set to false and an error will be shown.
      searchTerm: null,
      videosFound: true

    }
  }
});
