var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit-search': 'createSearch',
    'click .thumbnail': 'viewVideo'
  },

  template: Handlebars.compile($('#main-video-template').html()),

  initialize: function() {
    this.$Input = this.$('#search-input');

    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:current_video', this.render);

    this.renderVideos();
  },

  createSearch: function() {
    console.log('does this buttonwork?')
    this.model.get('videos').addVideo(
      this.$Input.val());
  },

  viewVideo: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.showVideo(clickedVideoId);
  },

  renderVideo: function(video) {
    var smallVideoView = new SmallVideoView({
      model: video
    });
    this.$('.small-video-container').append(smallVideoView.render().el);
    // this.renderMainVideo();
  },

  renderVideos: function() {
    this.model.get('videos').each(function(m) {
      this.renderVideo(m);
    }, this);
  },

  renderMainVideo: function(video) {
    var mainVideoView = new MainVideoView({
      model: video
    });
    this.$('.main-video-container').append(mainVideoView.render().el)
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

});
