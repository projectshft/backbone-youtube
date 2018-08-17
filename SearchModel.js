SearchModel = Backbone.Model.extend({

  urlRoot: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDTEoq5bStax1IZYW9UZxabnL1k8kwUpC8&part=snippet&type=video&q=',

  defaults: {
    id: ''
    // other stuff, video thumbnail, title, etc.
  },

  parse: function (response) {
    videoTitles = [];
    videoIds = [];
    videoThumbnails = [];
    videoDescriptions = [];

    for (var i = 0; i < response.items.length; i++) {
      var item = response.items[i];
      videoTitles.push(item.snippet.title);
      videoIds.push(item.id.videoId);
      videoThumbnails.push(item.snippet.thumbnails.high);
      videoDescriptions.push(item.snippet.description);
    }


  return {
    titles: videoTitles,
    ids: videoIds,
    thumbs: videoThumbnails,
    descriptions: videoDescriptions
  }
},


// defaults: {
//   sha: '',
//   login: '',
//   avatar_url: ''
// }

});
