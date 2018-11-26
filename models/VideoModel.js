//Video model, will only control specific data for one video.
var VideoModel = Backbone.Model.extend({

  defaults:function(){
//YT doesn't need to have the whole video URL, the embedded player only needs the video ID
    return{
      title:'',
      description:'',
      thumb_url:'',
      videoId:''

    }
  }
});
