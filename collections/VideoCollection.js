var VideosCollection = Backbone.Collection.extend({
  url: 'null',
  model: VideoModel,


  parse: function (response) {
    return response.map.items} => {
      
      return {
        title: item.title,
      };
debugger;
      


});
