const VideosCollection = Backbone.Collection.extend({
  // need example query for default
  query: "unc football",

  url: function () {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.query}&type=video&key=AIzaSyAEHp6nFgV39M7WWJsbyU3BK3QC7y0q5dQ`
  },
  model: VideoModel,
  fetchVideoData: function (query) {
      this.query = query;
      this.fetch();
    },
    // need to parse the video model data
    parse: function (response) {
      if (response.items) {
        return response.items.map(function (item) {
          return {
            videoId: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail_url: item.snippet.thumbnails.default.url
          }
        }, this)
      }
    }
  });
