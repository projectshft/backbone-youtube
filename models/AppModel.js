
//main model containing search criteria, the current video and the video collection
var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      search: '',

      videos: new VideosCollection(),

      current_video: null,

      main_video: false
    }
  },

  showMain: function (id) {

    var allVids = this.get('videos');
    // allVids.url = searchUrl;

    var currentVid = allVids.findWhere({ id: id });

    this.set('current_video', currentVid);
    this.set('main_video', true);
  },


});
