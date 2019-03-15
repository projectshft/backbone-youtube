//extend the Backbone Model methods to VideoModel
var VideoModel = Backbone.Model.extend({
  //make the dafaults key and assign a function to it's value that returns desired key/values pairs
  defaults: function() {
    return {
      videoID: '',
      videoURL: `'https://www.youtube.com/watch?v=${this.videoID}'`,
      title: '',
      description: '',
      thumbnail: ''
    };
  }
});
