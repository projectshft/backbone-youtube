var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  //Have to set the url to blank since we need to incorporate the search term into the middle of the address. So we can't just set the urlRoot or url. We have to regenerate the Url on every search.
  url: "",

  getData: function (searchTerm) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&type=video&videoEmbeddable=true&key=AIzaSyDGNQ4EDJi19z-WPBKA_JxBG4DR6oTp1tU`;

    this.fetch({ reset: true });
  },

  //Because we're fetching 5 results at a time, we need to parse and return a mapped set of objects (models);
  parse: function (data) {
    var videos = data.items.map(function (video) {
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        id: video.id.videoId,
        bigUrl: video.snippet.thumbnails.high.url,
      };
    });
    return videos;
  },
});

var Controller = ListController.extend({
  el: "#demo",
  listView: ListView,

  // tell infinite scroll to load more when reaching the end of this list
  scrollContext: "#demo .list",

  initialize: function () {
    var fakeData = [],
      i = 0;
    while (i++ < 60) {
      fakeData.push({ id: i, label: "Row " + i });
    }

    this.collection = new Coll(fakeData);
  },
});

var listController = new Controller();

// later... render the controller
listController.render();
