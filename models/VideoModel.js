const VideoModel = Backbone.Model.extend({
  idAttribute: "videoId",

  defaults: {
    videoId: "",
    title: "",
    description: "",
    thumbnail_url: ""
  }

});