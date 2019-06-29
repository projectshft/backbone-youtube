var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet%20&q=YouTube+Data+API%20&type=video%20&key=AIzaSyCdDRCypZuJwOxJAMN8uICfhhUEooF_eWs',
  //takes a video Model
  model: VideoModel,


  parse: function(response){
    return response.items;
  },

  //way to add video model to Collection
  addVideo: function(title,videoId, description,thumbnailLink){
    this.add({
      title: title,
      videoID: videoID,
      description: description,
      thumbnailLink: thumbnailLink
    });
  },

});
