// js/views/VideosCollection.js
// Videos Collection will fetch videos from the Youtube API

var VideosCollection = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0EafJFEfzx7pWml4jkg9kLbdRJT0sFnM&part=snippet&type=video&q=cats',

//using the model defined in the VideosCollection constructor (in this case videoModel) create new instances of the model  and return an array of model objects to the collection (i.e. get back the info to render on the page)

  parse: function (response) {
    var arrayOfVideos = [];

    for(data = 0; data < response.items.length; data++){
      var oneVideoForArrayOfVideos = {
          'videoId' : response.items[data].id.videoId ,
          'name' : response.items[data].snippet.title,
          'description' : response.items[data].snippet.description,
          'imgUrl' : response.items[data].snippet.thumbnails.default.url
      };

      arrayOfVideos.push(oneVideoForArrayOfVideos);
    };

    return arrayOfVideos
  }

});


//instantiate a new collection based on fetch
var videos = new VideosCollection();
videos.on('add', function () { console.log(videos.toJSON()); });
videos.fetch();
