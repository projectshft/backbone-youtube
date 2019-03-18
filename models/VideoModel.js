let VideoModel = Backbone.Model.extend({
  // OVERRIDES: id
  // Per YouTube API documentation: JSON response returns an id(#id) object with 4 key-value pairs. Limit response to only vidoes, not channels nor playlists, by using only id.videoId attribute (a string). (SHOULD "KIND" ALSO BE USED/CHECKED TO ENSURE ONLY VIDEOS???) If the id.type property's value is "youtube#video" (CHECK FOR THIS? IMPOSE LIMITATIONS TO ALLOW ONLY THIS???) then this property will be present and its value will contain YouTub's unique identifer for a video that mathces the search query.

  // Per Backbone documentation:
  //  * "id" will be coppied onto the model as a direct property.
  //  * "idAttribute" stores a model's unique identifier. For direct communication (with YouTube API) which uses a unique identifier, you can set a model's idAttribute to transparently map from that key to id.
  // *  "cid" is a unique identifier automatically assigned to all models when they're first created... handy when the model has not yet been saved to the server, and does not yet have its eventual true id, but already needs to be visible in the UI

  // Use idAttribute first, following sample code in Backbone documentation (p. 9). cid might be possible, even preferrable for this limited use, but it's likely not as robust for long-term design or bigger design with more functionality???

  idAttribute: '_id',

  defaults: function() {
    return {
      // kind: '', // Include kind to test (maybe for edge cases)
      videoId: '',
      title: '',
      description: '',
      thumbnail: '' // thumbnail url?
      // For extension: insert nextFiveVideos: new VideosCollection()???
    };
  },
  // OR
  // initialize: function(video) {
  //   this.set('id', video.id.videoId);
  //   this.set('snippet', video.snippet); // just take everything the whole snippet attribute shebang?
  // },

  parse: function(response) {
    return {
      // include kind here, if above // also, is that portion of the url necessary/helpful to store here
      videoId: response.id.videoId,
      title: response.snippet.title,
      description: response.snippet.description,
      thumbnail: response.snippet.thumbnails.default.url
      // See YT api documentation re: thumbnails: returns an object. Need to specify response.snippet.thumbnails.default? url? Seems redundant.
    };
    // return response.results; ?
  }
});

/*************************************
   From sample code on youTube DataAPI "search":
// See full sample for buildApiRequest() code, which is not
// specific to a particular API or API method.
 *************************************/

/************************************************
buildApiRequest('GET', '/youtube/v3/search', {
  maxResults: '5', // default is 5, acceptable values per youTube api are 0-50
  part: 'snippet',
  q: 'query', // query = var, input received from search bar
  type: '' // set to 'video'? See below
});

q =
  'https://www.googleapis.com/youtube/v3/videos?id=' +
  itemId +
  '&key=' +
  ytApi_key +
  '&fields=items(snippet(channelId,title,categoryId))&part=snippet';

$.ajax({
  url: q,
  dataType: 'jsonp',
  success: function(data) {
    alert(data.items[0].title);
    console.log(data.snippet.title);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    alert(textStatus, +' | ' + errorThrown);
  }
});

q =
  'https://www.googleapis.com/youtube/v3/videos?id=itemId&key=apiKey&fields=items(snippet(title))&part=snippet';

  ******************************************** */

// https://www.googleapis.com/youtube/v3/videos?id=
// REQUIRED PARAMETERS: part: string
// The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. ***Set the parameter value to snippet.***

// OPTIONAL PARAMETERS
// videoEmbeddable: string
// The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.
// Acceptable values are:
// any – Return all videos, embeddable or not.
// true – Only retrieve embeddable videos.

// Request body
// Do not provide a request body when calling this method.

// Response
// If successful, this method returns a response body with the following structure:
// {
//   "kind": "youtube#searchListResponse",
//   "etag": etag,
//   "nextPageToken": string,
//   "prevPageToken": string,
//   "regionCode": string,
//   "pageInfo": {
//     "totalResults": integer,
//     "resultsPerPage": integer
//   },
//   "items": [
//     search Resource
//   ]
// }

// The following Defines the properties that appear in a search result: (MORE ON YOUTUBE API)
// !IMPORTANT!
// items[]
// list
// A list of results that match the search criteria.

/*******************************************
 * FROM Stackoverflow
 *******************************************/
// var Item = Backbone.Model.extend();

// var List = Backbone.Collection.extend({
//   model: Item,

//   url: 'http://gdata.youtube.com/feeds/api/videos/hGgr8ZbeNgQ?v=2&alt=jsonc',

//   parse: function(response) {
//     return response.results;
//   },

//   sync: function(method, model, options) {
//     var that = this;
//     var params = _.extend(
//       {
//         type: 'GET',
//         dataType: 'jsonp',
//         url: that.url,
//         processData: false
//       },
//       options
//     );

//     return $.ajax(params);
//   }
// });

// var ListView = Backbone.View.extend({
//   el: $('#test'),
//   events: {
//     'click button#add': 'getPost'
//   },
//   initialize: function() {
//     _.bindAll(this, 'render', 'getPost');
//     this.collection = new List();
//     this.render();
//   },
//   render: function() {
//     var self = this;
//     $(this.el).append("<button id='add'>get</button>");
//   },
//   getPost: function() {
//     var that = this;
//     this.collection.fetch({
//       success: function() {
//         console.log(that.collection.toJSON());
//         console.log('working');
//       },
//       error: function() {
//         console.log('Failed to fetch!');
//       }
//     });
//   }
// });

// // **listView instance**: Instantiate main app view.
// var listView = new ListView();
