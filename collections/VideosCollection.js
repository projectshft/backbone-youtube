var VideosCollection = Backbone.Collection.extend({
  url: '',

  defaultUrl: `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&fields=items(id(videoId),snippet(title,description,thumbnails(default(url))))&type=video&key=AIzaSyCZJr48wGNGhUN7Ki8HLbYO4jN2AwqG0l8&q=`,

  model: VideoModel,

  addVideos: function (title, description, id) {
    this.add({

    })
  },

  parse: function (response) {
    var searchResults = [];

    response.items.forEach(function(item) {
      var searchResultObject = {};
      searchResultObject.id = item.id.videoId;
      searchResultObject.title = item.snippet.title;
      searchResultObject.description = item.snippet.description;
      searchResultObject.thumbnail = item.snippet.thumbnails.default.url;

      searchResults.push(searchResultObject);
    })
    appModel.get('videos').reset(searchResults)
    console.log('parsed')
  },

  fetchVideos: function () {
    this.fetch({ reset:true })
  }
});
