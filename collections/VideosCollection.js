let VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  searchKeywords: 'Reggie Watts',

  url:
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyBhEipxN2X8twvxFy7Uck1ehRxzzyjZQXY',
  //
  /*************************************************
 * From Alicia
 * leave the url as an empty string when you initialize the collection, 
  write a separate function to fetch the videos each time the user clicks the search button. 
  That fetching function could update the URL dynamically, and then you could call it from the AppView.
 * **********************************************/
  // or '/videos'? I prefer the latter, but Alica's advice.
  // use rootUrl?

  // initialize: function() {
  //
  // },

  // search: query => {
  //   this.fetch({
  //     data: {
  //       part: 'snippet',
  //       key: 'ytAPI_key',
  //       q: query,
  //       maxResuts: 5,
  //       type: 'video'
  //     }
  //   });
  // },
  // updateUrl: function() {
  //
  // },

  // ACTUAL
  parse: response => {
    return response.items;
  }
});
