var VideoModel = Backbone.Model.extend({
  idAttribute: 'items.id.videoId',

  defaults: function () {
    return {
      videoId: '', // data.items.id.videoId
      title: '', // data.items.snippet.title
      description: '', // data.items.snippet.description
      thumbnail: '', // data.items.snippet.thumbnails.default.url
    }
  }
});
