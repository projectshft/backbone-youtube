/**
 * Collection of video models
 */

var VideoCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&fields=items(id(videoId),snippet(title,description,thumbnails(default(url))))&q=skateboarding%20dog&type=video&key=AIzaSyA5ua2d9-GqR3Gb0yrrJn7mQFJSjlW0UAA',
  model: VideoModel,

  parse: function(response) {
    return response.items.map( item => {
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailURL: item.snippet.thumbnails.default.url
      }
    });
  }
});