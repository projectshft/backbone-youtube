/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-plusplus */
/* eslint-disable object-shorthand */

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      videoResult: null,
    };
  },

  playVideoResult: function (id) {
    var videoResult = this.get('videos').findWhere({ videoId: id });
    this.set('videoResult', videoResult);
  },
});
