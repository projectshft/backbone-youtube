var VideoModel = Backbone.Model.extend({
  idAttribute: 'videoId',

  defaults: function () {
    return {
      videoId: '',
      title: '',
      description:'',
      channelTitle: '',
    }
  },

  // when 'reviews' come in from the server, they're an array...
  // this will set them back to being a collection
  parse: function (response) {

    return response;
  }
});
