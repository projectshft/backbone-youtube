var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,
  // query: this.$('.search').val(),

  url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBZv7oOxB5qYLsabM8t35bn2frCIjmDtqc&part=snippet&type=video&q=" + query,

  parse: function(query) {

    videoArray = [];

    for (i = 0; i < query.items.length; i++) {
      var videoUniqueProperties = {
        'videoID': query.items[i].id.videoId,
        'videoTitle': query.items[i].snippet.title,
        'videoDesc': query.items[i].snippet.description,
      };

      videoArray.push(videoUniqueProperties);
    };

    return videoArray
  }
});

var query = this.$('.search').val();


var newCollection = new VideoCollection();
newCollection.fetch();
//
// newCollection.fetch({
//   success: function(collection, query) {
//     _.each(VideoCollection.model, function(model) {
//       console.log(model.toJSON());
//     })
//   }
// });
