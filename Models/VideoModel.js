var videoModel = Backbone.Model.extend({
    defaults: function () {
      return {
        name: 'title',
        videos: new VideoCollection()
      }
    }
  });