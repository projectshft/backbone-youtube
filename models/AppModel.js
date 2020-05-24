var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
    };
  },

  updateVideosCollection: function (searchTerm) {
    // we want a default search if none is passed by AppView
    if (typeof searchTerm === "undefined") {
      searchTerm = "marble olympics";
    }

    // want to grab the collection of videos to update it
    var allVideos = this.get("videos");

    // updates the url for the VideosCollection, based on the user's search term
    allVideos.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchTerm}&type=video&key=AIzaSyDQfKcKKGwULrhZccV7sPY1aKn_GlZ3dHM`;

    // updates the collection
    this.get("videos").fetch({ reset: true });
  },
});
