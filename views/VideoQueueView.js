var VideoQueueView = Backbone.View.extend({
  className: 'video-queue-inner',

  template: Handlebars.compile($('#video-queue-template').html()),

  events: {
    // 'click .submit-beer': 'createBeer',

  },

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }


});