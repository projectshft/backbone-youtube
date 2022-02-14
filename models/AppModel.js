/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const AppModel = Backbone.Model.extend({
  defaults() {
    return {
      videos: new VideosCollection(),

      currentVideo: null,
    };
  },

  initialize() {
    this.listenTo(this.get('videos'), 'reset', this.initializeCurrentVideo);
  },

  initializeCurrentVideo() {
    this.set('currentVideo', this.get('videos').models[0]);
  },

  updateCurrentVideo(id) {
    const currentVideo = this.get('videos').findWhere({ videoId: id });

    this.set('currentVideo', currentVideo);
  },
});
