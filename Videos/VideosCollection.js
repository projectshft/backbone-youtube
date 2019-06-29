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

//initial API call when page is loaded(called from AppView)
initialSearch: function(){
  this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet%20&q=YouTube+Data+API%20&type=video%20&key=AIzaSyCdDRCypZuJwOxJAMN8uICfhhUEooF_eWs'
  this.fetch({reset:true});
},
//reset should alert AppView of change so view can be rendered



});
