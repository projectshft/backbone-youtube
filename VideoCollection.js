VideoCollection = Backbone.Collection.extend({
  idAttribute: 'query',
  url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDTEoq5bStax1IZYW9UZxabnL1k8kwUpC8&part=snippet&type=video&q=',


  urlSearchAppender: function (search) {
     this.url = this.url + search
  },

  model: VideoModel,

  parse: function (response) {
    var videoObj = [];

    for (var i = 0; i < response.items.length; i++) {
      var item = response.items[i];
      videoObj.push({
        title: item.snippet.title,
        videoId: item.id.videoId,
        thumb: item.snippet.thumbnails.high.url,
        desc: item.snippet.description
      })
    }
    return videoObj
}

});
