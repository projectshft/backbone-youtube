//Create a video collection that holds the video models of data

var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,
  url: function(){
    return 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ query +'&order=viewCount&key=' + key;
  }
});
