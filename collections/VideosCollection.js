var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  // the url for the API call gets set in the app model

  // for each video, we'll need to parse its data
  parse: function (response) {
    console.log("The JSON response is", response);
    return response;
  },
});
