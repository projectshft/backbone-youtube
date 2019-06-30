var VideosCollection = Backbone.Collection.extend({

  //initializing url to null because it will change based upon search, will be constructed in fetch function
  url: null,

  //takes a video Model
  model: VideoModel,

  //parse response upon return from API
  parse: function(response) {
    //return new array of objects from map function
    return response.items.map(function(model) {
      return {
        id: model.id.videoId,
        title: model.snippet.title,
        description: model.snippet.description,
        thumbnail: model.snippet.thumbnails.default.url
      }
    });
  },
  //initialized with access to variables for convenience
  initialize: function() {
    key = '&key=AIzaSyCdDRCypZuJwOxJAMN8uICfhhUEooF_eWs';

    baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='
  },

  //initial API call when page is loaded(called from AppView)
  initialSearch: function() {
    this.url = baseUrl + 'backbone+tutorial' + '&type=video' + key;
    this.fetch({
      reset: true
    });
  },
  //reset should alert AppView of change so view can be rendered

  //will need to set url on the collection
  fetchData: function(search) {
    this.url = baseUrl + search + '&type=video' + key;
    this.fetch({
      reset: true
    });
  }


});
