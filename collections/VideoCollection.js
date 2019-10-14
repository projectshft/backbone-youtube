var VideosCollection = Backbone.Collection.extend({
  url: 'null',
  model: VideoModel,


  parse: function (response) {
    return response.map.items}
});


//I don't think this is correct either, I am referrencing the video model but probably need more here