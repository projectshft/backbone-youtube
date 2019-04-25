const VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  // query: Reggie Watts,

  url:
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyC1DH9BN1VRBoNennrDZXAVqLGr_1xz7_8',

  /**************
   * getVideos
   **************/
  getVideos: function(query) {
    // Set url for fetch request to youTube API endpoint
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyC1DH9BN1VRBoNennrDZXAVqLGr_1xz7_8&q=${query}`;
    console.log('Url with query is: ', this.url);
    this.fetch({ reset: true });
  },

  // ACTUAL
  //   parse: response => {
  //     let items = response.items;
  //     return items;
  //   }
  // });

  parse: function(response) {
    return response.items.map(function(item) {
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url
      };
    });
  }
});

// parse: function(response) {
//   // Create array of objects by looping through the original JSON data
//   let result = response.items.map(function(data) {
//     return {
//       title: data.snippet.title,
//       desc: data.snippet.description,
//       thumbnail: data.snippet.thumbnails.default.url,
//       videoId: data.id.videoId
//     };
//   });
//   return result;
// }
// });
