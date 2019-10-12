let VideoView = Backbone.View.extend({

  className: 'video',

  template: Handlebars.compile($('#video-template').html()),
  render: function() {
    debugger;
    console.log('VIDEO RENDER...')
    this.$el.html(this.template(this.model.toJSON()));
    this.el.id = this.model.cid; // NOTE THIS LINE
    return this;
  }
  
});
