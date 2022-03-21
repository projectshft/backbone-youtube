/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-plusplus */
/* eslint-disable object-shorthand */

var VideosCollection = Backbone.Collection.extend({
  model: VideosModel,

  parse: function (response) {
    return response.items.map(function (videos) {
      return {
        videoId: videos.id.videoId,
        title: videos.snippet.title,
        description: videos.snippet.description,
        thumbnailUrl: videos.snippet.thumbnails.default.url,
      };
    });
  },
});
