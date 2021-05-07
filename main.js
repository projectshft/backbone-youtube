const AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      featuredVideo: null
    }
  }
});

const AppView = Backbone.View.extend({
  el: $('body'),
  
  events: {
    'click #search-button': 'searchForVideos',
  },
  
  initialize: function () {
    this.model.get('videos').fetch({reset: true});

    this.listenTo(this.model, 'change:featuredVideo', this.renderFeaturedVideo);
    this.listenTo(this.model.get('videos'), 'reset', function() {
      this.renderThumbnails();
      this.setFeaturedVideo();
    });
  },
  
  renderFeaturedVideo: function () {
    const featuredVideo = new VideoView({model: this.model.get('featuredVideo')});
    
    this.$('.main-video').empty().append(featuredVideo.render().el);
  },
  
  setFeaturedVideo: function () {
    const videos = this.model.get('videos')
    this.model.set('featuredVideo', videos.models[0]);
  },
  
  searchForVideos: function () {
    const searchTerm = $('.search-term').val();
    this.model.get('videos').newSearch(searchTerm);
    $('.search-term').val('');
    
    return false;
  },
  
  renderThumbnails: function () {
    const videos = this.model.get('videos');
    this.$('.video-thumbnails').empty();

    videos.each(function (video) {
      const thumbnail = new ThumbnailView({model: video});
      this.$('.video-thumbnails').append(thumbnail.render().el);
    })
  }
});

const VideoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    description: '',
    thumbnail_url: '',
    videoId: ''
  }
});

const VideosCollection = Backbone.Collection.extend({
  model: VideoModel,
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=news-bloopers&type=video&videoEmbeddable=true&key=AIzaSyDulPdMaK8Q1sFl0KGnuI56grpQdEjH46M`,

  newSearch: function (searchTerm) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&type=video&videoEmbeddable=true&key=AIzaSyDulPdMaK8Q1sFl0KGnuI56grpQdEjH46M`;

    this.fetch({reset: true});
  },

  parse: function (searchResult) {
    return searchResult.items.map(video => {
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail_url: video.snippet.thumbnails.default.url,
        videoId: video.id.videoId
      }
    })
  }
});

const VideoView = Backbone.View.extend({
  template: Handlebars.compile($('#main-video-template').html()),
  
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    
    return this;
  }
});

const ThumbnailView = Backbone.View.extend({
  events: {
    'click .thumbnail': 'changeFeaturedVideo'
  },
  
  changeFeaturedVideo: function () {
    appModel.set('featuredVideo', this.model)
  },
  
  template: Handlebars.compile($('#video-thumbnails-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    
    return this;
  }
});

const appModel = new AppModel();
const appView = new AppView({model: appModel});