var VideoModel = Backbone.Model.extend({
  defaults: function() {
    return {
      title: '',
      description: '',
      vidId: '',
      thumbnailUrl: '',
    }
  }
})

var MainVideoView = Backbone.View.extend({
  className: 'vid',

  template: Handlebars.compile($('#mainVideo-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()))

    return this;
  }
})

var SideVideoView = Backbone.View.extend({
  className: 'sideVideo',

  template: Handlebars.compile($('#sideVideos-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()))

    return this;
  }
})

var VideoCollection = Backbone.Collection.extend({
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=crossfit&type=video&videoEmbeddable=true&key=AIzaSyAox3HZhZPjJitNh1kl5MUHB-BOPAnfNos`,

  model: VideoModel,

  parse: function(response) {
    console.log(response)
    return response.items.map(function(video){
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        vidId: video.id.videoId,
        thumbnailUrl: video.snippet.thumbnails.default.url,
      }
    })
  },

  initialize: function() {
    this.on('add', function(model) {
      model.fetch();
    })
  },

  searchVideos: function(query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoEmbeddable=true&key=AIzaSyAox3HZhZPjJitNh1kl5MUHB-BOPAnfNos`

    this.fetch({ reset: true })
  }
})

var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideoCollection(),
      mainVideo: null
    }
  } 
})

var AppView = Backbone.View.extend({
  el: $('.app-container'),

  events: {
    'click .search':'handleSearchClick'
  },

  initialize: function() {
    this.$searchInput = this.$('#search-query');
    this.$mainVideo = this.$('.mainVideo');
    this.$sideVideos = this.$('.sideVideos')

    this.listenTo(this.model.get('videos'), 'reset', function() {
      this.renderMainVideo();
      this.renderSideVideos();
    });
  },

  handleSearchClick:function(){
    var searchTerm = this.$searchInput.val();

    this.model.get('videos').searchVideos(searchTerm);
  },

  renderMainVideo: function() {
    this.$mainVideo.html('');
    var firstVideoModel = this.model.get('videos').at(0);

    var videoView = new MainVideoView({model: firstVideoModel});

    this.$mainVideo.append(videoView.render().el);
  },

  renderSideVideos: function() {
    this.$sideVideos.html('');
    this.model.get('videos').forEach(function (video) {
      var sideVideoView = new SideVideoView({model: video});
      this.$('.sideVideosList').append(sideVideoView.render().el);
    })
  }
});

var appModel = new AppModel();
var appView = new AppView({ model:appModel });
appModel.get('videos').fetch({ reset: true });