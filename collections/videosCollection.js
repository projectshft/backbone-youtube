var VideosCollection = Backbone.Collection.extend (  {
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=kittens&key=AIzaSyD9a8mfFIJuCZwzS57LwDG7OBrL3FX-VlE`,

  model: VideoModel,

  addVideo: function(title, description, thumbnail, id) {
    this.add({
      title: title,
      description: description,
      id: id
    }), {
      wait: true
    };

  },
  updateVideoId: function(query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyD9a8mfFIJuCZwzS57LwDG7OBrL3FX-VlE`
  },

  parse: function (response){


}

});
