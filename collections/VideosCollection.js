const VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  url:
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyBhEipxN2X8twvxFy7Uck1ehRxzzyjZQXY',
  // AIzaSyA3J9kaPqKWfTOk6buExB0aZGcgvSxSEh4',

  getVideos: function(query) {
    // Set url for fetch request to youTube API endpoint
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyBhEipxN2X8twvxFy7Uck1ehRxzzyjZQXY&q=${query}`;
    // AIzaSyA3J9kaPqKWfTOk6buExB0aZGcgvSxSEh4
    this.fetch({ reset: true });
  },

  parse: function(response) {
    // Error handling: set condition that the API call returns a response...
    if (response.items[0]) {
      return response.items.map(function(item) {
        return {
          videoId: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.default.url
        };
      });
      // ... alert user if their query yields no results (such as a query of gibberish)
    } else alert('No results. Please try a different search.');
  }
});
