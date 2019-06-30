var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),

      current_video: null,

      searchQuery: ''
    }
  },

  searchVideos: function () {
    this.set({searchQuery: $('#search-input').val()});
    this.updateUrl();
  },

  updateUrl: function () {
    this.get('videos').url = this.get('videos').defaultUrl + this.get('searchQuery')
    this.get('videos').fetchVideos()
  },

});
