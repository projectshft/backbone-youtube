var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: function() {
        var videoModels = newCollection;

        return videoModels;
      }
    }
  }
});
