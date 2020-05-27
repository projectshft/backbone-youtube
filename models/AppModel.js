var AppModel = Backbone.Model.extend({
  
  defaults: function () {
    return {
      videos: new VideoModel(),
      videoList: new VideoListCollection(),
      searchTerm: ''
    }
  }
});