var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,
  initialize: function(){

  },

  updateUrl: function(searchString){
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' +
        searchString + '&type=video&key=AIzaSyC9oT5w8cbYBUkRfg2_1uJZb2YsipMyVJY'
  },

  parse: function (response) {
    return response.items
    .map(function (video_snippet) {
      console.log(video_snippet);
      return {
        id: video_snippet.id.videoId,
        title: video_snippet.snippet.title,
        description: video_snippet.snippet.description,
        embedUrl: 'https://www.youtube.com/embed/' + video_snippet.id.videoId + '?&autoplay=1&origin=https://www.projectshift.io/',
        thumbnailUrl: video_snippet.snippet.thumbnails.default.url,
        currentVideo: false,
        played: false,
        playing: false
      }
      // console.log(newSnippet);
      // return newSnippet;
    });
  }
});