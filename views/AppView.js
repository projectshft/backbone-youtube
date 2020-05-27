var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchYouTube'
  },

  initialize: function() {
    //listening for additions to video list collection during initial fetch
    //rendering the videos upon retrieval of 
    this.listenTo(this.model.get('videoList'), 'sync', this.renderVideoLists);
    this.listenTo(this.model.get('videoList'), 'sync', this.renderVideo);

  },

  searchYouTube: function () {
    //check if user submitted an empty data value and return error if so
    if (this.$('#search-query').val() === '') {
      return alert('Enter in text for a YouTube search.')
    }

  },

  //render videos from currentVideoView
  renderVideo: function(video) {
    //Retrieving the first video from the videoListCollection to render to main video
    var currentVideoView = new CurrentVideoView({ model: (this.model.get('videoList')).first() });
    //appending the view to handlebars in index.html
    this.$('.main-video').append(currentVideoView.render().el);
    debugger;
  },

  //rendering all video models in VideoListCollection
  renderVideoLists: function() {
    //looping through each model in the VideoListCollection
    this.model.get('videoList').each(function (m) {
      //creating a variable to hold a new view for each model in the collection
      var currentVideoListView = new VideoListView({ model: m });
      //appending the views to handlebars in index.html
      this.$('.video-list').append(currentVideoListView.render().el);
      
    }, this);
    debugger;
  },

});


