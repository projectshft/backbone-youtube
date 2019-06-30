//top level view - handlers user input in search bar

var AppView = Backbone.View.extend({
  el: $('body'),
  events: {
    'click .search-button': 'newSearch'
  },
  initialize: function() {
    this.$searchInput = this.$('#search-input');
    this.$mainVideo = this.$('#main-video');
    this.$sideVideos = this.$('#sidebar-videos');

    //below is commented out - main video will be changed on reset so not necessary. uncommenting = double rendering on first load
    //this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
    this.listenTo(this.model, 'change:main_video', this.renderPage);
  },
  renderPage: function() {
    //get main video model first since both render functions need to know what model to use/skip
    var mainVideoModel = this.model.get('main_video');
    debugger;
    this.renderMainVideo(mainVideoModel);
    //render rest of videos in sidebar, excluding main video
    this.renderVideos(mainVideoModel);
  },
  renderMainVideo: function(video) {
    console.log('Rendering main video');
    this.$mainVideo.empty();
    //make a new MainView, pass in main video as model
    var mainView = new MainVideoView({ model: video });
    //append the views render
    this.$mainVideo.append(mainView.render().el);
  },
  renderVideos: function(videoToOmit) {
    this.model.get('videos').each( function(video) {
      
        console.log('hey');
        if (video === videoToOmit)
          console.log('whoah buddy');
    }, this);
  },
  newSearch: function() {
    this.model.searchForVideos(this.$searchInput.val());
  }
});