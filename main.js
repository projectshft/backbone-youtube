var VideoView = Backbone.View.extend({
  className: 'current_video',

  template: Handlebars.compile($('#current-video-template').html()),
  
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});

var VideosView = Backbone.View.extend({
  className: 'video_list',

  template: Handlebars.compile($('#video-list-template').html()),
  
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});

var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      title: '',
      description: '',
      videoId: '',
      image_url: '',
    }
  },

  urlRoot: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cats&type=video&videoEmbeddable=true&key=AIzaSyBMMdn63cR3Sby4uyuYiEWH-xltbXvmGZc',

  parse: function (response) {
    console.log(response);
    return {
      title: response.items[0].snippet.title,
      description: response.items[0].snippet.description,
      videoId: response.items[0].id.videoID,
      image_url: response.items[0].snippet.thumbnails.default.url
    }
  }
});

var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  initialize: function () {
    this.on('add', function(model) {
      model.fetch();
    });
  }
});

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection()
    }
  }
});

var AppView = Backbone.View.extend({
  el: $('.app-container'),

  events: {
    'click .search': 'handleSearchClick'
  },

  initialize: function () {
    this.$searchInput = this.$('#search-query');
    this.$video = this.$('video');
    this.$videos = this.$('.videos');

    this.listenTo(this.model.get('video'), 'change', this.renderVideo);
  },

  handleSearchClick: function() {
    var query = this.$searchInput.val();

    this.model.get('videos').add({
      query: query
    });
  },

  renderVideo: function (model) {
    console.log(model);

    var videoView = new VideoView ({ model: model });

    this.$video.append(videoView.render().el);
  },

  renderVideos: function (model) {
    console.log(model);

    var videoView = new VideoView ({ model: model });

    this.$videos.append(videoView.render().el);
  }
});

var appModel = new AppModel();
var appView = new AppView({model: appModel});