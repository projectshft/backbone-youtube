//creating a videos collection which stores videomodels.

var VideosCollection = Backbone.Collection.extend({


  model: VideoModel,
//Inserting the user's searchQuery in the api's query parameter
  addUrl: function(searchQuery) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&part=player&q='+searchQuery.replace(' ', '%20')+'&type=video&key=AIzaSyCaGKLUbvq7ts-AAudIgcx5s9PiPnmEQko'
  },


})
