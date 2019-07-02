
//Create the beer collection and setup the url. I am usinga collection because I need to return data as an array. I'm going to have to use fetch and possibly parse. 
var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&part=player&q=dogs&type=video&key=AIzaSyDkzTwB15n7nv3ezxBh7wjbw36VwmUmdO8',
//Connect VideosCollection to VideoModel
  model: VideoModel,
//??? What does this mean? I need to use parse to work with the YT API
// parse: function (response) {
//   return response.map(function (b) {
//     var videos = this.get('videos')

//     videos.set(b.videos);

//     b.videos = videos;

//     return Object.assign({'id': b._id}, b);
//   }, this);
});

