var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-videos': 'fetchVideos'
  },

  initialize: function () {
    var $userInput;
    // this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
  },


  renderVideo: function (video) {
    // var beerView = new BeerView({ model: video });
  },

  fetchVideos: function () {
    // Update VideosCollection url and re-retch data
    $userInput = this.$el.find('#search-input').val();
    this.model.get('videos').fetchVideos($userInput);
    // console.log(this.model.get('videos').models);

  },

  renderVideos: function () {
    this.model.get('videos').each(function (model) {
      this.renderVideo(m);
    }, this)
  },

});