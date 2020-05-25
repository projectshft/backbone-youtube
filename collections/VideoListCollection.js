var VideoListCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=leeroy%20jenkins&type=video&key=AIzaSyDvgs6yXBYv2o8morAAAj8CFllR337CG6g',
  model: VideoModel,

  addVideoList: function (videoId, videoThumbnail, title, description) {
    this.add({
      videoId: videoId,
      videoThumbnail: videoThumbnail,
      title: title,
      description: description

    });
  },

  //parsing data from YouTube API
  parse: function (response) {
    return response.items.map(function (video) {
      return {
        videoId: video.id.videoId,
        videoThumbnail: video.snippet.thumbnails.default.url,
        title: video.snippet.title,
        description: video.snippet.description
      }
    });

  },

})
