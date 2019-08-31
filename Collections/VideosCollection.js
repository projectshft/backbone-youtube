
//Create the videos collection and setup the url. I am using a collection because I need to return data as an array. I'm going to have to use fetch and possibly parse. 
var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&part=player&q=',
//Connect VideosCollection to VideoModel
  model: VideoModel,
  
//??? What does this mean? I need to use parse to work with the YT API
fetchVideos: function (query) {
  this.url = this.url + query + 's&type=video&key=AIzaSyDkzTwB15n7nv3ezxBh7wjbw36VwmUmdO8'
  console.log(this.url)
  this.fetch({reset: true})

//   this.create({
//     id: id,
//     thumbnail: thumbnail,
//     title: tilte,
//     description: description
//   }, { wait: true });
 },
