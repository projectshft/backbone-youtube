var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      video: new YoutubeCollection(),
    };
  }
});