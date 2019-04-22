/*before we display the search results we want to first communicate with a "model"
then update the view in response to this "model's update"*/

var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),
      //create default search when the user loads the page
      query: 'giraffes',
      currentVideo: null
    }
  },
  //on initial load, giraffe is used as the query to fetch videos
  initialize() {
    this.get('videos').fetchAPIData(this.get('query'))
  },
  changeClickedVideo: function(id) {
    //grab all the videos that were returned from the api (as models)
    let searchedVideos = this.get('videos')

    //search through all videos returned from API for the id that was clicked
    let clickedVideo = searchedVideos.findWhere({ videoId: id })

    //set the currentVideo key on the model's default to be that id
    this.set('currentVideo', clickedVideo)
  }
})
