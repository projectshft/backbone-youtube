const FeaturedVideoView = Backbone.View.extend({
  model: VideoModel,
  defaults: {
    title: "",
    comments: "",
    link: ""
  }
})