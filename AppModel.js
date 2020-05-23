var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videosCollection: new VideosCollection(),

      current_video: null,

    }
  },

  //this will be called from app view when a video from the list is clicked. That video's id will be passed in and used to set the appModel's current video to the clicked video
  changeCurrentVideoOnAppModel: function (id) {
    var currentVideosCollection = this.get('videosCollection');

    var currentVideo = currentVideosCollection.findWhere({ id: id });

    this.set('current_video', currentVideo);
  }
}) 