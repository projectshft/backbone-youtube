var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new YoutubeCollection(),
    };
  }
});