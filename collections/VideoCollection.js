// Video Collection 
// URL is a function to replace https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=amiga%20retro&key=[YOUR_API_KEY]
// model based on VideoModel
// parse: snippet.title snippet.description id.videoId snippet.thumbnails.???.default.url
// set first response to on_stage = true
var API_KEY = 'AIzaSyASOw5XMi4dPRhAs6V4b53svoyNA2FiKks';
// searchTerms global due to fetch() being difficult to pass args to
var searchTerms = 'Beck Loser';

var VideoCollection = Backbone.Collection.extend({
  url: function () {
    console.log('->VideoCollection fetch searchTerms: ', searchTerms);
    searchTerms = encodeURI(searchTerms);
    var theResponse = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + searchTerms + "&type=video&key=" + API_KEY;
    searchTerms = '';
    console.log(theResponse);
    return theResponse;
  },

  model: VideoModel,

  parse: function (response) {
    console.log('->VideoCollection response ', response);
    //strip off unneeded data then map() to what we do need
    response = response.items;

    console.log('parsing');

    return response.map(function (entry, index) {
      var onStage = false;
      // put first entry [0] on stage. other 4 stay in list
      if (!index) {
        onStage = true
      };
      return Object.assign({
        videoId: entry.id.videoId,
        title: entry.snippet.title,
        description: entry.snippet.description,
        thumb_url: entry.snippet.thumbnails.default.url,
        on_stage: onStage
      });
    }, this);
  }

});