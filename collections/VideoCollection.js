var VideoCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA7g39h3EESAB4anzZSQxG9z0MsLM-U7c0&q=cool&type=videos',
  model: VideoModel,


  parse: function (response) {
    return response.items.map(function (data){

      videoObj = {
        id: data.id.videoId,
        title: data.snippet.title,
        description: data.snippet.description,
        thumbnailUrl: data.snippet.thumbnails.default.url,

      };
      return videoObj
    })
      
  },

  searchVideo: function (response) {
    console.log(response),
    this.url= `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA7g39h3EESAB4anzZSQxG9z0MsLM-U7c0&q=${response}&type=videos`
    this.fetch({
      // reset: true
    })
  },

  playNewVideo: function (onClickThumbnail) {
    this.add(this.findwhere({id: onClickThumbnail}))
  }
})
