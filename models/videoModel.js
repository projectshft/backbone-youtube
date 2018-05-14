var VideoModel = Backbone.Model.extend({
  idAttribute: '_id',

  default: {
    title: '',
    description: '',
    thumbnail: '',
  },

  //  parse data that comes from videosCollection's fetch, and assign them to the individual video model.
  parse: function(response) {
    var id = response.id.videoId;
    var title = response.snippet.title;
    var description = response.snippet.description;
    var thumbnail = response.snippet.thumbnails.default.url;

    return {
      '_id': id,
      'title': title,
      'description': description,
      'thumbnail': thumbnail
    };
  }
});
