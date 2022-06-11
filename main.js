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

  url: '',

  updateUrl: function (query) {
    this.url = encodeURI(
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=AIzaSyCcu8lz3XjEN-rubIm4dum2-HTFwwijvRA&q=' + query
    );

    this.fetchVideoData()
  },

  fetchVideoData: function () {
    this.fetch({ reset: true });
  },

  parse: function (response) {
    return response.items.map(item => {
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url
      }
    });
  },
});

var VideosView = Backbone.View.extend({
  className: 'v-search-result',
  
  template: Handlebars.compile($('#v-search-result-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var VideoSelectedView = Backbone.View.extend({
  className: 'v-selected',
  
  template: Handlebars.compile($('#v-selected-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      selected_video: null,
      search_query: ''
    }
  },

  initialize: function () {
    this.listenTo(this, 'change:search_query', this.updateVideoCollectionUrl);
  },

  updateQuery: function (query) {
    this.set('search_query', query);
  },

  updateVideoCollectionUrl: function () {
    this.get('videos').updateUrl(this.get('search_query'));
  },

  setDefaultSelectedVideo: function () {
    this.set('selected_video', this.get('videos').at(0));
  },

  updateSelectedVideo: function (id) {
    var selectedVideo = this.get('videos').findWhere({ videoId: id });

    this.set('selected_video', selectedVideo);
  }
});

var AppView = Backbone.View.extend({
  el: $('.container'),
  
  events: {
    'click .search' : 'handleSearchClick',
    'click .thumbnail' : 'selectVideo',
    'keydown .search-input' : 'handleKeydown',
  },

  initialize: function () {
    this.model.get('videos').updateUrl('funny cats');
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:selected_video', this.renderSelectedVideo);
  },

  handleKeydown: function (e) {
    if (e.which === 13) {
      e.preventDefault();
      this.handleSearchClick();
    }
  },

  handleSearchClick: function () {
    var searchQuery = this.$('#search-query').val();

    this.$('.v-selected-container').empty();
    this.$('.v-list-container').empty();
    this.model.get('videos').reset();

    this.model.updateQuery(searchQuery);
    this.$('#search-query').val('');
  },


  selectVideo: function (e) {
    var selectedVideoId = $(e.currentTarget).data().video_id;

    this.model.updateSelectedVideo(selectedVideoId);
  },

  createSelectedVideo: function (video) {
    var videoSelectedView = new VideoSelectedView({ model: video });
    this.$('.v-selected-container').empty();
    this.$('.v-selected-container').append(videoSelectedView.render().el);
  },

  renderSelectedVideo: function () {
    this.createSelectedVideo(this.model.get('selected_video'));
  },

  renderVideo: function (video) {
    var videosView = new VideosView({ model: video });
    this.$('.v-list-container').append(videosView.render().el);
  },

  renderVideos: function () {
    // this.$('.v-list-container').empty();
    this.model.get('videos').each(function (video) {
      this.model.setDefaultSelectedVideo();
      this.renderVideo(video);
    }, this);
  }
});

//////////////////////////////////////////////////////

var appModel = new AppModel();

var appView = new AppView({ model: appModel });