var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,
  url:
    'https://www.googleapis.com/youtube/v3/search?part=snippet&q=leafy+seadragon&key=AIzaSyBSZyEG8KA8C2z8WR3_Dfe3MMbWatskA0Q',

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
    var searchTermTrimmed = searchTerm.trim().split(' ').join('+');
    var newUrl =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' +
      searchTermTrimmed +
      '&key=AIzaSyBSZyEG8KA8C2z8WR3_Dfe3MMbWatskA0Q';
    console.log(newUrl);
    var newVideosCollection = new VideosCollection();
    console.log(newVideosCollection.get('url'));
    return newUrl;
  },

  parse: function () {
    return response.map(function (b) {
      var videosCollection =
        appModel.get('videosCollection') || new VideosCollection();
      videosCollection.set(b.videosCollection);
      b.videosCollection = videosCollection;

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
