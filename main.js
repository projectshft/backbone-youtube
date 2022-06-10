var VideoModel = Backbone.Model.extend({
  defaults: {
      videoId: '',
      title: '',
      description: '',
      thumbnail: ''
  },
});

var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  addVideo: function (videoId, title, description, thumbnail) {
    this.add({
      videoId: videoId,
      title: title,
      description: description,
      thumbnail: thumbnail
    });
  }
});

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
    }
  }
});

var AppView = Backbone.View.extend({
  el: $('.container'),
  
  events: {
    'click .search': 'handleSearchClick'
  },

  initialize: function () {
    this.$searchInput = this.$('#search-query');
  },

  handleSearchClick: function () {
    var searchQuery = this.$searchInput.val();
    console.log(searchQuery)
  },
});

//////////////////////////////////////////////////////

var appModel = new AppModel();

// Sample starter data
sampleData.items.forEach((item, index) => {
  console.log('Video ' + index + ' loaded');
  appModel.get('videos').addVideo(
    item.id.videoId,
    item.snippet.title,
    item.snippet.description,
    item.snippet.thumbnails.default.url
  )
});

var appView = new AppView({ model: appModel });