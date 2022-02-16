var VideosCollection = Backbone.Collection.extend({

  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + $('.search-query').val() + '&type=video&videoEmbeddable=true&key=' + api_key,


  parse: function (response, options) {
    return response.items.map(function(video) {
      return {
        videoId: video.id.videoId,
        thumbnailUrl: video.snippet.thumbnails.high.url,
        title: video.snippet.title,
        description: video.snippet.description
      }
    })
  },

  model: VideoModel,

  
  addVideo: function (title, description, videoId, thumbnailUrl) {
    this.add({
      title: title,
      description: description,
      videoId: videoId,
      thumbnailUrl: thumbnailUrl
    });
  }
})