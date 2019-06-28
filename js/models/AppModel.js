/**
 * Top level model for youtube backbone
 * 
 * holds a collection of videos and current main video
 */

var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideoCollection(),
      main_video: null,
      search: ''
    }
  },

  //listener on search - when it updates, change get request url
  initialize: function() {
    this.listenTo(this, 'change:search', this.updateSearchUrl)
  },

  updateSearchUrl: function() {debugger;
    this.get('videos').url = YT_API_URL_BASE + `${this.get('search')}`;
  }
});