/**
 * Video Model
 * inside of video collection
 */

var VideoModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videoId: '',
      title: '',
      description: '',
      thumbnailURL: ''
    }
  }
});