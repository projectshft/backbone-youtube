//extend the backbone Model methods to AppModel
var AppModel = Backbone.Model.extend({
//make the dafaults key and assign a function to it's value that returns desired key/values pairs
  defaults: function(){
    return {
      videos: new VideosCollection(), //new instance of the VideosCollection

      //query: null,

      //probably down here set the daults... (according the jason)
    };
  },

  recommendedArray: function(){
    return this.attributes.videos.models.splice(1,5);
  },

  topVideoIndex: function(){
    return this.attributes.videos.models[0];
  }
});
