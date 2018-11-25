//holds 5 video models at a time
var VideoCollection = Backbone.Collection.extend({
  url: "",
  model: VideoModel,
  parse: function(response) {
    return response.items.map(function(v) {
      return {
        title: v.snippet.title,
        description: v.snippet.description,
        id: v.id.videoId,
        thumbnail: v.snippet.thumbnails.default.url,
      }
    })
  },
  //builds the URL based on the user's search query and then fetches
  fetchQuery: function(searchQuery) {
    if (!searchQuery) {
      alert("You must enter a valid search term in the box");
    } else {
      searchQuery.replace(" ", "+");
      this.url = "https://www.googleapis.com/youtube/v3/search?&key=AIzaSyA9Oln71SfBsS8kZ0UxEO_gP75raEGoiMs&part=snippet&chart=mostpopular&type=video&q=" + searchQuery;
      this.fetch({
        reset: true
      });
    }
  }
})
