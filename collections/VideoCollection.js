const VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  url: '',

  updateUrl(query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoEmbeddable=true&key=AIzaSyBJ_kn8KJdIxc928Ml9RAwvDlThYNy6vDw`;
  },
});
