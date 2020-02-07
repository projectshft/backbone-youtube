var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=kittens&key=AIzaSyAMPe4D1oKrDsEQPUj_9szw7qaiNDoweiU',

  model: VideoModel,

  addVideo: function (name, text, description, id) {
  this.create({
    title: title,
    description: description,
    thumbnail: thumbnail,
    id: id
  }, { wait: true })
},

 updateURL: function (id) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyAMPe4D1oKrDsEQPUj_9szw7qaiNDoweiU`
  },

  parse: function(response) {
    return response.items.map(function(videoInfo) {
      
    return Object.assign({'title': videoInfo.snippet.title, 'description': videoInfo.snippet.description,
      'thumbnail': videoInfo.snippet.thumbnails.default, 'id': videoInfo.id.videoId});
    }, this);
  }
});
