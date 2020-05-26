
//main model containing search criteria, the current video and the video collection
var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      search: 'puppies',//should search on load. not working

      videos: new VideosCollection(),

      current_video: null,//how to load first result in collection as default?
    }
  },

  showMain: function (id) {
    //a function that sets the main video to whatever the user clicked in the collection
    var allVids = this.get('videos');
    // allVids.url = searchUrl;

    var currentVid = allVids.findWhere({ id: id });

    this.set('current_video', currentVid);

  },


});
