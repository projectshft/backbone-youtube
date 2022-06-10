// Video Components

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

var VideoView = Backbone.View.extend({
  className: 'v-search-result',
  
  template: Handlebars.compile($('#v-search-result-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

// App Comppnents

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      selected_video: null
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

    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.renderVideos();
  },

  handleSearchClick: function () {
    var searchQuery = this.$searchInput.val();
    console.log(searchQuery)
  },

  renderVideo: function (video) {
    var videoView = new VideoView({ model: video });
    this.$('.v-list').append(videoView.render().el)
  },

  renderVideos: function () {
    this.model.get('videos').each(function (video) {
      this.renderVideo(video);
    }, this);
  }
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