var AppModel = Backbone.Model.extend({

  defaults: function(){
    return{
      //playing video will keep track of which video is currently playing
      playingVideo: null,

      videos: new VideosCollection()
    }
  },

  //switch video, triggered by app view and sets playing video attribute
switchVideo: function(newVid){
  var newVideo = this.get('videos').findWhere({id: newVid});
  this.set('playingVideo', newVideo);
  console.log(newVid);
  console.log(this.get('playingVideo'));
},

});
