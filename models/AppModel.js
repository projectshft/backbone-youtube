var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      selected_video: null,
      search_query: ''
    }
  },

  initialize: function () {
    this.listenTo(this, 'change:search_query', this.updateVideoCollectionUrl);
  },

  updateQuery: function (query) {
    this.set('search_query', query);
  },

  updateVideoCollectionUrl: function () {
    this.get('videos').updateUrl(this.get('search_query'));
  },

  setDefaultSelectedVideo: function () {
    this.set('selected_video', this.get('videos').at(0));
  },

  updateSelectedVideo: function (id) {
    var selectedVideo = this.get('videos').findWhere({ videoId: id });

    this.set('selected_video', selectedVideo);
  }
});