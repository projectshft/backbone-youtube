const VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  url: '',

  updateUrl(query) {
    this.url = `https://www.googleapis.com/youtube/v3/videos/search?part=snippet&maxResults=5&q=${query}&type=video&videoEmbeddable=true&key=${apiKey}`;

    this.fetch({ reset: true });
  },

  parse(response) {
    const searchArr = response.items.map(function (video) {
      return {
        videoId: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnailUrl: video.snippet.thumbnails.default.url,
      };
    });
    console.log(searchArr);
    return searchArr;
  },

  addVideo(videoId, title, description, thumbnailUrl) {
    this.create({
      videoId,
      title,
      description,
      thumbnailUrl,
    }, { wait: true });
  }
});