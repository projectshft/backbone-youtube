var VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#current-video-temlate').html()),
  
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
      video_id: '',
      query: ''
    }
  },

  urlRoot: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cats&type=video&videoEmbeddable=true&key=AIzaSyBMMdn63cR3Sby4uyuYiEWH-xltbXvmGZc',

  parse: function (response) {
    console.log(response);
    return {
      title: response.items[0].snippet.title,
      description: response.items[0].snippet.description,
      video_id: response.items[0].id.videoID
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
    this.$videos = this.$('videos');

    this.listenTo(this.model.get('videos'), 'change', this.renderVideo);
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

    this.$videos.append(videoView.render().el);
  }
});

var appModel = new AppModel();
var appView = new AppView({model: appModel});