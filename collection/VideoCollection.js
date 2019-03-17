/*************************************************
 * From Alicia
 * leave the url as an empty string when you initialize the collection, 
  write a separate function to fetch the videos each time the user clicks the search button. 
  That fetching function could update the URL dynamically, and then you could call it from the AppView.
 * **********************************************/

let VideoCollection = Backbone.Collection.extend({
  model: VideoModel,
  url: '', // insert youtube's search url

  // initialize: function() {
  //   this.listenTo(this.model, 'change:searchTerm', this.updateUrl);
  // },

  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        key: 'my_API_key',
        q: query,
        maxResuts: 5,
        type: 'video'
      }
    });
  },
  updateUrl: function() {
    this.model.get('videoList').fetch();
    // "at" method at model.get.VideosCollection[0]
  },

  parse: response => {
    // return response.items;
    return response;
  }
});

// parse: fuction(response) {
//     let items = response.items;
//     console.log("items: " + items);
//      return items;
//   },

// CHECK MODEL VALUE AND KEY VALUE ABOVE
// for model above, just have VideoModel, which combines FeaturePlayerModel and ListModel???

// <!doctype html>
// <html>
//   <head>
//     <title>Search</title>
//   </head>
//   <body>
//     <div id="buttons">
//       <label> <input id="query" value='cats' type="text"/><button id="search-button" disabled onclick="search()">Search</button></label>
//     </div>
//     <div id="search-container">
//     </div>
//     <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
//     <script src="auth.js"></script>
//     <script src="search.js"></script>
//     <script src="https://apis.google.com/js/client.js?onload=googleApiClientReady"></script>
//   </body>
// </html>
