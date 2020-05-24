var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  // for each video, we'll need to parse its data for our own purposes
  parse: function () {},
});
