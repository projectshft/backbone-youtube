var VideoCollection = Backbone.Collection.extend({
 
  url: '',

  updateUrl: function (search) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + search + '&type=video&videoEmbeddable=true&key=AIzaSyA40ftxQ5CJEzUSS0cOILHXefNm2X89lx8';

    this.fetch();
  },
  
  model: VideoModel,

  addVideos: function (id, img, title, description) {
      this.add({
        id: id,
        img: img,
        title: title,
        description: description
      })
  },

  parse: function (response) {
    var items = response.items
    
    var newObjs = items.map(function (obj) {
        return {
        id: obj.id.videoId,
        img: obj.snippet.thumbnails.default.url,
        title: obj.snippet.title,
        description: obj.snippet.description
        }
    })

    return newObjs;
  }
})