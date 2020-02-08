//Initial Commit Placeholder //

var CurrentVideoView = Backbone.View.extend({
  className: 'current-video-inner',

  template: Handlebars.compile($('#current-video-template').html()),

  events: {
  

  },

  initialize: function () {
    
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }


});