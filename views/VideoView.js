var VideoView = Backbone.View.extend({
    template: Handlebars.compile($('#video-template').html()),
  
    className: 'video',
  
    render: function () {
      this.$el.html(this.template(this.model.attributes));
  
      return this;
    }
  });