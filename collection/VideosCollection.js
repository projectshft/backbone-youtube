var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,
  url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBkCxcdQOwxQovx01IjtciRbvZtE-XKmV4&part=snippet&type=video&q=${this.search}`,
  parse: function (response) {
    var videoArray = [];
    for (var i = 0; i < response.items.length; i++) {
      var itemAttr = response.items[i];
      var videoProps = {
        videoId: itemAttr.id.videoID,
        title: itemAttr.snippet.title,
        description: itemAttr.snippet.description,
        thumbnail: itemAttr.snippet.thumbnails.medium.url
      }
      videoArray.push(videoProps);
    }
    return videoArray
  }

})

var newCollection = new VideoCollection();
