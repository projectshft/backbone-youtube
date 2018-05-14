var VideoCollection = Backbone.Collection.extend({
  url: function(){
    return 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ query +'&order=viewCount&key=AIzaSyCRsUODheI75aQzkkYxtCWzaYxEOjrP-AY'
  },
  model: VideoModel
})
