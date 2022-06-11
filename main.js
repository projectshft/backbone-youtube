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

// App Comppnents

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      selected_video: null
    }
  },

  setSelectedVideo: function () {
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
    'click .thumbnail' : 'selectVideo'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:selected_video', this.renderSelectedVideo);
    // this.renderSelectedVideo();
    // this.renderVideos();
  },

  handleSearchClick: function () {
    var searchQuery = this.$('#search-query').val();
    console.log(searchQuery);
    this.model.get('videos').reset();
    
    sampleData.items.forEach((item, index) => {
      console.log('Video ' + index + ' loaded');
      appModel.get('videos').addVideo(
        item.id.videoId,
        item.snippet.title,
        item.snippet.description,
        item.snippet.thumbnails.default.url
      )
    });

    this.model.setSelectedVideo();
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
    this.$('.v-list-container').empty();
    this.model.get('videos').each(function (video) {
      this.renderVideo(video);
    }, this);
  }
});

//////////////////////////////////////////////////////

var appModel = new AppModel();

var appView = new AppView({ model: appModel });