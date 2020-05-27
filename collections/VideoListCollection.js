var VideoListCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=leeroy%20jenkins&type=video&key=AIzaSyCXEKB0jRvSYo_YL9WUOYWsn8-VXWg7JUQ',
  model: VideoModel,

  //parsing data from YouTube API
  parse: function (response) {
    return response.items.map(function (video) {
      debugger;
      return {
        videoId: video.id.videoId,
        videoThumbnail: video.snippet.thumbnails.default.url,
        title: video.snippet.title,
        description: video.snippet.description
      }
    });
  },

})
