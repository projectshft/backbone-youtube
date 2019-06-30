var VideoModel = Backbone.Model.extend({
  urlRoot: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=',

  defaults: {
    id: 0,
    title: '',
    description: '',
    thumbnail: ''
  }

});
