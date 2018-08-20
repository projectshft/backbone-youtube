//Create a video collection that holds the video models of data
// 
// var query = 'cats';
//
// var APIkey = 'AIzaSyCRxZDF8wrnm67fIS3QkhUXhJMuIWOUMco';

var VideoCollection = Backbone.Collection.extend({
  model: VideoModel
  // url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ query +'&order=viewCount&key=' + APIkey
});
