var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      current_video: null,
      videos: new VideosCollection()
    }
  }
})

var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.renderSidebarVideos);
  },

  renderSidebarVideo: function(vid) {
    console.log(vid);
    var sidebarVideoView = new SidebarVideoView({ model: vid});
    $('.sidebar').append(sidebarVideoView.render().el);
    console.log('rendered ' + sidebarVideoView);
  },

  renderSidebarVideos: function() {
    console.log('rendering sidebar videos');
    console.log(this.model.get('videos'));
    this.model.get('videos').each(function (vid) {
      this.renderSidebarVideo(vid);
      console.log('yeet');
    }, this);
    console.log('yeeters');
  }
})
