/**
 * Collection of video models
 */

var VideoCollection = Backbone.Collection.extend({
  url: '',
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