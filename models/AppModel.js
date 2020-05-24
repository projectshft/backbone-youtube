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
    allVideos.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchTerm}&type=video&key=AIzaSyBrzvu5dpVmdYUFHF-YF287R0GRbycWQnE`;

    // updates the collection or invokes an error handler if needed
    this.get("videos").fetch({ error: this.onErrorHandler, reset: true });
  },

  changeMainVideo: function (desiredVideoId) {
    var currentMainVideo = this.get("videos").findWhere({ main: true });
    var desiredMainVideo = this.get("videos").findWhere({ id: desiredVideoId });
    console.log("Before, desiredMainVideo is ", desiredMainVideo);

    currentMainVideo.set("main", false);
    desiredMainVideo.set("main", true);

    console.log("After, desiredMainVideo is ", desiredMainVideo);
  },

  onErrorHandler: function (model, xhr, options) {
    // we'll take the first setnence of the error to alert, then indicate to go to console for more info.
    shortenedError = xhr.responseJSON.error.message.split(".")[0];

    //user & developer friendly error alert
    alert(
      "There is an error in getting the data. Here's why: '" +
        shortenedError +
        "'. More information in developer console."
    );

    // throw the detailed error in console for further investigation by dev
    console.log(xhr.responseJSON.error.message);
    console.log("The full error is ", xhr.responseJSON.error);
  },
});
