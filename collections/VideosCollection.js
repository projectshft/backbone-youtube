var VideosCollection = Backbone.Collection.extend({
  url: function (searchTerm) {
    if (!searchTerm) {
      searchTerm = 'leafy seadragon';
    }
    console.log(searchTerm);
    var searchTermTrimmed = searchTerm.trim().split(' ').join('%20');
    return (
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' +
      searchTermTrimmed +
      '&type=video&key=AIzaSyBSZyEG8KA8C2z8WR3_Dfe3MMbWatskA0Q'
    );
  },

  model: VideoModel,

  addVideo: function (title, description, videoId, thumbnail, youtubeEmbedUrl) {
    this.add({
      title: title,
      description: description,
      videoId: videoId,
      thumbnail: thumbnail,
      youtubeEmbedUrl: youtubeEmbedUrl,
    });
  },

  parse: function (response) {
    var result = [response];
    var cleanResult = result[0].items;
    console.log(cleanResult);
    return cleanResult.map(function (video) {
      return Object.assign({
        title: video.snippet.title,
        description: video.snippet.description,
        videoId: video.id.videoId,
        thumbnail: video.snippet.thumbnails.default.url,
        youtubeEmbedUrl: 'https://www.youtube.com/embed/' + video.id.videoId,
      });
    });
  },

});
