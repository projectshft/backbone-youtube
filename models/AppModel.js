let AppModel = Backbone.Model.extend({
  defaults: function () {
    debugger;
    return {
      videos: new VideoCollection(),
      keyword: 'nobel physics prize'  // as with youtube, ensuring a startup selection of videos
    }
  },

  showVideos: function (id) {
    let allVideos = this.get('videos');

    // var currentBeer = allBeers.findWhere({ id: id });

    // this.set('current_beer', currentBeer);
    // this.set('show_reviews', true);
  },

  searchVideos: function (keyword) {
    this.set('keyword', keyword);
  }
});