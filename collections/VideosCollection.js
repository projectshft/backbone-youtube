var VideosCollection = Backbone.Collection.extend({ 
  model: VideoModel,

  defaultSearchQuery: 'cats',

  url: function () {
    return 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + this.defaultSearchQuery + '&type=video&videoEmbeddable=true&key=AIzaSyA0x6OUlY2Kk87TWO3TjYWBNIK5mJIMoEg'
  },

  parse: function (response) {
    return response.items.map(function (video) {
      return {
        videoId: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail_url: video.snippet.thumbnails.medium.url,
        embed_url: 'https://www.youtube.com/embed/' + video.id.videoId
      }
    })
  },

  searchForVideos: function (newQuery) {
    var newUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + newQuery + '&type=video&videoEmbeddable=true&key=AIzaSyA0x6OUlY2Kk87TWO3TjYWBNIK5mJIMoEg';

    this.fetch({ 
      url: newUrl, 
      reset: true
     });
  }
});