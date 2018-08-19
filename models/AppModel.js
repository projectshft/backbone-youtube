var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: function() {
        var videoModels = new VideoCollection();
        videoModels.fetch();
        console.log(videoModels);
        return videoModels;
    }
  }
}
});
