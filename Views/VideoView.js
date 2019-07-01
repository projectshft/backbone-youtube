var VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-template').html()),

  events: {},


  initialize: function () {
    this.listenTo(this.model, 'change:name', this.render);
  }

});
