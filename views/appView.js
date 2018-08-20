var AppView = Backbone.View.extend({
  el: 'body',

  collection: VideosCollection,

  events: {
    'click #search-submit': 'search',
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.renderVideo);
  },

  // search: function () {
  //   console.log('clicked submit');
  //   var searchQuery = this.$el.find('#search-input').val();
  //   console.log('the search query is: ' + searchQuery);
  //   // return searchQuery;
  //   //
  //   videosCollection.fetch({reset: true});
  //   // videosCollection.parse(searchQuery);
  //   // videosCollection.on('change', function () {console.log(videosCollection.toJSON());}); //change to what target function?
  //
  //   // this.makeCollection(searchQuery);
  // },

  search: function () {
    
    let searchQuery = $('#search-input').val();
    var search = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCIF-nV9qLeAriwePo8cTdgHGEuH_VAno0&part=snippet&type=video&q='+searchQuery;

    this.model.get('videos').url = search;

    this.model.get('videos').fetch({
      success: function () {
        appModel.set('searchQuery', searchQuery)
    }}, { reset: true });
  },

  renderVideo: function () {
    var videoView = new VideoView({ model: VideoModel });
    console.log("new video view created by main");
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
