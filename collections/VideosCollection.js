var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  // the url for the API call gets set in the app model

  // for each video, we'll need to parse its data
  parse: function (response) {
    console.log("The response to the API call is", response);

    // we want a mapped array of video objects to pass into handlebars
    return response.items.map(function (videoData, index) {
      // when we conduct the search, our main video will be our first result
      if (index === 0) {
        var main = true;
      }

      // in case a title is really long, we want to truncate it
      if (videoData.snippet.title.length > 70) {
        var shorterTitle = videoData.snippet.title.slice(0, 70) + "...";
      }

      // these objects will be used by handlebars to render video on page
      // using #unescape to convert HTML character codes to their correct representation
      return {
        id: videoData.id.videoId,
        description: videoData.snippet.description,
        thumbnail_url: videoData.snippet.thumbnails.medium.url,
        channelTitle: videoData.snippet.channelTitle,
        title: videoData.snippet.title,
        main: main,
        shorterTitle: shorterTitle || null,
      };
    }, this);
  },
});
