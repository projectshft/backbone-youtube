var VideosCollection = Backbone.Collection.extend({

  url: 'https://new-beers.herokuapp.com/beers',
  model: VideoModel,

  parse: function (response) {
    return response.map(function (vid) {
      return {
        title: vid.name,
        description: vid.style,
        thumbnailUrl: vid.image_url///add ID
      }
    })
  }
});