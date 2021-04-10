var VideosCollection = Backbone.Collection.extend({
  
  // blank url from testing: url: '#',
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=pizza&type=video&videoEmbeddable=true&key=AIzaSyDSTlxlIl5f7wwXbpkN2Zo9R5wS_1Jb940',
  
  model: VideoModel,

  newSearch(newQuery) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + newQuery +'&type=video&videoEmbeddable=true&key=AIzaSyDSTlxlIl5f7wwXbpkN2Zo9R5wS_1Jb940';
    this.fetch({reset: true});
  },

  parse(response) {
    return response.items.map((video)=>{
      return {
        id: video.id.videoId,
        thumbnailUrl: video.snippet.thumbnails.medium.url,
        title: video.snippet.title,
        channel: video.snippet.channelTitle,
        description: video.snippet.description
      };
    })
  }

});