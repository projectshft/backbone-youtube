var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),

      current_video_id: 0,

      searchQuery: '',

      current_video_queue: []
    }
  },

  initialize: function () {
    this.listenTo(this.get('videos'), 'reset', this.loadVideos)
  },

  searchVideos: function () {
    this.set({ searchQuery: $('#search-input').val() });
    this.updateUrl();
  },

  updateUrl: function () {
    this.get('videos').url = this.get('videos').defaultUrl + this.get('searchQuery')
    this.get('videos').fetchVideos()
  },

  loadVideos: function() {
    this.set({ current_video_id: this.get('videos').at(0).get('id') })
  },

  videoQueueArray: function () {
    var queueArray = []
    this.get('videos').forEach(function(item) {
      if (item.id.videoId !== this.get('current_video_id')) {
        queueArray.push(item)
      }
    })
    this.set({current_video_queue: queueArray})
  }

});
