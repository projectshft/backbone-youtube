var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'handleQuerySearch',
    'click .small-vid': 'handleThumbnailClick'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'update', this.renderBigVideos);
    this.listenTo(this.model.get('videos'), 'update', this.renderSmallVideos);
    this.listenTo(this.model.get('videos'), 'update', this.loadInitialVideo);

    this.handleQuerySearch();
  },
  
  handleQuerySearch: function () {
    var query = this.$('input').val()
    this.model.get('videos').updateQuery(query);
    this.model.get('videos').fetch();
  },

  handleThumbnailClick: function (e) {
    $('iframe').each(function () {
      var src = $(this).attr('src');
      $(this).attr('src', src);
    });
    $('.big-video-col').find('.toggler').addClass('hide-this');
    var grabId = $(e.currentTarget).attr('data-id');
    $('#'+grabId).toggleClass('hide-this');
  },

  renderBigVideo: function (video) {
    var bigVideoView = new BigVideoView({model: video});
    this.$('.big-video-col').append(bigVideoView.render().el);
  },

  renderBigVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderBigVideo(m);
    }, this);
  },

  renderSmallVideo: function (video) {
    var smallVideoView = new SmallVideoView({model: video});
    this.$('.small-video-col').append(smallVideoView.render().el);
  },

  renderSmallVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderSmallVideo(m);
    }, this);
  },

  loadInitialVideo: function () {
    $('.toggler').first().toggleClass('hide-this');
  }

})