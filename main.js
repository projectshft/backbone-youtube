var VideoListView = Backbone.view.extend({

  }),

  var AppView = Backbone.View.extend({});

var VideoModel = Backbone.Model.extend({
  defaults: {
    videoID: '',
    title: '',
    description: '',
    thumbnail: '',
  },

});

var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  fetchVideos: function(query) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDm9GfZIidW_34ttpA76xHILOO_yRT3his&part=snippet&type=video&q=cats',
    this.fetch({
      reset: true
    })
  },

  parse: function(response) {
    return response.items.map(function(item) {
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
      }
    });
  }
});
var appModel = new AppModel();
var appView = new AppView({
  model: appModel
});
