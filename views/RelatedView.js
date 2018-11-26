var RelatedVideoView = Backbone.View.extend({
//currently only responsible for rendering the videos on the side, using the same model as the currently playing video
  className:'related-video',

  template:Handlebars.compile($('#related-videos').html()),

  renderRelatedHTML:function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this
  }
})
