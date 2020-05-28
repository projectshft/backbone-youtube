var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'updateSearchQuery'
  },

  initialize: function() {
    //listening for additions to video list collection during initial fetch
    //rendering the videos upon retrieval of API data
    this.listenTo(this.model.get('videoList'), 'reset', this.renderVideoLists);
    this.listenTo(this.model.get('videoList'), 'reset', this.renderVideo);

    this.listenTo(this.model, 'change:userSearchQuery', this.searchYouTube);

  },

  updateSearchQuery: function () {
    //check if user submitted an empty data value and return error if so
    //first store the searchQuery in a variable for reuse
    var userSearch = this.$('#search-query').val();
    //send user an error message if the search is empty
    if (userSearch === '') {
      return alert('Enter in text for a YouTube search.')
    }
    //update the AppModel with the user's search input
    this.model.set('userSearchQuery', userSearch)
    
  },

  searchYouTube: function () {
    //call function to update the URL GET request and fetch data again
    this.model.updateReviewsURL();

  },

  //render videos from currentVideoView
  renderVideo: function(video) {
    //Retrieving the first video from the videoListCollection to render to main video
    var currentVideoView = new CurrentVideoView({ model: (this.model.get('videoList')).first() });
    //appending the view to handlebars in index.html
    this.$('.main-video').append(currentVideoView.render().el);

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

  },

});


