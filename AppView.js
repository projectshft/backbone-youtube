AppView = Backbone.View.extend({
  el: $('body'),
  // collection: VideoCollection,

  events: {
    'click #main-button': 'getData',
  },

  initialize: function() {

    this.$input = this.$el.find('#main-input')
    this.$videoPosts = this.$('#video-posts')

    console.log('initializing');

    this.listenTo(this.model.get('videos'), "reset", this.showModel);
    // this.listenTo(this.model, "change", collection.showModel);

  },

  getData: function () {
    console.log('clicked search');
    this.model.get('videos').fetch({reset: true}).then(function(){console.log( 'data came back' )});
  },

});
