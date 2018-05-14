var VideoView = Backbone.View.extend({
//videoView always set to current_video. Playvideo sets main video to current_video selection
  playVid: function(){
  player.loadVideoById(this.model.get('videoId'), 1, "large")
},
template: Handlebars.compile($('#video-template').html()),

render: function(){
  this.$el.html(this.template(this.model.toJSON()))

  return this
}
})
