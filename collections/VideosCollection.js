var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  defaults: {},

  // the url for the API call gets set in the app model

  // for each video, we'll need to parse its data
  parse: function (response) {
    console.log("The response to the API call is", response);

    // we want a mapped array of video objects to pass into handlebars
    return response.items.map(function (video, index) {
      // when we conduct the search, our main video will be our first result
      if (index === 0) {
        var main = true;
      }

      return {
        id: video.id.videoId,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.default,
        channelTitle: video.snippet.channelTitle,
        publishTime: video.snippet.publishTime,
        main: main,
      };
    }, this);
  },
});
