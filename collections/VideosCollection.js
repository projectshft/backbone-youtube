var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=&key=AIzaSyAMPe4D1oKrDsEQPUj_9szw7qaiNDoweiU',

  model: VideoModel,

  updateUrl: function (query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyAMPe4D1oKrDsEQPUj_9szw7qaiNDoweiU`
    appModel.get('videos').fetch({ reset: true });
  },

  parse: function(response) {
    return response.items.map(function(videoInfo) {

    return Object.assign({'title': videoInfo.snippet.title, 'description': videoInfo.snippet.description,
      'thumbnail': videoInfo.snippet.thumbnails.default.url, 'id': videoInfo.id.videoId});
    }, this);
  }
});
