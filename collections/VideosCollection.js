var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyC9oT5w8cbYBUkRfg2_1uJZb2YsipMyVJY',
  model: VideoModel,
  initialize: function(){

  },
  parse: function (response) {
    return response.items
    .map(function (video_snippet) {
      // console.log(video_snippet);
      return {
        id: video_snippet.id.videoId,
        title: video_snippet.snippet.title,
        description: video_snippet.snippet.description,
        embedUrl: 'https://www.youtube.com/embed/' + video_snippet.id.videoId,
        thumbnailUrl: video_snippet.snippet.thumbnails.default.url,
        played: false,
        playing: true
      }
      // console.log(newSnippet);
      // return newSnippet;
    });
  }
});