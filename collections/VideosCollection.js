var VideosCollection = Backbone.Collection.extend({
url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCMk1mKjrxvh5_zyYaLZe9DlQNiuxJeJn4&',
  model: VideoModel,

  parse: function(response) {
    return response.items;
  }
});
