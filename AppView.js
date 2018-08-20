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

    this.listenTo(this.model.get('videos'), "reset", this.renderModel);
    // this.listenTo(this.model, "change", collection.showModel);

  },

  getData: function () {
    console.log('clicked search');
    this.model.get('videos').fetch({reset: true}).then(function(){console.log( 'data came back' )});
  },

  renderModel: function (model) {
    console.log('rendering model')
    console.log(model)

    // var videoView = new VideoView({ model: model });

    for (i = 0; i < model.models.length; i++) {
      console.log(model.models[i].attributes);
      // this.$('#video-posts').append(videoView.render(model.models[i].attributes).el);
    }
  },

  // showThumbnails: function () {
  //
  // }

});
