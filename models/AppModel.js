var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),

      current_video: null

    };
},

  showMainVideo: function(id) {
    var allVideos = this.get('videos');

    var currentVideo = allVideos.findWhere({
      id: id
    });

//want to change the main view to the video with this id 
    this.set('current_video', currentVideo);

    this.get('current_video', currentVideo);

    console.log('current_video')

  }
});
