var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      search: 'dog'
    }
  },
 

  initialize: function() {
    //set a default search query to be set when the page is first loaded
    this.get('videos').fetchVideos('dogs');
    //when a change is made to the search make a new fetch
    // this.listenTo(this.get('search'), 'change: search',this.get('videos').fetchVideos(this.get('search')));
  },

  setSearch: function (searchQuery) {
    //set the search to the searchQuery
    this.set({'search': searchQuery}) 

    this.get('videos').fetchVideos(this.get('search'));
  },


});


