//model representing both the sidebar of video recommendations and the current video
//the right side panel and the current video container will be formatted in their views

var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      video_url: '',
      image_url: '',
      title: '',
      description: ''
    }
  }
});
