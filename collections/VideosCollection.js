var VideosCollection = Backbone.Collection.extend({
  
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=obama&type=video&videoEmbeddable=true&key=AIzaSyDSTlxlIl5f7wwXbpkN2Zo9R5wS_1Jb940',
  
  model: VideoModel,

  newSearch: function (newQuery) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + newQuery +'&type=video&videoEmbeddable=true&key=AIzaSyDSTlxlIl5f7wwXbpkN2Zo9R5wS_1Jb940';
  },

  parse: function (response) {
    return response.items.map((video)=>{
      return {youTubeId: video.id.videoId};
    })
  }
});