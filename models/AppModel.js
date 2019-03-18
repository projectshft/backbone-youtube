//extend the backbone Model methods to AppModel
var AppModel = Backbone.Model.extend({
  //make the dafaults key and assign a function to it's value that returns desired key/values pairs
  defaults: function(){
    return {
      videos: new VideosCollection(), //new instance of the VideosCollection

      current_Video: null
    };
  },
  //define a function to return the first index of the collection for the current video info
  topVideoIndex: function(){
    console.log(this.get('videos').models[0])
    return this.get('videos').models[0];
  },
  //define a function to change the current_video based on the clicked video
  updateVideo: function (id) {
    var currentVideo = this.get('videos').findWhere({ videoID: id })
    this.set('current_Video', currentVideo);
  }
});
