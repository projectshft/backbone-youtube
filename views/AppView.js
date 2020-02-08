var AppView = Backbone.View.extend({
  el: $('body'),

  events: {

    'click .submit-search': 'createSearch',

    'click .thumbnail': 'viewCurrentVideo'
  },

  initialize: function() {

    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

    // this.listenTo(this.model, 'change:current_video', this.renderMainVideo('current_video'));

  },

  createSearch: function() {
  //grabs the input value from the search form
      var query = this.$('#search-input').val();
      //updates the url based on the search form
      this.model.get('videos').updateVideoURL(query);
      //
      this.model.get('videos').fetch({ reset: true });
  },

  viewCurrentVideo: function(e) {
    console.log('does this button work?')
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.showMainVideo(clickedVideoId);


  },

  renderSmallVideo: function(video) {
    var smallVideoView = new SmallVideoView({
      model: video
    });
    this.$('.small-video-container').append(smallVideoView.render().el);
    return this

  },

  renderMainVideo: function(video) {

    mainVideoView = new MainVideoView({
      model: video
    });

    this.$('.main-video-container').append(mainVideoView.render().el);
  },

  renderVideos: function() {

    this.model.get('videos').each(function(m) {
      this.renderSmallVideo(m);
    }, this);

      this.renderMainVideo(this.model.get('videos').at(0));
  },

  changeCurrentVideo: function(){

  }

});
