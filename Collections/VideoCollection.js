var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,
  initialize: function(){

  },
// Embed API key into URL and add search parameters
  updateUrl: function(searchString){
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' +
        searchString + '&type=video&key=AIzaSyBYOmDCJz4bMe2gAsyOQlscqPgqVabYwFE'
  },
//Setting up the parse 
  parse: function (response) {
    return response.items
    .map(function (video_snippet) {
      
      return {
        id: video_snippet.id.videoId,
        title: decodeURIComponent(video_snippet.snippet.title),
        description: video_snippet.snippet.description,
        embedUrl: 'https://www.youtube.com/embed/' + video_snippet.id.videoId + '?&autoplay=1&origin=https://www.projectshift.io/',
        thumbnailUrl: video_snippet.snippet.thumbnails.default.url,
        currentVideo: false,
        played: false,
        playing: false
      }
    });
  }
});