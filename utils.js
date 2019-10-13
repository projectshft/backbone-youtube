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
  model: VideoModel,

  addVideo: function (id, title, description) {
    this.add({
      id: id,
      title: title,
      description: description
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
    // this.listenTo(this.model.get('videos'), 'add', this.renderCurrentVideo);
    this.renderVideos();
  },

  // events: {
  //   'click #search-button': 'searchVideo'
  // },

  // searchVideo: function () {
  //   this.model.get('videos').addVideo(
  //   );
  // },

  renderCurrentVideo: function (video) {
    const currentVideoView = new CurrentVideoView({
      model: video
    });
    this.$('#current-video').append(currentVideoView.render().el)
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderCurrentVideo(m);
    }, this);
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