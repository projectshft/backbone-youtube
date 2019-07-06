var MainVideoView = Backbone.View.extend ({


  model: VideoModel,

  //set up a handlebars template
  template: Handlebars.compile($('#main-video-template').html()),


  render: function() {
    this.$el.html(this.template(this.model.attributes));


    return this;
  }

})
