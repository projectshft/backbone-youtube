var LargeVideoView = Backbone.View.extend({
  className: 'main-veiw',

  template: Handlebars.compile($('#video-large-template').html()),

  events: {

  },

  initialize:function(){

  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
