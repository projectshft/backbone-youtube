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

  updateReviewCollectionUrl() {
    this.get('currentVideo')
      .get('reviews')
      .updateUrl(this.get('current_beer').get('_id'));
  },

  updateCurrentBeer(id) {
    const allBeers = this.get('beers');
    const currentBeer = allBeers.findWhere({ _id: id });

    this.set('currentVideo', currentBeer);
  },
});
