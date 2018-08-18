var AppView = Backbone.View.extend({
  el: $('body'),

  collection: VideosCollection,

  events: {
    'click #search-submit': 'search',
    'click': 'handleClick'
  },

  initialize: function () {
    var videosCollection = new VideosCollection();

    this.$playerDiv = this.$('.player-div');

    this.model.on('add change', this.onChange, this);
    videosCollection.on('change', function () {console.log("invoked videoView" + videosCollection.toJSON());});
    // this.listenTo(this.model, 'change', this.onChange);
  },

  search: function () {
    console.log('clicked submit');
    var videosCollection = new VideosCollection();
    var searchQuery = this.$el.find('#search-input').val();
    console.log('the search query is: ' + searchQuery);
    videosCollection.getData(searchQuery);
    videosCollection.on('change', function () {console.log(videosCollection.toJSON());}); //change to what target function?
    videosCollection.fetch();
  },

  renderVideo: function () {
    console.log('renderVideo invoked');
    var videoView = new VideoView({ model: VideoModel });
    this.$playerDiv.append(videoView.render().el);
  },

  onChange: function () {
    console.log('view says: added or changed a model!');
  },

  viewClick: function () {
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
