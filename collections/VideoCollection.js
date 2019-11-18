var VideoCollection = Backbone.Collection.extend({
  url: '  https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA7g39h3EESAB4anzZSQxG9z0MsLM-U7c0&q=cool videos',
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

  searchVideo: function (query) {
    this.reset()
    this.url= 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA7g39h3EESAB4anzZSQxG9z0MsLM-U7c0&q=${query}&type=videos'
    this.fetch()
  },

  playNewVideo: function (onClickThumbnail) {
    this.reset()
    this.add(this.findwhere({id: onClickThumbnail}))
  }
})
