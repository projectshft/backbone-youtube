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
      description: ''
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
        description: item.snippet.description
      };
      return videoObj;
    })
  },

  queryVideo: function (searchInput) {
    this.url = `https://www.googleapis.com/youtube/v3/search?q=${searchInput}&part=snippet&type=video&videoEmbeddable=true&key=AIzaSyAXguV_Fvs9UAdppg6a0DcS1XD2QZ_BVhk`
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
  },

  events: {
    'click #search-button': 'searchVideo'
  },

  searchVideo: function () {
    const input = this.$('#search-input').val()
    this.model.get('videos').queryVideo(input);
    this.model.get('videos').fetch({
      reset: true
    })
  },

  renderCurrentVideo: function () {
    const currentVideo = this.model.get('videos').first()
    const currentVideoView = new CurrentVideoView({
      model: currentVideo
    });
    this.$('#current-video').empty().append(currentVideoView.render().el)
  },

  // renderVideos: function () {
  //   debugger;
  //   this.model.get('videos').each(function (m) {
  //     this.renderCurrentVideo(m);
  //   }, this);
  // }

})


// CURRENTVIDEOVIEW //
const CurrentVideoView = Backbone.View.extend({
  template: Handlebars.compile($('#current-video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})