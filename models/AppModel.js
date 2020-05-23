var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),

    }
  }
});

// https://www.youtube.com/watch?v=mLyOj_QD4a4