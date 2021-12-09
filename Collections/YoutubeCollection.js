var YoutubeCollection = Backbone.Collection.extend({
  url: () => 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cats&type=video&videoEmbeddable=true&key=AIzaSyD9Dx50AZ_Dn1aTHwzUKOQHWHzK5jUlNbw',

  model: VidModel,

  setUrlandFetch: function (term) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${term}&type=video&videoEmbeddable=true&key=AIzaSyD9Dx50AZ_Dn1aTHwzUKOQHWHzK5jUlNbw`;

    this.fetch({reset: true});
  },
   
  parse: function (response) {
    return response.items.map(function (video) {
      return {
        videoId: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium.url
      };
    });
  },
});