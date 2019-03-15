var AppView = Backbone.View.extend({
el: $('body'),

 events: {
  'click .btn' : 'createVideoRequest'
 },

initialize: function() {
  this.$videoList = this.$('.videoList');
  this.listenTo(this.model.get("videos"), 'reset', this.renderFirstVideo);
},

createVideoRequest: function() {
  appModel.get("videos").url(this.$('#videoSearch-input').val());
  appModel.get("videos").fetch({reset: true});
},

renderFirstVideo: function(video) {
  var videoView = new VideoView({model: video});
  this.$videoList.append(videoView.render().el);
}

});