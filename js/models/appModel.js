var AppModel = Backbone.Model.extend({
  //set defaults of the model to the videoCollection and current video to null
  defaults: function() {
    return {
      videos: new VideoCollection(),

      current_video: null
    }
  },

  //when the initial fetch is called this function will set the current video to
  //the first video in the collection
  setCurrentVideo: function(){
    var firstVideo = this.toJSON().videos.models[0]
    this.set('current_video', firstVideo);
  },
  
//when a user clicks on a video this function is called
//it will set the current video to the one they clicked on
  changeCurrentVideo: function (id) {

    var allVideos = this.get('videos');

    var currentVideo = allVideos.findWhere({ id: id });
    this.set('current_video', currentVideo);
  }
})
