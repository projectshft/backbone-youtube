var VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-template').html()),

  templateLarge: Handlebars.compile($('#video-large-template').html()),

  initialize: function() {
    console.log('video veiw rendered')
  },

  render: function(video) {
    if (video === appModel.toJSON().videos.models[0]){
      this.$el.html(this.templateLarge(this.model.toJSON()))

    }else{
      this.$el.html(this.template(this.model.toJSON()))
    }
    return this;
  }
});
