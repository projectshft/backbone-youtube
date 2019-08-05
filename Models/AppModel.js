var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      initialVideo: '',
      search: 'test'
    }
  },
 

  initialize: function() {
    //set a default search query to be set when the page is first loaded
    this.get('videos').fetchVideos('dogs');
    console.log(this.get('search'))
    this.listenTo(this.defaults.search, 'change', this.setSearch(this.defaults.search));
  },

  setSearch: function (searchQuery) {
    console.log(this.get('videos').fetchVideos)
    this.attributes.search = searchQuery;
    //get videos collection and call its fetch video function

  },


});


