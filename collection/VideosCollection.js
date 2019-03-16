let VideosCollection = BackboneCollection.extend({
  model: [FeaturePlayerModel, ListModel],
  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        key: ['Insert API Key'],
        q: query,
        maxResuts: 5,
        type: 'video'
      }
    });
  },
  parse: function() {}
});

// CHECK MODEL VALUE AND KEY VALUE ABOVE
// for model above, just have VideoModel, which combines FeaturePlayerModel and ListModel???
