var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
    };
  },

  updateVideosCollection: function (searchTerm) {
    // want to grab the collection of videos to update it
    var allVideos = this.get("videos");

    console.log("The VideosCollection before the call is ", allVideos);

    // updates the url for the VideosCollection, based on the user's search term
    allVideos.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&key=AIzaSyDQfKcKKGwULrhZccV7sPY1aKn_GlZ3dHM`;

    // updates the collection
    this.get("videos").fetch({ reset: true });
  },
});
