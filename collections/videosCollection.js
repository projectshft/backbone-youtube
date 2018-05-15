// api key is placed on top, instead of making multiple copies
// also easier to replace or delete, incase something goes wrong.
var youtubeAPIkey = 'Your API Here';

// a fetch request variable, so that it can be customized or reused by different function for different request.
// The request is set to filtered to creative commons, so licensed videos will not show up on reponses.
var defaultGetRequest = 'https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&type=video&videoLicense=creativeCommon&key=' + youtubeAPIkey;

var VideosCollection = Backbone.Collection.extend({
  url: defaultGetRequest,
  model: VideoModel,
  nextPageToken: '',

  // Setting new url using new query and fetch.
  // set player to play 1st model
  fetchNewQuery: function(query) {
    console.log("Fetching New Query " + query);
    var newUrl = defaultGetRequest + "&q=" + query.replace(/\s/g, "+") + "/";
    this.url = newUrl;
    this.fetch({
      success: function(data){
        appModel.set('playingVideo', data.models[0]);
      }
    });
  },

  // Couldn't find a way to fetch related collections using vid id, so once the vid id is fetch,
  // the function will set query to current video title, which trigger a new query fetch.
  // due to license issue (see defaultGetRequest above), the playing Vid might not play the video with the exact id,
  // instead it will find videos that is related to the title.
  fetchWithVidId: function(vidId) {
    console.log("Fetching with vid id " + vidId);
    this.url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&key=' + youtubeAPIkey + '&id=' + vidId;
    this.fetch({
      success: function(data){
        appModel.set('query', data.models[0].get('title'));
      }
    });
  },

  // triggered when playlist was scrolled to the bottom
  fetchMore: function(query) {
    this.url = defaultGetRequest + "&q=" + query.replace(/\s/g, "+") + this.nextPageToken;
    this.fetch();
  },

  //parsing fetched data from the above url
  parse: function(response) {
    this.nextPageToken = "&pageToken=" + response.nextPageToken;

    return response.items;
  }
});
