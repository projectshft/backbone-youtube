var RelatedView = Backbone.View.extend({
  template: Handlebars.compile($('#related-template').html()),

  events: {
    'click .thumbnail': 'changeVid'
  },
//sets current video to the model clicked on, triggers render in main view
  changeVid: function(){
    appModel.set('current_video', this.model)
    var videoView = new VideoView({model: this.model})
    videoView.playVid();

  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));

    return this
  }
})
