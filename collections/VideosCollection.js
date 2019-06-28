var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyC9oT5w8cbYBUkRfg2_1uJZb2YsipMyVJY',
  model: VideoModel

  
});