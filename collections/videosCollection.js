//the videosCollection contains the parse default url, the
var VideosCollection = Backbone.Collection.extend({

  //default URL gets the top 5 youtube videos about dogs
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=dogs&key=AIzaSyD9a8mfFIJuCZwzS57LwDG7OBrL3FX-VlE`,

  //the VideosCollection's model
  model: VideoModel,

  //updates the URL when the search input is entered in the form searchForVideos function is called
  updateVideoURL: function(query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyD9a8mfFIJuCZwzS57LwDG7OBrL3FX-VlE`
  },

  //
  parse: function(response) {
    return response.items.map(function(video) {

      return Object.assign({
        'title': video.snippet.title,
        'description': video.snippet.description,
        'thumbnail': video.snippet.thumbnails.default.url,
        'id': video.id.videoId
      });
    }, this);
  }

});
