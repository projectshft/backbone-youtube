var VideosCollection = Backbone.Collection.extend({
  // url: 'https://www.googleapis.com/youtube/v3/search?part=snippet%20&q=YouTube+Data+API%20&type=video%20&key=AIzaSyCdDRCypZuJwOxJAMN8uICfhhUEooF_eWs',
  //initializing url to null because it will change based upon search, will be constructed in fetch function
  url: null,

  //takes a video Model
  model: VideoModel,

//parse response upon return from API
  parse: function(response){
    return response.items;
  },
//initialized with access to variables for convenience
  initialize: function(){
    key = '&key=AIzaSyCdDRCypZuJwOxJAMN8uICfhhUEooF_eWs';

    baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='
  },

//initial API call when page is loaded(called from AppView)
initialSearch: function(){
  this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet%20&q=backbone+tutorial%20&type=video%20&key=AIzaSyCdDRCypZuJwOxJAMN8uICfhhUEooF_eWs'
  this.fetch({reset:true});
},
//reset should alert AppView of change so view can be rendered

//will need to set url on the collection
fetchData: function(search){
  this.url = baseUrl + search + '&type=video'+ key;
  this.fetch({reset:true});
}


});
