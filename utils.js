/////////////////
//    MODELS   //
/////////////////

// APPMODEL //
const AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection()
    }
  }
})

// VIDEOMODEL //
const VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      id: '',
      title: '',
      description: '',
      thumbnail: ''
    }
  }
})


/////////////////
// COLLECTIONS //
/////////////////

// VIDEOSCOLLECTION //
const VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=drifting&type=video&videoEmbeddable=true&key=AIzaSyAXguV_Fvs9UAdppg6a0DcS1XD2QZ_BVhk',
  model: VideoModel,

  parse: function (response) {
    return response.items.map(function (item) {
      videoObj = {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url
      };
      return videoObj;
    })
  },

  queryVideo: function (searchInput) {
    this.url = `https://www.googleapis.com/youtube/v3/search?q=${searchInput}&part=snippet&type=video&videoEmbeddable=true&key=AIzaSyAXguV_Fvs9UAdppg6a0DcS1XD2QZ_BVhk`
    this.fetch({
      reset: true
    })
  }

})



/////////////////
//    VIEWS    //
/////////////////


// APPVIEW //
const AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.renderCurrentVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.renderRelatedVideos);
  },

  events: {
    'click #search-button': 'searchVideo'
  },

  searchVideo: function () {
    const input = this.$('#search-input').val()
    this.model.get('videos').queryVideo(input);
  },

  renderCurrentVideo: function () {
    const currentVideo = this.model.get('videos').first()
    const currentVideoView = new CurrentVideoView({
      model: currentVideo
    });
    this.$('#current-video').empty().append(currentVideoView.render().el)
  },

  renderRelatedVideos: function () {
    const relatedVideos = this.model.get('videos').rest(1)
    relatedVideos.forEach(function (relatedVideo) {
      const relatedVideoView = new RelatedVideoView({
        model: relatedVideo
      })
      this.$('#related-video-container').append(relatedVideoView.render().el)
    })
  }
})


// CURRENTVIDEOVIEW //
const CurrentVideoView = Backbone.View.extend({
  template: Handlebars.compile($('#current-video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})

// RELATEDVIDEOVIEW //
const RelatedVideoView = Backbone.View.extend({
  className: 'small-video',
  template: Handlebars.compile($('#related-video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

})