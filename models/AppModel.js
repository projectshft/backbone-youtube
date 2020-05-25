var AppModel = Backbone.Model.extend({
  defaults: function(){
    return {
      // creates new VideosCollection
      videos: new VideosCollection(),
      // will hold search input
      searchTerm: 'surfing',
      // sets which video will play
      currentlyPlaying: null
    }
  },

  resetCurrentVideo: function(title) {
    var currentVideo = this.get('videos').findWhere({title: title});
    this.set('currentlyPlaying', currentVideo);
  },

  changeSearchTerm: function(searchTerm) {
    this.set('searchTerm', searchTerm);
    this.get('videos').setURL(searchTerm)
  }
});
