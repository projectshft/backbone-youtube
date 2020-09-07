var VideosCollection = Backbone.Collection.extend({
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=mangrove%20kayaking&type=video&key=AIzaSyBSZyEG8KA8C2z8WR3_Dfe3MMbWatskA0Q",
  model: VideoModel,

  addVideo: function (title, description, id, thumbnail, youtubeEmbedUrl) {
    this.add({
      title: title,
      description: description,
      id: id,
      thumbnail: thumbnail,
      youtubeEmbedUrl: youtubeEmbedUrl,
    });
  },

  createUrl: function (searchTerm) {
    var searchTermTrimmed = searchTerm.trim().split(' ').join('%20');
    var newUrl =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' +
      searchTermTrimmed +
      '&type=video&key=AIzaSyBSZyEG8KA8C2z8WR3_Dfe3MMbWatskA0Q';
    console.log(newUrl);
    var newVideosCollection = new VideosCollection();
    console.log(newVideosCollection.get('url'));
    return newUrl;
  },

  parse: function (response) {
    return response.map(function (b) {
      
      return Object.assign(
        {
          title: b.items[0].snippet.title,
          description: b.items[0].snippet.description,
          id: b.items[0].id.videoId,
          thumbnail: b.items[0].snippet.thumbnails.default.url,
          youtubeEmbedUrl:
            'https://www.youtube.com/embed/' + b.items[0].id.videoId,
        },
        b
      );
    }, this);
  },
});
