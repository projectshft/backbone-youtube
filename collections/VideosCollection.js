var VideosCollection = Backbone.Collection.extend({
  url: '',

  defaultUrl: `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&fields=items(id(videoId),snippet(title,description,thumbnails(default(url))))&type=video&key=AIzaSyCZJr48wGNGhUN7Ki8HLbYO4jN2AwqG0l8&q=`,

  model: VideoModel,

  //this function takes the response array from the videos and maps a new array of videos to be used in the current_video and video queue.
  parse: function (response) {

    var searchResults = response.items.map(function (item) {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url
      }
    })
    appModel.get('videos').reset(searchResults)
  },

  //this function runs the get request to the youtube api to return a list of 10 videos matching the search query.
  fetchVideos: function () {
    this.fetch({ reset:true })
  }
});
