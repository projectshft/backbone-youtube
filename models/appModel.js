var AppModel = Backbone.Model.extend({
  constructor: function() {
    this.videos = new VideoCollection();
    this.currentVideo = null;
  },

  getVideos: function(query) {
    var self = this;
    Backbone.ajax({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search/?part=snippet&q=" + query + "&type=video&key=AIzaSyC5_RVmMP3hnqrdStrJ7vLFdAPxjNB_2sY",
      dataType: "json",
      success: function(data) {
        //If the videos collection is empty, it'll add models to it, otherwise, it'll modify existing models.
        if (self.videos.length == 0) {
          for (var i = 0; i < data.items.length; i++) {
            var newModel = new VideoModel({
              videoId: data.items[i].id.videoId,
              title: data.items[i].snippet.title,
              description: data.items[i].snippet.description,
              thumbnailURL: data.items[i].snippet.thumbnails.default.url
            });
            self.videos.add(newModel);
          }
        }
        else {
          for (var i=0; i<data.items.length; i++) {
            self.videos.at(i).set({
              videoId: data.items[i].id.videoId,
              title: data.items[i].snippet.title,
              description: data.items[i].snippet.description,
              thumbnailURL: data.items[i].snippet.thumbnails.default.url
            }); //I realize I'm accessing two arrays with the same loop and that's not good practice because they could be different lengths, but the query should always return an array of the same length, unless I specify a different maxresults in the query. If someone were to add "&maxresults=" and a number other than 5 (the default) at the end of their query, it would break, but I'm not really worried about accounting for that case.
          }
        }
      }
    });
  }
});
