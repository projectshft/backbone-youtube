//Note above we are setting the main_video to null as a default. Thisis the video that will be displayed on the 'main' video view.

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      main_video: null,
      searchTerm: "",
    };
  },
});
