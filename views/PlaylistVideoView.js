var PlaylistVideoView = Backbone.View.extend({
  tagName: 'li',

  className: 'row video',

  template: Handlebars.compile($('#playlist-video-template').html()),

  render: function() {
    var modelIndex = this.model.collection.indexOf(this.model);

    // add attribute to be used with click event to
    // update currentVideoIndex from AppView
    this.$el.attr('data-model-index', modelIndex);
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
