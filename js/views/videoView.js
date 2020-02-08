var VideoView = Backbone.View.extend({

//sets the handlebars template for the current video playing and the sidebar
  template: Handlebars.compile($('#video-template').html()),

  templateLarge: Handlebars.compile($('#video-large-template').html()),

  render: function(video) {
    //condition statement to make sure current video is formated into the large video templateLarge
    //other videos formated in video template
    if (video === current_video){
      this.$el.html(this.templateLarge(this.model.toJSON()))

    }else{
      this.$el.html(this.template(this.model.toJSON()))
    }
    return this;
  }
});
