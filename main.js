// Videos collection - add API fetch here 
var VideosCollection = Backbone.Collection.extend({
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cercle&type=video&videoEmbeddable=true&key=AIzaSyCjo4u-wcr_ExFNPxiYlWZP3LLr-ythijE",

  model: VideoModel,

  parse: function (response) {
    // need to make this an array that is mapped
    // getting error cannot read property prototype of undefined for whole collection

    return response.map(function (i) {
      return {
        videoId: response.items[i].id.videoId,
        videoThumbnail: response.items[i].snippet.thumbnails.default.url,
        videoTitle: response.items[i].snippet.title,
        videoDesc: response.items[i].snippet.description,
      }
    });
  }
});

var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videoId: '',
      videoThumbnamil: '',
      videoTitle: '',
      videoDesc: ''
    }
  }
});

var videos = new VideosCollection();
videos.on('add', function (i) { console.log(i.toJSON()); });
videos.fetch();