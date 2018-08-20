VideoCollection = Backbone.Collection.extend({
  // url is currently hard-coded with search value 'cats'
  url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDTEoq5bStax1IZYW9UZxabnL1k8kwUpC8&part=snippet&type=video&q=cats',


  // urlSearchAppender: function (search) {
  //    this.url = this.url + search
  //    console.log('input string appended to url')
  // },


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
