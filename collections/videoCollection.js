var VideoCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=leeroy%20jenkins&type=video&key=AIzaSyDvgs6yXBYv2o8morAAAj8CFllR337CG6g',
  model: VideoModel,

  //add video to the video collection when called
  addVideo: function (videoId, videoThumbnail, title, description) {
    this.add({
      videoId: videoId,
      videoThumbnail: videoThumbnail,
      title: title,
      description: description
    });
  },

  //parsing data from YouTube API
  parse: function (response) {
    debugger;
    return response.map(function (video) {
      return {
        videoId: video.items.id.videoId,
        videoThumbnail: video.items.snippet.thumbnails.default.url,
        title: video.items.snippet.title,
        description: video.items.snippet.description
      }
    });
  },

})