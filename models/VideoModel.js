//extend the Backbone Model methods to VideoModel
var VideoModel = Backbone.Model.extend({
  //make the dafaults key and assign a function to it's value that returns desired key/values pairs
  defaults: function() {
    return {
      videoID: '',
      title: '',
      description: '',
      thumbnail: ''
    };
  }
});
