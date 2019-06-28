/**
 * Top level model for youtube backbone
 * 
 * holds a collection of videos and current main video
 */

var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideoCollection(),
      main_video: null
    }
  }
});