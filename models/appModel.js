//create appModel with a default that returns the collection
var AppModel = Backbone.Model.extend({
  defaults: {
    /*maxResults needs to be defined better*/
      maxResults: 10,
      searchQuery:'',
      videos: new VideoCollections,
      history: new VideoCollections,
      playlists: new PlaylistCollection,
      current_video: {
        title:'',
        videoId: null
      },
    }
});


console.log('appModel loaded')


// var AppModel = Backbone.Model.extend({
//   urlRoot: '',
//   defaults: function () {
//     return {
//       model: '',
//     }
//   }
// });
