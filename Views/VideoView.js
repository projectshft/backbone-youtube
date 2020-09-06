
var VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-thumbnail-template').html()),

  // events: {
  //   'click img': 'changeVideo',
  // },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },


});

