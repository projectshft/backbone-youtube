var AppView = Backbone.View.extend({
  el: 'body',

  collection: VideosCollection,

  events: {
    'click #search-submit': 'search',
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.renderVideo);
    return this;
  },

  search: function () {
    console.log('clicked submit');
    var searchQuery = this.$el.find('#search-input').val();
    console.log('the search query is: ' + searchQuery);

    videosCollection.getData(searchQuery);
    // videosCollection.on('change', function () {console.log(videosCollection.toJSON());}); //change to what target function?
    videosCollection.fetch().then(this.renderVideo);
    return this;
  },

  createVideo: function () {
    this.model.get('video').add({
      videoId: items[0].id.videoId
    });
  },

  renderVideo: function () {
    var videoModel = new VideoModel
    // console.log("new video model created by main");
    var videoView = new VideoView({ model: videoModel });
    // console.log("new video view created by main");
    var $playerDiv = $('.player-div');
    console.log('renderVideo invoked');

    videoView.render();
  },

  // renderVideos: function () {
  //   this.model.get('videos').each(function (m) {
  //     this.renderVideo(m);
  //   }, this);
  // },

});
