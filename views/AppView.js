var AppView = Backbone.View.extend({
  el: $('body'),

  events: {

  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
  },


  renderVideo: function (video) {
    var beerView = new BeerView({ model: video });
  },

  renderVideos: function () {
    this.model.get('videos').each(function (model) {
      this.renderVideo(m);
    }, this)
  },

});