//creating a videos collection which stores videomodels.

var VideosCollection = Backbone.Collection.extend({


  model: VideoModel,
//Inserting the user's searchQuery in the api's query parameter
  addUrl: function(searchQuery) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&part=player&q='+searchQuery.replace(' ', '%20')+'&type=video&key=AIzaSyCaGKLUbvq7ts-AAudIgcx5s9PiPnmEQko'
  },

  //implent a funcitn which creates a new video model for each movie returned from the film
  addMovie: function(videoId, videoTitle, videoDescription, videoThumbnail) {
    this.add({
      id: videoId,
      title: videoTitle,
      description: videoDescription,
      thumbnail: videoThumbnail
    })
  },
//when fetch is called we need to get back the objects id, thumbnail and other info
//and then insert it into the add Movie function
  parse: function (response) {
  response.items.map(function(obj) {
    var videoId = obj.id.videoId;
    var videoTitle = obj.snippet.title;
    var videoDescription = obj.snippet.description;
    var videoThumbnail = obj.snippet.thumbnails.default.url;
    addMovies(videoId, videoTitle, videoDescription, videoThumbnail);
  })
},

})
