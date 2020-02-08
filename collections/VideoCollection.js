var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,
  initialize: function(){

  },
// Embed API key into URL and add search parameters
  updateUrl: function(searchString){
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' +
        searchString + '&type=video&key=AIzaSyBYOmDCJz4bMe2gAsyOQlscqPgqVabYwFE'
  },
  
