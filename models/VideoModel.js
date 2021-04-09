var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      id: null,
      name: '',
      descritpion: '',
      video_url: ''
    }
  },

  // urlRoot: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + search + '&type=video&videoEmbeddable=true&key=AIzaSyCbHTHYFVuJAZL_qq0zWqPgDN3Yy3LzmhI',

  parse: function (model) {
    console.log(model);
  }
});