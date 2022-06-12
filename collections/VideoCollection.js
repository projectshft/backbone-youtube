var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  url: '',

  updateUrl: function (query) {
    this.url = encodeURI(
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=AIzaSyAwyG_bbZrSSSEpsgncd96u7CkFEw2_0H4&q=' + query
    );

    this.fetchVideoData()
  },

  fetchVideoData: function () {
    this.fetch({ reset: true });
  },

  parse: function (response) {
    return response.items.map(item => {
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url
      }
    });
  },
});