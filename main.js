var VideoModel = Backbone.Model.extend({
  defaults: {
    id: '',
    title: 'Lines from Gandalf',
    description: 'All that is gold does not glitter',
    thumbnail_url: '' 
  }
});

var VideosCollection = Backbone.Collection.extend({
  url: '',

  model: VideoModel,

  parse: function (response) {
    return response.items.map(function (video) {
      return {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail_url: video.snippet.thumbnails.medium.url
      }
    });
  },

});

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      mainVideo: null,
      videos: new VideosCollection()
    }
  },

  fillVideosCollection: function (query) {
    
    this.get('videos').url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + query + '&type=video&videoEmbeddable=true&key=AIzaSyCV6fnl409__rj0J_h7JEK6CauaPuM4TR0',

    this.get('videos').fetch({reset: true});
    // this.get('videos').reset(this.get('videos').parse(sampleData))
  },

  setMainVideo: function (indexNumber) {
    var newVideo = this.get('videos').models[indexNumber];

    this.set('mainVideo', newVideo);
    
  },
});

var VideoView = Backbone.View.extend({
  className: 'main-video-container',

  template: Handlebars.compile($('#main-video-template').html()),

  render: function () {
    
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});


var ThumbView = Backbone.View.extend({
  className: 'thumbnail-container',

  template: Handlebars.compile($('#thumbnail-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});


var AppView = Backbone.View.extend({
  el: 'body',

  events: {
    'click .search': 'updateVideoCollection',
    'click .thumbnail': 'assignNewMainVideo'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.assignFirstVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.renderThumbnails);
    this.listenTo(this.model, 'change:mainVideo', this.renderPlayerView);

    this.model.fillVideosCollection('clamavi+de+profundis');
  },

  updateVideoCollection: function () {

    this.query = this.$('.search-input').val();

    this.model.fillVideosCollection(this.query.split(' ').join('+'));
  },

  assignFirstVideo: function () {
    this.model.setMainVideo(0);
  },

  assignNewMainVideo: function (e) {
    var videoId = $(e.currentTarget).data().id;
    var video = this.model.get('videos').findWhere({id: videoId});
    var index = this.model.get('videos').models.indexOf(video);

    this.model.setMainVideo(index);
  },

  renderThumbnails: function (collection) {
    this.$('.video-sidebar').empty();
    collection.each(function (model) {
      var newThumbnailView = new ThumbView({model: model});

      this.$('.video-sidebar').append(newThumbnailView.render().el);
    }, this);
  },

  renderPlayerView: function () {
    this.$('.main-video').empty();

    var newVideoView = new VideoView({model: this.model.get('mainVideo')});
    this.$('.main-video').append(newVideoView.render().el);
  },
});

var appModel = new AppModel();

var appView = new AppView({model: appModel});