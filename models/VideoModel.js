var VideoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    description: '',
    imgURL: '',
    iframeURL: '',
    played: false
  },

  idAttribute: "id.videoId",

  parse: function(response) {
      var title = response.snippet.title;
      var description = response.snippet.description;
      var imgURL = response.snippet.thumbnails.default.url;
      var iframeURL = 'https://www.youtube.com/embed/' + response.id.videoId + '?autoplay=1';

      return {
        title: title,
        description: description,
        imgURL: imgURL,
        iframeURL: iframeURL
      };
  }
})
