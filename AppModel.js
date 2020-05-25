var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videosCollection: new VideosCollection(), 
      
      current_video: null

    }
  },

  /* This will be called from app view when a video from the list is clicked. That
     video's id will be passed in and used to set the appModel's current video to
     the clicked video  */
  changeAppModelCurrentVideo: function (id) {
    var currentVideosCollection = this.get('videosCollection');

    var currentVideo = currentVideosCollection.findWhere({ id: id });

    this.set('current_video', currentVideo);
  },

  /* This will update the url of the videos collection and fetch new data from the
     api. The video collection will automatically be replaced with the new data
     (video models)  */
  updateURLWithNewSearchTerm: function(searchTerm) {

    // Creates a new url with the search term from the user input
    var newURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=' + searchTerm + '&type=video&videoEmbeddable=true&key=AIzaSyAEjf7hDATr-O7ilGfzojLtj3VbsiFw9r8'

    /* The newURL will be set on the videos collection (replacing the previous url
       or the default url)  */
    this.get('videosCollection').url = newURL;

    /* This will call the youtube api with the new url set above and replace the
       videos collection. When the collection is reset, the listener for reset in
       the appView will be triggered  */
    this.get('videosCollection').fetch({ reset: true });
  }
}) 