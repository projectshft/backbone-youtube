var VideoCollection = Backbone.Collection.extend({
  url: function () {
    return 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=AIzaSyBSrRAvBkcFpsMUPTnM9EmITdLf_gG_9CI&q=' + appModel.attributes.searchQuery
  },

  model: VideoModel,

  parse: function (response) {
    return response.items.map(function (issue) {
      return {
        id: issue.id.videoId,
        name: issue.snippet.title,
        description: issue.snippet.description,
        video_url: issue.snippet.thumbnails.default.url
      }
    })
  }
});


