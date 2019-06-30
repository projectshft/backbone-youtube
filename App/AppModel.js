var AppModel = Backbone.Model.extend({

  defaults: function() {
    return {
      //playing video will keep track of which video is currently playing
      playingVideo: null,
      //has a videos collection as attribute
      videos: new VideosCollection()
    }
  },

  //switch video, triggered by app view and sets playing video attribute
  switchVideo: function(newVid) {
    //finds the model that has an id that matches variable newVid passed in from function call in App View
    var newVideo = this.get('videos').findWhere({
      id: newVid
    });
    this.set('playingVideo', newVideo);

  },

});
