// VideoModel
// defaults: title description videoId thumbnail onstage/true/false

var VideoModel = Backbone.Model.extend({
  idAttribute: 'videoId',

  defaults: function () {
    return {
      title: '',
      description: '',
      thumb_url: '',
      on_stage: false
    }
  }
  // move Parse: here?
});