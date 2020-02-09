var VideoView = Backbone.View.extend({
//set where the templates are appended
  $el:$('.video-list'),

  $elLarge:$('.large-video'),
//handlebars templates for both formats
  template: Handlebars.compile($('#video-template').html()),

  templateLarge: Handlebars.compile($('#video-large-template').html()),
//renders the videos view. condition statement to check which is the
//current video and then to format it in the correct way
//returns to the rendervideos function on appview
  render: function(video) {

    if (video === appModel.toJSON().current_video){
      this.$elLarge.html(this.templateLarge(this.model.toJSON()))
    }else{
      this.$el.html(this.template(this.model.toJSON()))
    }
    return this;
  }
});
