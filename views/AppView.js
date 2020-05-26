//Main view where videos are displayed and searched
//A user should be able to search something in the
//search bar, and get a list of videos back, with one showing up in the main screen.
var AppView = Backbone.View.extend({
  el: $('body'),

  events: {

    'click .thumbnail': 'viewVid',
    'click .btn': 'setSearch'

  },

  initialize: function () {


    this.$mainSearch = this.$('#main-search').val();
    this.$videoList = this.$('.video-list');


    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);

    this.listenTo(this.model, 'change:search', this.renderSearch);

    // this.listenTo(this.model, 'change:search', this.clearSearch);
    this.listenTo(this.model, 'change:current_video', this.renderMainVideo);

    this.renderVideos();
  },

  setSearch: function () {
    var allVids = this.model.get('videos');
    this.$mainSearch = this.$('#main-search').val();
    this.model.set('search', this.$mainSearch)
    // console.log (this.$mainSearch)
    if (this.$mainSearch == ''){
      alert('Please input a search value')
    }
  },

  renderSearch: function () {
    // console.log('render test');

    var allVids = this.model.get('videos');
    var input = this.$('#main-search').val();
    var search = this.model.get('search');



    var searchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+search+'&key=AIzaSyDp1E_LCUqIhb7qNApE8R6NToPSrQ1HOEw';
    allVids.url = searchUrl;
    // allVids.on('add', function (video) { console.log(video.toJSON()); });
    allVids.fetch({reset: true});



  },

  viewVid: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.showMain(clickedVideoId);
  },

  renderVideo: function (video) {
    var allVids = this.model.get('videos');
    allVids.reset()

    var videoView = new VideoView({ model: video });
    this.$videoList.append(videoView.render().el);

  },

  renderVideos: function () {
    this.model.get('videos').each(function (video) {
      this.renderVideo(video);
    }, this);

  },

  renderMainVideo: function () {
    if (this.mainVideo) {
      this.mainVideo.remove();
    }

    this.mainVideo = new MainVideoView({ model: this.model.get('current_video')});

    this.$('.main-video').append(this.mainVideo.render().el);
  },

});
