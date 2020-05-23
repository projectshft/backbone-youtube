var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      //current_video represents video being shown on main display
      current_video: null,
      videos: new VideosCollection()
    }
  }
})

var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function () {
    //renders sidebar videos on a reset event
    this.listenTo(this.model.get('videos'), 'reset', this.renderSidebarVideos);
  },

  //creates a SidebarVideoView from a video model, appending it to the sidebar
  renderSidebarVideo: function(vid) {
    console.log(vid);
    var sidebarVideoView = new SidebarVideoView({ model: vid});
    $('.sidebar').append(sidebarVideoView.render().el);
    console.log('rendered ' + sidebarVideoView);
  },

  //loops through collection of videos stored in AppModel- videos, rendering each video
  renderSidebarVideos: function() {
    console.log('rendering sidebar videos');
    console.log(this.model.get('videos'));
    this.model.get('videos').each(function (vid) {
      this.renderSidebarVideo(vid);
    }, this);
  }
})

//view for each sidebar video
var SidebarVideoView = Backbone.View.extend({
  className: "sidebar-card",
  template: Handlebars.compile($('#sidebar-video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})
