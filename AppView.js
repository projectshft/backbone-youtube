AppView = Backbone.View.extend({
  el: $('body'),
  collection: VideoCollection,

  events: {
    'click #main-button': 'getData',
  },

  initialize: function() {

    this.$input = this.$el.find('#main-input')
    this.$videoPosts = this.$('#video-posts')

    console.log('initializing!');

    this.listenTo(this.model.get('videos'), "reset", console.log('reset is TRUE!'));
  },

  getData: function () {
    console.log('clicked search');
    this.model.get('videos').fetch({reset: true}).then(function(){console.log( 'data came back' )});
  },

});
