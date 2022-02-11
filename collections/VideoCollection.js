var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  //Have to set the url to blank since we need to incorporate the search term into the middle of the address. So we can't just set the urlRoot or url. We have to regenerate the Url on every search.
  url: "",

  getData: function (searchTerm) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&type=video&videoEmbeddable=true&key=AIzaSyDdd1XfHLPnCtCxeT2PhbQcc7H127MVUyo`;

    this.fetch({ reset: true });
  },

  //Because we're fetching 5 results at a time, we need to parse and return a mapped set of objects (models);
  parse: function (data) {
    var videos = data.items.map(function (video) {
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        id: video.id.videoId,
        bigUrl: video.snippet.thumbnails.high.url,
      };
    });
    return videos;
  },
});
