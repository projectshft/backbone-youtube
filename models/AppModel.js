var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),

      currentVideo: null,

    }
  },

  initialize: function () {
    // listening for page to refresh to update main video in model
    this.listenTo(this.get('videos'), 'reset', this.loadMainVideo);

  },

  loadMainVideo: function (video) {

    var mainYoutubeVideo = this.get('videos').models[0]
    // console.log(mainYoutubeVideo)
    this.set('currentVideo', mainYoutubeVideo)

  },

  changeMainVideo: function(selectedVideoTitle) {
  var currentVideo = this.get('videos').findWhere({title: selectedVideoTitle});
  this.set('currentVideo', currentVideo);
},

  // taking search input and passing it to getSearch function in collection
  performSearch: function(searchInput) {
    this.set('searchInput', searchInput);
    this.get('videos').getSearch(searchInput)
  }
});
