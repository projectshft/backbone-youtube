//creating a videos collection which stores videomodels.

var VideosCollection = Backbone.Collection.extend({

  model: VideoModel,

//Inserting the user's searchQuery in the api's query parameter
  fetchVideos: function(searchQuery) {
    if (searchQuery == '') {
      console.log('Search term not entered');
      alert('Please enter search term');
    }
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&part=player&q='+searchQuery.replace(' ', '%20')+'&type=video&key=AIzaSyDVS4jHXACXxvdEu_ulM3-_jhdU6R8VVR4'
    //fetch the desired video from the youtube api
    this.fetch({ reset: true });
  },

//when fetch is called we get back only specific data that are desired(id, title, description, thumbnail)
  parse: function (response) {
    if (!response) {
      console.log('There was an error retrieving videos from server')
      alert('There was an error retrieving videos from server');
    }
  response.items.map(function (obj) {
    var videoId = obj.id.videoId;
    var videoTitle = obj.snippet.title;
    var videoDescription = obj.snippet.description;
    var videoThumbnail = obj.snippet.thumbnails.default.url;
    //creating a videoModel for each video returned from the API
    videoModel = new VideoModel({
        id: videoId,
         title: videoTitle,
         description: videoDescription,
         thumbnail: videoThumbnail
    })
    //adding each video to the appModels collection of videos
    appModel.get('videos').add(videoModel);
})

    appModel.setMainVideo(appModel.get('videos').models[0]);
    appView.renderVideos();
}

});
