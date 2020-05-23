var AppModel = Backbone.Model.extend({
  defaults: function(){
    return {
      // creates new VideosCollection
      videos: new VideosCollection(),
      // will hold search input
      searchTerm: '',
      // sets which video will play
      currentlyPlaying: null
    }
  }
});
