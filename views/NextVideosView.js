//Create a view for the next videos in a search

var NextVideosView = Backbone.View.extend({

  template: Handlebars.compile($('#next-videos-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  events: {
    'click .next-videos-item': function () {
      appModel.set('current_video', this.model.get('videoId'));
    }
  }

});
