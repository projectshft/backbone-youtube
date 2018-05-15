//create appModel with a default that returns the collection
var AppModel = Backbone.Model.extend({
  defaults: {
      /*maxResults needs to be defined better, but it determines how many videos load on the right side*/
      maxResults: 10,
      /*used searchQuery to bruteForce the listenTo in the appView to render the currentVideoView*/
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
