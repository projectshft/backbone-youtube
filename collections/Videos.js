const Videos = Backbone.Collection.extend({
  model: Video,

  fetchVideos(query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&fields=items(id,snippet(title,description,thumbnails))&q=${query}&type=video&key=${ytAPI}`;
    this.fetch({reset: true});
  },

  parse(resp) {
    return resp.items.map(m => ({
      id: m.id.videoId,
      title: m.snippet.title,
      desc: m.snippet.description,
      thumbnail: m.snippet.thumbnails.default
    }));
  }
});