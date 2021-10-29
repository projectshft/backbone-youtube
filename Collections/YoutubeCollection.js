var YoutubeCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=dogs&type=video&videoEmbeddable=true&key=AIzaSyD9Dx50AZ_Dn1aTHwzUKOQHWHzK5jUlNbw',
    model: VidModel,

  addVideo: function (title, videoID, thumbnail) {
    this.add({
      title: item.snippet.title, //or should this be "title: title" ?
      videoId: item.id.videoId, //or should this be "videoId: videoId" ?
      thumbnail: item.snippet.thumbnails.default,
    });
  }
});