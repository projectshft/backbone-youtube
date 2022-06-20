const VideoCollection = Backbone.Collection.extend({
  model: VideoModel,
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=trailrunning&type=video&videoEmbeddable=true&key=AIzaSyBQytHjjh4SI1Oty6aF_m_A-gTwHLBTzw8`,

  addVideo(title, description, thumbnail, videoId) {
    this.add({
      title,
      description,
      thumbnail,
      videoId,
    });
  },

  updateUrl(value) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${value}&type=video&videoEmbeddable=true&key=AIzaSyBQytHjjh4SI1Oty6aF_m_A-gTwHLBTzw8`;
    applicationModel.get('videos').fetch({ reset: true });
  },
  parse(response) {
    response.items.forEach((item) => {
      applicationModel
        .get('videos')
        .addVideo(
          item.snippet.title,
          item.snippet.description,
          item.snippet.thumbnails.default.url,
          item.id.videoId
        );
    });
    return response;
  },
});
