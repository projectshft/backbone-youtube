AppView = Backbone.View.extend({
  el: $('body'),
  // collection: VideoCollection,
  //create events object
  //[event] .[css selector]: [function name that will get called when event is emitted]
  events: {
    'click .search-button': 'videoSearch'
  },

  // At initialization we bind keypress event to the model
  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset,' function () {
      this.renderVideos();
    }).bind(this);
  },



});
