// currently router can only take in video id after newUrl.
// can't show current video's id on URL yet.
var VideoRouter = Backbone.Router.extend({
  routes: {
    ':id': 'fetchVidId',
  },

  fetchVidId: function(id) {
    var allVids = appModel.get('videos');
    var foundVidInCollection = allVids.findWhere({ _id: id });
    if (foundVidInCollection) {
      appModel.set('playingVideo', foundVidInCollection);
    } else {
      appModel.get('videos').fetchWithVidId(id);
    }
  }
});
