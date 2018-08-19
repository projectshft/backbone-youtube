var AppView = Backbone.View.extend({
  el: 'body',

  collection: VideosCollection,

  events: {
    'click #search-submit': 'search',
    'click': 'handleClick'
  },

  initialize: function () {
    this.model.on('add change', this.onChange, this);
    videosCollection.on('change', function () {console.log("appview says: videos collection changed" + videosCollection.toJSON());});
    this.listenTo(this.model, 'change', this.onChange);
  },

  search: function () {
    console.log('clicked submit');
    var searchQuery = this.$el.find('#search-input').val();
    console.log('the search query is: ' + searchQuery);

    videosCollection.getData(searchQuery);
    videosCollection.on('change', function () {console.log(videosCollection.toJSON());}); //change to what target function?
    videosCollection.fetch().then(this.renderVideo);

  },

  renderVideo: function () {
    var $playerDiv = $('.player-div');
    console.log('renderVideo invoked');
    var videoView = new VideoView({ model: VideoModel });
    $playerDiv.append(videoView.render().el);
  },

  onChange: function () {
    console.log('app view says: added or changed app model!');
  },

  handleClick: function () {
    this.model.clicked();
  },

  // renderVideos: function () {
  //   this.model.get('videos').each(function (m) {
  //     this.renderVideo(m);
  //   }, this);
  // },

  render: function () {

    return this;
  }

});
